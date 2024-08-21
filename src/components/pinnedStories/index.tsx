import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import styles from './styles.module.css';

const PinnedStories: React.FC = () => {
    const stories = [
        'Why did email open rates improve?',
        'What drove 2024Q1 campaign performance?',
        'How does 2024Q1 compare to last year\'s campaign?',
    ];

    return (
        <div className={styles.pinnedStories}>
            <Typography variant="h6">Pinned Stories</Typography>
            <List>
                {stories.map((story, index) => (
                    <ListItem button key={index} className={styles.listItem}>
                        <ListItemText primary={story} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default PinnedStories;