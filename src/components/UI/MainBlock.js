import React from 'react'
function MainBlock(props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}
export default MainBlock;