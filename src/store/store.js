import cellsReducer from './reducers/cells-reducer'
const { combineReducers, createStore } = require("redux")


let reducers = combineReducers({
    cells: cellsReducer,
})

let store = createStore(reducers)

window.state = store.getState()

export default store