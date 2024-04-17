import { COMPLETED_RIDE_SUCCESS, GET_ALLOCATED_RIDE_FAILURE, GET_ALLOCATED_RIDE_REQUEST, GET_ALLOCATED_RIDE_SUCCESS, GET_CURRENT_RIDE_FAILURE, GET_CURRENT_RIDE_REQUEST, GET_CURRENT_RIDE_SUCCESS } from "./ActionType";


const initialState = {
  ride: null,
  loading: false,
  error: null,
  allocated:[],
  current:null,
};

const driverReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_RIDE_REQUEST:
    case GET_ALLOCATED_RIDE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CURRENT_RIDE_SUCCESS:
      return {
        ...state,
        loading: false,
        currentRide: action.payload,
      };
      case GET_ALLOCATED_RIDE_SUCCESS:
       return { ...state,
        loading: false,
        allocated: action.payload,
      };
    case GET_CURRENT_RIDE_FAILURE:
      case GET_ALLOCATED_RIDE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case COMPLETED_RIDE_SUCCESS:
        return {
          ...state,
          loading: false,
          completedRides: action.payload,
        };
    default:
      return state;
  }
};

export default driverReducer;
