import * as M from '@mui/material';

import './style.css';

export function Registration() {
	return (
		<M.Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '1rem',
				width: '100%',
				height: '100vh',
			}}
		>
			<h2>User Registration</h2>
			<form>
				<M.TextField label='Name' />
				<M.TextField
					label='E-mail'
					type='email'
				/>
				<M.TextField
					label='Password'
					type='password'
				/>
				<M.Button variant='contained'>Submit</M.Button>
			</form>
		</M.Box>
	);
}
