import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { homeReducer } from '../containers/Home/store';

const reducer = combineReducers({
    home: homeReducer
});

// const store = createStore(reducer, applyMiddleware(thunk));

// export default store;
// export default createStore(reducer, applyMiddleware(thunk));

// 服务端store
export const getServerStore = createStore(reducer,applyMiddleware(thunk));

// 客户端store，以服务器注入全局的state或者空初始化状态
export const getClientStore = createStore(
    reducer,
    global.context ? window.context.state : {},
    applyMiddleware(thunk)
)