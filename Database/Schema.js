import { Int32 } from "mongodb";
import mongoose from "mongoose";

const testschema= new mongoose.Schema({
    
    name: {type: String, required: false, unique: false},
    email: {type: String, unique: false},
    contact: {type: Number, required: false, trim: true}
})

const usermodel= mongoose.model("usermodel", testschema)
export default usermodel;
