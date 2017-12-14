import *as types from '../Actions/types'

const initialState = {
  posts: [],
  favouritePosts: [],
  isLoading: false,
  error: '',
}
export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_POSTS_START: {
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    }
    case types.GET_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
        error: '',
      }
    }
    case types.GET_POSTS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    }

    case types.GET_FAVORITE_POSTS_LIST: {
      return {
        ...state,
        favouritePosts: action.payload
      }
    }

    case types.ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    }

    case types.UPDATE_POST: {
      const updatedPost = action.payload
      const posts = state.posts
      const newPostId = posts.find(post => post.id === updatedPost.id)
      posts[newPostId] = {
        id: newPostId,
        title: updatedPost.title,
        description: updatedPost.description,
        image: updatedPost.image,
        favourite: updatedPost.favourite
      }
      return {
        ...state,
        posts: posts
      }
    }

      case types.DELETE_POST: {
        const deletedPostId = action.payload
        const newPostList = state.posts.find(post => post.id !== deletedPostId)
        return {
          ...state,
          posts: newPostList
        }
      }

    default:
      return state
  }
}
