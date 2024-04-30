import { FaEdit } from "react-icons/fa";
// pages/profile.js

const Profile = () => {
  return (
    <div className={`w-screen h-screen p-8 bg-slate-50 `}>
      <div className="h-full flex justify-center w-full">
        <div className="w-full flex justify-between">
          {/* first div on the left  */}
          <div className="w-1/3 mr-3 bg-white">
            <div className="p-5 ">
              <p className="font-bold text-2xl w-2/5 mb-4">My Profile</p>
              <div className="flex mt-3 w-full">
                <p className="text-xl text-gray-950    w-2/5 font-semibold ">
                  Name
                </p>
                <p className="text-lg text-gray-400  w-3/5 underline">
                  Preksha
                </p>
              </div>
              <div className="flex mt-3 w-full">
                <p className="text-xl text-gray-950    w-2/5  font-semibold">
                  Email
                </p>
                <p className="text-lg text-gray-400  w-3/5 underline">
                  Preksha@gmail.com
                </p>
              </div>
              <div className="flex mt-3 w-full">
                <p className="text-xl text-gray-950    w-2/5  font-semibold">
                  Designation
                </p>
                <p className="text-lg text-gray-400  w-3/5 underline">
                  Software developer
                </p>
              </div>
              <div className="flex mt-3 w-full">
                <p className="text-xl text-gray-950    w-2/5  font-semibold">
                  Contact
                </p>
                <p className="text-lg text-gray-400 underline w-3/5 ">
                  98864646974
                </p>
              </div>
              <div className="flex mt-3 w-full">
                <p className="text-xl text-gray-950    w-2/5  font-semibold">
                  Gender
                </p>
                <p className="text-lg text-gray-400 underline w-3/5 ">female</p>
              </div>
              <div className="flex mt-3 w-full">
                <p className="text-xl text-gray-950    w-2/5 font-semibold ">
                  Phone
                </p>
                <p className="text-lg text-gray-400 underline w-3/5 ">
                  9886363863
                </p>
              </div>
              <div className="flex mt-3 w-full">
                <p className="text-xl text-gray-950    w-2/5 font-semibold ">
                  Creation Date and time
                </p>
                <p className="text-lg text-gray-400  w-3/5 underline">
                  12/04/2034 09:02:10
                </p>
              </div>
            </div>
          </div>
          {/* second div on the right for other details  */}
          <div className="w-2/3 bg-white">
            <div className="p-5">
              <div className="flex justify-between">
                <p className="font-bold text-2xl mb-4">Other Details</p>
                <button className=" cursor-pointerv  bg-red-500  border text-white h-auto rounded px-2 py-2 ">
                  <span> Edit</span>
                </button>
              </div>

              <div className="w-full p-0 m-0 flex justify-between">
                <div>
                  <p className="font-semibold text-xl">Address Details</p>
                  <ul>
                    <li>
                      <p className="font-semibold text-lg text-gray-950   mt-3">
                        Default Adresss:{" "}
                        <span className="text-gray-400 underline ">
                          Mig mumbai 560089 9th cross 7th main road
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold text-lg text-gray-950       mt-3">
                        Billing Adresss:{" "}
                        <span className="text-gray-400 underline ">
                          Mig mumbai 560089 9th cross 7th main road
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold text-lg text-gray-950    mt-3">
                        Shipping Adresss:{" "}
                        <span className="text-gray-400 underline ">
                          Mig mumbai 560089 9th cross 7th main road
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="border-r-2 border"></div>
                <div>
                  <p className="font-semibold text-xl">Bank Account Details</p>
                  <ul>
                    <li>
                      <p className="font-semibold text-lg text-gray-950   mt-3">
                        Account number:{" "}
                        <span className="text-gray-400 underline ">
                          130456789876543
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold text-lg text-gray-950       mt-3">
                        DebitCard: {" "}
                        <span className="text-gray-400 underline ">
                          2345676543234
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold text-lg text-gray-950    mt-3">
                        UPI Id:{" "}
                        <span className="text-gray-400 underline ">
                          preksha@ybl.com
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
