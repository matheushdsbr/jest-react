import { useState } from 'react';

const Dropdown = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (option) => {
    onSelect(option);
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{title}</button>

      {isOpen && (
        <ul role="menu">
          {options.map((option) => (
            <li
              key={option}
              role="menuitem"
              onClick={() => handleSelection(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown;
