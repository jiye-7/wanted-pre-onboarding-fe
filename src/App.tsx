import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Navigation from './components/Navigation';
import Todos from './components/Todo/Todos';
import Auth from './hoc/Auth';
import './App.css';

function App() {
	return (
		<main className="App">
			<Navigation />
			<Routes>
				<Route path="/" element={<Navigate to="/todo" replace />} />
				<Route path="/signup" element={<Auth SpecificComponent={<SignUp />} option={false} />} />
				<Route path="/signin" element={<Auth SpecificComponent={<SignIn />} option={false} />} />
				<Route path="/todo" element={<Auth SpecificComponent={<Todos />} option={true} />} />
			</Routes>
		</main>
	);
}

export default App;
