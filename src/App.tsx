import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
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
				<Route path="/" element={<Auth SpecificComponent={<Main />} option={true} />} />
				<Route path="/signup" element={<Auth SpecificComponent={<SignUp />} option={false} />} />
				<Route path="/signin" element={<Auth SpecificComponent={<SignIn />} option={false} />} />
				<Route path="/todo" element={<Auth SpecificComponent={<Todos />} option={true} />} />
			</Routes>
		</main>
	);
}

export default App;
