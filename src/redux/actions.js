import * as types from './actionType'
import axios from "axios";


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
        axios.get(`${"https://itservice.up.railway.app/api/requests"}`)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(getUsers(resp.data))
        }).catch(error => console.log("error"))
    }

}

export const deleteUser = (requestId) =>{
    
    return function(dispatch)
    {
        axios.delete(`${"https://itservice.up.railway.app/api/request"}/${requestId}`)
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
        axios.post(`${"https://itservice.up.railway.app/api/request"}`, user)
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
        axios.get(`${"https://itservice.up.railway.app/api/request"}/${requestId}`)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(getUser(resp.data))
        }).catch(error => console.log("error"))
    }

}

export const updateUser = (user, requestId) =>{
    
    return function(dispatch)
    {
        axios.put(`${"https://itservice.up.railway.app/api/request"}/${requestId}`, user)
        .then((resp) => {
            console.log("response for update is: ", resp)
            dispatch(userUpdated())
        }).catch(error => console.log("error"))
    }

}
