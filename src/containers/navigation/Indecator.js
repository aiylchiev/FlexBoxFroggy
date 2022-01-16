import React from 'react'
import classes from './Indecator.module.css'

function Indecator(props) {
    return (
        <div onClick={props.onClick} className={classes.levelIndecator}>
            {props.children}
        </div>
    )
}
export default Indecator;