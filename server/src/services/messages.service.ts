import { v4 as uuid } from 'uuid'
import { connectionDB } from '../config/database.config'
import { MessagesTable } from '../models'

interface CreateMessageData {
  name: string
  email: string
  message: string
}

export const createMessage = async (data: CreateMessageData) => {
  const db = await connectionDB()
  const id = uuid()
  const message = db.insert(MessagesTable).values({id, ...data}).returning()

  return message
}

export const getMessages = async () => {
  const db = await connectionDB()
  const messages = db.select().from(MessagesTable)
  return messages
}