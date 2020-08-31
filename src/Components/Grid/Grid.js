import React from 'react';
import c from './Grid.module.css'
import Cell from '../Cells/Cell';
import { setCellsAC, setCurrentColorAC } from '../../store/reducers/cells-reducer';
import { getCells, changeCells } from '../../api/api';
import { connect } from 'react-redux';
import ColorPicker from '../ColorPicker/ColorPicker';


class Grid extends React.Component {
    constructor(props) {
        super(props);
        getCells((err, cells) => this.props.setCells(cells));
        window.state1 = this.props
    } 

    currentColor = this.props.currentColor
    changeColor = (properties) => {
        changeCells(properties)
    }
    changeCurrentColor = (currentColor) => {
        this.props.setCurrentColor(currentColor)
    }
    render () {
        return (
            <div>
                <ColorPicker changeCurrentColor={this.changeCurrentColor} />
                <div>{this.props.currentColor}</div>
                <div className={c.gridWrapper}>
                    {this.props.cells.map((c, i) => <Cell currentColor={this.props.currentColor} changeColor={this.changeColor} number={i} color={c} />)}
                </div> 
            </div>
        
        )
    }
    
}

let mapStateToProps = (state) => {
    return {
        cells: state.cells.cells,
        currentColor: state.cells.currentColor
    }
}

const GridContainer = connect(mapStateToProps, {
    setCells: setCellsAC,
    setCurrentColor: setCurrentColorAC
})(Grid)

export default GridContainer

