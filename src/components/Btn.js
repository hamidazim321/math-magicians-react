import React from 'react';
import PropTypes from 'prop-types';

function CalcBtn(props) {
  const { text } = props;
  const buttonClass = text === '0' ? 'btn btn-zero' : 'btn';
  const red = ['+', '-', '=', '÷', 'x'].includes(text) ? 'btn-red' : '';
  return (
    <button type="button" className={`${buttonClass} ${red}`}>{text}</button>
  );
}
CalcBtn.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CalcBtn;
