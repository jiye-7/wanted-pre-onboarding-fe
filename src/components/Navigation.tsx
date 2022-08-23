import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';

const Navigation = () => {
	return (
		<nav>
			<Box sx={{ width: '100%' }}>
				<Tabs aria-label="nav tabs example">
					<Tab label="My ToDo List :)" href="/" />
					<Tab label="SignUp" href="/signup" />
					<Tab label="SignIn" href="/signin" />
				</Tabs>
			</Box>
		</nav>
	);
};

export default Navigation;
