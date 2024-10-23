import React from 'react';
import '../assets/Home.css'; // Ensure to create a Home.css file for styling

const Home: React.FC = () => {
  return (
    <div className="home">
      <img src="logo.png" alt="Logo" className="logo" />
      <h1>Welcome to Infinity Library</h1>
    </div>
  );
};

export default Home;
