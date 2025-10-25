import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md  rounded-b-4xl sticky bg-transparent  w-full flex relative justify-between items-center mx-auto px-8 h-20 shadow-l">
      {/* logo */}
      <div className="inline-flex hover:scale-105 transition-transform duration-200 ">
        <a href="/" className=" flex items-center h-10">
          <img
            src="\logo.png"
            alt=""
            className="h-40 w-auto object-contain hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
      {/* Login */}

      <div className="flex-initial">
        <div className="flex justify-end items-center relative">
          <div className="flex mr-4 items-center">
            <a
              className="inline-block py-2 px-5 hover:bg-gray-200 rounded-full transition-colors duration-200 text-gray-700 hover:text-indigo-600
"
              href="#"
            >
              <div
                className="flex items-center font-bold relative cursor-pointer whitespace-nowrap transition-colors duration-200 text-gray-700 hover:text-indigo-600
 "
              >
                Home
              </div>
            </a>
            <a
              className="inline-block py-2 px-5 hover:bg-gray-200 rounded-full"
              href="#"
            >
              <div className="flex items-center font-bold relative cursor-pointer whitespace-nowrap">
                Contact
              </div>
            </a>
          </div>

          <div className="block">
            <div className="inline relative">
              <button
                type="button"
                className=" hover:-translate-y-0.5 active:translate-y-0
transition-all duration-200 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 
               text-white font-semibold shadow-lg hover:shadow-lg 
               hover:from-indigo-600 hover:to-purple-700 
               focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 
               transition- duration-200"
              >
                Register
              </button>
            </div>
          </div>
        </div>
        
      </div>
      
    </nav>
  );
};

export default Navbar;
