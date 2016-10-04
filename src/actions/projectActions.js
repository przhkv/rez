import * as types from '../constants/actionTypes';

export const loadProjectList = () => ({type: types.LOAD_PROJECT_LIST});
export const receiveProjectList = projects => ({type: types.RECEIVE_PROJECTS, projects});
