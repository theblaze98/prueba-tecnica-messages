import { useEffect, useState } from "react"
import Form from "./components/Form"
import { getMessages } from "./services/messages.services"
import Card from "./components/Card"

interface IMessages {
  id: string
  name: string
  email: string
  message: string
}

export default function App() {
  const [messages, setMessages] = useState<IMessages[]>([])

  const fetchMessages = async () => {
    const data = await getMessages()
    setMessages(data)
  }

  console.log(messages)
  useEffect(() => {
    fetchMessages()
  }, [])

  return (
		<>
			<main className='w-full flex max-md:flex-col min-h-screen'>
				<div className='w-1/3 min-h-screen'>
					<Form fetchMessages={fetchMessages} />
				</div>
				<div className='w-2/3 min-h-screen p-5 flex flex-wrap gap-4 justify-center overflow-y-auto scroll-thin'>
					{messages.map(({ id, name, email, message }) => (
						<Card
							key={id}
							title={name}
							subtitle={email}
							body={message}
						/>
					))}
				</div>
			</main>
		</>
	)
}
