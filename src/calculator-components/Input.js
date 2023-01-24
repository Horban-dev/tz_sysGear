import React from 'react';
import { AiOutlineClear } from 'react-icons/ai';

const Input = ({input, onChangeFrom, setInput, clear}) => {
    return (
        <>
        <div className='input-group'>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Введите число..." 
                value={input}
                onChange={(e) => onChangeFrom(e.target.value)}
               />
               <AiOutlineClear className='icon' onClick={clear}/>
        </div>
        <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    type="range" 
                    className="form-range" 
                    min="0" max="100000" 
                    step="0.1" 
                    id="customRange3">
                </input>
        </>
    );
};

export default Input;