import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5000"});

export const getUser = (id)=> API.get(`/user/${id}`);
export const updateUser = (id, data)=> API.patch(`/user/${id}`, data);
export const getAllUsers = ()=> API.get('/user/');
export const followUser = (id, data)=> API.patch(`/user/${id}/follow`, data);
export const unfollowUser = (id, data)=> API.patch(`/user/${id}/unfollow`, data);