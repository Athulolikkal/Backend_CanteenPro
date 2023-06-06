import packagesController from "../../../adapters/controllers/packages.js";
import packageInterfacerepositories from "../../../applications/repositories/packageInterfacerepositories.js";
import packagesDbrepositories from "../../database/mongoDB/repositories/packagesMongoDbrepository.js";

export default function canteenRouter(express) {
  const router = express.Router();
  const controller = packagesController(
    packageInterfacerepositories,
    packagesDbrepositories
  )

  router.route('/addpackages').post(controller.addPackages)
  router.route('/getpackages').get(controller.getPackages)
  router.route('/allpackages').get(controller.getAllPackages)
  router.route('/viewpackge').get(controller.findPackagebyId)
  router.route('/removepackage').patch(controller.removePackage)
  return router;
}