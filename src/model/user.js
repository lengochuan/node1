import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   username: {
            type: String
        },
    password: {
        type: Number
    },
    age: {
        type: Number
    },
    gender: {
        type: Number
    },
    birthday: {
        type: Number
    }
},{
    timestamps: true, versionKey: false
});

export default mongoose.model("User", userSchema);