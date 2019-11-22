import {useState} from 'react';

export const useToggleState = initialVal => {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState(!state);
  }

  return [state, toggle];
}