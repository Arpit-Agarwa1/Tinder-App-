import jwt from "jsonwebtoken";
import "dotenv/config";

export function checkToken(req, res, next) {
  try {
    const token = req.cookies.token;
    // console.log(token);
    if (!token) return res.status(400).json({ message: "No Token Found" });

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodedToken.id;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}
