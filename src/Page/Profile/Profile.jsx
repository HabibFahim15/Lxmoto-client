import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Profile = () => {
  const {user} = useContext(AuthContext);

  return (
    <section className="w-full overflow-hidden bg-base-100">
    <div className="flex flex-col">
      <img
        src="https://t4.ftcdn.net/jpg/02/47/96/29/360_F_247962987_14TmyPShXeIkVAe6ZbAbze3VZs6CdLAU.jpg"
        alt="User Cover"
        className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"
      />
  
      <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
        <img
          src={user?.photoURL}
          alt="User Profile"
          className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
        />
  
        <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
         {user.displayName ? user?.displayName : "N/A"}
        </h1>
      </div>
  
      <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
       
        <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
          <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
            
            <div className="w-full">
              <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                
                <div className="flex flex-col pt-3">
                  <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone Number</dt>
                  <dd className="text-lg font-semibold">{user.phoneNumber ? user?.phoneNumber : "N/A"}</dd>
                </div>
                <div className="flex flex-col pt-3">
                  <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                  <dd className="text-lg font-semibold">{user.email}</dd>
                </div>
  
                <div className="flex flex-col pt-3">
                  <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Status</dt>
                  <dd className="text-lg font-semibold">{
                    user.emailVerified ? "Verified" : "Not Verified"
                  }</dd>
                </div>
              </dl>
            </div>
          </div>
  
        </div>
  
       
      </div>
    </div>
  </section>
  );
};

export default Profile;