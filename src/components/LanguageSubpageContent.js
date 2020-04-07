import React from 'react';
import LanguageSubpageContentHeader from './LanguageSubpageContentHeader';
import LanguageSubpageSections from './LanguageSubpageSections';

export default function LanguageSubpageContent({ languageName }) {
  return (
    <div>
      <LanguageSubpageContentHeader languageName={languageName} />
      <LanguageSubpageSections languageName={languageName} />
    </div>
  );
}
