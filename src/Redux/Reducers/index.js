import *as types from '../Actions/types'

const initialState = {
  posts: [],
  favouritePosts: [],
  isLoading: false,
  error: '',
}
export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_POSTS(types.START): {
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    }
    case types.GET_POSTS(types.SUCCESS): {
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
        error: '',
      }
    }
    case types.GET_POSTS(types.ERROR): {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    }

    case types.GET_FAVORITE_POSTS(types.SUCCESS): {
      return {
        ...state,
        favouritePosts: action.payload
      }
    }

    case types.ADD_POST(types.SUCCESS): {
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      }
    }

    case types.UPDATE_POST(types.START): {
      const updatedPost = action.payload;
      const posts = [...state.posts];
      const existingPost = posts.find(post => Number(post.id) === Number(updatedPost.id));
      if (existingPost) {
        Object.assign(existingPost, updatedPost);
      } else {
        // TODO: error or just insert?
      }
      return {
        ...state,
        posts: posts
      }
    }

    case types.UPDATE_POST(types.SUCCESS): {
      const updatedPost = action.payload;
      const posts = [...state.posts];
      const existingPost = posts.find(post => Number(post.id) === Number(updatedPost.id));
      if (existingPost) {
        Object.assign(existingPost, updatedPost);
      } else {
        // TODO: error or just insert?
      }
      return {
        ...state,
        posts: posts
      }
    }

      case types.DELETE_POST(types.START): {
        const deletedPostId = action.payload.id;
        const newPostList = state.posts.filter(post => Number(post.id) !== Number(deletedPostId.id));
        return {
          ...state,
          posts: newPostList
        }
      }

    default:
      return state
  }
}
