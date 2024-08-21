import React from 'react';
import './styles.css';


interface DataObject {
    [key: string]: any;
}

interface TableDataProps {
    data: DataObject[];
}

const TableData: React.FC<TableDataProps> = ({ data }) => {
    if (data.length === 0) {
        return <p>No data available.</p>;
    }

    const columns = Object.keys(data[0]);

    return (
        <div style={{ overflowX: 'auto', overflowY: 'auto' }}>
            <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: '800px' }}>
                <thead style={{ position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 1 }}>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex} style={{ border: '1px solid #ddd', padding: '6px', fontSize: '14px' }}>
                                    {row[column]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableData;
