import axios from 'axios';
import { returnErrors } from './errorAction';
import { tokenConfig } from './authAction';

export const deleteItem = (id) => (dispatch, getState) => {
    axios.delete(`/api/items/${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: 'DELETE_ITEM',
        payload: id
    }))
    .catch(err => returnErrors(err.response.data, err.response.status))
}

export const addItem = (item) => (dispatch, getState) => {
    axios.post('/api/items', item, tokenConfig(getState))   //don't forget to send the item
    .then(res => dispatch({
        type: 'ADD_ITEM',
        payload: res.data
    }))
    .catch(err => returnErrors(err.response.data, err.response.status))
}

export const getItems = () => dispatch => {
    //initiate the loading
    dispatch(setItemLoading());
    //call the api
    axios.get('/api/items')
    .then(res => {
        //console.log(res.data);
        return dispatch({
            type: 'GET_ITEMS',
            payload: res.data
        }); 
    })
    .catch(err => returnErrors(err.response.data, err.response.status))
}

export const setItemLoading = () => {
    return {
        type: 'ITEM_LOADING'
    }
}