import './App.css';
{/* import the zodiac array */ }
import ZodiacCard from './ZodiacCard/ZodiacCard.js';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import { zodiacs } from './data.js';

function App () {
  return (
    <div className="App">
      {/* import and use the Header. Main, and Footer components here */}
      <Header name="Jeff" />
      {/* the Header component needs a string passed in as the `name` prop */}
      <main>
        <ZodiacCard zodiacs={zodiacs} />
      </main>
      <Footer year="2022" />
      {/* the Footer component needs a year passed in as the `year` prop */}

      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
    </div>
  );
}

export default App;
