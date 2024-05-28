import transmit from '@adonisjs/transmit/services/main'
import type { HttpContext } from '@adonisjs/core/http'
import {DateTime} from 'luxon'
import logger from '@adonisjs/core/services/logger'


export default class ChatsController {
  store({ request, response }: HttpContext) {
    const { message, username } = request.only(['message', 'username'])

    logger.info(message)

    if (!message) {
      return response.redirect().back()
    }

    transmit.broadcast('chats/1', { message: `[${DateTime.now().toFormat('DD H:mm:ss')}] ${username ?? 'Guest'}: ${message}` })

    return response.redirect().back()
  }
}