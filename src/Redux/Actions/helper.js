import *as types from './types'
import {BASE_URL} from '../../config'
import axios from 'axios'

export const getItems = (type,url) => {
  return dispatch => {
    dispatch({
      type: types.type
    })
     axios.get(`${BASE_URL}/${url}`)
      .then(res => {
        dispatch({
          type: types.type,
          payload: res.data
        })
      })
      .catch(error => {
        dispatch({
          type: types.type,
          payload: error
        })
      })
  }
}

export const setItems = (type, url, post, callback) => {
  return dispatch => {
    dispatch({
      type: types.type
    })
     axios.post(`${BASE_URL}/${url}`, {post})
      .then(res => {
        dispatch({
          type: types.type,
          payload: post
        })
        dispatch(callback())
      })
      .catch(error => {
        dispatch({
          type: types.type,
          payload: error
        })
      })
  }
}
