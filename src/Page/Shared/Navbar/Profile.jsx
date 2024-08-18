import  { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(true);
  const {logOut}=useContext(AuthContext)

  const handleLogOut=()=>{
    logOut()
  }
  return (
    <div className="relative inline-block">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative z-10 block "
    >
      <p to={'/signup'} className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">
              Profile 
              
            </p>
    </button>

    {isOpen && (
      <div
        onClick={() => setIsOpen(false)}
        className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 transition transform ease-out duration-100 scale-100"
      >
        <a
          href="#"
          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          View Profile
        </a>
        <Link 
          to={'/mybikes'}
          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          My Bikes
        </Link>
        
        <button
          onClick={handleLogOut}
          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Sign Out
        </button>
      </div>
    )}
  </div>
  );
};

export default Profile;