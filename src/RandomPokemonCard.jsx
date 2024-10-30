import React, { useState } from "react";
import "./RandomPokemonCard.css";
export default function RandomPokemonCard() {
  const num = Math.floor(Math.random() * 151) + 1;
  const myurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="background">
      <div className="table">
        <div className={`pokemon ${isFlipped ? "flipped" : ""}`}>
          <div className="card-front">
            <img src={myurl} alt="" />
            <h2>Pokemon </h2>
            <h2> #{num}</h2>
          </div>
          <div className="card-back"></div>
        </div>
        <button onClick={handleFlip}>抽卡</button>
      </div>
    </div>
  );
}
