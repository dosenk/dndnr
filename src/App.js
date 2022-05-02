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
import CardSystemInfo from "./Cards/CardSystemInfo/CardSystemInfo";
import CardMemory from "./Cards/CardMemory/CardMemory";
import CardWiFi from "./Cards/CardWiFI/CardWiFi";
import CardChartInfo from "./Cards/CardChartInfo/CardChartInfo";
import CardTableInterfaces from "./Cards/CardTableInterfaces/CardTableInterfaces";
import CardChartNetwork from "./Cards/CardChartNetwork/CardChartNetwork";
import { SortableItem } from "./SortableItem/SortableItem";

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      item: <CardSystemInfo id={1} />,
    },
    {
      id: 2,
      item: <CardMemory id={2} />,
    },
    {
      id: 3,
      item: <CardWiFi id={3} />,
    },
    {
      id: 4,
      item: <CardChartInfo id={4} />,
    },
    {
      id: 5,
      item: <CardTableInterfaces id={5} />,
    },
    {
      id: 6,
      item: <CardChartNetwork id={6} />,
    },
  ]);
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) return;
    setCards((items) => {
      const oldIndex = active.data.current.sortable.index;
      const newIndex = over.data.current.sortable.index;
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  return (
    <div className="App">
      <Grid container>
        <DndContext
          onDragEnd={handleDragEnd}
          // collisionDetection={closestCenter}
        >
          <SortableContext items={cards}>
            {cards.map((card) => {
              return card.item;
            })}
          </SortableContext>
        </DndContext>
      </Grid>
    </div>
  );
}

export default App;
