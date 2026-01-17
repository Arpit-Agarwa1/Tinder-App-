import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";
// import express from "express";
export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });
  function handelChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  async function handelSubmit(e) {
    e.preventDefault();
    try {
      // console.log("axios se phele");
      const res = await axios.post("http://localhost:3000/user/register", data);
      console.log(res.data);
      alert("User registered successfully");
    } catch (error) {
      console.log(error.message);
    }

    navigate("/profile");
  }

  return (
    <div className="register-page">
      <form className="register-card" onSubmit={handelSubmit}>
        <h2>Create Account 💖</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={data.username}
          onChange={handelChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handelChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handelChange}
        />

        <button type="submit">Register</button>

        <p className="login-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </form>
    </div>
  );
}
