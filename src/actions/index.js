import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST="create_post"
export const FETCH_POST = "fetch_post";
export const DELTE_POST = "delete_post";

const BASE_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY='?key=Z123';

export function fetchPosts(){
	const url = `${BASE_URL}/posts${API_KEY}`;
	const request = axios.get(url);
	return {type:FETCH_POSTS,
		   payload:request};
}

export function createPost(values,callback){
	const request = axios.post(`${BASE_URL}/posts${API_KEY}`,values).
	then(()=>callback());
	return {type:CREATE_POST,payload:request};
}

export function fetchPost(id){
	const request = axios.get(`${BASE_URL}/posts/${id}${API_KEY}`);
	
	return {type:FETCH_POST,payload:request};
}

export function deletePost(id,callback){
	const request = axios.delete(`${BASE_URL}/posts/${id}${API_KEY}`).then(()=>callback());
	return {type:DELTE_POST,action:id};
}