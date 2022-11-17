import React from 'react';

function Form() {
	return (
		<div className='login-form'>
			<form>
				<div className='input-container'>
					<label htmlFor='email'>Email: </label>
					<input
						type='email'
						placeholder='Email'
						name='email'
						ref={emailRef}
					/>
				</div>
				<div className='input-container'>
					<label htmlFor='password'>Password: </label>
					<input
						type='password'
						placeholder='Password'
						name='password'
						ref={passwordRef}
					/>
				</div>
				<div className='submit-container'>
					<input
						type='submit'
						defaultValue='Accept'
						onClick={request}
					/>
				</div>
			</form>
		</div>
	);
}

export default Form;
