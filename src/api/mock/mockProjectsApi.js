import delay from './delay';
import _mockProjectListData from './data/projectListData';
import _mockProjectData from './data/projectData';

export const fetchList = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(Object.assign([], _mockProjectListData));
    }, delay);
  });

export const fetchById = id =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(Object.assign({}, _mockProjectData[id]));
    }, delay);
  });
