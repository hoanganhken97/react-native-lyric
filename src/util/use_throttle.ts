import {useRef} from 'react';

export default function useThrottle(fn: Function, delay: number = 300) {
  const {current} = useRef<{timer?: NodeJS.Timeout}>({});
  return function (this: any, ...args: any[]) {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        delete current.timer;
      }, delay);
      fn.apply(this, args);
    }
  };
}
