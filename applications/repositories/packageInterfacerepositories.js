export default function packageInterfacerepositories(repositories) {
    const addPackages = (packageDetails) => repositories.addPackages(packageDetails)
    const getPackage = (canteenId) => repositories.getPackage(canteenId)
    const getAllPackages = () => repositories.getAllPackages()
    const findPackageById = (packageId) => repositories.findPackageById(packageId)
    const removePackagebyId=(packageId)=>repositories.removePackagebyId(packageId)
    const showPackagesOfCanteenbyPagination=(canteenId,skipnumber,limit)=>repositories.showPackagesOfCanteenbyPagination(canteenId,skipnumber,limit)
    return {
        addPackages,
        getPackage,
        getAllPackages,
        findPackageById,
        removePackagebyId,
        showPackagesOfCanteenbyPagination
    }
}