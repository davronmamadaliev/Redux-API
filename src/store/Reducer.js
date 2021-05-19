import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const slice = createSlice({
    name: 'post',
    initialState: {
        posts: []
    },
    reducers: {
        getFromResponse: (state, action) => {
            state.posts = action.payload
        },
        postFromResponse: (state, action) => {
            state.posts.unshift(action.payload)
        },
        putFromResponse: (state, action) => {
            state.posts.map(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title
                    item.body = action.payload.body
                }
            })
        },
        deleteFromResponse:(state, action)=>{
            alert('Delete Post')
        }
    }
})

export function getPosts() {
    return function (dispatch) {
        axios({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'get'
        }).then(res => {
            dispatch({
                type: 'post/getFromResponse',
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: 'post/getFromResponse',
                payload: err.data
            })
        })
    }
}

export function setPosts(data) {
    return function (dispatch) {
        axios({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'post',
            data
        }).then(res => {
            dispatch({
                type: 'post/postFromResponse',
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: 'post/postFromResponse',
                payload: err.data
            })
        })
    }
}


export function updatePost(data) {
    return function (dispatch) {
        axios({
            url: 'https://jsonplaceholder.typicode.com/posts/'+data.id,
            method: 'put',
            data
        }).then(res => {
            dispatch({
                type: 'post/putFromResponse',
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: 'post/putFromResponse',
                payload: err.data
            })
        })
    }
}



export function deletePost(data) {
    return function (dispatch) {
        axios({
            url: 'https://jsonplaceholder.typicode.com/posts/'+data,
            method: 'delete',
            data
        }).then(res => {
            dispatch({
                type: 'post/deleteFromResponse',
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: 'post/deleteFromResponse',
                payload: err.data
            })
        })
    }
}


export default slice.reducer;