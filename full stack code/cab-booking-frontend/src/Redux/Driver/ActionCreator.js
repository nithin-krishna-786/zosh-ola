import { COMPLETED_RIDE_SUCCESS, GET_ALLOCATED_RIDE_FAILURE, GET_ALLOCATED_RIDE_REQUEST, GET_ALLOCATED_RIDE_SUCCESS, GET_CURRENT_RIDE_FAILURE, GET_CURRENT_RIDE_REQUEST, GET_CURRENT_RIDE_SUCCESS } from "./ActionType";

export const getCurrentRideRequest = () => ({
    type: GET_CURRENT_RIDE_REQUEST,
  });
  
  export const getCurrentRideSuccess = (ride) => ({
    type: GET_CURRENT_RIDE_SUCCESS,
    payload: ride,
  });
  
  export const getCurrentRideFailure = (error) => ({
    type: GET_CURRENT_RIDE_FAILURE,
    payload: error,
  });
  

  // allocated ride
  export const allocatedRideRequest = () => ({
    type: GET_ALLOCATED_RIDE_REQUEST,
  });
  
  export const allocatedRideSuccess = (ride) => ({
    type: GET_ALLOCATED_RIDE_SUCCESS,
    payload: ride,
  });
  
  export const allocatedRideFailure = (error) => ({
    type: GET_ALLOCATED_RIDE_FAILURE,
    payload: error,
  });


  // completed ride

  export const completedRideSuccess=(data)=>({type:COMPLETED_RIDE_SUCCESS,payload:data});