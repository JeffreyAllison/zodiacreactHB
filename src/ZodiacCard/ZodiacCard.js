import './ZodiacCard.css';

export default function ZodiacCard ({ name, dates }) {
  {/* in this component,  use the `name` and `dates` props to render the name and dates of the sign, as well as load the correct image  from the public directory */ }
  return (
    <div className='zodiac-card'>
      <img src={`/images/${name}.png`} />
      <h3 className='name'>{name}</h3>
      <h3>{dates}</h3>
    </div>
  );
}
