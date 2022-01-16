import React from 'react'


function Indecator(props) {
    return (
        <div onClick={props.onClick} className={props.className}>
            {props.children}
        </div>
    )
}
export default Indecator;