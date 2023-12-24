import './App.css'
import GlowingCursor from './components/fun/GlowingCursor';
import { useOutlet } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './components/Home';

const App = () => {
  const outlet = useOutlet();

  return (
    <div>
      <GlowingCursor />
      <Navbar />
      <div>
        {outlet || <Home />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
