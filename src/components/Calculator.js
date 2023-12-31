import React, { useState } from 'react';
import '../styles/Calculator.css';
import CalcBtn from './Btn';
import calculate from '../logic/Calculate';

function Calculator() {
  const [calcObj, updateCalcObj] = useState(
    {
      operation: null,
      total: null,
      next: null,
    },
  );

  const handleClick = (btnName) => {
    updateCalcObj(calculate(calcObj, btnName));
  };

  return (
    <>
      <h1>
        Lets Do Some Math!
      </h1>
      <div className="calculator">
        <div className="calculator-screen">
          <p>{calcObj.next || calcObj.operation || calcObj.total}</p>
        </div>
        <CalcBtn text="AC" handleClick={handleClick} />
        <CalcBtn text="+/-" handleClick={handleClick} />
        <CalcBtn text="%" handleClick={handleClick} />
        <CalcBtn text="÷" handleClick={handleClick} />
        <CalcBtn text="7" handleClick={handleClick} />
        <CalcBtn text="8" handleClick={handleClick} />
        <CalcBtn text="9" handleClick={handleClick} />
        <CalcBtn text="x" handleClick={handleClick} />
        <CalcBtn text="4" handleClick={handleClick} />
        <CalcBtn text="5" handleClick={handleClick} />
        <CalcBtn text="6" handleClick={handleClick} />
        <CalcBtn text="-" handleClick={handleClick} />
        <CalcBtn text="1" handleClick={handleClick} />
        <CalcBtn text="2" handleClick={handleClick} />
        <CalcBtn text="3" handleClick={handleClick} />
        <CalcBtn text="+" handleClick={handleClick} />
        <CalcBtn text="0" handleClick={handleClick} />
        <CalcBtn text="." handleClick={handleClick} />
        <CalcBtn text="=" handleClick={handleClick} />
      </div>
    </>
  );
}

export default Calculator;
