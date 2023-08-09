import CalcBtn from './Btn';

function Calculator() {
  return (
    <div className="calculator">
      <div className="calculator-screen" />
      <CalcBtn text="AC" />
      <CalcBtn text="+/-" />
      <CalcBtn text="%" />
      <CalcBtn text="÷" />
      <CalcBtn text="7" />
      <CalcBtn text="8" />
      <CalcBtn text="9" />
      <CalcBtn text="x" />
      <CalcBtn text="4" />
      <CalcBtn text="5" />
      <CalcBtn text="6" />
      <CalcBtn text="-" />
      <CalcBtn text="1" />
      <CalcBtn text="2" />
      <CalcBtn text="3" />
      <CalcBtn text="+" />
      <CalcBtn text="0" />
      <CalcBtn text="=" />
    </div>
  );
}

export default Calculator;
