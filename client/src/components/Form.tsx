import { createMessage } from '@/services/messages.services'
import { useState } from 'react'
const MAX_CHARACTER = 400

export type InputsForm = {
	name: string
	email: string
	message: string
}

type FormProps = {
	fetchMessages: () => void
}

export default function Form({ fetchMessages }: FormProps) {
	const [charactersCount, setCharactersCount] = useState<number>(0)

	const [formValues, setFormValues] = useState<InputsForm>({
		name: '',
		email: '',
		message: '',
	})

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const data = await createMessage(formValues)
		console.log(data)
		setFormValues({
			name: '',
			email: '',
			message: '',
		})
		fetchMessages()
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormValues({...formValues, [name]: value})
	}

	const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setCharactersCount(e.target.value.length)
		setFormValues({ ...formValues, message: e.target.value })
	}

	return (
		<div className='w-full flex justify-center items-center h-full'>
			<form
				className='w-11/12 max-w-md flex flex-col p-5 rounded-md shadow-md shadow-gray-400/40 gap-6'
				onSubmit={handleSubmit}>
				<div className='w-full relative'>
					<input
						type='text'
						id='name'
						name='name'
						className='peer w-full border-gray-300 border-b-4 p-2 hover:border-blue-400 transition-colors duration-300 ease-in focus:border-blue-400 outline-none [&:not(:placeholder-shown)]:border-blue-400'
						placeholder=' '
						required
						onChange={handleChange}
						value={formValues.name}
					/>
					<label
						htmlFor='name'
						className='absolute text-gray-300 left-2 top-2 font-medium transition-all ease-in duration-300 peer-hover:text-blue-400 peer-focus:text-blue-400 peer-focus:-top-3 peer-focus:text-[12px] cursor-text peer-[:not(:placeholder-shown)]:text-blue-400 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:-top-3'>
						Nombre
					</label>
				</div>
				<div className='w-full relative'>
					<input
						type='email'
						id='email'
						name='email'
						className='peer w-full border-gray-300 border-b-4 p-2 hover:border-blue-400 transition-colors duration-300 ease-in focus:border-blue-400 outline-none [&:not(:placeholder-shown)]:border-blue-400'
						placeholder=' '
						required
						onChange={handleChange}
						value={formValues.email}
					/>
					<label
						htmlFor='email'
						className='absolute text-gray-300 left-2 top-2 font-medium transition-all ease-in duration-300 peer-hover:text-blue-400 peer-focus:text-blue-400 peer-focus:-top-3 peer-focus:text-[12px] cursor-text peer-[:not(:placeholder-shown)]:text-blue-400 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:-top-3'>
						Correo
					</label>
				</div>
				<div className='w-full relative'>
					<textarea
						id='message'
						name='message'
						className='peer w-full border-gray-300 border-b-4 p-2 hover:border-blue-400 transition-colors duration-300 ease-in focus:border-blue-400 outline-none [&:not(:placeholder-shown)]:border-blue-400 scroll-thin'
						placeholder=' '
						rows={10}
						maxLength={MAX_CHARACTER}
						onChange={handleChangeTextArea}
						required
						value={formValues.message}
					/>
					<label
						htmlFor='message'
						className='absolute text-gray-300 left-2 top-2 font-medium transition-all ease-in duration-300 peer-hover:text-blue-400 peer-focus:text-blue-400 peer-focus:-top-4 peer-focus:text-[12px] cursor-text peer-[:not(:placeholder-shown)]:text-blue-400 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:-top-4'>
						Mensaje
					</label>

					<span
						className={`${
							charactersCount >= MAX_CHARACTER
								? 'text-red-400'
								: 'text-gray-400'
						}`}>
						{charactersCount}/{MAX_CHARACTER}
					</span>
				</div>
				<button className='bg-blue-500 hover:bg-blue-400 focus:bg-blue-600 transition-colors duration-300 ease-in p-2 rounded'>
					Guardar
				</button>
			</form>
		</div>
	)
}
