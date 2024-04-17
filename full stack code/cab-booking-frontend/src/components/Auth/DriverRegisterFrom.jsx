"use client";

import React, { useEffect, useState } from "react";
import { TextField, Button, Container, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import WestIcon from "@mui/icons-material/West";
import { useDispatch, useSelector } from "react-redux";
import { getDriver, getUser, registerDriver } from "@/Redux/Auth/Action";

const DriverRegisterForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    latitude: 0,
    longitude: 0,
  });

  const [licenseData, setLicenseData] = useState({
    licenseNumber: "",
    licenseState: "",
    licenseExpirationDate: "",
  });

  const [vehicleData, setVehicleData] = useState({
    make: "",
    model: "",
    year: 0,
    licensePlate: "",
    color: "",
    capacity: 0,
  });

  const handleVehicleData = (event) => {
    const { name, value } = event.target;
    setVehicleData((prev) => ({ ...prev, [name]: value }));
  };
  const handleLicenceData = (event) => {
    const { name, value } = event.target;
    setLicenseData((prev) => ({ ...prev, [name]: value }));
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ ...formData, vehicle: vehicleData, license: licenseData });
    const driverData={ ...formData, vehicle: vehicleData, license: licenseData }
    dispatch(registerDriver(driverData))
  };

  const goBack = () => {
    router.back();
  };
  useEffect(() => {
    console.log("jwt --- ",jwt)
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  useEffect(() => {
    if (auth.user) {
      router.push("/driver/dashbord")
    }
  }, [auth.user]);
  return (
    <Container className="h-screen">
      <div className="flex items-center py-5">
        <WestIcon onClick={goBack} className="cursor-pointer" />
        <p className="text-center w-full font-semibold text-2xl ">
          Driver Registration
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              type="password"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Latitude"
              name="latitude"
              type="number"
              value={formData.latitude}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Longitude"
              name="longitude"
              type="number"
              value={formData.longitude}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="License Number"
              name="licenseNumber"
              value={licenseData.licenseNumber}
              onChange={handleLicenceData}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="License State"
              name="licenseState"
              value={licenseData.licenseState}
              onChange={handleLicenceData}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="License Expiration Date"
              name="licenseExpirationDate"
              value={licenseData.licenseExpirationDate}
              onChange={handleLicenceData}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Vehicle Make"
              name="make"
              value={vehicleData.make}
              onChange={handleVehicleData}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Vehicle Model"
              name="model"
              value={vehicleData.model}
              onChange={handleVehicleData}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Vehicle Year"
              name="year"
              type="number"
              value={vehicleData.year}
              onChange={handleVehicleData}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="License Plate"
              name="licensePlate"
              value={vehicleData.licensePlate}
              onChange={handleVehicleData}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Vehicle Color"
              name="color"
              value={vehicleData.color}
              onChange={handleVehicleData}
              required
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className="w-full my-3"
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ padding: ".9rem 0rem" }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default DriverRegisterForm;
