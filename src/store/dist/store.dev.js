"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cellsReducer = _interopRequireDefault(require("./reducers/cells-reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _require = require("redux"),
    combineReducers = _require.combineReducers,
    createStore = _require.createStore;

var reducers = combineReducers({
  cells: _cellsReducer["default"]
});
var store = createStore(reducers);
window.state = store.getState();
var _default = store;
exports["default"] = _default;