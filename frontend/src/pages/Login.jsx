// import axios from "axios";
// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { tinderContext } from "../context/context";

// export default function Login() {
//   const navigate = useNavigate();
//   const { setIsLoggedIn } = useContext(tinderContext);

//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });
//   function handelChange(e) {
//     // console.log("changed", e.target.value);
//     const { name, value } = e.target;
//     setData((prevData) => {
//       return {
//         ...prevData,
//         [name]: value,
//       };
//     });
//   }
//   console.log(data);

//   async function handelSubmit(e) {
//     e.preventDefault();
//     console.log("form submitted");
//     const res = await axios.post("http://localhost:3000/user/signin", data, {
//       withCredentials: true,
//     });
//     console.log(res.data);
//     setIsLoggedIn(true);
//     navigate("/home");
//   }
//   return (
//     <div>
//       <form action="" onSubmit={handelSubmit}>
//         <input
//           type="email"
//           name="email"
//           value={data.email}
//           placeholder="Enter the email"
//           onChange={handelChange}
//         />
//         <input
//           type="password"
//           name="password"
//           value={data.password}
//           id=""
//           placeholder="Enter the Password"
//           onChange={handelChange}
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tinderContext } from "../context/context";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(tinderContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handelChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  async function handelSubmit(e) {
    e.preventDefault();

    try {
      await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/user/signin",
        data,
        {
          withCredentials: true,
        }
      );
      setIsLoggedIn(true);
      navigate("/home");
    } catch (error) {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back ❤️</h1>
        <p>Sign in to continue matching</p>

        <form onSubmit={handelSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              value={data.email}
              placeholder="Email"
              onChange={handelChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              value={data.password}
              placeholder="Password"
              onChange={handelChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <span className="divider">or</span>

        <button className="signup-btn" onClick={() => navigate("/register")}>
          Create New Account
        </button>
      </div>
    </div>
  );
}
