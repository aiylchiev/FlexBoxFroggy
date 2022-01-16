import React from 'react'
import Card from './Card'
import classes from './ModalRoot.module.css'
import  { useContext } from 'react'
import LevelContext from '../../store/LevelContext'
function ModalRoot() {
    const ctxData = useContext(LevelContext)
    return (
        <>
        {ctxData.modalIndecator && (
            <Card className={classes.levelWrapper}>
            <Card className={classes.toltip}>
            <Card className={classes.levels}>
                <button className={classes.levelMarker} onClick={ctxData.logoutHandler}>1</button>
                <button className={classes.levelMarker} onClick={ctxData.levelHandler}>2</button>
                <div className={classes.closeModal} onClick={ctxData.hideModal}>Сбросить</div>
            </Card>
        </Card>
        </Card>
        )}
        </>
    )
}
export default ModalRoot;