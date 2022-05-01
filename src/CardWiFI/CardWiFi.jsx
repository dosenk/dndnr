import React from "react";
import { GRID_STYLE } from "../constants";
import MyCard from "../MyCard";
import { Grid } from "@mui/material";

const CardWiFi = () => {
  return (
    <Grid item lg={3} md={6} xs={12} style={GRID_STYLE}>
      <MyCard name="WiFi" />
    </Grid>
  );
};

export default CardWiFi;
