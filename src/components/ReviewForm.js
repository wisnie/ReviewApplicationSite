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

import { ReactComponent as Dreamer } from '../SVG/undraw_dreamer_gxxi.svg';
import { ReactComponent as Survey } from '../SVG/undraw_customer_survey_f9ur.svg';
import { ReactComponent as Files } from '../SVG/undraw_sync_files_xb3r.svg';
import { ReactComponent as House } from '../SVG/undraw_for_sale_viax.svg';
import { ReactComponent as Environment } from '../SVG/undraw_environmental_study_skau.svg';
import { ReactComponent as ServerDownload } from '../SVG/undraw_server_down_s4lk.svg';
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

function reducer(state, action) {
  switch (action.type) {
    case 'set':
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

  const [formStep, setFormStep] = useState(1);
  const [isRedirect, setIsRedirect] = useState(false);

  function handleClick() {
    if (formStep > 1) {
      return setFormStep((prevState) => prevState - 1);
    }

    setIsRedirect(true);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formStep === FORM_STEPS.length) {
      setIsRedirect(true);
    }

    setFormStep((prevState) => prevState + 1);
  }

  return (
    <div className='form-container'>
      {isRedirect && <Redirect to='' />}

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
              onChange={(value) =>
                dispatch({
                  type: 'set',
                  property: 'usernameValue',
                  value: value,
                })
              }
              InputIcon={Account}
            />

            <ReviewInput
              labelName='e-mail'
              InputIcon={Bell}
              value={state.emailValue}
              onChange={(value) =>
                dispatch({ type: 'set', property: 'emailValue', value: value })
              }
            />

            <CustomDropdown
              dropownItems={languagesNames}
              dropdownValue={state.dropdownValue}
              setDropdownValue={(value) =>
                dispatch({
                  type: 'set',
                  property: 'dropdownValue',
                  value: value,
                })
              }
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
              onChange={(value) =>
                dispatch({
                  type: 'set',
                  property: 'advantagesValue',
                  value: value,
                })
              }
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
              onChange={(value) =>
                dispatch({
                  type: 'set',
                  property: 'disadvantagesValue',
                  value: value,
                })
              }
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
              onChange={(value) =>
                dispatch({
                  type: 'set',
                  property: 'useCasesValue',
                  value: value,
                })
              }
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
            <RatingBar
              onClick={(value) =>
                dispatch({ type: 'set', property: 'starValue', value: value })
              }
              starValue={state.starValue}
            />
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
