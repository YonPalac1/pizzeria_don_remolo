const {Schema, model}=require("mongoose")

const userSchema = new Schema({
    email:String,
    password:String,
    created_at:Date,
    name:String,
    rol:{type:Number,default:2},
    phone:Number,
},{versionKey:false})

const User = model('User',userSchema)

module.exports = User