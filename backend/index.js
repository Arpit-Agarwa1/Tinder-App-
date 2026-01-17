// import express from "express";
// import "dotenv/config";
// import connectDB from "./database/connectDB.js";
// import User from "./routes/userRoutes.js"; //router User

// const app = express();
// const PORT = 3000;
// app.use(express.json());

// await connectDB();
// app.use("/user", User); //router use

// app.listen(PORT, () => console.log("server is running on port", PORT));

import express from "express";
import "dotenv/config";
import connectDB from "./database/connectDB.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const corsOptions = {
  origin: process.env.FRONTEND_URL, // Frontend URL
  credentials: true,
};

const app = express();
const PORT = 3000;
//middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

async function startServer() {
  await connectDB();
  app.use("/user", userRoutes);

  app.listen(PORT, () => console.log("Server running on port", PORT));
}

startServer();
