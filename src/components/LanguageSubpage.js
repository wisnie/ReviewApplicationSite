import React from 'react';
import LanguageSubpageHeader from './LanguageSubpageHeader';
import LanguageSubpageContent from './LanguageSubpageContent';
import { languagesNames } from '../common/languagesUtilityFunctions';
import { useParams, Redirect } from 'react-router-dom';

export default function LanguageSubpage() {
  const { languageName } = useParams();

  if (!languagesNames.includes(languageName)) {
    return <Redirect to={`/${languagesNames[0]}`} />;
  }

  return (
    <div>
      <LanguageSubpageHeader />
      <LanguageSubpageContent languageName={languageName} />
    </div>
  );
}
