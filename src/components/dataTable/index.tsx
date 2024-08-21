import React from 'react';
import './styles.css'

// interface DataTableProps {
//     data: Array<{ [key: string]: any }>;
//     columns: Array<{ header: string, key: string }>;
// }

// const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
//     return (
//         <table>
//             <thead>
//                 <tr>
//                     {columns.map((column) => (
//                         <th key={column.key}>{column.header}</th>
//                     ))}
//                 </tr>
//             </thead>
//             <tbody>
//                 {data.map((row, rowIndex) => (
//                     <tr key={rowIndex}>
//                         {columns.map((column) => (
//                             <td key={column.key}>{row[column.key]}</td>
//                         ))}
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// };

// export default DataTable;


interface TableDataProps {
    columns: string[];
    data: string[][];
}

const TableData: React.FC<TableDataProps> = ({ columns, data }) => {
    debugger
    return (
        <div className="table-container">
            <table className="data-table">
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableData;


// interface TableDataProps {
//     columns: string[];
//     data: Record<string, any[]>;
// }

// const TableData: React.FC<TableDataProps> = ({ columns, data }) => {
//     debugger
//     return (
//         <div className="table-container">
//             <table className="data-table">
//                 <thead>
//                     <tr>
//                         {columns.map((column, index) => (
//                             <th key={index}>{column}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data[columns[0]] && data[columns[0]].map((_, rowIndex) => (
//                         <tr key={rowIndex}>
//                             {columns.map((column) => (
//                                 <td key={column}>{data[column][rowIndex]}</td>
//                             ))}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default TableData;