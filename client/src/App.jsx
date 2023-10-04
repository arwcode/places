import { useAppContext } from './context/context.jsx'

export default function App() {
	const { state } = useAppContext()

	return <h1>{state.title}</h1>
}
