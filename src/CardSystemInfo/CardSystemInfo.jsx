import React from "react";
import { GRID_STYLE } from "../constants";
import MyCard from "../MyCard";
import { Grid } from "@mui/material";

const CardSystemInfo = () => {
  return (
    <Grid item lg={3} md={6} xs={12} style={GRID_STYLE}>
      <MyCard name="System Info" />
    </Grid>
  );
};

export default CardSystemInfo;
