import axios from 'axios';
import { useState } from 'react';

export interface Book {
	name: string;
	author: string;
	description: string;
	bookBase64: string;
}

export function useBooks() {
	const [allBooks, setAllBooks] = useState<Book[]>([]);

	// form fields
	const [name, setName] = useState('');
	const [author, setAuthor] = useState('');
	const [description, setDescription] = useState('');
	const [bookBase64, setBookBase64] = useState<string | ArrayBuffer | null>('');
	const [file, setFile] = useState<File>();

	async function registerBook() {
		try {
			const response = axios.post('http://localhost:3333/books', {
				name,
				author,
				description,
				bookBase64,
			});
			resetInputFields();
		} catch (error) {
			console.log(error);
		}
	}

	async function getAllBooks() {
		const response = await axios.get('http://localhost:3333/books');
		setAllBooks(response.data);
	}

	function handleUploadFile(e: React.ChangeEvent<HTMLInputElement>) {
		const selectedFile = e.target.files![0];
		setFile(selectedFile);

		if (selectedFile) {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(selectedFile);
			fileReader.onloadend = () => {
				setBookBase64(fileReader.result);
			};
		}
	}

	function resetInputFields() {
		setName('');
		setAuthor('');
		setDescription('');
		setFile(undefined);
	}

	return {
		registerBook,
		getAllBooks,
		allBooks,
		description,
		setDescription,
		author,
		setAuthor,
		name,
		setName,
		bookBase64,
		setBookBase64,
		handleUploadFile,
		file,
		setFile,
	};
}
