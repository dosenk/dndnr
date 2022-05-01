import "./App.css";
import { Card, Divider, Grid, Typography } from "@mui/material";
import { CARD_STYLE, CARD_STYLE_SMALL, GRID_STYLE } from "./constants";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import MyCard from "./MyCard";
import { useState } from "react";
import CardSystemInfo from "./CardSystemInfo/CardSystemInfo";
import CardMemory from "./CardMemory/CardMemory";
import CardWiFi from "./CardWiFI/CardWiFi";
import CardChartInfo from "./CardChartInfo/CardChartInfo";
import CardTableInterfaces from "./CardTableInterfaces/CardTableInterfaces";
import CardChartNetwork from "./CardChartNetwork/CardChartNetwork";

function App() {
  const [cards, setCards] = useState([]);
  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log(active, over);
  };

  return (
    <div className="App">
      <Grid container>
        <DndContext onDragEnd={handleDragEnd}>
          <CardSystemInfo />
          <CardMemory />
          <CardWiFi />
          <CardChartInfo />
          <CardTableInterfaces />
          <CardChartNetwork />
        </DndContext>
      </Grid>
    </div>
  );
}

export default App;
