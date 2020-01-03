import {
    createStore,
    applyMiddleware, compose
} from 'redux';
//import thunk from 'redux-thunk';
import logger from 'redux-logger'
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from './root-reducer';

// import { tokenValidator } from '../helpers/tokenValidation';

// const initialState = {};
 
// const middlewares = [logger];
// const store = createStore(rootReducer, applyMiddleware(...middlewares));
const store = () => {
    const middleware = [logger];
    return createStore(
        rootReducer,
        // initialState,
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
};
export default store();