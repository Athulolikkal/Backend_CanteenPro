import getAllCanteens from "../../applications/usecases/common/getAllCanteens.js";


export default function canteenController(
    canteenMongoInterface,
    canteenMongoImplements
) {

    const canteenDb = canteenMongoInterface(canteenMongoImplements())

    const viewAllCanteens = (req, res) => {
        const pageNumber=req.query.pageNumber
        console.log(pageNumber);
        getAllCanteens(pageNumber,canteenDb).then((response)=>{
           res.json(response)
        }).catch((err)=>console.log(err))


    }


    return {
        viewAllCanteens
    }

}