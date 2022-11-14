import * as M from '@mui/material';
import { useBooks } from '../../hooks/useBooks';

interface Props {
	open: boolean;
	onClose(): void;
	bookId: string;
}

export function DeleteWarning({ onClose, open, bookId }: Props) {
	const hook = useBooks();

	return (
		<M.Dialog
			open={open}
			onClose={onClose}
		>
			<M.DialogTitle>Are you sure you want to delete this book?</M.DialogTitle>
			<M.DialogActions>
				<M.Button
					color='inherit'
					variant='contained'
					onClick={onClose}
				>
					Cancelar
				</M.Button>
				<M.Button
					color='error'
					variant='contained'
					onClick={() => {
						onClose();
						hook.deleteBook(bookId);
					}}
				>
					Yes, delete
				</M.Button>
			</M.DialogActions>
		</M.Dialog>
	);
}
