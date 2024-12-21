//entry point of App
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.route.js";  
import cors from "cors";
import path from "path";


  dotenv.config();

  const app=express();  
  app.use(cors());
  const PORT =process.env.PORT || 5000;
  const __dirname = path.resolve();
  
  app.use(express.json()); //allows us to access json data in req.body

  app.use("/api/products",productRouter);

  console.log(process.env.MONGO_URI)

  if(process.env.Node_ENV==="production"){
    app.use(express.static(path.join(__dirname,"frontend/dist")));
    app.get("*",(req,res)=>{
      res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
    })
  }

  app.listen(5000,()=>{
    connectDB();
    console.log("server started at http://localhost:"+PORT)
  })

