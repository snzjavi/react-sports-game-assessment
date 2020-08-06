import React from 'react';
import './App.css';
import Game from './components/game/Game';



function App() {

  const Tropics = {
    name: 'Flint Tropics',
    logoSrc: 'assets/FlintTropics.png'
  }

  const Colonels = {
    name: 'Kentucky Colonels',
    logoSrc: 'assets/KentuckyColonelslogo.jpg'
  }

  const Spirits = {
    name: 'Spirits of St. Louis',
    logoSrc: 'assets/spirits.png'
  }

  const Stars = {
    name: 'Utah Stars',
    logoSrc: 'assets/utahStars.png'
  }

  return (
    <div className="App">
      <Game
        venue="Louisville Gardens"
        homeTeam={Tropics}
        visitingTeam={Colonels}
      />
      <Game
        venue="The Salt Palace"
        homeTeam={Spirits}
        visitingTeam={Stars}
      />
    </div>
  );
}

export default App;
