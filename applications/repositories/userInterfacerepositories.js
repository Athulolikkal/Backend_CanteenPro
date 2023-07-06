export default function userInterfaceRepositories(repositories) {
    const addBookingAddress = (details, userId) => repositories.addBookingAddress(details, userId)
    const getUserData = (userId) => repositories.getUserData(userId)
    return {
        addBookingAddress,
        getUserData
    }
}