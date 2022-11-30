import "./App.css";
import { useState } from "react";


function App() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [operator, setOperator] = useState(null);


  const inputNum = (e) => {
     setCurState((curState) => curState + e.target.innerText)
  };     
  
  const operatorType = (e) => {
    setOperator(e.target.innerText);
    if (curState === "") return;

    if (curState !== "") {
      setPreState(curState);
      setCurState("");
      equals()
    }
    }
  
  const equals = (e) => {
    if (e.target.innerText === "=") {
    }  
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;
      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "X":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setPreState("");
    setCurState(cal);
  };    

  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  };

  const percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
  };

  const reset = () => {
    setPreState("");
    setCurState("");
  };  

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='screen'>
          {/* <div className="screen 1">{preState}</div> */}
          {curState}
        </div>
        <div className='btn light-gray' onClick={reset}>AC</div>
        <div className='btn light-gray' onClick={percent}>%</div>
        <div className='btn light-gray' onClick={minusPlus}>+/-</div>
        <div className='btn orange' onClick={operatorType}>/</div>
        <div className='btn' onClick={inputNum}>7</div>
        <div className='btn' onClick={inputNum}>8</div>
        <div className='btn' onClick={inputNum}>9</div>
        <div className='btn orange' onClick={operatorType}>X</div>
        <div className='btn' onClick={inputNum}>4</div>
        <div className='btn' onClick={inputNum}>5</div>
        <div className='btn' onClick={inputNum}>6</div>
        <div className='btn orange' onClick={operatorType}>+</div>
        <div className='btn' onClick={inputNum}>1</div>
        <div className='btn' onClick={inputNum}>2</div>
        <div className='btn' onClick={inputNum}>3</div>
        <div className='btn orange' onClick={operatorType}>-</div>
        <div className='btn zero' onClick={inputNum}>0</div>
        <div className='btn' onClick={inputNum}>.</div>
        <div className='btn' onClick={equals}>=</div>
      </div>
    </div>
  );
}

export default App;