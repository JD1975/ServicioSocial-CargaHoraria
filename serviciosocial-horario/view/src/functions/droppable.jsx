import React from 'react';
import { useDroppable } from '@dnd-kit/core';

function Droppable({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style = {
    width: 200,
    height: 200,
    border: '2px dashed black',
    backgroundColor: isOver ? 'lightgreen' : 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

export default Droppable;