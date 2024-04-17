import {
  FIND_RIDE_BY_ID,
  FIND_RIDE_BY_ID_SUCCESS,
  FIND_RIDE_BY_ID_FAILURE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  START_RIDE,
  START_RIDE_FAILURE,
  DECLINE_RIDE_FAILURE,
  DECLINE_RIDE_SUCCESS,
  DECLINE_RIDE,
  ACCEPT_RIDE_FAILURE,
  ACCEPT_RIDE_SUCCESS,
  ACCEPT_RIDE,
  START_RIDE_SUCCESS,
  CURRENT_RIDE,
  CURRENT_RIDE_SUCCESS,
  CURRENT_RIDE_FAILURE,
  FINISH_RIDE_SUCCESS,
} from './ActionType';

export const searchRequest = () => ({
    type: SEARCH_REQUEST,
  });
  
  export const searchSuccess = (results) => ({
    type: SEARCH_SUCCESS,
    payload: results,
  });
  
  export const searchFailure = (error) => ({
    type: SEARCH_FAILURE,
    payload: error,
  });


  // actions.js


  
  export const findRideByIdRequest = (id) => {
    return {
      type: FIND_RIDE_BY_ID,
      payload: id
    };
  };
  
  export const findRideByIdSuccess = (ride) => {
    return {
      type: FIND_RIDE_BY_ID_SUCCESS,
      payload: ride
    };
  };
  
  export const findRideByIdFailure = (error) => {
    return {
      type: FIND_RIDE_BY_ID_FAILURE,
      payload: error
    };
  };
  

  // Action creators for accepting a ride
export const acceptRide = (rideId) => ({
  type: ACCEPT_RIDE,
  payload: { rideId }
});

export const acceptRideSuccess = (data) => ({
  type: ACCEPT_RIDE_SUCCESS,
  payload:data
});

export const acceptRideFailure = (error) => ({
  type: ACCEPT_RIDE_FAILURE,
  payload: { error }
});

// Action creators for declining a ride
export const declineRide = (rideId) => ({
  type: DECLINE_RIDE,
  payload: { rideId }
});

export const declineRideSuccess = (data) => ({
  type: DECLINE_RIDE_SUCCESS,
  payload:data
});

export const declineRideFailure = (error) => ({
  type: DECLINE_RIDE_FAILURE,
  payload: { error }
});

// Action creators for starting a ride
export const startRide = (rideId) => ({
  type: START_RIDE,
  payload: { rideId }
});

export const startRideSuccess = (data) => ({
  type: START_RIDE_SUCCESS,
  payload:data
});

export const startRideFailure = (error) => ({
  type: START_RIDE_FAILURE,
  payload: { error }
});

// current ride
export const currentRide = () => ({
  type: CURRENT_RIDE,
});

export const currentRideSuccess = (data) => ({
  type: CURRENT_RIDE_SUCCESS,
  payload:data
});

export const currentRideFailure = (error) => ({
  type: CURRENT_RIDE_FAILURE,
  payload: { error }
});


// COMPLETE RIDE
export const finishRideSuccess=(data)=>({type:FINISH_RIDE_SUCCESS,payload:data})