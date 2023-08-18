import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({

    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: (value) => /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(value),
            message: props => `${props.value} is not a valid email!`
            },
    },
    // image: String,
    loggedIn: {
        type: Boolean,
        default: false
    }
}, {timeStamps: true})

export default mongoose.model('User', userSchema)