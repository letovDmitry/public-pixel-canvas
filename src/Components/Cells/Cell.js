import React from 'react'
import c from './Cells.module.css'
import * as axios from 'axios';

export default function Cell (props) {
    let cellStyles = {
        backgroundColor: props.color
    }
    
    return (
        <div onClick={(e) => props.changeColor({cell: props.number, color:props.currentColor})} style={cellStyles} className={c.cell}>
        </div>
    ) 
    
    
}
