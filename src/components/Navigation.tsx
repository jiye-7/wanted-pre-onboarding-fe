import { useNavigate, useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Navigation = () => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<Container>
			<ul>
				<li value={location.pathname} aria-label="Navigation Tabs">
					<Link style={{ textDecoration: 'none', color: '#000' }} to="/">
						My ToDo List
					</Link>
				</li>
				<li>
					<Link style={{ textDecoration: 'none', color: '#000' }} to="/signup">
						SignUp
					</Link>
				</li>
				<li>
					<Link style={{ textDecoration: 'none', color: '#000' }} to="/signin">
						SignIn
					</Link>
				</li>
			</ul>
		</Container>
	);
};

export default Navigation;
