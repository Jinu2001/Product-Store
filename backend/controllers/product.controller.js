import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getAllProducts =async(req,res)=>{
    try{
        const product= await Product.find({});
        res.status(200).json({success:true,data:product});
    }catch(error){
        res.status(500).json({success:false,message:error.message});
    }
  };

export const createProduct = async (req,res)=>{
    const product=req.body; //user will send this

    if (! product.name || ! product.price || ! product.image) { 
      return res.status(400).json({success:false,message:" all fields are required"});
    }

    const newProduct = new Product(product);
    try{
      await newProduct.save();
      res.status(201).json({success:true,data:newProduct});
    }catch(error){
      res.status(500 ).json({success:false,message:error.message});
    }
  };

  export const deleteProduct = async (req,res)=>{
        const {id}=req.params;
        
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({"success":false,"message":"product not found"});
        }
    

        try{
           const deletedProduct=await Product.findByIdAndDelete(id);
           if(deletedProduct==null){
            return res.status(404).json({success:false,message:"product not found"});
           }
           return res.status(200).json({success:true,message:"product deleted",data:deletedProduct}); 
        }catch(error){
          res.status(500).json({success:false,message:"Internal server error"});
        }
    }

   export const updateProduct =async(req,res)=>{
    const {id}=req.params;
    const product=req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({"success":false,"message":"product not found"});
    }

    try{
       const updatedProduct= await Product.findByIdAndUpdate(id,product,{new:true}); 
       res.status(200).json({success:true,data:updatedProduct});
    }catch(error){
        res.status(500).json({success:false,message:error.message})
    }
  } 

  export const getProduct = async(req,res)=>{
    const {id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({"success":false,"message":"product not found"});
    }

    try{
        const product=await Product.findById(id);
        res.status(200).json({success:true,data:product});
    }catch(error){
        res.status(500).json({success:false,message:error.message});
    }

  }

  
 