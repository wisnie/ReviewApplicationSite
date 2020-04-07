import React from 'react';
import { languagesNames } from '../common/languagesUtilityFunctions';
import LanguagesBoardItem from './LanguagesBoardItem';
import { Link } from 'react-router-dom';
import { ReactComponent as CheckReview } from '../SVG/review.svg';

function LanguagesBoardHeader() {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header-text-section'>
          <h1 className='header__title'>Technology Review Application</h1>
          <p className='header__description'>
            Welcome to review rating panel. Check advantages, disadvantages and
            use cases of the most popular programming languages. Feel free to
            add your own reviews to website database.
          </p>
        </div>
        <Link to='/write-review' className='button'>
          <span className='button__text'>Write a review</span>
        </Link>
      </div>
      <figure className='header__picture'>
        <CheckReview />
      </figure>
    </header>
  );
}

export default function LanguagesBoard() {
  return (
    <>
      <LanguagesBoardHeader />
      <ul className='board-list'>
        {languagesNames.map((languageName, index) => {
          return <LanguagesBoardItem languageName={languageName} key={index} />;
        })}
      </ul>
    </>
  );
}
