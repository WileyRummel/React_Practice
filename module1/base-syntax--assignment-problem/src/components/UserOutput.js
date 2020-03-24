// should hold 2 paragraphs
import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>USERNAME: {props.userName}</p>
            <p>Para 2</p>
        </div>
    );
}
export default userOutput;