import React from 'react';
import { getImageSource } from '../common/languagesUtilityFunctions';
import { languagesData } from '../common/languagesData';

export default function LanguageSubpageContentHeader({ languageName }) {
  const { shortDesc, src } = languagesData[languageName];

  return (
    <header
      className='language-content-header'
      style={{
        backgroundImage: `url('${getImageSource(languageName)}')`,
      }}
    >
      <div className='content-header__wrapper'>
        <h2 className='content-header__title'>
          This is <span className='language-name'>{languageName}</span>.
        </h2>
        <p className='content-header__short-desc'>{shortDesc}</p>
        <div className='content-header__links-container'>
          <a
            href={src}
            className='content-header__link content-header__link--theme-border-outline'
          >
            Read More about {languageName.toUpperCase()}
          </a>
          <a
            href={`/${languageName}#overview`}
            className='content-header__link content-header__link--theme-background-fill'
          >
            Check our shorther version
          </a>
        </div>
      </div>
    </header>
  );
}
