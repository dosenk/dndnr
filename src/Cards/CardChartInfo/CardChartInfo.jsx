import React from "react";
import { GRID_STYLE } from "../../constants";
import MyCard from "../../MyCard";
import { Grid } from "@mui/material";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const CardChartInfo = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <Grid
      item
      lg={6}
      md={6}
      xs={12}
      style={{ ...GRID_STYLE, ...style }}
      ref={setNodeRef}
      {...attributes}
    >
      <MyCard name="ChartInfo" {...listeners} />
    </Grid>
  );
};

export default CardChartInfo;
