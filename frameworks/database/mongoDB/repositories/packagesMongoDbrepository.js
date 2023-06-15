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

    const totalPackageCount = async () => {
        return packageSchema.find().count()
    }

    const showCategorizedPackages = async (menu) => {
        try {


            const query = { [menu]: { $exists: true }, status: true };


            const numberOfPages = await packageSchema
                .find(query)
                .count();

            const showPackages = await packageSchema
                .find(query)
                .select({ [menu]: 1, _id: 1, image: 1, category: 1, status: 1 })
                .populate('canteenId', 'city canteenName email pincode')


            return { showPackages, numberOfPages };
        } catch (err) {
            console.log(err);
        }
    };
    //-----------------------------------------------------------------

    // const showCategorizedPackages = async (skip, limit, menu, search) => {
    //     try {
    //         console.log('Menu:', menu);
    //         console.log('Search:', typeof search);

    //         const query = { [menu]: { $exists: true }, status: true  };
    //         const searchQuery = {};

    //         if (search) {

    //             searchQuery.$or = [
    //                 { 'canteenId.canteenName': { $regex: search, $options: 'i' } },
    //                 { 'canteenId.city': { $regex: search, $options: 'i' } },
    //                 { [`${menu}.mainCourse`]: { $regex: search, $options: 'i' } },
    //                 { [`${menu}.sideCourse`]: { $regex: search, $options: 'i' } },
    //                 { [`${menu}.specials`]: { $regex: search, $options: 'i' } },
    //                 { [`${menu}.availableTime`]: { $regex: search, $options: 'i' } },
    //                 { 'category': { $regex: search, $options: 'i' } },
    //                 { [`${menu}.ratePerDay`]: parseInt(search) },
    //                 { [`${menu}.ratePerMonth`]: parseInt(search) },
    //             ];
    //         }

    //         console.log('Menu:', menu);
    //         console.log('Search:', search);

    //         const numberOfPages = await packageSchema
    //             .find({ $and: [query, searchQuery] })
    //             .count();

    //         const showPackages = await packageSchema
    //             .find({ $and: [query, searchQuery] })
    //             .select({ [menu]: 1, _id: 1, image: 1, category: 1, status: 1 })
    //             .populate('canteenId', 'city canteenName email pincode')
    //             .skip(skip)
    //             .limit(limit);

    //         return {showPackages,numberOfPages};
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };


    //---------------------------------------







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