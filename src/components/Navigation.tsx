import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Tabs, Tab } from '@mui/material';

const Navigation = () => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<nav>
			<Box sx={{ width: '100%' }}>
				<Tabs value={location.pathname} aria-label="Navigation Tabs">
					<Tab label="My ToDo List :)" value="/" onClick={() => navigate('/')} />
					<Tab label="SignUp" value="/signup" onClick={() => navigate('/signup')} />
					<Tab label="SignIn" value="/signin" onClick={() => navigate('/signin')} />
				</Tabs>
			</Box>
		</nav>
	);
};

export default Navigation;
