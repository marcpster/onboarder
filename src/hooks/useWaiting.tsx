import { useState } from 'react';

/**
 * Custom hook for "waiting" spinner state
 */
export function useWaiting() {

  const [isWaitingState, setWaitingState] = useState<boolean>(false);

  // Return value and function (type-safe const assertion)
  return [
    isWaitingState,
    setWaitingState
  ] as const;
}
