import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.span`
  position: fixed;
  bottom: 140px;
  right: 65px;
  align-items: center;
  height: 50px;
  width: 50px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  opacity: 0.5;
  background: #fcb246;
  border-radius: 50%;
  transition: opacity 0.4s, color ease-in-out 0.2s, background ease-in-out 0.2s;
  display: ${({ isScrollButtonVisible }) =>
    isScrollButtonVisible ? 'flex' : 'none'};

  &:hover {
    opacity: 1;
  }
`;

const BackToTopButton = ({ contentRef }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && contentRef.current.scrollTop > 400) {
        setShowButton(true);
      } else if (showButton && contentRef.current.scrollTop <= 400) {
        setShowButton(false);
      }
    };

    contentRef.current.addEventListener('scroll', checkScrollHeight);
    return () => {
      contentRef.current.removeEventListener('scroll', checkScrollHeight);
    };
  }, [contentRef, showButton]);

  const scrollToTop = () => {
    contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ButtonContainer isScrollButtonVisible={showButton} onClick={scrollToTop}>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </ButtonContainer>
  );
};

export default BackToTopButton;
