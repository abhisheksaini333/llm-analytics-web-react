// import React, { useState } from 'react';
// import './styles.css';

// const ChatWindow: React.FC = () => {
//     const [input, setInput] = useState<string>('');

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // Logic to handle user input and generate responses
//         // Update chat history
//         setInput('');
//     };

//     return (
//         <div className="chat-window">
//             {/* Display chat history */}
//             <div className="chat-history">Chat history will go here</div>
//             {/* Input field and submit button */}
//             <form onSubmit={handleSubmit} className="chat-input-form">
//                 <input
//                     type="text"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     placeholder="Type your message here..."
//                     className="chat-input"
//                 />
//                 <button type="submit" className="send-button">Send</button>
//             </form>
//         </div>
//     );
// };

// export default ChatWindow;

import React from 'react';
import Message from '../message';
import './styles.css';

const ChatWindow: React.FC = () => {
  return (
    <div className="chat-window">
      <Message user="ChatGPT" text="Hello! How can I assist you today?" />
      {/* Additional messages go here */}
    </div>
  );
}

export default ChatWindow;

