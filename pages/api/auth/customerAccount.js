import { CustomerAccountApi } from "@kibocommerce/rest-sdk/clients/Customer/apis/CustomerAccountApi";
import { Configuration } from "@kibocommerce/rest-sdk";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { auth } from "../../../app/firebase/config";

export default async function handler(req, res) {
    try {
        const configuration = new Configuration({
            tenantId: process.env.KIBO_TENANT_ID,
            siteId: process.env.KIBO_SITE_ID,
            catalog: "1",
            masterCatalog: "1",
            sharedSecret: process.env.KIBO_SHARED_SECRET,
            clientId: process.env.KIBO_CLIENT_ID,
            pciHost: process.env.KIBO_PCI_HOST,
            authHost: process.env.KIBO_AUTH_HOST,
            apiEnv: process.env.KIBO_API_ENV,
        });

        const { email, password, firstname, lastname, phone } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Bad Request - Invalid or missing payload' });
        }

        const customerDetails = new CustomerAccountApi(configuration);
        const checkCustomer = await customerDetails.getAccounts({
            filter: `emailAddress eq ${email}`
        });

        if (checkCustomer.items.length) {
            return res.status(200).json({ success: true, message: "Account already exists" });
        } else {
            const addCustomerAccount = await customerDetails.addAccountAndLogin({
                customerAccountAndAuthInfo: {
                    password: password,
                    account: {
                        emailAddress: email,
                        userName: email,
                        firstName: firstname,
                        lastName: lastname,


                    },
                }
            });
            console.log(addCustomerAccount)
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            const db = getFirestore();
            const userRef = collection(db, "users");
            const doc = await addDoc(userRef, { uid: user.uid, email, firstname, lastname, phone, kiboUserid: addCustomerAccount.customerAccount.userId });
            console.log(addCustomerAccount)
            if (addCustomerAccount && addCustomerAccount.customerAccount) {
                const addCustomerAccountUpdate = await customerDetails.updateAccount({
                    accountId: addCustomerAccount?.customerAccount?.id,
                    customerAccount: {
                        id: addCustomerAccount?.customerAccount?.id,
                        emailAddress: addCustomerAccount?.customerAccount?.emailAddress,
                        userName: addCustomerAccount?.customerAccount?.userName,
                        firstName: addCustomerAccount?.customerAccount?.firstName,
                        lastName: addCustomerAccount?.customerAccount?.lastName,
                        isAnonymous: addCustomerAccount?.customerAccount?.isAnonymous,
                        isLocked: addCustomerAccount?.customerAccount?.isLocked,
                        isActive: addCustomerAccount?.customerAccount?.isActive,
                        acceptsMarketing: addCustomerAccount?.customerAccount?.acceptsMarketing,
                        hasExternalPassword: addCustomerAccount?.customerAccount?.hasExternalPassword,
                        attributes: [{
                            fullyQualifiedName: 'firebaseUserId',
                            attributeDefinitionId: '4',
                            values: [`${user?.uid}`]
                        }]
                    }
                });

                res.status(200).json({ success: true, message: addCustomerAccountUpdate });
            } else {
                console.log('hello')
            }

        }
    } catch (error) {
        console.error("Error:", error);
        console.log(error, "preksha")
        res.status(500).json({ error: "Internal Server Error" });
    }
}
