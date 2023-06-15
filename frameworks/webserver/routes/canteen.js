import canteenController from '../../../adapters/controllers/canteen.js'
import canteenMongoDbImplements from '../../database/mongoDB/repositories/canteenMongoDbrepository.js'
import canteenMongoInterface from '../../../applications/repositories/canteenInterfaceMongoDb.js'

export default function canteenRouter(express) {
    const router = express.Router();
    const controller = canteenController(
        canteenMongoInterface,
        canteenMongoDbImplements
        )

        router.route('/viewallcanteens').get(controller.viewAllCanteens)



    return router
}