import React from 'react';
// import Canvas from '../../components/canvas';

import './styles.css';
import { DocEditor } from '../../components/affine/docEditor';

const DashboardPage: React.FC = () => {

    return (
        <div>
            {/* <h1>Dashboard</h1> */}
            <div className='dashboard'>
                {/* <Canvas /> */}
                {/* <iframe id="serviceFrameSend" src="http://localhost:8080/" width="auto" height="auto" /> */}
                <DocEditor />
            </div>
        </div>
    );
};

export default DashboardPage;
