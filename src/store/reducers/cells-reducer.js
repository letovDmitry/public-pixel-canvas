const SET_CELLS = 'SET-CELLS'
const SET_CURRENT_COLOR = 'SET-CURRENT-COLOR'

let initialState = {
    cells: [],
    currentColor: 'red'
}

const cellsReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SET_CELLS): {
            return {...state, cells: action.cells}
        }
        case (SET_CURRENT_COLOR): {
            return {...state, currentColor: action.currentColor}
        }
        default:
            return state
    }
}

export const setCellsAC = (cells) => {
    return {
        type: SET_CELLS,
        cells
    }
}

export const setCurrentColorAC = (currentColor) => {
    return {
        type: SET_CURRENT_COLOR,
        currentColor
    }
}

export default cellsReducer;