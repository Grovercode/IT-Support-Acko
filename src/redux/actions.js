import * as types from './actionType'
import axios from "axios";

const GET_REQUESTS_API = "https://itservice.up.railway.app/api/requests"
const REQUEST_ENDPOINT = "https://itservice.up.railway.app/api/request"

const getUsers = (users) => ({
    type : types.GET_USERS,
    payload: users,
})

const userDeleted = () => ({
    type: types.DELETE_USER,
})

const userAdded = ()=> ({
    type: types.ADD_USER,
})

const getUser = (user)=> ({
    type: types.GET_SINGLE_USER,
    payload:user.data[0]
})

const userUpdated = ()=> ({
    type: types.UPDATE_USER,
})

export const loadUsers = () =>{
    return function(dispatch)
    {
        axios.get(`${GET_REQUESTS_API}`)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(getUsers(resp.data))
        }).catch(error => console.log("error"))
    }

}

export const deleteUser = (requestId) =>{
    
    return function(dispatch)
    {
        axios.delete(`${REQUEST_ENDPOINT}/${requestId}`)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(userDeleted())
            dispatch(loadUsers())
        }).catch(error => console.log("error"))
    }

}

export const addUser = (user) =>{
    
    return function(dispatch)
    {
        axios.post(`${REQUEST_ENDPOINT}`, user)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(userAdded())
            dispatch(loadUsers())
        }).catch(error => console.log("error"))
    }

}

export const getSingleUser = (requestId) =>{
    
    return function(dispatch)
    {
        axios.get(`${REQUEST_ENDPOINT}/${requestId}`)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(getUser(resp.data))
        }).catch(error => console.log("error"))
    }

}

export const updateUser = (user, requestId) =>{
    
    return function(dispatch)
    {
        axios.put(`${REQUEST_ENDPOINT}/${requestId}`, user)
        .then((resp) => {
            console.log("response for update is: ", resp)
            dispatch(userUpdated())
        }).catch(error => console.log("error"))
    }

}
