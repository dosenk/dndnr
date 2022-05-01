import React from "react";
import { GRID_STYLE } from "../constants";
import MyCard from "../MyCard";
import { Grid } from "@mui/material";

const CardTableInterfaces = () => {
  return (
    <Grid item lg={6} md={6} xs={12} style={GRID_STYLE}>
      <MyCard name="Table" />
    </Grid>
  );
};

export default CardTableInterfaces;
