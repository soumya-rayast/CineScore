import User from '../models/user.model';
import { connect } from '../mongodb/mongoose';

export const createOrUpdateUser = async (
    id, first_name, last_name, image_url, email_addresses
) => {
    try {
        await connect();
        if (!email_addresses || !Array.isArray(email_addresses) || email_addresses.length === 0) {
            throw new Error("Invalid email_addresses array");
        }
        const user = await User.findOneAndUpdate({ clerkId: id },
            {
                $set: {
                    clerkId: id,
                    firstName: first_name,
                    lastName: last_name,
                    profilePicture: image_url,
                    email: email_addresses[0].email_address,
                }
            },
            { upsert: true, new: true }
        )
        return user;
    } catch (error) {
        console.log('Error : could not create or update user : ', error);
    }
}

export const deleteUser = async (id) => {
    try {
        await connect();
        const deletedUser = await User.findOneAndDelete({ clerkId: id });
        if (!deletedUser) {
            throw new Error("User not found");
        }
        return { message: "User deleted successfully", deletedUser };
    } catch (error) {
        console.log("Error: Could not delete user :", error)
    }
}