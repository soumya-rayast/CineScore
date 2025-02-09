import mongoose from 'mongoose';

const favSchema = new mongoose.Schema({
    movieId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    dateReleased: {
        type: Date,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    image: {
        type: String,
        required: true
    }
})

const userSchema = new mongoose.Schema(
    {
        clerkId: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true, // Ensuring uniqueness
            lowercase: true, // Store emails in lowercase
            trim: true,
        },
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        profilePicture: {
            type: String,
            required: true,
        },
        favs: {
            type: [favSchema],
            default: () => []
        }
    },
    { timestamps: true }
)

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;