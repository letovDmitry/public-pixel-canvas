import React from 'react'

export default function ColorPicker(props) {
    return (
        <div>
            <input type="color" onChange={(e) => props.changeCurrentColor(`${e.target.value}`.replace(/#/gm, ''))}/>
        </div>
    )
}
