import { NextFunction, Request, Response } from 'express'
import { messagesValidation } from '../utils/messages.validation'
import { ZodError } from 'zod'

export const MessageMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		messagesValidation.parse(req.body)
		next()
	} catch (error) {
		if (error instanceof ZodError) {

			console.log(error)
			return res.json({ error })
		}
	}
}
