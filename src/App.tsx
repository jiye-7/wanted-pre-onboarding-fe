import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import './App.css';

function App() {
	return (
		<main className="App">
			<Routes>
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin" element={<SignIn />} />
			</Routes>
		</main>
	);
}

export default App;
