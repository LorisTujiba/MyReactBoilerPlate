import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

import {
  FETCH_DETAIL, FETCH_TRENDINGS, FETCH_VIRALS
} from '../constants/types';

/*=====================
  End of Local Purposes
*/

export function itemsHasErrored(action,bool) {
    return {
        type: action+'_ERROR',
        hasErrored: bool
    };
}
export function itemsIsLoading(action,bool) {
    return {
        type: action+'_LOADING',
        isLoading: bool
    };
}
export function itemsFetchDataSuccess(action,payload) {
    return {
        type: action+'_FULFILLED',
        payload
    };
}

export const fetch_trendings = () => async dispatch => {
  dispatch(itemsIsLoading(FETCH_TRENDINGS,true))
  try{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    //console.log('Response',response)
    dispatch(itemsIsLoading(FETCH_TRENDINGS,false))
    dispatch(itemsFetchDataSuccess(FETCH_TRENDINGS,response.data));
  } catch(error){
    console.warn("Error - Fetch Trendings : ", error);
    dispatch(itemsHasErrored(FETCH_TRENDINGS,true));
  }
};

export const fetch_virals = () => async dispatch => {
  dispatch(itemsIsLoading(FETCH_VIRALS,true))
  try{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
    //console.log('Response',response)
    dispatch(itemsIsLoading(FETCH_VIRALS,false))
    dispatch(itemsFetchDataSuccess(FETCH_VIRALS,response.data));
  } catch(error){
    console.warn("error", error);
    dispatch(itemsHasErrored(FETCH_VIRALS,true));
  }
};


export const fetch_detail = (id) => async dispatch => {
  dispatch(showLoading())
  dispatch(itemsIsLoading(FETCH_DETAIL,true))
  try{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //console.log('Response',response)
    dispatch(itemsIsLoading(FETCH_DETAIL,false))
    dispatch(itemsFetchDataSuccess(FETCH_DETAIL,response.data));
    dispatch(hideLoading())
  } catch(error){
    console.warn("error", error);
    dispatch(itemsHasErrored(FETCH_DETAIL,true));
  }
};
