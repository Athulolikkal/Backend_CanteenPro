export default function canteenInterfaceMongoDb(repositories) {
    const countOfCanteens = () => repositories.countOfCanteens()
    const allCanteens = (skipnumber, limit) => repositories.allCanteens(skipnumber, limit)
    return {
        countOfCanteens,
        allCanteens
    }
}