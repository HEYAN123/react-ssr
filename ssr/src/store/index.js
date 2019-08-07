import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { homeReducer } from '../containers/Home/store';

const reducer = combineReducers({
    home: homeReducer
});

// const store = createStore(reducer, applyMiddleware(thunk));

// export default store;
export default createStore(reducer, applyMiddleware(thunk));
