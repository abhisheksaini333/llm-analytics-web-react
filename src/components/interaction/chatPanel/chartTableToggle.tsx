import React, { useState } from 'react';
import { FaTable, FaChartBar } from 'react-icons/fa';
import BarChart from "../../charts/vega";
import ChatTable from "../../chatTable";

import './styles.css';

interface TableChartToggleProps {
    data: string;
}

export const TableChartToggle: React.FC<TableChartToggleProps> = ({ data }) => {
    const [showChart, setShowChart] = useState(false);

    return (
        <div style={{ position: 'relative', padding: '16px', paddingTop: '0' }}>
            <div style={{ position: 'absolute', top: '10px', right: '-18px' }}>
                <button
                    onClick={() => setShowChart(!showChart)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px',
                        paddingTop: '4px'
                    }}
                    title={showChart ? 'Show Table' : 'Show Chart'}
                >
                    {showChart ? (
                        <FaTable size={20} color="#555" />
                    ) : (
                        <FaChartBar size={20} color="#555" />
                    )}
                </button>
            </div>
            <div className='chat-table'>
                {showChart ? (
                    <BarChart data={data} />
                ) : (
                    <ChatTable data={data} />
                )}
            </div>
        </div>
    );
};

export default TableChartToggle;

