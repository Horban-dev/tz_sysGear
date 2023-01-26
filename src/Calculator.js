import { useEffect, useState } from 'react';
import Button from './calculator-components/Button';
import Input from './calculator-components/Input';
import Result from './calculator-components/Result';
import Select from './calculator-components/Select';

let values = {
  'km': 1000,
  "m": 1,
  "yd": 0.9144,
  "cm": 0.01,
  "in": 0.0254, 
  "ft": 0.3048,
  "mm": 0.001
  }

function Calculator() {
  const [input, setInput] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [result, setResult] = useState(0)

  const keys = Object.keys(values)

  useEffect(() => {
    if(from && to){
      setResult((values[from] / values[to] * input).toFixed(2))
    }
  }, [input])





  const convert = () => {
    setResult((values[from] / values[to] * input).toFixed(2))
  }

  const clear = () => {
    setInput('')
    setResult(0)
  }
  return (
    <div className="container-md">
        <h1 className="display-1">Value Calculator</h1>
        <Input 
            input={input} 
            onChangeFrom={setInput}
            setInput={setInput}
            clear={clear}
        />
        <Select keys={keys} setFrom={setFrom} setTo={setTo}/> 
        <Button convert={convert}/>
        <Result result={result}/> 
    </div>
  );
}

export default Calculator;
