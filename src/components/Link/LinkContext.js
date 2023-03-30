import React from 'react';
let LinkContext = /*#__PURE__*/React.createContext({
  options: {
    onCallBack: null,
    isLink: true,
    constructURL: () => false
  }
});
export default LinkContext;