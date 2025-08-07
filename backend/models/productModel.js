import mongoose, { modelNames } from "mongoose";

const productSchema = new mongoose.Schema({
    title: {type:String,required:true},
    des : {type:String,required:true},
    price : {type:Number,required:true},
    image : {type:Array,required:true},
    category : {type:String,required:true},
    subcategory : {type:String,required:true},
    sizes : {type:Array,required:true},
    best : {type:Boolean}, 
    date : {type:Number,required:true}
})

const productModel = mongoose.models.product || mongoose.model("product",productSchema)

export default productModel