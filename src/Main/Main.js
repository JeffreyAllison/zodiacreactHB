import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';

export default function Main ({ zodiacs }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>

      {zodiacs.map((zodiac) => (
        <ZodiacCard
          key={zodiac.name}
          name={zodiac.name}
          dates={zodiac.dates} />

      ))}


    </main>
  );
}

{/* import the ZodiacCard component */ }
{/* get the zodiac array from props */ }
{/* for each item in the `zodiacs` array props, render a ZodiacCard component, passing in the name and the dates as props to the ZodiacCard component */ }
{/* remember that when you map over an array and render out a list, each item in the list needs a unique 'key' prop */ }
