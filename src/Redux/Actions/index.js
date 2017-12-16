import *as types from './types'
import {BASE_URL} from '../../config'
import axios from 'axios'

export const fetchPosts = () => {
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
          payload: error
        })
      })
  }
}

export const fetchFavouritePosts = () => {
  return dispatch => {
    dispatch({
      type: types.GET_FAVORITE_POSTS_START
    })
     axios.get(`${BASE_URL}/GetFavouritePosts`)
      .then(res => {
        dispatch({
          type: types.GET_FAVORITE_POSTS_SUCCESS,
          payload: res.data
        })
      })
      .catch(error => {
        dispatch({
          type: types.GET_FAVORITE_POSTS_ERROR,
          payload: error
        })
      })
  }
}

export const addPost = post => {
  return dispatch => {
    dispatch({
      type: types.ADD_POST_START
    })
     axios.post(`${BASE_URL}/AddNewPost`, {post})
      .then(res => {
        dispatch({
          type: types.GET_FAVORITE_POSTS_SUCCESS,
          payload: post
        })
        dispatch(fetchPosts())
      })
      .catch(error => {
        dispatch({
          type: types.GET_FAVORITE_POSTS_ERROR,
          payload: error
        })
      })
  }
}

export const updatePost = post => {
  return dispatch => {
    dispatch({
      type: types.UPDATE_POST_START
    })
     axios.put(`${BASE_URL}/UpdatePost`, {post})
      .then(res => {
        dispatch({
          type: types.UPDATE_POST_SUCCESS,
          payload: post
        })
        dispatch(fetchPosts())
      })
      .catch(error => {
        dispatch({
          type: types.UPDATE_POST_ERROR,
          payload: error
        })
      })
  }
}

export const deletePost = post => {
  return dispatch => {
    dispatch({
      type: types.DELETE_POST_START
    })
     axios.put(`${BASE_URL}/Post/${post.id}`, {post})
      .then(res => {
        dispatch({
          type: types.DELETE_POST_SUCCESS,
          payload: post.id
        })
        dispatch(fetchPosts())
      })
      .catch(error => {
        dispatch({
          type: types.DELETE_POST_ERROR,
          payload: error
        })
      })
  }
}

//
//
//
//
// export const setFavouritePostList = posts => {
//   return {
//     type: types.GET_FAVORITE_POSTS_LIST,
//     payload: posts
//   }
// }
//
// export const addPostToTheList = (post) => {
//   return {
//     type: types.ADD_POST,
//     payload: post
//   }
// }
//
// export const updatePostToTheList = (post) => {
//   return {
//     type: types.UPDATE_POST,
//     payload: post
//   }
// }
//
// export const deletePostToTheList = (postId) => {
//   return {
//     type: types.DELETE_POST,
//     payload: postId
//   }
// }
