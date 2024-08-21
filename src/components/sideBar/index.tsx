import React from 'react';
import { List, ListItem, ListItemText, Typography, Button } from '@mui/material';
import styles from './styles.module.css';

const Sidebar: React.FC = () => {
    return (
        <div className={styles.sidebar}>
            <Typography variant="h6">Hardik Chheda</Typography>
            <Typography variant="body2">hardik@magicBI.ai</Typography>
            <List>
                <ListItem button>
                    <ListItemText primary="Conversations (⌘1)" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Stories (⌘2)" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Data (⌘3)" />
                </ListItem>
            </List>
            <Button variant="contained" fullWidth className={styles.button}>
                + Talk to your data
            </Button>
        </div>
    );
};

export default Sidebar;