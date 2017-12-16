export const START = 'START';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

const TYPE = (name) => (status) => `${name}_${status}`;

export const GET_POSTS = TYPE('GET_POSTS');
export const GET_FAVORITE_POSTS = TYPE('GET_FAVORITE_POSTS');
export const ADD_POST = TYPE('ADD_POST');
export const UPDATE_POST = TYPE('UPDATE_POST');
export const DELETE_POST = TYPE('DELETE_POST');
