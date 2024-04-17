import { GET_COMPLETED_RIDES_FAILURE, GET_COMPLETED_RIDES_REQUEST, GET_COMPLETED_RIDES_SUCCESS } from "./ActionType";

const initialState = {
    completedRides: [],
    loading: false,
    error: null
  };
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COMPLETED_RIDES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case GET_COMPLETED_RIDES_SUCCESS:
        return {
          ...state,
          completedRides: action.payload,
          loading: false,
          error: null
        };
      case GET_COMPLETED_RIDES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default usersReducer;
  