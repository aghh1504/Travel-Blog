import * as types from './types'
import {BASE_URL} from '../../config'
import axios from 'axios'

export const getItems = (type,url) => {
  return dispatch => {
    dispatch({
      type: type(types.START)
    })
     axios.get(`${BASE_URL}/${url}`)
      .then(res => {
        dispatch({
          type: type(types.SUCCESS),
          payload: res.data
        })
      })
      .catch(error => {
        dispatch({
          type: type(types.ERROR),
          payload: error
        })
      })
  }
}

export const postItem = (type, url, data) => {
  return dispatch => {
    dispatch({
      type: type(types.START),
      payload: data
    })
     axios.post(`${BASE_URL}/${url}`, data)
      .then(res => {
        dispatch({
          type: type(types.SUCCESS),
          payload: res.data
        })
      })
      .catch(error => {
        dispatch({
          type: type(types.ERROR),
          payload: error
        })
      })
  }
}

export const putItem = (type, url, data) => {
  return dispatch => {
    dispatch({
      type: type(types.START),
      payload: data
    })
    axios.put(`${BASE_URL}/${url}`, data)
      .then(res => {
        dispatch({
          type: type(types.SUCCESS),
          payload: res.data
        });
      })
      .catch(error => {
        dispatch({
          type: type(types.ERROR),
          payload: error
        })
      })
  }
}

export const deleteItem = (type, url, data) => {
  return dispatch => {
    dispatch({
      type: type(types.START),
      payload: data
    })
    axios.delete(`${BASE_URL}/${url}`)
      .then(res => {
        dispatch({
          type: type(types.SUCCESS),
          payload: data
        })
      })
      .catch(error => {
        dispatch({
          type: type(types.ERROR),
          payload: error
        })
      })
  }
}
