import { InputsForm } from '@/components/Form'

export const createMessage = async (values: InputsForm) => {
	const res = await fetch('http://localhost:3000/api/v1/messages/create', {
		method: 'POST',
		body: JSON.stringify(values),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})
	const data = await res.json()
	return data
}

export const getMessages = async () => {
  const res = await fetch('http://localhost:3000/api/v1/messages')
  const data = await res.json()
  return data
}
