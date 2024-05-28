/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import logger from '@adonisjs/core/services/logger'
import router from '@adonisjs/core/services/router'
const ChatsController = () => import('#controllers/chats_controller')
const PagesController = () => import('#controllers/pages_controller')
logger.info("Loaded")

router.get('/', [PagesController, 'home'])
router.post('messages', [ChatsController, 'store']).as('submit.message')