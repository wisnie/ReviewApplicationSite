import React from 'react';

export default function ReviewTextareaSection({
  title,
  languageName,
  noun,
  value,
  onChange,
}) {
  return (
    <>
      <h2 className='form__title'>{title}</h2>
      <p className='form__description'>
        Here you can write about{' '}
        <span className='language-name language-name--color-yellow'>
          {languageName}
        </span>{' '}
        {noun}. Feel free to add your thoughts about what you think about{' '}
        <span className='language-name language-name--color-yellow'>
          {languageName}
        </span>
        . If you think that{' '}
        <span className='language-name language-name--color-yellow'>
          {languageName}
        </span>{' '}
        have no {noun} you can skip this field.
      </p>
      <textarea
        className='form__textarea'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
