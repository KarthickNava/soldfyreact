import React, { useState, useRef, useEffect } from "react";
const useDropdown = (options) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const optionsRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextOptionIndex =
        options.findIndex((option) => option.id === selectedOption.id) + 1;
      if (nextOptionIndex < options.length) {
        setSelectedOption(options[nextOptionIndex]);
      }
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const prevOptionIndex =
        options.findIndex((option) => option.id === selectedOption.id) - 1;
      if (prevOptionIndex >= 0) {
        setSelectedOption(options[prevOptionIndex]);
      }
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen(false);
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    selectedOption,
    optionsRef,
    handleOptionSelect,
    handleKeyDown,
    toggleDropdown,
    setSelectedOption,
  };
};

export default useDropdown;
