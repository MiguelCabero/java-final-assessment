import { React } from 'react';
import './Message.component.css';

function Message(props) {
	return (
		<div className={`message-container ${props.status}`}>
			<p>{props.message}</p>
		</div>
	);
}

export default Message;
