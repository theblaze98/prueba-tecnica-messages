import { Request, Response } from "express";
import { createMessage, getMessages } from "../services/messages.service";
import { httpErrorValidation } from "src/utils/error-validator";

export const getMessagesController = async (req: Request, res: Response) => {
  try {
    const messages = await getMessages()
    return res.status(200).json(messages)
  } catch (error) {
    console.log(error)
    return res.json(error)
  }
}

export const createMessageController = async (req: Request, res: Response) => {
  try {
    const message = await createMessage(req.body)
    return res.status(201).json(message)
  } catch (error) {
    console.log(error)
    return res.json(error)
  }
}
