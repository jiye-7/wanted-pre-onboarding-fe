import { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';

interface LinkTabProps {
	label?: string;
	href?: string;
}

function LinkTab(props: LinkTabProps) {
	return (
		<Tab
			component="a"
			onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
				event.preventDefault();
			}}
			{...props}
		/>
	);
}

const Navigation = () => {
	const [value, setValue] = useState<number>(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<nav>
			<Box sx={{ width: '100%' }}>
				<Tabs value={value} onChange={handleChange} aria-label="Navigation Tabs">
					<LinkTab label="My ToDo List :)" href="/" />
					<LinkTab label="SignUp" href="/signup" />
					<LinkTab label="SignIn" href="/signin" />
				</Tabs>
			</Box>
		</nav>
	);
};

export default Navigation;
