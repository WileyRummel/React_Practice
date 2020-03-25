import React from 'react'

const Char = (props) => {
    const style = {
        'display' : 'inline-block',
        'padding': '16px',
        'margin': '3px',
        'border': '2px solid black'
    };

    return (
        <div style={style} onClick={props.clicked}>
           {props.character}
        </div>
        )
}

export default Char;