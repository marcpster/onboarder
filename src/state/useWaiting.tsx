import { useState } from 'react';

// Hooks can only be called inside the body of a function component.

/**
 * Custom hook for state can be shared across
 * components, but not triggered from events 
 */
export function useWaiting() {

  const [isWaitingState, setWaitingState] = useState<boolean>(false);

  // Return value and function (type-safe const assertion)
  return [
    isWaitingState,
    setWaitingState
  ] as const;
}
