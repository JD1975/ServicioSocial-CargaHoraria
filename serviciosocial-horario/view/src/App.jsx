import React from 'react';
import { DndContext } from '@dnd-kit/core';
import Droppable from './functions/droppable.jsx';

export default function App() {
  return (
    <DndContext>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Droppable id="droppable-1">Arrastra aquí el archivo 1</Droppable>
        <Droppable id="droppable-2">Arrastra aquí el archivo 2</Droppable>
      </div>
    </DndContext>
  );
}
