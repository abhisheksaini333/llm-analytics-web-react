// // UserInput.tsx
// import React, { useState } from 'react';
// import './styles.css';

// const UserInput: React.FC = () => {
//     const [inputText, setInputText] = useState('');

//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setInputText(event.target.value);
//     };

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         // Handle message submission logic
//         console.log("User submitted:", inputText);
//         setInputText('');
//     };

//     return (
//         <form onSubmit={handleSubmit} className="user-input-form">
//             <input
//                 type="text"
//                 value={inputText}
//                 onChange={handleInputChange}
//                 placeholder="Type a message..."
//                 className="input-field"
//             />
//             <button type="submit" className="send-button">Send</button>
//         </form>
//     );
// }

// export default UserInput;


import React, { useState } from 'react';
import './styles.css';

const UserInput: React.FC = () => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle message submission logic
        console.log("User submitted:", inputText);
        setInputText('');
    };

    return (
        <form onSubmit={handleSubmit} className="user-input-form">
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type a message..."
                className="input-field"
            />
            <button type="submit" className="send-button">Ask</button>
        </form>
    );
}

export default UserInput;
