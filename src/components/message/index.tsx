// import React from 'react';
// import './styles.css';

// interface MessageProps {
//     text: string;
//     sender: string;
//     timestamp: string;
// }

// const Message: React.FC<MessageProps> = ({ text, sender, timestamp }) => {
//     return (
//         <div className="message">
//             <div className="sender">{sender}</div>
//             <div className="text">{text}</div>
//             <div className="timestamp">{timestamp}</div>
//         </div>
//     );
// };

// export default Message;


import React from 'react';
import './styles.css';

interface MessageProps {
    user: string;
    text: string;
}

const Message: React.FC<MessageProps> = ({ user, text }) => {
    return (
        <div className="message">
            <span className="user">{user}:</span>
            <span className="text">{text}</span>
        </div>
    );
}

export default Message;
