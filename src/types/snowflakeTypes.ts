export interface SnowflakeConnection {
    session_id: string;
    user: string;
    password: string;
    account: string;
    warehouse: string;
    database: string;
    schema_str: string;
}

export interface SnowflakeData {
    data: SnowflakeRow[];
}

interface SnowflakeRow {
    [columnName: string]: any;
}