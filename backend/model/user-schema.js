import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required: true,
        trim: true,
        min:2,
        max:20
    },
    lastname: {
        type:String,
        required: true,
        trim: true,
        min:2,
        max:20
    },
    email: {
        type:String,
        required: true,
        trim: true,
        unique: true,
        min:5,
        max:50
    },
    phone: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
    }
})

const User = mongoose.model('user', userSchema);

export default User;