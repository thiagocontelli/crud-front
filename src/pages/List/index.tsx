import * as M from '@mui/material';
import { useEffect, useState } from 'react';

import { useBooks } from '../../hooks/useBooks';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';

import { DeleteWarning } from './DeleteWarning';

import './style.css';

export function List() {
	const hook = useBooks();

	const [bookIdToDelete, setBookIdToDelete] = useState('');

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		hook.getAllBooks();
	}, []);

	return (
		<>
			<M.Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '2rem',
					width: '100%',
					height: '100vh',
				}}
			>
				<h2>Your library</h2>

				{hook.allBooks.length > 0 ? (
					hook.allBooks.map((book, index) => (
						<div className='container'>
							<>
								<div>
									<h3>{book.name}</h3>
									<h4>{book.author}</h4>
								</div>
								<div>
									<M.IconButton color='primary'>
										<EditIcon />
									</M.IconButton>
									<M.IconButton color='primary'>
										<DownloadIcon />
									</M.IconButton>
									<M.IconButton
										onClick={() => {
											handleClickOpen();
											setBookIdToDelete(book.id);
										}}
										color='error'
									>
										<DeleteIcon />
									</M.IconButton>
								</div>
							</>
						</div>
					))
				) : (
					<p>Your library is empty!</p>
				)}
			</M.Box>

			<DeleteWarning
				onClose={handleClose}
				open={open}
				bookId={bookIdToDelete}
			/>
		</>
	);
}
