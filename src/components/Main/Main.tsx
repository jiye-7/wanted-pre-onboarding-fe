import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
	const navigate = useNavigate();

	const handleRedirect = () => {
		const token = localStorage.getItem('userToken');

		if (token) {
			navigate('/todo');
		} else {
			navigate('/signin');
		}
	};

	useEffect(() => {
		handleRedirect();
	}, []);

	return <div>Main Page</div>;
};

export default Main;
