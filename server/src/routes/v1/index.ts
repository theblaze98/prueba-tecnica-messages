import { Router } from 'express'
import { connectionDB } from '../../config/database.config'
import { MessagesTable } from '../../models'
import { createMessageController, getMessagesController } from '../../controllers/messages.controller'
import { MessageMiddleware } from '../../middlewares/message.middleware'

const router = Router()

router.get('/', (req, res) => {
	return res.status(200).json({ message: 'OK' })
})

router.get('/messages', getMessagesController)
router.post('/messages/create', MessageMiddleware, createMessageController)

export default router
