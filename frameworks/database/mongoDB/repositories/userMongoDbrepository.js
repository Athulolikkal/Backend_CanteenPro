import userSchema from '../model/userSchema.js'

export default function userImplementsMongoDb() {

    const addBookingAddress = async (details, userId) => {
        try {
            const addAddress = await userSchema.findByIdAndUpdate(userId, { bookingAddress: details },
                { new: true });
            return addAddress
        }
        catch (err) {
            console.log(err);
        }
    }

    const getUserData = async (userId) => {
        try {
            const data = await userSchema.findById(userId)
            return data
        } catch (err) {
            console.log(err)
        }
    }

    return {
        addBookingAddress,
        getUserData
    }


}

