import delay from './delay';
import settingsValidation from '../../utils/validation/settingsValidation';
import _mockSettingsData from './data/settingsData';

export const fetchSettings = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(Object.assign({}, _mockSettingsData));
    }, delay);
  });

export const changeSettings = settings =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const validation = settingsValidation(settings);
      if (validation.ok) {
        resolve(settings);
      } else {
        reject(validation.err);
      }
    }, delay);
  });
