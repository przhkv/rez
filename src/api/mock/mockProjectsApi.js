import delay from './delay';
import _mockProjectListData from './data/projectListData';

export const fetchList = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(Object.assign([], _mockProjectListData));
    }, delay);
  });
