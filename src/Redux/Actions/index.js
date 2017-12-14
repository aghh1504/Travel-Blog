import *as types from './types'
import {BASE_URL} from '../../config'
import axios from 'axios'

export const fetchPostsList = () => {
  return dispatch => {
    dispatch({
      type: types.GET_POSTS_START
    })
     axios.get(`${BASE_URL}/GetAllPosts`)
      .then(res => {
        dispatch({
          type: types.GET_POSTS_SUCCESS,
          payload: res.data
        })
      })
      .catch(error => {
        dispatch({
          type: types.GET_POSTS_ERROR,
          payload:error
        })
      })
  }
}

export const fetchFavouritePostList = () => {
  return dispatch => {
    axios.get(`/GetFavouritePosts`)
      .then(res => dispatch(setFavouritePostList(res.data)))
      .catch(err => console.log(err))
  }
}

export const addPost = post => {
  return dispatch => {
    axios.post(`/AddNewPost`, {post})
      .then(res => {
        dispatch(addPostToTheList())
        dispatch(fetchPostsList())
      })
      .catch(err => console.log(err))
  }
}

export const updatePost = post => {
  return dispatch => {
    axios.put(`/UpdatePost`, {post})
    .then(res => {
      dispatch(updatePostToTheList())
      dispatch(fetchPostsList())
    })
    .catch(err => console.log(err))
  }
}

export const deletePost = post => {
  return dispatch => {
    axios.put(`/Post/${post.id}`, {post})
    .then(res => {
      dispatch(deletePostToTheList())
      dispatch(fetchPostsList())
    })
    .catch(err => console.log(err))
  }
}

export const setFavouritePostList = posts => {
  return {
    type: types.GET_FAVORITE_POSTS_LIST,
    payload: posts
  }
}

export const addPostToTheList = (post) => {
  return {
    type: types.ADD_POST,
    payload: post
  }
}

export const updatePostToTheList = (post) => {
  return {
    type: types.UPDATE_POST,
    payload: post
  }
}

export const deletePostToTheList = (postId) => {
  return {
    type: types.DELETE_POST,
    payload: postId
  }
}
