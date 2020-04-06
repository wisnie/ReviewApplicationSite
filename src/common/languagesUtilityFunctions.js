import React from 'react';

import { ReactComponent as JAVA } from '../SVG/java.svg';
import { ReactComponent as KOTLIN } from '../SVG/kotlin.svg';
import { ReactComponent as SWIFT } from '../SVG/swift.svg';
import { ReactComponent as HTML } from '../SVG/html.svg';
import { ReactComponent as CSS } from '../SVG/css.svg';
import { ReactComponent as CSHARP } from '../SVG/c#.svg';
import { ReactComponent as CPP } from '../SVG/cpp.svg';
import { ReactComponent as C } from '../SVG/c.svg';
import { ReactComponent as FORTRAN } from '../SVG/fortran.svg';
import { ReactComponent as PYTHON } from '../SVG/python.svg';
import { ReactComponent as RUBY } from '../SVG/ruby.svg';
import { ReactComponent as GO } from '../SVG/go.svg';
import { ReactComponent as HASKELL } from '../SVG/haskell.svg';
import { ReactComponent as JS } from '../SVG/js.svg';
import { ReactComponent as TS } from '../SVG/ts.svg';
import { ReactComponent as PHP } from '../SVG/php.svg';

import { ReactComponent as Moonlight } from '../SVG/undraw_moonlight_5ksn.svg';
import { ReactComponent as Space } from '../SVG/undraw_Outer_space_drqu.svg';
import { ReactComponent as Timeline } from '../SVG/undraw_timeline_9u4u.svg';
import { ReactComponent as Charts } from '../SVG/undraw_statistic_chart_38b6.svg';

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';
import image10 from '../images/image10.jpg';
import image11 from '../images/image11.jpg';
import image12 from '../images/image12.jpg';
import image13 from '../images/image13.jpg';
import image14 from '../images/image14.jpg';
import image15 from '../images/image15.jpg';
import image16 from '../images/image16.jpg';

export const LANGUAGE_SECTIONS = ['overview', 'history', 'syntax', 'curiosity'];
export const LANGUAGE_SECTIONS_IMAGES = {
  overview: <Moonlight />,
  history: <Timeline />,
  syntax: <Charts />,
  curiosity: <Space />,
};

const imagesSources = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
];

const languages = {
  c: <C />,
  java: <JAVA />,
  kotlin: <KOTLIN />,
  cpp: <CPP />,
  'c-sharp': <CSHARP />,
  swift: <SWIFT />,
  html: <HTML />,
  css: <CSS />,
  fortran: <FORTRAN />,
  python: <PYTHON />,
  ruby: <RUBY />,
  go: <GO />,
  haskell: <HASKELL />,
  javascript: <JS />,
  typescript: <TS />,
  php: <PHP />,
};

export const languagesNames = Object.keys(languages).sort();

export function getLanguageIcon(language) {
  return languages[language];
}

export function getImageSource(language) {
  return imagesSources[languagesNames.indexOf(language)];
}
