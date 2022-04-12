import { combineReducers } from 'redux';


import CanvasReducer from './reducers/CanvasReducer';


const rootReducer = combineReducers({

    canvas: CanvasReducer,

});

export default rootReducer;