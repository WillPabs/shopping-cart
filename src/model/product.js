import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        required: true,
        type: String
    }, 
    description : {
        required: true,
        type: String
    }, 
    imageUrl : {
        required: true,
        type: String
    },  
    price : {
        required: true,
        type: Number
    },  
    availableQuantity : {
        required: true,
        type: Number
    }, 
});

export default mongoose.Model('Product', productSchema);