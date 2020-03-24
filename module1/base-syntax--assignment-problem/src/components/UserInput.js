//should hold a input text
import React from 'react';

const userInput = (props) => {
    const style = {
        border: '1px solid red',
    }
    return <input type="text" 
            style={style}
            onChange={props.changed} 
            value={props.currentName}/>   
}
export default userInput;