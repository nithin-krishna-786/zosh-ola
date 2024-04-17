// reducer.js

import {
  REQUEST_RIDE,
  REQUEST_RIDE_SUCCESS,
  REQUEST_RIDE_FAILURE,
  SEARCH_SUCCESS,
  SEARCH_REQUEST,
  SEARCH_FAILURE,
  FIND_RIDE_BY_ID_SUCCESS,
  FIND_RIDE_BY_ID,
  FIND_RIDE_BY_ID_FAILURE,
  ACCEPT_RIDE,
  ACCEPT_RIDE_SUCCESS,
  ACCEPT_RIDE_FAILURE,
  DECLINE_RIDE_SUCCESS,
  DECLINE_RIDE_FAILURE,
  DECLINE_RIDE,
  START_RIDE,
  START_RIDE_SUCCESS,
  START_RIDE_FAILURE,
  CURRENT_RIDE,
  CURRENT_RIDE_SUCCESS,
  CURRENT_RIDE_FAILURE,
  FINISH_RIDE_SUCCESS,
} from "./ActionType";

const initialState = {
  loading: false,
  ride: null,
  error: null,
  results: [],
};

const rideReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RIDE:
      return {
        ...state,
        loading: true,
        ride: null,
        error: null,
      };
    case REQUEST_RIDE_SUCCESS:
      return {
        ...state,
        loading: false,
        ride: action.payload,
        error: null,
      };
    case REQUEST_RIDE_FAILURE:
      return {
        ...state,
        loading: false,
        ride: null,
        error: action.payload,
      };

    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
        error: null,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        results: [],
        error: action.payload,
      };
    case FIND_RIDE_BY_ID:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_RIDE_BY_ID_SUCCESS:
      return {
        ...state,
        rideDetails: action.payload,
        loading: false,
        error: null,
      };
    case FIND_RIDE_BY_ID_FAILURE:
      return {
        ...state,
        ride: null,
        loading: false,
        error: action.payload,
      };
    case ACCEPT_RIDE:
      return { ...state, acceptingRide: true, error: null };
    case ACCEPT_RIDE_SUCCESS:
      return { ...state, acceptingRide: false, error: null };
    case ACCEPT_RIDE_FAILURE:
      return { ...state, acceptingRide: false, error: action.payload.error };
    case DECLINE_RIDE:
      return { ...state, decliningRide: true, error: null };
    case DECLINE_RIDE_SUCCESS:
      return { ...state, decliningRide: false, error: null };
    case DECLINE_RIDE_FAILURE:
      return { ...state, decliningRide: false, error: action.payload.error };
    case START_RIDE:
      return { ...state, startingRide: true, error: null };
    case START_RIDE_SUCCESS:
      return { ...state, startRide: action.payload, error: null };
    case START_RIDE_FAILURE:
      return { ...state, startingRide: false, error: action.payload.error };
    case CURRENT_RIDE:
      return { ...state, loading: true, error: null };
    case CURRENT_RIDE_SUCCESS:
      return {
        ...state,
        currentRide: action.payload,
        error: null,
        loading: false,
      };
    case CURRENT_RIDE_FAILURE:
      return {
        ...state,
        currentRide: null,
        error: action.payload.error,
        loading: false,
      };
      case FINISH_RIDE_SUCCESS:
      return {
        ...state,
        finisheRide: action.payload,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default rideReducer;
