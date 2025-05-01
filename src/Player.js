
import React from 'react';
import Card from 'react-bootstrap/Card'; 


const cardStyle = {
  width: '18rem',
  margin: '1rem',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  borderRadius: '10px', 
};

const cardImageStyle = {
    objectFit: 'cover',
    height: '240px', 
    borderTopLeftRadius: '10px', 
    borderTopRightRadius: '10px' 
}

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} style={cardImageStyle} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Jersey #:</strong> {jerseyNumber}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};


Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/300x240.png?text=No+Image+Available", 
};

export default Player;