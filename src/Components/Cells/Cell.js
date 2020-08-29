import React from 'react'
import c from './Cells.module.css'
import * as axios from 'axios';

export default function Cell (props) {
    let cellStyles = {
        backgroundColor: props.color
    }
    
    return (
        <div onClick={(e) => axios.get(`/colors?color=${props.currentColor}&cell=${props.number}`).then(res => console.log(res.data))} style={cellStyles} className={c.cell}>
        </div>
    ) 
    
    
}
