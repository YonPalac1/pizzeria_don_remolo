const {Schema,model}=require("mongoose")

const userSchema = new Schema({
    email:String,
    password:String,
    created_at:Date,
    name:String,
    rol:Number
})

const User = model('User',userSchema)

module.exports = User