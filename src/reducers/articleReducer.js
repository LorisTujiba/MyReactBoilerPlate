import {
    FETCH_TRENDINGS,
    FETCH_DETAIL,
    FETCH_VIRALS,
} from '../constants/types';

export function trendings(state = {}, action) {
  switch (action.type){
    case FETCH_TRENDINGS+'_FULFILLED':
      return action.payload;
    default:
      return state;
  }
}

export function trendingsIsLoading(state = {}, action) {
  switch( action.type){
    case FETCH_TRENDINGS+'_LOADING':
    return action.isLoading;
    default:
    return state;
  }
}

export function virals(state = {}, action) {
  switch (action.type){
    case FETCH_VIRALS+'_FULFILLED':
    return action.payload;
    default:
    return state;
  }
}

export function detail(state = {}, action) {
  switch (action.type){
    case FETCH_DETAIL+'_FULFILLED':
      return action.payload;
    default:
      return state;
  }
}

export function detailIsLoading(state = {}, action) {
  switch( action.type){
    case FETCH_DETAIL+'_LOADING':
    return action.isLoading;
    default:
    return state;
  }
}
