import canteenSchema from '../model/canteenSchema.js'

export default function canteenImplementsMongoDb() {

    const countOfCanteens = () => {
        return canteenSchema.find().count()
    }


    const allCanteens = (skipNumber, limit) => {
        try {

            return canteenSchema.find().skip(skipNumber).limit(limit)

        } catch (err) {
            console.log(err)
        }
    }


    return {
        countOfCanteens,
        allCanteens
    }
}