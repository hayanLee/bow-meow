import { useState } from 'react';

function useInput(initValue) {
  const [state, setState] = useState(initValue);

  function handleChange(e) {
    setState(e.target.value);
  }

  return [state, handleChange, setState];
}

export default useInput;
