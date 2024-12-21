import mongoose  from "mongoose";

const productSchema=new mongoose.Schema({
    // _id:{type:String,required:true},
    name:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    },
    {timestamps:true} //automatically add two schema fields createdAt and updatedAt
);

const Product=mongoose.model("Product",productSchema); //create the model product based on product schema
//mongoose pluralize the model name automatically
export default Product;