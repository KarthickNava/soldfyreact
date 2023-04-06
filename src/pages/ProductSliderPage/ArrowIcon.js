import React from 'react';

function ArrowIcon(props) {
    const { className, svgClass, height, width } = props;
    return (
        <svg className={svgClass} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 23 16" fill="none">
        <path  className={className} d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928931C15.9526 0.538407 15.3195 0.538407 14.9289 0.928931C14.5384 1.31946 14.5384 1.95262 14.9289 2.34314L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM7.15277e-08 9L22 9L22 7L-7.15277e-08 7L7.15277e-08 9Z" fill="#262261"/>
        </svg>
    );
}
  
export default ArrowIcon