import React from 'react';

export default function ReviewFormTimeline({ formSteps, step }) {
  return (
    <ol className='timeline'>
      {formSteps
        .map((formStep, index) => (
          <li
            className={`timeline__item ${
              step - 1 === index && 'timeline__item--active'
            }`}
            key={index}
          >
            <span className='timeline__number'>{index + 1}</span>
            <p className='timeline__text'>{formStep}</p>
          </li>
        ))
        .reverse()}
    </ol>
  );
}
