import React from 'react';
import Dashboard from '../../components/dashboard';

import './styles.css';

const DashboardPage: React.FC = () => {

    return (
        <div>
            <h1>Dashboard</h1>
            <div className='dashboard'>
                <Dashboard />
            </div>
        </div>
    );
};

export default DashboardPage;
