export default function wishInterfacerepositories(repositories) {
    const addWish = (data) => repositories.addWish(data)
    const isSamePackage = (id, userId) => repositories.isSamePackage(id, userId)
    const activeWishes = (userId, currentDate) => repositories.activeWishes(userId, currentDate)
    const noLongerWishes = (userId, currentDate) => repositories.noLongerWishes(userId, currentDate)
    const removeItembyId = (wishId) => repositories.removeItembyId(wishId)
    return {
        addWish,
        isSamePackage,
        activeWishes,
        noLongerWishes,
        removeItembyId
    }
}