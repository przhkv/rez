import delay from './delay';
import _mockSettingsData from './data/settingsData';

const USERNAME_MIN_LENGTH = 3;

export const fetchSettings = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(Object.assign({}, _mockSettingsData));
    }, delay);
  });

export const changeSettings = settings =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //if(settings.username.length >= USERNAME_MIN_LENGTH)
        resolve(settings);
      //else
      //  reject(`Please use ${USERNAME_MIN_LENGTH} characters at minimum in username`);
    }, delay);
  });
