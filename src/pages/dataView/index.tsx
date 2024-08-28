import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { get, post } from '../../services/httpService/apiService';
import DataTable from '../../components/dataTable';
import List from '../../components/list';
import Loading from '../../components/loading';

import './styles.css';
import { DataObject, parseTableData, segregateData, SegregatedData } from '../../utils/parsers';
import TableData from '../../components/dataTable';

const DataViewPage: React.FC = () => {
    const [selectedTable, setSelectedTable] = useState<{ id: number, label: string }>();
    const [loading, setLoading] = useState<boolean>(true);
    const [tables, setTables] = useState<{ id: number, label: string }[]>([]);
    const [tableDataColumns, setTableDataColumns] = useState<any>([]);
    const [tableData, setTableData] = useState<any>([]);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

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
                let tableData: DataObject[] = response?.query2_results;
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
                                    <button className='interact-button' onClick={onInteractClick}>Insights</button>
                                </div>
                                {
                                    tableData && tableDataColumns &&
                                    // <DataTable data={tableData} columns={tableDataColumns} />
                                    <TableData data={tableData} />
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
