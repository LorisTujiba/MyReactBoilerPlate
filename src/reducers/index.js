import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'

import {trendings, trendingsIsLoading, virals, detail, detailIsLoading} from './articleReducer';

export default combineReducers({
  trendings,
  trendingsIsLoading,
  virals,
  detail,
  detailIsLoading,
  loadingBar: loadingBarReducer,
});
