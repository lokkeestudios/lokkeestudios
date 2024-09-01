import { useEffect, useState } from 'react';

function usePreviousState<S>(initialState: S, state: S) {
  const [stateTuple, setStateTuple] = useState<[S, S]>([initialState, state]);

  useEffect(() => {
    setStateTuple((previousState) => [previousState[1], state]);
  }, [state]);

  const previousState = stateTuple[0];

  return previousState;
}

export { usePreviousState };
