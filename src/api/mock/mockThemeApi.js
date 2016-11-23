import delay from './delay';
import _themeData from './data/themeData';

export const fetchTheme = themeName =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(Object.assign({}, _themeData[themeName]));
    }, delay);
  });
