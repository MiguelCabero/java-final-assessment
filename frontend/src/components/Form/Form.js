import axios from 'axios';
import { React, useState, useRef } from 'react';
import Message from '../Message/Message';
import './Form.component.css';

function Form() {
	const [message, setMessage] = useState({ message: '', status: '' });
	const firstNameRef = useRef(null);
	const lastNameRef = useRef(null);
	const emailRef = useRef(null);
	const phoneNumberRef = useRef(null);

	async function addUser(event) {
		event.preventDefault();
		try {
			await axios
				.post(
					'http://localhost:8080/api/users',
					{
						firstName: firstNameRef.current.value,
						lastName: lastNameRef.current.value,
						email: emailRef.current.value,
						phoneNumber: phoneNumberRef.current.value,
					},
					{
						headers: {
							'Content-Type': 'application/json',
						},
					}
				)
				.then((response) => {
					if (response.status === 201) {
						setMessage({
							message: 'User created successfully',
							status: 'success',
						});
					}
				});
		} catch (err) {
			if (err.message) setMessage({ message: err.message, status: 'fail' });
		}
		event.target.reset();
	}

	return (
		<div className='add-user-form'>
			<form onSubmit={addUser}>
				<div className='input-container'>
					<label htmlFor='firstName'>First Name: </label>
					<input
						type='text'
						placeholder='First Name'
						name='firstName'
						ref={firstNameRef}
						required
					/>
				</div>
				<div className='input-container'>
					<label htmlFor='lastName'>Last Name: </label>
					<input
						type='text'
						placeholder='Last Name'
						name='lastName'
						ref={lastNameRef}
						required
					/>
				</div>
				<div className='input-container'>
					<label htmlFor='email'>Email: </label>
					<input
						type='text'
						placeholder='email'
						name='email'
						ref={emailRef}
						required
					/>
				</div>
				<div className='input-container'>
					<label htmlFor='phoneNumber'>Phone Number: </label>
					<input
						type='text'
						placeholder='phone number'
						name='phoneNumber'
						ref={phoneNumberRef}
						required
					/>
				</div>

				<div className='submit-container'>
					<input
						type='submit'
						value='Create'
					/>
				</div>
			</form>
			{message.message !== '' && (
				<Message
					message={message.message}
					status={message.status}
				/>
			)}
		</div>
	);
}

export default Form;
