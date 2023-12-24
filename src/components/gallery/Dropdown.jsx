import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Dropdown({ categories, setCurCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (category) => {
    setCurCategory(category);
    setIsOpen(false);
  };

  return (
      <div className="flex justify-center flex-col">
          <button className="text-xs font-bold pb-3 m-4" onClick={handleOpen}>
            Filter <div className="animate-bounce">{isOpen ? ('↑') : ('↓')}</div>
            </button>
          {isOpen && (
            <div className="z-10 text-white font-extrabold">
            <ul className="flex flex-col items-center">
              {categories.map(({ display, value }, index) => (
                <li className="hover:underline text-4xl" key={index} onClick={() => handleSelect(value)}>
                  {display}
                </li>
              ))}
            </ul>
            </div>
          )}
      </div>
  );
}

Dropdown.propTypes = {
  categories: PropTypes.array.isRequired,
  setCurCategory: PropTypes.func.isRequired,
};