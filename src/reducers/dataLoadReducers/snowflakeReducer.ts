// // reducers/userReducer.ts
// import { SnowflakeAction, SnowflakeActionTypes } from '../../actions/dataLoadActions/snowflakeActions';
// import { SnowflakeConnection } from '../../types/snowflakeTypes';

// interface SnowflakeState {
//     SnowflakeConnections: SnowflakeConnection[];
//     loading: boolean;
//     error: string | null;
// }

// const initialState: SnowflakeState = {
//     SnowflakeConnections: [],
//     loading: false,
//     error: null,
// };

// export const SnowflakeReducer = (state = initialState, action: SnowflakeAction): SnowflakeState => {
//     switch (action.type) {
//         case SnowflakeActionTypes.FETCH_USERS_REQUEST:
//         case SnowflakeActionTypes.ADD_USER_REQUEST:
//         case SnowflakeActionTypes.UPDATE_USER_REQUEST:
//         case SnowflakeActionTypes.DELETE_USER_REQUEST:
//             return { ...state, loading: true, error: null };
//         case SnowflakeActionTypes.FETCH_USERS_SUCCESS:
//             return { ...state, loading: false, users: action.payload };
//         case SnowflakeActionTypes.FETCH_USERS_FAILURE:
//         case SnowflakeActionTypes.ADD_USER_FAILURE:
//         case SnowflakeActionTypes.UPDATE_USER_FAILURE:
//         case SnowflakeActionTypes.DELETE_USER_FAILURE:
//             return { ...state, loading: false, error: action.payload };
//         default:
//             return state;
//     }
// };
export default {};