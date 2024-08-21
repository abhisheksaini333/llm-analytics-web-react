import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../../services/httpService/apiService';
import SnowflakeConnector, { SnowflakeConfig } from '../../components/connectors/snowflake';
import Loading from '../../components/loading';
import DataConnectors from '../../components/dataConnectors';
import CsvUploader from '../../components/connectors/csvUpload';

const DataConnectorsPage: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedConnector, setSelectedConnector] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();


    const dataConnectors = [
        { id: '1', name: 'CSV', color: '#4CAF50' },
        { id: '2', name: 'JSON', color: '#F5A623' },
        { id: '3', name: 'XML', color: '#1E90FF' },
        { id: '4', name: 'Excel (XLSX)', color: '#217346' },
        { id: '5', name: 'Microsoft SQL Server', color: '#CC2927' },
        { id: '6', name: 'MongoDB', color: '#4DB33D' },
        { id: '7', name: 'Amazon S3', color: '#FF9900' },
        { id: '8', name: 'Google Cloud Storage', color: '#4285F4' },
        { id: '9', name: 'Azure Blob Storage', color: '#0072C6' },
        { id: '10', name: 'Apache Hadoop', color: '#FFDC00' },
        { id: '11', name: 'Apache Hive', color: '#F6BE00' },
        { id: '12', name: 'Apache Spark', color: '#E25A1C' },
        { id: '13', name: 'MySQL', color: '#00758F' },
        { id: '14', name: 'PostgreSQL', color: '#336791' },
        { id: '15', name: 'SQLite', color: '#003B57' },
        { id: '16', name: 'Oracle Database', color: '#F80000' },
        { id: '17', name: 'Salesforce', color: '#00A1E0' },
        { id: '18', name: 'Google Analytics', color: '#F7931D' },
        { id: '19', name: 'Facebook Ads', color: '#4267B2' },
        { id: '20', name: 'Twitter', color: '#1DA1F2' },
        { id: '21', name: 'Snowflake', color: '#00A1E0' },
    ];

    const handleConnectorClick = (id: string) => {
        setSelectedConnector(id);
    };

    const goBack = () => {
        setSelectedConnector('');
    }

    const handleSnowflakeSubmit = async (config: SnowflakeConfig) => {
        setLoading(true);
        try {
            const response: any = await post('https://campaign-demo-g6lg7lulsq-uc.a.run.app/connect/', config);
            setLoading(false);
            setError(null);
            navigate('/view');
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
            setError('Failed to Connect');
        } finally {
            setLoading(false);
        }
    };

    const handleCsvUpload = (resp: string) => {
        setLoading(false);
        setError(null);
        goBack();
        if (resp === 'success') {
            navigate('/data');
        }
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
            {!selectedConnector && <DataConnectors connectors={dataConnectors} onConnectorClick={handleConnectorClick} />}
            {!!selectedConnector && <button onClick={goBack}>Back</button>}
            <br />
            <br />
            {selectedConnector === '1' && <CsvUploader onSubmit={handleCsvUpload} apiEndpoint={'https://magicbi-g6lg7lulsq-uc.a.run.app/upload-csv/'} />}
            {/* {selectedConnector === '21' && <SnowflakeConnector onSubmit={handleSnowflakeSubmit} />} */}
        </div>
    );
};

export default DataConnectorsPage;
