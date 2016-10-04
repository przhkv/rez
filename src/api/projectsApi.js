import delay from '../constants/mock/delay';
import _mockProjectListData from '../constants/mock/projectListData';

export const fetchProjectList = () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], _mockProjectListData));
      }, delay);
    });
