import { NavigationContainer } from '@react-navigation/native';
import GlobalRoute from './src/routes/GlobalRoute';

export default function App() {
	return (
		<NavigationContainer>
			<GlobalRoute />
		</NavigationContainer>
	);
}
