type CardProps = {
  title: string
  subtitle: string
  body: string
}

export default function Card({title, subtitle, body}: CardProps) {
	return (
		<div
			className='w-[calc(50%-16px)] rounded shadow-md shadow-slate-500/40 p-4'>
			<h3 className='text-2xl font-semibold'>{title}</h3>
			<span className='text-sm text-gray-700'>{subtitle}</span>
			<p className='text-lg text-wrap break-words'>{body}</p>
		</div>
	)
}
