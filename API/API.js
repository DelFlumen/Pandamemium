import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY":"6503ad9a-a837-4f6e-b6bb-c995694e446c"
}});

export const usersAPI = {
    getUsers (currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}
}

export const followAPI = {
    followUser (userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollowUser (userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}