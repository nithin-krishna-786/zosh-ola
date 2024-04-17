"use client";
import React, { useEffect, useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import WestIcon from "@mui/icons-material/West";
import { useDispatch, useSelector } from "react-redux";
import { getUser, login } from "@/Redux/Auth/Action";

const Login = () => {
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSigninData((preValue) => ({ ...preValue, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("signin data - - - ", signinData);
    dispatch(login(signinData));
  };

  useEffect(() => {
    console.log("jwt --- ", jwt);
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  useEffect(() => {
    if (auth.user?.fullName || auth.user?.name) {
      if (auth.user.role === "DRIVER") {
        router.push("/driver/dashbord");
      } else router.push("/");
    }
  }, [auth.user]);

  return (
    <div className="py-10">
      <div className="flex items-center px-2 lg:px-5 py-2">
        <WestIcon onClick={goBack} className="cursor-pointer" />
        {/* <img className="text-center w-full font-bold text-xl">Login</img> */}
        <div className="w-full  flex justify-center">
          <img
            className="h-10"
            src="https://accounts.olacabs.com/en-in/images/ola-logo.png"
            alt=""
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="z-50 h-full p-5">
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          onChange={handleChange}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          name="password"
        />

        <Button
          sx={{ padding: ".9rem 0rem" }}
          variant="contained"
          className="z-10  w-full"
          type="submit"
          color="secondary"
        >
          Login
        </Button>
      </form>
      <div className="flex w-full justify-center">
        <p className="flex items-center mt-5 text-center">
          Don't Have Account Register ?
          <Button
            onClick={() => router.push("register")}
            className="ml-5"
            color="secondary"
          >
            Register
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Login;
