import React from "react";
import { CARD_STYLE } from "./constants";
import { Card, Divider, Typography } from "@mui/material";

const MyCard = ({ name }) => {
  return (
    <Card style={CARD_STYLE}>
      <Typography>{name}</Typography>
      <Divider />
    </Card>
  );
};

export default MyCard;
