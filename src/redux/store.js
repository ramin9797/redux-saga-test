import {applyMiddleware, createStore} from "redux"
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga"
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const configureStore = preloadedStore =>createStore(
    reducer,
    preloadedStore,
    applyMiddleware(sagaMiddleware),
)



const store = configureStore();
sagaMiddleware.run(rootSaga);

export default store;