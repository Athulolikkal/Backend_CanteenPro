import mongoose from 'mongoose';
import bookingSchema from '../../../database/mongoDB/model/bookingSchema.js'
const ObjectId = mongoose.Types.ObjectId;

export default function bookingImplementsMongoDb() {
    const insertBooking = (wish) => {
        try {
            const newBooking = new bookingSchema({
                userId: wish?.getUserId(),
                packageId: wish?.getPackageId(),
                canteenId: wish?.getCanteenId(),
                source: wish?.getSource(),
                total: wish?.getTotal(),
                startDate: wish?.getStartDate(),
                endDate: wish?.getEndDate(),
                image: wish?.getImage(),
                totalPerDayRate: wish?.getTotalPerDayRate(),
                breakfast: wish?.getBreakfast(),
                lunch: wish?.getLunch(),
                dinner: wish?.getDinner(),
                bookingAmount: wish?.getTotalBookingAmount(),
                totalDays: wish?.getTotalBookingDays(),
                bookingAddress: wish?.getBookingAddress(),
                category: wish?.getCategory()

            })
            return newBooking.save()

        } catch (err) {
            console.log(err);
        }
    }

    const findActiveBookings = (id) => {
        try {
            const activeBookingCount = bookingSchema.find({
                userId: new ObjectId(id),
                status: true,
                booked: true
            }).countDocuments().exec();
            return activeBookingCount;
        } catch (err) {
            console.log(err);
        }
    }

    const confirmBooking = (id) => {
        try {
            console.log(id, 'booking id is this');
            const bookingConfirmation = bookingSchema.findByIdAndUpdate(id, { booked: true })
            return bookingConfirmation
        } catch (err) {
            console.log(err);
        }
    }
    const findBookingsCustomized = (name, category, formattedDate) => {
        try {
            console.log(formattedDate, 'foramttedDate is this');
            const customizedBookings = bookingSchema.find({
                $and: [
                    { [`${category}.canteenName`]: name },
                    { endDate: { $gte: formattedDate } },
                    // { startDate: { $gte: formattedDate } },
                    { booked: true }
                ]
            }).select({ [category]: 1, _id: 1, bookingAmount: 1, endDate: 1, startDate: 1, bookingAddress: 1, source: 1 })
            return customizedBookings
        }
        catch (err) {
            console.log(err);
        }
    }

    const AllBookingsCustomized = (name, category) => {
        try {
          
            const customizedBookings = bookingSchema.find({
                $and: [
                    { [`${category}.canteenName`]: name },
                    { booked: true },
                    {status:true}
                ]
            }).select({ [category]: 1, _id: 1, bookingAmount: 1, endDate: 1, startDate: 1, bookingAddress: 1, source: 1 })
            return customizedBookings
        }
        catch (err) {
            console.log(err);
        }
    }
    const AllBookingsOfPackages = (id) => {
        try {
            
            const customizedBookings = bookingSchema.find({
                $and: [
                    { canteenId: id},
                    { booked: true },
                    {status:true}
                ]
            }).select({ _id: 1, bookingAmount: 1, endDate: 1, startDate: 1, bookingAddress: 1, source: 1 })
            return customizedBookings
        }
        catch (err) {
            console.log(err);
        }
    }

    const bookedItemsFromPackage = (idOfCanteen, category, formattedDate) => {
        try {

            const itemsBookedFromPackages = bookingSchema.find({
                $and: [
                    { canteenId: idOfCanteen },
                    { endDate: { $gte: formattedDate } },
                    // { startDate: { $gte: formattedDate } },
                    { booked: true }
                ]
            }).select({ [category]: 1, _id: 1, bookingAmount: 1, endDate: 1, startDate: 1, bookingAddress: 1, source: 1, category: 1 })

            return itemsBookedFromPackages

        } catch (err) {
            console.log(err);
        }
    }


    return {
        insertBooking,
        findActiveBookings,
        confirmBooking,
        findBookingsCustomized,
        bookedItemsFromPackage,
        AllBookingsCustomized,
        AllBookingsOfPackages

    }

}