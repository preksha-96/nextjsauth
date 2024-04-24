import { ProductsApi } from "@kibocommerce/rest-sdk/clients/CatalogAdministration/apis/ProductsApi";
import { Configuration } from "@kibocommerce/rest-sdk";

export default async function handler(req,
    res
) {
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
    const productsClient = new ProductsApi(configuration);
    try {
        const product = await productsClient.getProduct({ productCode: "332211" });
        if (product && product.content) {
            product.content.productFullDescription = "deelp lddld";
        }
        res.status(200).json({ success: true ,
        message:product});
        // const updateProduct = await productsClient.updateProduct({
        //     productCode: "",
        // });
    } catch { }
}