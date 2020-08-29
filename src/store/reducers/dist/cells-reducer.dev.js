"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setCurrentColorAC = exports.setCellsAC = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_CELLS = 'SET-CELLS';
var SET_CURRENT_COLOR = 'SET-CURRENT-COLOR';
var initialState = {
  cells: [],
  currentColor: 'ff0000'
};

var cellsReducer = function cellsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_CELLS:
      {
        return _objectSpread({}, state, {
          cells: action.cells
        });
      }

    case SET_CURRENT_COLOR:
      {
        return _objectSpread({}, state, {
          currentColor: action.currentColor
        });
      }

    default:
      return state;
  }
};

var setCellsAC = function setCellsAC(cells) {
  return {
    type: SET_CELLS,
    cells: cells
  };
};

exports.setCellsAC = setCellsAC;

var setCurrentColorAC = function setCurrentColorAC(currentColor) {
  return {
    type: SET_CURRENT_COLOR,
    currentColor: currentColor
  };
};

exports.setCurrentColorAC = setCurrentColorAC;
var _default = cellsReducer;
exports["default"] = _default;