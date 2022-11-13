import { ChangeEvent, useEffect, useState } from 'react';

import * as M from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

import './style.css';

import { useBooks } from '../../hooks/useBooks';

export function Registration() {
	const {
		allBooks,
		author,
		description,
		getAllBooks,
		name,
		registerBook,
		setAuthor,
		setDescription,
		setName,
		bookBase64,
		setBookBase64,
		handleUploadFile,
		file,
		setFile,
	} = useBooks();

	return (
		<M.Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '2rem',
				width: '100%',
				height: '100vh',
			}}
		>
			<h2>Register your book</h2>
			<form>
				<M.TextField
					label='Name'
					required
					value={name}
					onChange={(
						e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
					) => {
						setName(e.target.value);
					}}
				/>
				<M.TextField
					label='Author'
					required
					value={author}
					onChange={(
						e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
					) => {
						setAuthor(e.target.value);
					}}
				/>
				<M.TextField
					label='Description'
					required
					value={description}
					multiline
					minRows={3}
					maxRows={8}
					onChange={(
						e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
					) => {
						setDescription(e.target.value);
					}}
				/>
				<M.Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
					<M.Button
						variant='outlined'
						startIcon={<FileUploadIcon />}
						component='label'
					>
						<input
							hidden
							accept='application/pdf'
							type='file'
							multiple
							onChange={e => {
								handleUploadFile(e);
							}}
						/>
						{file ? file!.name : 'Upload book'}
					</M.Button>
					<M.Button
						type='submit'
						variant='contained'
						onClick={e => {
							e.preventDefault();
							registerBook();
						}}
					>
						Register
					</M.Button>
					{/* <M.Button
						type='submit'
						variant='outlined'
						onClick={e => {
							e.preventDefault();
							getAllBooks();
						}}
					>
						List
					</M.Button> */}
				</M.Box>
			</form>

			<ul>
				{allBooks.map((book, index) => (
					<li key={index}>{book.name}</li>
				))}
			</ul>
		</M.Box>
	);
}
