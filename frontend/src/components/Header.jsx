// import React, { useContext } from "react";
// import { tinderContext } from "../context/context";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Header() {
//   const { isLoggedIn, setIsLoggedIn } = useContext(tinderContext);
//   const navigate = useNavigate();

//   async function handeltoggle() {
//     if (isLoggedIn) {
//       await axios.post(
//         "http://localhost:3000/user/logout",
//         {},
//         { withCredentials: true }
//       );

//       setIsLoggedIn(false);
//       navigate("/login");
//     } else {
//       navigate("/login");
//     }
//   }

//   return (
//     <div>
//       <button onClick={handeltoggle}>{isLoggedIn ? "Logout" : "Login"}</button>
//     </div>
//   );
// }

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { tinderContext } from "../context/context";
import "./Header.css";

export default function Header() {
  const { isLoggedIn, setIsLoggedIn } = useContext(tinderContext);
  const navigate = useNavigate();

  async function handleToggle() {
    if (isLoggedIn) {
      try {
        await axios.post(
          "http://localhost:3000/user/logout",
          {},
          { withCredentials: true }
        );
        setIsLoggedIn(false);
        navigate("/login");
      } catch (error) {
        console.log("Logout failed", error);
      }
    } else {
      navigate("/login");
    }
  }

  return (
    <header className="header">
      {/* Left - Logo */}
      <div className="logo" onClick={() => navigate("/")}>
        💋 BabuShona
      </div>

      {/* Center - Nav */}
      <nav className="nav">
        <span onClick={() => navigate("/home")}>Home</span>
        {isLoggedIn && (
          <>
            <span onClick={() => navigate("/profile")}>Profile</span>
            <span onClick={() => navigate("/matches")}>Matches</span>
          </>
        )}
      </nav>

      {/* Right - Button */}
      <button className="auth-btn" onClick={handleToggle}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </header>
  );
}
