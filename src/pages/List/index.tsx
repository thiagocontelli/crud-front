import * as M from '@mui/material';
import { useEffect, useState } from 'react';

import { Book, useBooks } from '../../hooks/useBooks';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';

import { DeleteWarning } from './DeleteWarning';

import './style.css';
import { BookInfoModal } from './BookInfoModal';

export function List() {
	const hook = useBooks();

	const [bookIdToDelete, setBookIdToDelete] = useState('');
	const [selectedBook, setSelectedBook] = useState<Book>({} as Book);

	const [openDeleteWarning, setOpenDeleteWarning] = useState(false);
	const [openBookInfo, setOpenBookInfo] = useState(false);

	const handleClickOpenDeleteWarning = () => {
		setOpenDeleteWarning(true);
	};

	const handleCloseDeleteWarning = () => {
		setOpenDeleteWarning(false);
	};

	const handleClickOpenBookInfo = () => {
		setOpenBookInfo(true);
	};

	const handleCloseBookInfo = () => {
		setOpenBookInfo(false);
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
						<div
							onClick={() => {
								setSelectedBook({
									name: book.name,
									author: book.author,
									description: book.description,
									bookBase64: book.bookBase64,
									id: book.id,
								});
								handleClickOpenBookInfo();
							}}
							className='container'
						>
							<>
								<div>
									<h3>{book.name}</h3>
									<h4>{book.author}</h4>
								</div>
								<div>
									<M.IconButton color='primary'>
										<EditIcon />
									</M.IconButton>
									<a
										download='book'
										href={book.bookBase64}
									>
										<M.IconButton color='primary'>
											<DownloadIcon />
										</M.IconButton>
									</a>
									<M.IconButton
										onClick={() => {
											handleClickOpenDeleteWarning();
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
				onClose={handleCloseDeleteWarning}
				open={openDeleteWarning}
				bookId={bookIdToDelete}
			/>

			<BookInfoModal
				book={selectedBook}
				onClose={handleCloseBookInfo}
				open={openBookInfo}
			/>
		</>
	);
}
