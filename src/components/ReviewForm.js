import React, { useState, useReducer } from 'react';
import RatingBar from './RatingBar';
import CustomDropdown from './CustomDropdown';
import ReviewInput from './ReviewInput';
import ReviewFormTimeline from './ReviewFormTimeline';
import ReviewTextareaSection from './ReviewTextareaSection';
import LoadingAnimation from './LoadingAnimation';

import { FORM_STEPS } from '../common/formSteps';
import { languagesNames } from '../common/languagesUtilityFunctions';
import { Redirect, Link } from 'react-router-dom';

import { ReactComponent as Dreamer } from '../SVG/dreamer.svg';
import { ReactComponent as Survey } from '../SVG/survey.svg';
import { ReactComponent as Files } from '../SVG/sync-files.svg';
import { ReactComponent as House } from '../SVG/for-sale.svg';
import { ReactComponent as Environment } from '../SVG/study.svg';
import { ReactComponent as ServerDownload } from '../SVG/server-down.svg';
import { ReactComponent as Account } from '../SVG/account-circle.svg';
import { ReactComponent as Bell } from '../SVG/bell-circle.svg';

function ReviewStep({ children, picture }) {
  return (
    <>
      <figure className='form__picture'>{picture}</figure>
      <section className='form__step-content'>{children}</section>
    </>
  );
}

const SET_PROPERTY_VALUE = 'SET_PROPERTY_VALUE';

function setPropertyValue(property, value) {
  return {
    type: SET_PROPERTY_VALUE,
    property: property,
    value: value,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case SET_PROPERTY_VALUE:
      return { ...state, [action.property]: action.value };
    default:
      throw new Error();
  }
}

export default function ReviewForm() {
  const [state, dispatch] = useReducer(reducer, {
    starValue: null,
    dropdownValue: languagesNames[0],
    usernameValue: '',
    emailValue: '',
    advantagesValue: '',
    disadvantagesValue: '',
    useCasesValue: '',
  });

  const setStarValue = (value) =>
    dispatch(setPropertyValue('starValue', value));
  const setDropdownValue = (value) =>
    dispatch(setPropertyValue('dropdownValue', value));
  const setUsernameValue = (value) =>
    dispatch(setPropertyValue('usernameValue', value));
  const setEmailValue = (value) =>
    dispatch(setPropertyValue('emailValue', value));
  const setUseCasesValue = (value) =>
    dispatch(setPropertyValue('useCasesValue', value));
  const setAdvantagesValue = (value) =>
    dispatch(setPropertyValue('advantagesValue', value));
  const setDisadvantagesValue = (value) =>
    dispatch(setPropertyValue('disadvantagesValue', value));

  const [formStep, setFormStep] = useState(1);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  function handleClick() {
    if (formStep > 1) {
      return setFormStep((prevState) => prevState - 1);
    }

    setShouldRedirect(true);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formStep === FORM_STEPS.length) {
      setShouldRedirect(true);
    }

    setFormStep((prevState) => prevState + 1);
  }

  return (
    <div className='form-container'>
      {shouldRedirect && <Redirect to='' />}

      <form
        onSubmit={handleSubmit}
        className='form'
        aria-labelledby='dialog_label'
      >
        <h1 className='form__title form__title--main'>
          <Link to='/'>Technology Review Application</Link>
        </h1>

        <ReviewFormTimeline formSteps={FORM_STEPS} step={formStep} />

        {formStep === 1 && (
          <ReviewStep picture={<Dreamer />}>
            <h2 className='form__title'>{FORM_STEPS[formStep - 1]}</h2>
            <ReviewInput
              value={state.usernameValue}
              labelName='username'
              onChange={setUsernameValue}
              InputIcon={Account}
            />

            <ReviewInput
              labelName='e-mail'
              InputIcon={Bell}
              value={state.emailValue}
              onChange={setEmailValue}
            />

            <CustomDropdown
              dropownItems={languagesNames}
              dropdownValue={state.dropdownValue}
              setDropdownValue={setDropdownValue}
            />
          </ReviewStep>
        )}

        {formStep === 2 && (
          <ReviewStep picture={<Survey />}>
            <ReviewTextareaSection
              title={FORM_STEPS[formStep - 1]}
              noun='advantages'
              languageName={state.dropdownValue}
              value={state.advantagesValue}
              onChange={setAdvantagesValue}
            />
          </ReviewStep>
        )}

        {formStep === 3 && (
          <ReviewStep picture={<House />}>
            <ReviewTextareaSection
              title={FORM_STEPS[formStep - 1]}
              noun='disadvantages'
              languageName={state.dropdownValue}
              value={state.disadvantagesValue}
              onChange={setDisadvantagesValue}
            />
          </ReviewStep>
        )}

        {formStep === 4 && (
          <ReviewStep picture={<Environment />}>
            <ReviewTextareaSection
              title={FORM_STEPS[formStep - 1]}
              noun='use cases'
              languageName={state.dropdownValue}
              value={state.useCasesValue}
              onChange={setUseCasesValue}
            />
          </ReviewStep>
        )}

        {formStep === 5 && (
          <ReviewStep picture={<Files />}>
            <h2 className='form__title'>{FORM_STEPS[formStep - 1]}</h2>
            <p className='form__description'>
              Overview is a place where you can summarize your all previous
              points and give a justified overall score to{' '}
              <span className='language-name language-name--color-yellow'>
                {state.dropdownValue}
              </span>{' '}
              programming language. Think wisely about your choice.
            </p>
            <RatingBar onClick={setStarValue} starValue={state.starValue} />
          </ReviewStep>
        )}

        {formStep === 6 && (
          <ReviewStep picture={<ServerDownload />}>
            <h2 className='form__title'>{FORM_STEPS[formStep - 1]}</h2>
            <LoadingAnimation />
          </ReviewStep>
        )}

        <div className='form__button-container'>
          <button
            onClick={handleClick}
            type='button'
            className='form__button form__button--theme-white'
          >
            Back
          </button>
          <button
            type='submit'
            className='form__button form__button--theme-active'
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
