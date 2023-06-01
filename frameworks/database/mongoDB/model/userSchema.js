import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phonenumber: {
        type: Number,

    },
    password: {
        type: String,

    },
    Image: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true
    }
})

const model = mongoose.model('User', userSchema);
export default model;