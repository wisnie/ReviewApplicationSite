import React from 'react';
import './scss/main.scss';
import LanguagesBoard from './components/LanguagesBoard';
import LanguageSubpage from './components/LanguageSubpage';
import ReviewForm from './components/ReviewForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <LanguagesBoard />
          </Route>
          <Route path='/write-review'>
            <ReviewForm />
          </Route>
          <Route path='/:languageName'>
            <LanguageSubpage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
