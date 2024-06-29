export const isMobileDevice = () => navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile|Windows Phone)/);

export const getObjectValue = (obj:any, keyPath: string) => {
    if (!obj || typeof obj !== 'object') {
        return '';
    }
    
    const keys = keyPath.split('.');

    let currObj = obj;
    for (let key of keys) {
        if (currObj[key] === undefined) {
            return undefined;
        }
        currObj = currObj[key];
    }
    return currObj;
}

export const IsValidJsonString = (str:string) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };