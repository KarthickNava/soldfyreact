import React from 'react';
import PropTypes from 'prop-types';
import useDropdown from '../../hooks/useDropdown';
import style from './HeaderDropDown.module.css';
const HeaderDropDown = (props) => {
  const options = [
    { id: 1, label: 'Option 1', src:'https://cdn.soldfy.se/media/websites/15/sweden-flag_1.svg' },
    { id: 2, label: 'Option 2',  src:'https://cdn.soldfy.se/media/websites/15/sweden-flag_1.svg'},
    { id: 3, label: 'Option 3', src:'https://cdn.soldfy.se/media/websites/15/sweden-flag_1.svg' },
    { id: 4, label: 'Option 4',  src:'https://cdn.soldfy.se/media/websites/15/sweden-flag_1.svg' },
    { id: 5, label: 'Option 5' , src:'https://cdn.soldfy.se/media/websites/15/sweden-flag_1.svg'},
  ];
  const { isOpen, selectedOption, optionsRef, handleOptionSelect, handleKeyDown, toggleDropdown } = useDropdown(options);
const{needButtonheighlight}=props;
  return (
    <div className={`${style.dropdownContainer} ${needButtonheighlight ? style.active:''}`}>
      <button className={style.dropdownButton} onClick={toggleDropdown} onKeyDown={handleKeyDown}>
      
        {selectedOption ? selectedOption.label : 'Select an option'}
        <span className={style.dropdownIcon}>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className={style.dropdownOptions} ref={optionsRef}>
          {options && options.map((option) => (
            <li
              key={option.id}
              className={`${style.dropdownOption} ${selectedOption && selectedOption.id === option.id ? style.selected : ''}`}
              onClick={() => handleOptionSelect(option)}
            >
              <img src={option.src} className={style.langImage}/>

              <div>{option.label}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HeaderDropDown;
HeaderDropDown.defaultProps = {
  needButtonheighlight:false
};

HeaderDropDown.propTypes = {
  needButtonheighlight:PropTypes.bool
};