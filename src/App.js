import "./App.css";
import { Card, Divider, Grid, Typography } from "@mui/material";
import { CARD_STYLE, CARD_STYLE_SMALL, GRID_STYLE } from "./constants";
import { DndContext } from "@dnd-kit/core";
import MyCard from "./MyCard";

function App() {
  // const []
  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log(active, over);
  };

  return (
    <div className="App">
      <Grid container>
        <DndContext onDragEnd={handleDragEnd}>
          <Grid item lg={3} md={6} xs={12} style={GRID_STYLE}>
            <MyCard name="System Info" />
          </Grid>

          <Grid item lg={3} md={6} xs={12} style={GRID_STYLE}>
            <MyCard name="Memory" />
          </Grid>

          <Grid item lg={3} md={6} xs={12} style={GRID_STYLE}>
            <MyCard name="WiFi" />
          </Grid>

          <Grid item lg={6} md={6} xs={12} style={GRID_STYLE}>
            <MyCard name="ChartInfo" />
          </Grid>

          <Grid item lg={6} md={6} xs={12} style={GRID_STYLE}>
            <MyCard name="Table" />
          </Grid>

          <Grid item lg={6} md={6} xs={12} style={GRID_STYLE}>
            <MyCard name="ChartNetwork" />
          </Grid>
        </DndContext>
      </Grid>
    </div>
  );
}

export default App;
