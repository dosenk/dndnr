import React from "react";
import { GRID_STYLE } from "../constants";
import MyCard from "../MyCard";
import { Grid } from "@mui/material";

const CardChartInfo = () => {
  return (
    <Grid item lg={6} md={6} xs={12} style={GRID_STYLE}>
      <MyCard name="ChartInfo" />
    </Grid>
  );
};

export default CardChartInfo;
