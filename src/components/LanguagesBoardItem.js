import React from 'react';
import { Link } from 'react-router-dom';

export default function LanguagesBoardItem({ languageIcon, languageName }) {
  return (
    <li className='board-list__item'>
      <Link to={`/${languageName}`} className='board-list__link'>
        {languageIcon}
        <span className='board-list__text'>{languageName}</span>
      </Link>
    </li>
  );
}
