import reducers from './reducers/index'
const configureStore = require('@reduxjs/toolkit').configureStore

const store = configureStore({reducer:reducers},{},window.__REDUX_DEVTOOLS_EXTENSION__ ())

export default store; 