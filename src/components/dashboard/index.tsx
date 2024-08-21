import React from 'react';
import { Box, Typography, TextField, Grid } from '@mui/material';
import PinnedStories from '../pinnedStories';
import Conversations from '../conversations';
import TopConversations from '../topConversations';
import styles from './styles.module.css';

const Dashboard: React.FC = () => {
    return (
        <Box className={styles.dashboard}>
            <Box mb={2} className={styles.header}>
                <Typography variant="h5">Top Conversations & Stories</Typography>
                <TextField variant="outlined" placeholder="Search" fullWidth margin="normal" className={styles.search} />
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <PinnedStories />
                </Grid>
                <Grid item xs={12}>
                    <Conversations />
                </Grid>
                <Grid item xs={12}>
                    <TopConversations />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;