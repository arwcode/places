import { useAppContext } from './context/context.jsx';
import Header from './components/layout/Header.jsx';

export default function App() {
	const { state } = useAppContext()

	return (
		<div>
			<Header />
		</div>
	)
}
