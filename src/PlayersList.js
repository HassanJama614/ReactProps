
import React from 'react';
import Player from './Player'; 
import playersData from './players'; 


const listStyle = {
  display: 'flex',
  flexWrap: 'wrap', 
  justifyContent: 'center', 
  padding: '20px',
  gap: '10px' 
};

const PlayersList = () => {
  return (
    <div style={listStyle}>
      {playersData.map((player, index) => (
        <Player
          key={index} 
          {...player} 
        />
      ))}
    </div>
  );
};

export default PlayersList;