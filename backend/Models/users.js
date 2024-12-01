import { required } from "joi";
import mongoose from "mongoose";

const Schema=mongoose.Schema;

const UserSchema =new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    }
});

const UserModel =mongoose.model('users',UserSchema);
module.exports=UserModel;