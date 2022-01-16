import React from 'react'
import classes from './LevelThree.module.css'
import Numbers from '../UI/Numbers'
import { useState } from 'react'
import { levelThreeValue } from '../../constants/constants'
function LevelThree() {
    const [levelInput, setlevelInput] = useState('')
    const [nextLevel, setnextLevel] = useState()
    const [formInvalid, setformInvalid] = useState(false)
    const areaChangeHandler = (e) => {
        setlevelInput(e.target.value)
        setformInvalid(e.target.value === levelThreeValue)
        setnextLevel(e.target.value === levelThreeValue)
    }
    const nextClasses =  `${classes.nextButton} ${nextLevel ? classes.nextAnimation : ''}`
    const greenClasses = `${classes.frogGreen} ${formInvalid ? classes.bump : ''}`
    const yellowClasses = `${classes.frogYeelow} ${formInvalid ? classes.bumpYeelow : ''}`
    const redClasses = `${classes.frogRed} ${formInvalid ? classes.bumpRed : ''}`
    return (
        <div>
            <div className={classes.Level}>
            <div>
            <p className={classes.p}>Помоги всем трем лягушатам найти их лилии, просто используя <span className={classes.spans}>justify-content</span>.<br/> В этот раз, у лилий много пространства вокруг.</p>
            <p>Если ты чувствуешь, что забыл возможные значения свойства, ты можешь навести <br/> курсор на название свойства, чтоб посмотреть их. Попробуй навести курсор на <br/> <span className={classes.spans}>justify-content</span>.</p>
            <div className={classes.blockTyping}>
            <Numbers className={classes.numberList}/>
                <div className={classes.inputWrapper}>
                <span className={classes.pond}>#pond {"{"}</span>
                <div className={classes.display}>display: flex;</div>
                    <textarea 
                        value={levelInput}
                        type="text"
                        onChange={areaChangeHandler}
                    />
                    <div className={classes.pond}>{'}'}</div>
                    <button className={nextClasses} disabled={!nextLevel} >следующий</button>
                </div>
            </div>
            </div>
            <div className={classes['lili-frog']}>
                <div className={greenClasses}/>
                <div className={yellowClasses}/>
                <div className={redClasses}/>
                <div className={classes.greenKrug }/>
                <div className={classes.yellowKrug}/>
                <div className={classes.redKrug}/>
            </div>
        </div>
    </div>
    )
}

export default LevelThree
