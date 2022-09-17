import './inputField.css';

const InputField = () => {
	const sendMessage = () => {};

	return (
		<form action='#'>
			<div className='send-message'>
				<input
					type='text'
					placeholder='Enter message'
					className='input-field'
				></input>
				<button onClick={sendMessage}>
					<img className='send-icon' src='send-icon.png' />
				</button>
			</div>
		</form>
	);
};

export default InputField;
