import * as types from './types'
import {getItems, postItem, putItem, deleteItem} from './helper';

export const fetchPosts = () => getItems(types.GET_POSTS, 'posts');
export const addPost = (post) => postItem(types.ADD_POST, 'posts', post);
export const updatePost = (post) => putItem(types.UPDATE_POST, `posts/${post.id}`, post, fetchPosts);
export const deletePost = (post) => deleteItem(types.DELETE_POST, `posts/${post.id}`, post);

export const fetchFavouritePosts = () => getItems(types.GET_FAVORITE_POSTS, 'favourites');
