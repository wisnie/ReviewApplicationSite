import React from 'react';
import { LANGUAGE_SECTIONS } from '../common/languagesUtilityFunctions';
import { LANGUAGE_SECTIONS_IMAGES } from '../common/languagesUtilityFunctions';
import { languagesData } from '../common/languagesData';

export default function LanguageSubpageSections({ languageName }) {
  const { sections, src, srcName } = languagesData[languageName];
  return (
    <main className='sections-container'>
      {LANGUAGE_SECTIONS.map((languageSection, index) => {
        const sectionData = sections[languageSection];
        return (
          <section key={index} id={languageSection} className='section'>
            <figure className='section__image'>
              {LANGUAGE_SECTIONS_IMAGES[languageSection]}
            </figure>
            <div className='section__text'>
              <h2 className='section__title'>{languageSection}</h2>
              <blockquote cite={src} className='blockquote'>
                <p className='blockquote__paragraph'>{sectionData}</p>
                <footer className='blockqoute__footer'>
                  <a href={src} className='blockquote__link'>
                    Read more on {srcName}
                  </a>
                </footer>
              </blockquote>
            </div>
          </section>
        );
      })}
    </main>
  );
}
