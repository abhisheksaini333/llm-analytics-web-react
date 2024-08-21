import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import styles from './styles.module.css';

const Conversations: React.FC = () => {
    const conversations = [
        'How does 2024Q1 compare to last year\'s campaign?',
        'Did improvement in clickthrough drive more conversions?',
        'How many signups did we get for the last campaign?',
        'What were the drivers for SF vs NY conversions during my previous campaign?',
        'What drove 2024Q1 campaign performance?',
        'Why did email open rates improve?',
    ];

    return (
        <div className={styles.conversations}>
            <Typography variant="h6">Previous Conversations</Typography>
            <List>
                {conversations.map((conversation, index) => (
                    <ListItem button key={index} className={styles.listItem}>
                        <ListItemText primary={conversation} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Conversations;