import { useEffect, useRef } from "react";

export const useSkipFirstRender = (fn, args) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      console.log('running')
      return fn();
    }
  }, args)

  useEffect(() => {
    isMounted.current = true
  }, [])
}