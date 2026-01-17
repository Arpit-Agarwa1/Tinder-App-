import bcrypt from "bcrypt";
import User from "../model/user.js";
import jwt from "jsonwebtoken";

export async function register(req, res) {
  try {
    const body = req.body;
    console.log("register endpoint hit", body);

    const hashedPasssword = await bcrypt.hash(body.password, 10);
    body.password = hashedPasssword;

    const emailExists = await User.findOne({ email: body.email });

    if (emailExists) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const newUser = new User(body);
    await newUser.save();
    res.json("succesfull");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function fetchuser(req, res) {
  try {
    const allUser = await User.find();
    res.json(allUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

export async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "id is required" });
    }
    const userToDelete = await User.findById(id);
    if (!userToDelete) {
      return res.status(404).json({ message: "user not found" });
    }
    await User.findByIdAndDelete(id);
    res.json({ message: "user deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

export async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const body = req.body;

    if (!id) {
      return res.status(400).json({ message: "id is required" });
    }
    const userToUpdate = await User.findById(id);
    if (!userToUpdate) {
      return res.status(404).json({ message: "user not found" });
    }
    await User.findByIdAndUpdate(id, body);
    res.json({ message: "user updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

export async function login(req, res) {
  try {
    const { username, password } = req.body;
    if (username.length === 0 || password.length === 0) {
      return res
        .status(400)
        .json({ message: "username and password are required" });
    }
    const newUser = await User.findOne({ username });
    if (!newUser) {
      return res.status(404).json({ message: "user not found" });
    }
    const isMatch = await bcrypt.compare(password, newUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    res.json({ message: "login successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

export async function signin(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "email and password are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    // TOKEN CREATION
    const userToken = jwt.sign(
      {
        id: user._id,
        usename: user.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    // send the token to frontend

    res.cookie("token", userToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 60 * 60 * 1000,
    });

    return res.status(200).json({ message: "signin successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

export async function profile(req, res) {
  try {
    const body = req.body;
    // console.log(body, req.userId);
    await User.findByIdAndUpdate(req.userId, body);
    res.status(200).json({ message: "Data updated" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getprofile(req, res) {
  try {
    const data = await User.findById(req.userId);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function logout(req, res) {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
