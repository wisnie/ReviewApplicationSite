import React from 'react';
import { LANGUAGE_SECTIONS } from '../common/languagesUtilityFunctions';
import { Link } from 'react-router-dom';

export default function LanguageSubpageHeader() {
  return (
    <header className='language-header'>
      <h1 className='language-title'>
        <Link to='/' className='link'>
          Technology Review Application
        </Link>
      </h1>

      <nav className='navigation'>
        <ul className='navigation-list'>
          {LANGUAGE_SECTIONS.map((languageSection, index) => (
            <li key={index} className='navigation-item'>
              <a href={`#${languageSection}`} className='navigation-link'>
                {languageSection}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Link to='/write-review' className='link link--style-button'>
        Write a review
      </Link>
    </header>
  );
}
