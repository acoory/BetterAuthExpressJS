import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://your-frontend-domain.com", // Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

app.all("/api/auth/{*any}", toNodeHandler(auth)); // For ExpressJS v4
// app.all("/api/auth/*splat", toNodeHandler(auth)); For ExpressJS v5
app.use(express.json());

// Mount express json middleware after Better Auth handler
// or only apply it to routes that don't interact with Better Auth

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
