import React, { useState } from "react";
import axios from "axios";
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
    <div>
      <form action="" onSubmit={handelSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter your Username"
          value={data.username}
          onChange={handelChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={data.email}
          onChange={handelChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={data.password}
          onChange={handelChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
