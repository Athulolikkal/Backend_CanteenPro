import addToWishUsecase from "../../applications/usecases/user/wish/addToWish.js";
import getUserWishesUsecase from "../../applications/usecases/user/wish/getUserWishes.js";
import removeWishUsecase from "../../applications/usecases/user/wish/removeWish.js";

export default function wishes(
    wishRepositoriesInterface,
    wishRepositoriesImplements
) {

    const wishDb = wishRepositoriesInterface(wishRepositoriesImplements())

    const addToWish = (req, res) => {
        const data = req.body;
        addToWishUsecase(data, wishDb).then((response) => {

            res.json(response)


        }).catch((err) => console.log(err))
    }

    const fetchUserwishes = (req, res) => {
        console.log(req?.query?.userId)
        getUserWishesUsecase(req?.query?.userId, wishDb).then((response) => {
            console.log(response);
            res.json(response)
        }).catch((err) => console.log(err));

    }

    const removeWish = (req, res) => {
        const { wishid } = req.query;
        removeWishUsecase(wishid, wishDb).then((response) => {
            res.json(response)
        }).catch((err) => console.log(err))

    }

    return {
        addToWish,
        fetchUserwishes,
        removeWish
    }
}