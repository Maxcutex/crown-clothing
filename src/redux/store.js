import {
    createStore,
    applyMiddleware
} from 'redux';

import { persistStore} from 'redux-persist'
//import thunk from 'redux-thunk';
import logger from 'redux-logger'
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from './root-reducer';

// import { tokenValidator } from '../helpers/tokenValidation';

// const initialState = {};
 
const middlewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// const store = () => {
//     const middleware = [logger];
//     return createStore(
//         rootReducer,
//         // initialState,
//         compose(
//             applyMiddleware(...middleware),
//             window.__REDUX_DEVTOOLS_EXTENSION__ &&
//             window.__REDUX_DEVTOOLS_EXTENSION__()
//         )
//     );
// };
export const persistor = persistStore(store);

export default {store, persistor}

