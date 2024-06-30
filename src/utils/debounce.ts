export default (fn: any, delay = 300) => {
    let timeout: any;
    // eslint-disable-next-line func-names
    return function (...args: any) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => { debugger; fn(...args)}, delay);
    };
  };
  