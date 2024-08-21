// import { SnowflakeConnection, SnowflakeData } from "../../types/snowflakeTypes";

// export enum SnowflakeActionTypes {
//     FETCH_SNOWFLAKE_CONNECTION_REQUEST = 'FETCH_SNOWFLAKE_CONNECTION_REQUEST',
//     FETCH_SNOWFLAKE_CONNECTION_SUCCESS = 'FETCH_SNOWFLAKE_CONNECTION_SUCCESS',
//     FETCH_SNOWFLAKE_CONNECTION_FAILURE = 'FETCH_SNOWFLAKE_CONNECTION_FAILURE',
//     FETCH_SNOWFLAKE_CONNECTIONS_REQUEST = 'FETCH_SNOWFLAKE_CONNECTIONS_REQUEST',
//     FETCH_SNOWFLAKE_CONNECTIONS_SUCCESS = 'FETCH_SNOWFLAKE_CONNECTIONS_SUCCESS',
//     FETCH_SNOWFLAKE_CONNECTIONS_FAILURE = 'FETCH_SNOWFLAKE_CONNECTIONS_FAILURE',
//     ADD_SNOWFLAKE_CONNECTION_REQUEST = 'ADD_SNOWFLAKE_CONNECTION_REQUEST',
//     ADD_SNOWFLAKE_CONNECTION_SUCCESS = 'ADD_SNOWFLAKE_CONNECTION_SUCCESS',
//     ADD_SNOWFLAKE_CONNECTION_FAILURE = 'ADD_SNOWFLAKE_CONNECTION_FAILURE',
//     UPDATE_SNOWFLAKE_CONNECTION_REQUEST = 'UPDATE_SNOWFLAKE_CONNECTION_REQUEST',
//     UPDATE_SNOWFLAKE_CONNECTION_SUCCESS = 'UPDATE_SNOWFLAKE_CONNECTION_SUCCESS',
//     UPDATE_SNOWFLAKE_CONNECTION_FAILURE = 'UPDATE_SNOWFLAKE_CONNECTION_FAILURE',
//     DELETE_SNOWFLAKE_CONNECTION_REQUEST = 'DELETE_SNOWFLAKE_CONNECTION_REQUEST',
//     DELETE_SNOWFLAKE_CONNECTION_SUCCESS = 'DELETE_SNOWFLAKE_CONNECTION_SUCCESS',
//     DELETE_SNOWFLAKE_CONNECTION_FAILURE = 'DELETE_SNOWFLAKE_CONNECTION_FAILURE',
//     FETCH_SNOWFLAKE_DATA_REQUEST = 'FETCH_SNOWFLAKE_DATA_REQUEST',
//     FETCH_SNOWFLAKE_DATA_SUCCESS = 'FETCH_SNOWFLAKE_DATA_SUCCESS',
//     FETCH_SNOWFLAKE_DATA_FAILURE = 'FETCH_SNOWFLAKE_DATA_FAILURE',
//     UPDATE_SNOWFLAKE_DATA_REQUEST = 'UPDATE_SNOWFLAKE_DATA_REQUEST',
//     UPDATE_SNOWFLAKE_DATA_SUCCESS = 'UPDATE_SNOWFLAKE_DATA_SUCCESS',
//     UPDATE_SNOWFLAKE_DATA_FAILURE = 'UPDATE_SNOWFLAKE_DATA_FAILURE',
// };

// export const fetchSnowflakeConnectionRequest = () => ({
//     type: SnowflakeActionTypes.FETCH_SNOWFLAKE_CONNECTION_REQUEST,
// });

// export const fetchSnowflakeConnectionSuccess = (snowflakeConnection: SnowflakeConnection) => ({
//     type: SnowflakeActionTypes.FETCH_SNOWFLAKE_CONNECTION_SUCCESS,
//     payload: snowflakeConnection,
// });

// export const fetchSnowflakeConnectionFailure = (error: string) => ({
//     type: SnowflakeActionTypes.FETCH_SNOWFLAKE_CONNECTION_FAILURE,
//     payload: error,
// });

// export const fetchSnowflakeConnectionsRequest = () => ({
//     type: SnowflakeActionTypes.FETCH_SNOWFLAKE_CONNECTIONS_REQUEST,
// });

// export const fetchSnowflakeConnectionsSuccess = (snowflakeConnections: SnowflakeConnection[]) => ({
//     type: SnowflakeActionTypes.FETCH_SNOWFLAKE_CONNECTIONS_SUCCESS,
//     payload: snowflakeConnections,
// });

// export const fetchSnowflakeConnectionsFailure = (error: string) => ({
//     type: SnowflakeActionTypes.FETCH_SNOWFLAKE_CONNECTIONS_FAILURE,
//     payload: error,
// });

// export const addSnowflakeConnectionRequest = (snowflakeConnection: SnowflakeConnection) => ({
//     type: SnowflakeActionTypes.ADD_SNOWFLAKE_CONNECTION_REQUEST,
//     payload: snowflakeConnection,
// });

// export const addSnowflakeConnectionSuccess = (snowflakeConnection: SnowflakeConnection) => ({
//     type: SnowflakeActionTypes.ADD_SNOWFLAKE_CONNECTION_SUCCESS,
//     payload: snowflakeConnection,
// });

// export const addSnowflakeConnectionFailure = (error: string) => ({
//     type: SnowflakeActionTypes.ADD_SNOWFLAKE_CONNECTION_FAILURE,
//     payload: error,
// });

// export const upadateSnowflakeConnectionRequest = (snowflakeConnection: SnowflakeConnection) => ({
//     type: SnowflakeActionTypes.UPDATE_SNOWFLAKE_CONNECTION_REQUEST,
//     payload: snowflakeConnection,
// });

// export const upadateSnowflakeConnectionSuccess = (snowflakeConnection: SnowflakeConnection) => ({
//     type: SnowflakeActionTypes.UPDATE_SNOWFLAKE_CONNECTION_SUCCESS,
//     payload: snowflakeConnection,
// });

// export const upadateSnowflakeConnectionFailure = (error: string) => ({
//     type: SnowflakeActionTypes.UPDATE_SNOWFLAKE_CONNECTION_FAILURE,
//     payload: error,
// });

// export const deleteSnowflakeConnectionsRequest = (id: string) => ({
//     type: SnowflakeActionTypes.DELETE_SNOWFLAKE_CONNECTION_REQUEST,
//     payload: id,
// });

// export const deleteSnowflakeConnectionsSuccess = (isSuccess: boolean) => ({
//     type: SnowflakeActionTypes.DELETE_SNOWFLAKE_CONNECTION_SUCCESS,
//     payload: isSuccess,
// });

// export const deleteSnowflakeConnectionsFailure = (error: string) => ({
//     type: SnowflakeActionTypes.DELETE_SNOWFLAKE_CONNECTION_FAILURE,
//     payload: error,
// });

// export const fetchSnowflakeDataRequest = () => ({
//     type: SnowflakeActionTypes.FETCH_SNOWFLAKE_DATA_REQUEST,
// });

// export const fetchSnowflakeDataSuccess = (snowflakeData: SnowflakeData) => ({
//     type: SnowflakeActionTypes.FETCH_SNOWFLAKE_DATA_SUCCESS,
//     payload: snowflakeData,
// });

// export const fetchSnowflakeDataFailure = (error: string) => ({
//     type: SnowflakeActionTypes.FETCH_SNOWFLAKE_DATA_FAILURE,
//     payload: error,
// });

// export const updateSnowflakeDataRequest = (snowflakeData: SnowflakeData) => ({
//     type: SnowflakeActionTypes.FETCH_SNOWFLAKE_DATA_REQUEST,
//     payload: snowflakeData,
// });

// export const updateSnowflakeDataSuccess = (snowflakeData: SnowflakeData) => ({
//     type: SnowflakeActionTypes.FETCH_SNOWFLAKE_DATA_SUCCESS,
//     payload: snowflakeData,
// });

// export const updateSnowflakeDataFailure = (error: string) => ({
//     type: SnowflakeActionTypes.FETCH_SNOWFLAKE_DATA_FAILURE,
//     payload: error,
// });


// export type SnowflakeAction =
//     | fetchSnowflakeConnectionRequest
//     | fetchSnowflakeConnectionSuccess
//     | fetchSnowflakeConnectionFailure
//     | fetchSnowflakeConnectionsRequest
//     | fetchSnowflakeConnectionsSuccess
//     | fetchSnowflakeConnectionsFailure
//     | addSnowflakeConnectionRequest
//     | addSnowflakeConnectionSuccess
//     | addSnowflakeConnectionFailure
//     | upadateSnowflakeConnectionRequest
//     | upadateSnowflakeConnectionSuccess
//     | upadateSnowflakeConnectionFailure
//     | deleteSnowflakeConnectionsRequest
//     | deleteSnowflakeConnectionsSuccess
//     | deleteSnowflakeConnectionsFailure
//     | fetchSnowflakeDataRequest
//     | fetchSnowflakeDataSuccess
//     | fetchSnowflakeDataFailure
//     | updateSnowflakeDataRequest
//     | updateSnowflakeDataSuccess
//     | updateSnowflakeDataFailure;


export default {};