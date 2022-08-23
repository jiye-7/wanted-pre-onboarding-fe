import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Navigation from './components/Navigation';
import './App.css';

function App() {
	return (
		<main className="App">
			<Navigation />
			<Routes>
				<Route path="/" element={<Main />}>
					<Route path="signup" element={<SignUp />} />
					<Route path="signin" element={<SignIn />} />
				</Route>
			</Routes>
		</main>
	);
}

export default App;
