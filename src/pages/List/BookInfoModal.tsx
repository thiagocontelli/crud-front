import * as M from '@mui/material';
import { Book } from '../../hooks/useBooks';

import DownloadIcon from '@mui/icons-material/Download';

interface Props {
	open: boolean;
	onClose(): void;
	book: Book;
}

export function BookInfoModal({ onClose, open, book }: Props) {
	return (
		<M.Dialog
			open={open}
			onClose={onClose}
			fullWidth
		>
			<M.DialogTitle
				fontWeight='medium'
				bgcolor='#1976d2'
				color='white'
			>
				Book Info
			</M.DialogTitle>
			<M.DialogContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					marginTop: '1rem',
					gap: '.5rem',
				}}
			>
				<h3>{book.name}</h3>
				<h4>{book.author}</h4>
				<p>{book.description}</p>
			</M.DialogContent>
			<M.DialogActions sx={{ display: 'flex', gap: '.5rem' }}>
				<a
					download='book'
					href={book.bookBase64}
					style={{ textDecoration: 'none' }}
				>
					<M.Button
						color='primary'
						variant='outlined'
						startIcon={<DownloadIcon />}
					>
						Download
					</M.Button>
				</a>
				<M.Button
					color='primary'
					variant='contained'
					onClick={onClose}
				>
					Close
				</M.Button>
			</M.DialogActions>
		</M.Dialog>
	);
}
