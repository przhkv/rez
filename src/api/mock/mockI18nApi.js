import delay from './delay';
import _i18nData from './data/i18nData';

export const fetchDictionary = lang =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(Object.assign({}, _i18nData[lang]));
    }, delay);
  });
