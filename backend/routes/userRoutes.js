import { Router } from "express";
import {
  register,
  fetchuser,
  deleteUser,
  updateUser,
  login,
  signin,
  profile,
  getprofile,
  logout,
} from "../controler/userForm.js";
import { checkToken } from "../middlewares/checkToken.js";

const User = Router();

//data send

User.post("/register", register);
User.put("/profile", checkToken, profile);
User.get("/profile", checkToken, getprofile);
User.post("/login", login);
User.get("/fetch", fetchuser);
User.delete("/delete/:id", deleteUser);
User.put("/update/:id", updateUser);
User.post("/signin", signin);
User.get("/check", checkToken, (req, res) => {
  res.status(200).json({ message: "User Authanticated" });
});
User.post("/logout", logout);

export default User;
