import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

// Button Style Array - Classes
const STYLES = ['btn_primary', 'btn_outline', 'btn_test'];

// Button Sizes - Classes
const SIZES = ['btn_medium', 'btn_large'];

// Button Properties 
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {

    // Button Style
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

    // Button Size
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button   
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};