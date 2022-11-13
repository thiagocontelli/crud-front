import * as M from '@mui/material';
import React from 'react';

interface Props {
	value: number;
	handleChange(event: React.SyntheticEvent, newValue: number): void;
}

export function Header({ handleChange, value }: Props) {
	return (
		<M.Tabs
			value={value}
			onChange={handleChange}
			centered
		>
			<M.Tab
				disableRipple
				label='Register'
			/>
			<M.Tab
				disableRipple
				label='List'
			/>
		</M.Tabs>
	);
}
