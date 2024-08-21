import React from 'react';

interface TableProps {
    data: string;
}

const ChatTable: React.FC<TableProps> = ({ data }) => {
    const parseData = () => {
        const rows = data.trim().split('\n');
        const columns = rows[0].split(/\s+/);
        const tableData = rows.slice(1).map(row => row.split(/\s+/).slice(1)); // Skip the first column (index)

        return { columns, tableData };
    };

    const { columns, tableData } = parseData();

    return (
        <div style={{ overflow: 'auto', maxHeight: '240px', border: '1px solid #ddd', width: 'fit-content' }}>
            <table style={{ width: 'max-content', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead style={{ position: 'sticky', top: 0, background: '#f2f2f2', zIndex: 1 }}>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} style={{ border: '1px solid #ddd', padding: '6px' }}>
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} style={{ border: '1px solid #ddd', padding: '6px' }}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ChatTable;
