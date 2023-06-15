import wishController from '../../../adapters/controllers/wish.js'
import wishInterfacerepositories from '../../../applications/repositories/wishInterfacerepositories.js';
import wishDbrepositories from '../../database/mongoDB/repositories/wishMongoDbrepository.js';

export default function wishRouter(express) {
    const router = express.Router();
    const controller = wishController(
        wishInterfacerepositories,
        wishDbrepositories
    )


    router.route('/addtowish').post(controller.addToWish)
    router.route('/getwish').get(controller.fetchUserwishes)
    router.route('/removeitem').delete(controller.removeWish)
    return router;
}