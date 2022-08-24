import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Ul = styled.ul`
	margin-top: 5%;
`;

const Navigation = () => {
	const location = useLocation();

	return (
		<Container>
			<Ul>
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
			</Ul>
		</Container>
	);
};

export default Navigation;
