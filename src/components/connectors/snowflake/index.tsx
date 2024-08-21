import React, { useState } from 'react';

import './styles.css';

interface SnowflakeConnectorProps {
    onSubmit: (config: SnowflakeConfig) => void;
}

export interface SnowflakeConfig {
    session_id: '007',
    user: string;
    password: string;
    account: string;
    warehouse: string;
    database: string;
    schema_str: string;
}

const SnowflakeConnector: React.FC<SnowflakeConnectorProps> = ({ onSubmit }) => {
    const [config, setConfig] = useState<SnowflakeConfig>({
        session_id: '007',
        account: '',
        user: '',
        password: '',
        warehouse: '',
        database: '',
        schema_str: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setConfig((prevConfig) => ({
            ...prevConfig,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(config);
    };

    return (
        <div className="snowflake-connector">
            <h2>Snowflake Connector</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="account">Account:</label>
                    <input type="text" id="account" name="account" value={config.account} onChange={handleChange} required />
                </div> 
                <div>
                    <label htmlFor="user">Username:</label>
                    <input type="text" id="user" name="user" value={config.user} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={config.password} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="warehouse">Warehouse:</label>
                    <input type="text" id="warehouse" name="warehouse" value={config.warehouse} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="database">Database:</label>
                    <input type="text" id="database" name="database" value={config.database} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="schema_str">Schema String:</label>
                    <input type="text" id="schema_str" name="schema_str" value={config.schema_str} onChange={handleChange} required />
                </div>
                <button type="submit">Connect</button>
            </form>
        </div>
    );
};

export default SnowflakeConnector;
