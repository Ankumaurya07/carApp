import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (token && user) {
      setIsLoggedIn(true);
      setUserName(user.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserName('');
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md text-blue-600 text-lg fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 -mx-30">
            <NavLink to="/">
              <img src={logo} alt="Logo" className="w-32" />
            </NavLink>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 ml-50 font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/About" },
              { name: "Brands", path: "/Brands" },
              { name: "Features", path: "/Feauters" },
              { name: "Cars", path: "/cars" },
              { name: "Help", path: "/Help" },
            ].map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-700 underline"
                      : "hover:text-blue-900 transition-colors duration-200"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Auth Buttons */}
          <div className="ml-4 space-x-3 flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <span className="text-black font-semibold hidden sm:inline">
                  Hello, {userName}
                </span>   
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-6 py-2 cursor-pointer rounded-lg hover:bg-red-700 transition duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  <button className="bg-transparent border-2 border-black cursor-pointer text-black px-6 py-2 rounded-lg ml-4 hover:bg-amber-50 transition duration-200">
                    Login
                  </button>
                </NavLink>
                <NavLink to="/register">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                    Register
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
