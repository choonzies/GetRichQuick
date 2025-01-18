import React from 'react';
import './Button.css';  // Import the CSS for the button

function Button({ text, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {text}
      </button>
  );
}

export default Button;
