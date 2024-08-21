import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import styles from './styles.module.css';

const TopConversations: React.FC = () => {
    const topConversations = [
        'How does 2024Q1 compare to last year\'s campaign?',
        'Did improvement in clickthrough drive more conversions?',
        'How many signups did we get for the last campaign?',
        'What were the drivers for SF vs NY conversions during my previous campaign?',
        'What drove 2024Q1 campaign performance?',
        'Why did email open rates improve?',
    ];

    return (
        <div className={styles.topConversations}>
            <Typography variant="h6">Top Conversations & Stories</Typography>
            <List>
                {topConversations.map((conversation, index) => (
                    <ListItem button key={index} className={styles.listItem}>
                        <ListItemText primary={conversation} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default TopConversations;