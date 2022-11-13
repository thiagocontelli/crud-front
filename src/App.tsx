import './styles/global.css';

import { Registration } from './pages/Registration';
import { Header } from './components/Header';
import React from 'react';
import { List } from './pages/List';

function App() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<>
			<Header
				handleChange={handleChange}
				value={value}
			/>
			{value === 0 ? <Registration /> : <List />}
		</>
	);
}

export default App;
