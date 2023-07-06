import userAddBookingAddressUsecase from '../../applications/usecases/user/userData/userBookingAddressAdd.js'
import userInfoUsecase from '../../applications/usecases/user/userData/userInfo.js'

export default function userController(
    userRepoImplements,
    userRepoInterface
) {

    const userDb = userRepoInterface(userRepoImplements())

    const addUserBookingAddress = (req, res) => {

        userAddBookingAddressUsecase(req.body, userDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))
    }

    const getUserData = (req, res) => {

        userInfoUsecase(req?.query?.userId, userDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))
    }

    return {
        addUserBookingAddress,
        getUserData
    }
}