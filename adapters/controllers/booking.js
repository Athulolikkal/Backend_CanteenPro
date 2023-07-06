import addBookingUsecase from "../../applications/usecases/user/booking/addBooking.js";
import confirmBookingUsecase from "../../applications/usecases/user/booking/confirmBooking.js";
import getAllBookingOfCanteenUseCase from "../../applications/usecases/canteen/bookings/getallbookingofcanteen.js";
import canteenBookingDetailsOfCanteenUsecase from "../../applications/usecases/canteen/bookings/canteenbookingdetails.js"


export default function bookingController(
    bookingImplementsMongoDb,
    bookingInterfaceRepository,
    wishInterfacerepositories,
    wishDbrepositories,
    userImplementsMongoDb,
    userInterfaceMongoDb
) {
    const bookingDb = bookingInterfaceRepository(bookingImplementsMongoDb())
    const wishDb = wishInterfacerepositories(wishDbrepositories())
    const userDb= userInterfaceMongoDb(userImplementsMongoDb())

    const addBooking = (req, res) => {
        const packageDetails = req?.body
        const wishId = req?.body?._id
        addBookingUsecase(packageDetails, wishId, bookingDb, wishDb,userDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))
    }
    const confirmbooking = (req, res) => {

        const bookingId = req?.body?.bookingId;
        confirmBookingUsecase(bookingId, bookingDb).then((response) => {
            res.json({ status: true })
        }).catch((err) => {
            console.log(err);
        })
    }

    const getAllBookingOfCanteen = (req, res) => {
        const { canteenId, name, category, date } = req?.query
        getAllBookingOfCanteenUseCase(canteenId, name, category, date,bookingDb).then((response) => {
           res.json(response)
        }).catch((err) => console.log(err))
    }

   const getDetails=(req,res)=>{
     const{canteenId,name}=req?.query;
     canteenBookingDetailsOfCanteenUsecase(canteenId,name,bookingDb).then((response)=>{
       res.json(response)
     }).catch((err)=>console.log(err))
     
   }

    return {
        addBooking,
        confirmbooking,
        getAllBookingOfCanteen,
        getDetails
    }
}