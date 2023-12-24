import { useState } from 'react';
import { Link } from 'react-router-dom';
import ColorPicker from '../fun/ColorPicker';
import { Socials } from './Footer';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar z-50 fixed top-0 right-0">
      <div className="text-5xl font-extrabold fixed left-0 top-0 m-6">
        <Link to="/" relative="path">
          𓄼
        </Link>
        </div>
    {isOpen ? (
      <div className="navbar-menu">
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-0" onClick={toggleMenu}>
          <div className="text-4xl z-40 cursor-pointer absolute top-0 right-0 m-6">x</div>
          <div>
            <ul className="text-center flex-col text-white text-4xl font-bold flex md:flex-row">
              <li className="navbar-item p-3 hover:underline">
                <Link to="/about" relative="path">
                  ABOUT
                </Link>
              </li>
              {/* <li className="navbar-item p-3 hover:underline">
                <Link to="/work" relative="path">
                  WORK
                </Link>
              </li> */}
              <li className="navbar-item p-3">
                <div className="flex flex-row">
                  <Socials filterWhite={true} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ) : (
      <div className="text-4xl z-40 cursor-pointer absolute top-0 right-0 m-6" onClick={toggleMenu}>☰</div>
    )}
    <ColorPicker />
  </nav>
  );
}

export default Navbar;
