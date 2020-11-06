import React from 'react';

import './styles.css';

function Input({ 
  type, objRef, placeholder, name, valueSt, 
  onChangeSt, min, max, label }) {

  return (
    <div className="input-group">
      <label htmlFor={name}>{ label }</label>
      { type === 'text' && (
        <input 
          id={name} 
          type={type}
          name={name}
          value={valueSt}
          placeholder={placeholder}
          onChange={onChangeSt}
        />
      )}
      { type === 'select' && (
        <select id={name} name={name} value={valueSt} onChange={onChangeSt}>
          <option key="0" value="">{ placeholder }</option>
          {objRef.map(({ id, nome }) => <option key={id} value={id}>{ nome }</option>)}
        </select>
      )}
      { type === 'number' && (
        <input 
          id={name} 
          type={type}
          name={name}
          value={valueSt}
          max={max}
          min={min}
          placeholder={placeholder}
          onChange={onChangeSt}
        />
      )}
    </div>
  );
}

export default Input;