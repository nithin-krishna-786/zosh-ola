import { api } from "@/config/api";
import {
  GET_COMPLETED_RIDES_FAILURE,
  GET_COMPLETED_RIDES_REQUEST,
  GET_COMPLETED_RIDES_SUCCESS,
} from "./ActionType";

export const getCompletedRides = () => {
  return async (dispatch) => {
    dispatch({ type: GET_COMPLETED_RIDES_REQUEST });

    try {
      const { data } = await api.get("/users/rides/completed");

      console.log("users completed rides",data)

      dispatch({
        type: GET_COMPLETED_RIDES_SUCCESS,
        payload: data,
      });

    } catch (error) {
      dispatch({
        type: GET_COMPLETED_RIDES_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const generatePaymentLink = (rideId) => {
  return async (dispatch) => {
    // dispatch({ type: GET_COMPLETED_RIDES_REQUEST });

    try {
      const { data } = await api.post(`/payments/${+rideId}`);

      console.log("payment",data)

      // dispatch({
      //   type: GET_COMPLETED_RIDES_SUCCESS,
      //   payload: data,
      // });

      if(data.paymentLinkUrl){
        window.location.href=data.paymentLinkUrl;
      }

    } catch (error) {
      // dispatch({
      //   type: GET_COMPLETED_RIDES_FAILURE,
      //   payload: error.message,
      // });
      console.log("error ",error)
    }
  };
};
