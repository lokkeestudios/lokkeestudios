import { useState } from 'react';

function usePreviousState<S>(initialState: S, state: S) {
  const [stateTuple, setStateTuple] = useState([initialState, state]);

  if (stateTuple[1] !== state) setStateTuple([stateTuple[1], state]);

  const previousState = stateTuple[0];

  return previousState;
}

export default usePreviousState;
