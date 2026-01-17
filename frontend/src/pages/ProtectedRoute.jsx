import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tinderContext } from "../context/context";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn, setIsLoggedIn } = useContext(tinderContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkForLogIn();
  }, []);

  async function checkForLogIn() {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/user/check",
        {
          withCredentials: true,
        }
      );
      console.log(response);
      if (response.status === 200) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <h2>Loading...</h2>;

  if (!isLoggedIn) navigate("/login");

  return children;
}
