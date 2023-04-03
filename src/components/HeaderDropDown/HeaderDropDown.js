import React from "react";
import PropTypes from "prop-types";
import useDropdown from "../../hooks/useDropdown";
import style from "./HeaderDropDown.module.css";
const HeaderDropDown = (props) => {
  const options = [
    {
      id: 1,
      label: "English - EUR",
      src: "https://cdn.soldfy.se/media/websites/23/united_kingdom-flag_1.svg",
    },
    {
      id: 2,
      label: "Dansk - DKK",
      src: "https://cdn.soldfy.se/media/websites/24/denmark-flag_1.svg",
    },
    {
      id: 3,
      label: "Suomi - EUR ",
      src: "https://cdn.soldfy.se/media/websites/26/finland-flag_1.svg",
    },
    {
      id: 4,
      label: "Norsk - NOK",
      src: "https://cdn.soldfy.se/media/websites/27/norway-flag_1.svg",
    },
    {
      id: 5,
      label: "Svenska - SEK",
      src: "https://cdn.soldfy.se/media/websites/15/sweden-flag_1.svg",
    },
  ];
  const {
    isOpen,
    selectedOption,
    optionsRef,
    handleOptionSelect,
    handleKeyDown,
    toggleDropdown,
  } = useDropdown(options);
  const { needButtonheighlight } = props;
  return (
    <div
      className={`${style.dropdownContainer} ${
        needButtonheighlight ? style.active : ""
      }`}
    >
      <button
        className={style.dropdownButton}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
      >
        {selectedOption ? selectedOption.label : "Select an option"}
        <span className={style.dropdownIcon}>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <ul className={style.dropdownOptions} ref={optionsRef}>
          {options &&
            options.map((option) => (
              <li
                key={option.id}
                className={`${style.dropdownOption} ${
                  selectedOption && selectedOption.id === option.id
                    ? style.selected
                    : ""
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                <img src={option.src} className={style.langImage} />

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
  needButtonheighlight: false,
};

HeaderDropDown.propTypes = {
  needButtonheighlight: PropTypes.bool,
};
