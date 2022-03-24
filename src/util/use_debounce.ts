import {useRef} from 'react';

export default function useDebounce(fn: Function, delay: number = 300) {
  const {current} = useRef<{timer?: NodeJS.Timeout}>({});
  return function (this: any, ...args: any[]) {
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
