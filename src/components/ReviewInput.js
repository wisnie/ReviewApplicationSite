import React from 'react';

export default function ReviewInput({ labelName, value, onChange, InputIcon }) {
  return (
    <div className='form__input-container'>
      <label htmlFor={`${labelName}-input`} className='input__label '>
        {labelName}
      </label>
      <div className='form__input-wrapper'>
        <input
          className='form__input'
          id={`${labelName}-input`}
          type='text'
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <InputIcon />
      </div>
    </div>
  );
}
