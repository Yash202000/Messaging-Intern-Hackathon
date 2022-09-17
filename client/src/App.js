import './App.css';
import Message from './message';
import OutgoingMessage from './outgoingMessage';
import InputField from './inputField';

function App() {
	return (
		<div className='App'>
			<div className='messages'>
				<Message />
				<OutgoingMessage />
			</div>
			<InputField />
		</div>
	);
}

export default App;
