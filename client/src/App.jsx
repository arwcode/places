import { useAppContext } from './context/context.jsx'

export default function App() {
	const { state } = useAppContext()

	return (
		<div>
			<h1>{state.title}</h1>
			<p>Hi world :)</p>
		</div>
	)
}
