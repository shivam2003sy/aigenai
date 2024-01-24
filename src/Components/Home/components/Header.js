// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="bg-blue-500 text-white py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-lg font-bold">
//           Campus Placement & Training Portal
//         </Link>

//         <nav className="space-x-4 text-sm font-medium">
//           <Link to="/" className="text-white hover:text-gray-200">
//             Home
//           </Link>
//           <Link to="/about" className="text-white hover:text-gray-200">
//             About
//           </Link>
//           <Link to="/contact" className="text-white hover:text-gray-200">
//             Contact
//           </Link>
//            <Link to="/login" className="text-white hover:text-gray-200">
//             Login
//           </Link>
//           <Link to="/register" className="text-white hover:text-gray-200">
//             Register
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // Adjust max-width as needed

  const handleToggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const closeMobileNav = () => {
    setShowMobileNav(false);
  };

  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          Campus Placement Information  & Training Portal
        </Link>
        {/* {isMobile ? (
          <div>
            <button
              onClick={handleToggleMobileNav}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {showMobileNav ? 'Close' : 'Menu'}
            </button>
            {showMobileNav && (
              <nav className="space-y-4 text-sm font-medium">
                <Link to="/" className="text-white hover:text-gray-200" onClick={closeMobileNav}>
                  Home
                </Link>
                <Link to="/about" className="text-white hover:text-gray-200" onClick={closeMobileNav}>
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-white hover:text-gray-200"
                  onClick={closeMobileNav}
                >
                  Contact
                </Link>
                <Link to="/login" className="text-white hover:text-gray-200" onClick={closeMobileNav}>
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-white hover:text-gray-200"
                  onClick={closeMobileNav}
                >
                  Register
                </Link>
              </nav>
            )}
          </div>
        ) : (
          <nav className="space-x-4 text-sm font-medium">
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-200">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
            <Link to="/login" className="text-white hover:text-gray-200">
              Login
            </Link>
            <Link to="/register" className="text-white hover:text-gray-200">
              Register
            </Link>
          </nav>
        )} */}
      </div>
    </header>
  );
};

export default Header;
