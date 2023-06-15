export default function packageInterfacerepositories(repositories) {
    const addPackages = (packageDetails) => repositories.addPackages(packageDetails)
    const getPackage = (canteenId) => repositories.getPackage(canteenId)
    const getAllPackages = () => repositories.getAllPackages()
    const findPackageById = (packageId) => repositories.findPackageById(packageId)
    const removePackagebyId = (packageId) => repositories.removePackagebyId(packageId)
    const showPackagesOfCanteenbyPagination = (canteenId, skipnumber, limit) => repositories.showPackagesOfCanteenbyPagination(canteenId, skipnumber, limit)
    const totalPackageCount = () => repositories.totalPackageCount()
    const showCategorizedPackages = (skip, limit, menu, search) => repositories.showCategorizedPackages(skip, limit, menu, search)
    return {
        addPackages,
        getPackage,
        getAllPackages,
        findPackageById,
        removePackagebyId,
        showPackagesOfCanteenbyPagination,
        totalPackageCount,
        showCategorizedPackages
    }
}