import { useEffect, useRef } from 'react';

const useKey = (key: any, cb: any) => {
  const callbackRef = useRef(cb);

  useEffect(() => {
    callbackRef.current = cb;
  });

  useEffect(() => {
    const handle = (e: any) => {
      if (e.metaKey && e.key === key) {
        callbackRef.current(e);
      }
    };
    document.addEventListener('keydown', handle);
    return () => document.removeEventListener('keydown', handle);
  }, [key]);
};

export default useKey;
