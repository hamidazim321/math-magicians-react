import React from 'react';
import PropTypes from 'prop-types';

function CalcBtn({ text, handleClick }) {
  const buttonClass = text === '0' ? 'btn btn-zero' : 'btn';
  const red = ['+', '-', '=', '÷', 'x'].includes(text) ? 'btn-red' : '';
  return (
    <button
      type="button"
      className={`${buttonClass} ${red}`}
      onClick={(e) => {
        handleClick(e.target.textContent);
      }}
    >
      {text}
    </button>
  );
}
CalcBtn.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CalcBtn;
