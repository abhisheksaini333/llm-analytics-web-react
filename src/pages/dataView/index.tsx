import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { get, post } from '../../services/httpService/apiService';
import DataTable from '../../components/dataTable';
import List from '../../components/list';
import Loading from '../../components/loading';

import './styles.css';
import { DataObject, parseTableData, segregateData, SegregatedData } from '../../utils/parsers';

const DataViewPage: React.FC = () => {
    const [selectedTable, setSelectedTable] = useState<{ id: number, label: string }>();
    const [loading, setLoading] = useState<boolean>(true);
    const [tables, setTables] = useState<{ id: number, label: string }[]>([]);
    const [tableDataColumns, setTableDataColumns] = useState<any>([]);
    const [tableData, setTableData] = useState<any>([]);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();


    const items = [
        { id: 1, label: 'Table 1' },
        { id: 2, label: 'Table 2' },
        { id: 3, label: 'Table 3' },
        { id: 4, label: 'Table 4' },
        { id: 5, label: 'Table 5' },
        { id: 6, label: 'Table 6' },
        { id: 7, label: 'Table 7' },
        { id: 8, label: 'Table 8' },
        { id: 9, label: 'Table 9' },
        { id: 10, label: 'Table 10' },
    ];

    const data = [
        { id: 1, name: 'John Doe', age: 28, occupation: 'Developer' },
        { id: 2, name: 'Jane Smith', age: 34, occupation: 'Designer' },
        { id: 3, name: 'Sam Johnson', age: 45, occupation: 'Manager' },
    ];

    const columns = [
        { header: 'ID', key: 'id' },
        { header: 'Name', key: 'name' },
        { header: 'Age', key: 'age' },
        { header: 'Occupation', key: 'occupation' },
    ];

    // useEffect(() => {
    //     const fetchTables = async () => {
    //         setLoading(true);
    //         try {
    //             const config = {
    //                 'session_id': '007'
    //             };
    //             const response: any = await post('https://campaign-demo-g6lg7lulsq-uc.a.run.app/tables/', config);
    //             console.log('Table List response:', response);
    //             setTables(items);
    //             setLoading(false);
    //             setError(null);
    //         } catch (error) {
    //             console.error('Error:', error);
    //             setLoading(false);
    //             setError('Failed to fetch tables');
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchTables();
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const config = {
                    "natural_language_query": "show me all the data"
                };
                const response: any = await get('https://magicbi-g6lg7lulsq-uc.a.run.app/run-queries/');
                debugger
                // console.log('Table List response:', response);
                let tableData: DataObject[] = response?.query2_results;
                // let { columns, data } = parseTableData(tableData);
                const { columns, data: dataCollection }: SegregatedData = segregateData(tableData);

                setTableData(tableData);
                setTableDataColumns(columns);
                setLoading(false);
                setError(null);
            } catch (error) {
                console.error('Error:', error);
                setLoading(false);
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    // const handleItemClick = (item: { id: number, label: string }) => {
    //     setSelectedTable(item);
    //     const fetchTableData = async () => {
    //         setLoading(true);
    //         try {
    //             const config = {
    //                 'session_id': '007',
    //                 'query': `select * from ${item.label}`
    //             };
    //             const response: any = await post('https://campaign-demo-g6lg7lulsq-uc.a.run.app/execute/', config);
    //             console.log('Table Data response:', response);
    //             setTableData(data);
    //             setTableDataColumns(columns);
    //             setLoading(false);
    //             setError(null);
    //         } catch (error) {
    //             console.error('Error:', error);
    //             setLoading(false);
    //             setError('Failed to fetch table Data');
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchTableData();
    // };

    const onInteractClick = () => {
        navigate('/interact');
    }

    if (loading) {
        return <div>
            <Loading />
        </div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {/* <h1>View</h1> */}
            <div className='dataView'>
                {/* <div className='tableList'>
                    <h3>{`Select Table`}</h3>
                    {
                        tables &&
                        <List items={tables} onItemClick={handleItemClick} />
                    }
                </div> */}
                <div className='dataTableView'>
                    <>
                        {
                            // selectedTable &&
                            <>
                                <div className='tableDataHeader'>
                                    {/* <h3>{selectedTable.label}</h3> */}
                                    <button className='interact-button' onClick={onInteractClick}>Interact</button>
                                </div>
                                {
                                    tableData && tableDataColumns &&
                                    <DataTable data={tableData} columns={tableDataColumns} />
                                }
                            </>
                        }
                    </>
                </div>
            </div>
        </div>
    );
};

export default DataViewPage;
