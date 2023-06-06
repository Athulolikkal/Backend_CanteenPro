import packageSchema from '../model/packageSchema.js'
// import Canteens from '../model/canteenSchema.js'

export default function packagesDbrepositories() {

    const addPackages = (packages) => {
        const newPackage = new packageSchema({
            breakfast: packages?.getBreakfast(),
            lunch: packages?.getLunch(),
            dinner: packages?.getDinner(),
            canteenId: packages?.getCanteenId(),
            category: packages?.getCategory(),
            total: packages?.getTotal(),
            image: packages?.getImage()

        })
        return newPackage.save()
    }

    const getPackage = async (canteen) => {
        try {
            return packageSchema.find({ canteenId: canteen })
        } catch (err) {
            console.log(err)
        }

    }

    const getAllPackages = async () => {
        try {
            return packageSchema.find({ status: true }).populate('canteenId', 'city canteenName email pincode');
        } catch (err) {
            console.log(err)
        }
    }

    const findPackageById = async (packageId) => {
        try {
            return packageSchema.findById(packageId)
        } catch (err) {
            console.log(err);
        }
    }

    const removePackagebyId = async (packageId) => {
        try {
            const existingPackage = await packageSchema.findById(packageId);
            const updatedStatus = !existingPackage.status;
            const updatedPackage = await packageSchema.findByIdAndUpdate(
                packageId,
                { status: updatedStatus }

            );
            return updatedPackage
        } catch (err) {
            console.log(err);
        }
    }

    const showPackagesOfCanteenbyPagination = async (canteenId, skipnumber, limit) => {
        try {
            return packageSchema.find({ canteenId: canteenId }).skip(skipnumber).limit(limit)

        } catch (err) {
            console.log(err);
        }
    }

    return {
        addPackages,
        getPackage,
        getAllPackages,
        findPackageById,
        removePackagebyId,
        showPackagesOfCanteenbyPagination
    }
}