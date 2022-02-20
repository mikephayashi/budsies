import React from 'react';

const CustomContext = React.createContext();

export default function useCustomContext() {
  return React.useContext(CustomContext);
}

export default CustomContext;