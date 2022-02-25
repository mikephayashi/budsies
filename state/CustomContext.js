import {useContext, createContext} from 'react';

const CustomContext = createContext();

export function useCustomContext() {
  return useContext(CustomContext);
}

export default CustomContext;