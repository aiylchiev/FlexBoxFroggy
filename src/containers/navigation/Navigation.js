import React from 'react'
import classes from './Navigation.module.css'
function Navigation(props) {
    return (
        <nav className={classes.navigation}>
            {props.children}
        </nav>
    )
}

export default Navigation