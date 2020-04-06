import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as Chevron } from '../SVG/chevron.svg';

const ENTER_CODE = 13;
const ESCAPE_CODE = 27;
const TAB_CODE = 9;
const HOME_CODE = 36;
const END_CODE = 35;
const DOWN_ARROW_CODE = 40;
const UP_ARROW_CODE = 38;

export default function CustomDropdown({
  dropownItems,
  dropdownValue,
  setDropdownValue,
}) {
  const [isDisplayDropdown, setDropdownDisplay] = useState(false);
  const [itemToFocus, setItemToFocus] = useState(dropownItems[0]);
  const itemToFocusRef = useRef(null);
  const dropdownButtonRef = useRef(null);

  useEffect(() => {
    if (itemToFocusRef) {
      itemToFocusRef.current.focus();
    }
  });

  useEffect(() => {
    if (!isDisplayDropdown) {
      setItemToFocus(dropdownValue);
    }
  }, [isDisplayDropdown, dropdownValue]);

  function handleKeyDown(e) {
    e.preventDefault();
    itemToFocusRef.current.focus();

    switch (e.which) {
      case ENTER_CODE:
        setDropdownValue(itemToFocus);
        setDropdownDisplay(false);
        dropdownButtonRef.current.focus();
        break;
      case ESCAPE_CODE:
      case TAB_CODE:
        setDropdownDisplay(false);
        dropdownButtonRef.current.focus();
        break;
      case HOME_CODE:
        setItemToFocus(dropownItems[0]);
        break;
      case END_CODE:
        setItemToFocus(dropownItems[dropownItems.length - 1]);
        break;
      case DOWN_ARROW_CODE: {
        const dropdownValueElementIndex = dropownItems.indexOf(itemToFocus);
        if (dropdownValueElementIndex < dropownItems.length - 1) {
          setItemToFocus(dropownItems[dropdownValueElementIndex + 1]);
        }
        break;
      }
      case UP_ARROW_CODE: {
        const dropdownValueElementIndex = dropownItems.indexOf(itemToFocus);
        if (dropdownValueElementIndex > 0) {
          setItemToFocus(dropownItems[dropdownValueElementIndex - 1]);
        }
        break;
      }

      default:
        const firstFoundPhrase = dropownItems.find((dropdownItem) =>
          dropdownItem.startsWith(e.key)
        );

        if (firstFoundPhrase) {
          setItemToFocus(firstFoundPhrase);
        }
    }
  }

  return (
    <div className='dropdown-container'>
      <span id='exp_element' className='dropdown__label'>
        Choose a language
      </span>
      <div
        className={`dropdown-wrapper ${
          isDisplayDropdown ? 'dropdown-wrapper--active' : ''
        }`}
      >
        <button
          type='button'
          id='exp_button'
          ref={dropdownButtonRef}
          aria-haspopup='listbox'
          aria-labelledby='exp_element exp_button'
          className='dropdown__button'
          onClick={() => setDropdownDisplay((prevState) => !prevState)}
        >
          {dropdownValue.toUpperCase()}
        </button>
        <Chevron />
      </div>
      <ul
        className='dropdown-list'
        role='listbox'
        tabIndex='-1'
        aria-labelledby='exp_element'
        hidden={!isDisplayDropdown}
        onKeyDown={handleKeyDown}
      >
        {dropownItems.map((dropownItem, index) => {
          const isToFocus = dropownItem === itemToFocus;
          const ref = isToFocus ? itemToFocusRef : null;

          return (
            <li
              ref={ref}
              role='option'
              tabIndex={1}
              key={index}
              aria-selected={isToFocus}
              className='dropdown-list__item'
              onClick={() => {
                setDropdownDisplay((prevState) => !prevState);
                setDropdownValue(dropownItems[index]);
              }}
            >
              {dropownItem.toUpperCase()}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
