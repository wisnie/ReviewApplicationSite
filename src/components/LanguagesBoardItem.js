import React from 'react';
import { Link } from 'react-router-dom';
import { getLanguageIcon } from '../common/languagesUtilityFunctions';

export default function LanguagesBoardItem({ languageName }) {
  return (
    <li className='board-list__item'>
      <Link to={`/${languageName}`} className='board-list__link'>
        {getLanguageIcon(languageName)}}
        <span className='board-list__text'>{languageName}</span>
      </Link>
    </li>
  );
}
