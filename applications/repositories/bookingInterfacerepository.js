export default function bookingInterfaceRepository(repositories) {
    const insertBooking = (wish) => repositories.insertBooking(wish)
    const findActiveBookings = (id) => repositories.findActiveBookings(id)
    const confirmBooking = (id) => repositories.confirmBooking(id)
    const bookedItemsFromPackage = (canteenId, category, formattedDate) => repositories.bookedItemsFromPackage(canteenId, category, formattedDate)
    const findBookingsCustomized = (name, category, formattedDate) => repositories.findBookingsCustomized(name, category, formattedDate)
    const AllBookingsCustomized = (name, category) => repositories.AllBookingsCustomized(name, category)
    const AllBookingsOfPackages = (canteenId) => repositories.AllBookingsOfPackages(canteenId)
    return {
        insertBooking,
        findActiveBookings,
        confirmBooking,
        bookedItemsFromPackage,
        findBookingsCustomized,
        AllBookingsCustomized,
        AllBookingsOfPackages
    }
}