import React from 'react'
import classes from './LevelTwo.module.css'
import { useState } from 'react'
import { levelTwoValue } from '../../constants/constants'
import Numbers from '../UI/Numbers'
import { useContext } from 'react'
import LevelContext from '../../store/LevelContext'
function LevelTwo() {
    const context = useContext(LevelContext)
    const [levelInput, setLevelInput] = useState('')
    const [formInvalid, setFormInvalid] = useState()
    const [nextLevel, setNextLevel] = useState(false)
    const areaChangeHandler = (event) => {
        setLevelInput(event.target.value)
        setFormInvalid(event.target.value === levelTwoValue)
        setNextLevel(event.target.value === levelTwoValue)
    }
    const nextClasses = `${classes.nextButton} ${nextLevel ? classes.nextAnimation : ''}`
    const greenClasses = `${classes.frogGreen} ${formInvalid ? classes.bump : ''}`
    const yellowClasses = `${classes.frogYeelow} ${formInvalid ? classes.bumpYeelow : ''}`
    return (
        <div>
            <div className={classes.Level}>
                <div>
                <p className={classes.p}>Используй <span className={classes.spans}>justify-content</span> еще раз, чтоб помочь этим лягушатам попасть на их <br/>лилии. Помни, что это свойство CSS выравнивает элементы горизонтально <br/>и принимает следующие значения:</p>
                <ul>
                    <li><span className={classes.spans}>flex-start:</span>Элементы выравниваются по левой стороне контейнера.</li>
                    <li><span className={classes.spans}>flex-end:</span> Элементы выравниваются по правой стороне контейнера.</li>
                    <li><span className={classes.spans}>center:</span> Элементы выравниваются по центру контейнера.</li>
                    <li><span className={classes.spans}>space-between:</span>Элементы отображаются с одинаковыми отступами между </li>
                    <li><span className={classes.spans}>space-around: </span>Элементы отображаются с одинаковыми отступами вокруг них</li>
                </ul>
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
                        <div onClick={context.hideLevelThree}>
                        <button className={nextClasses} disabled={!nextLevel} onClick={context.levelThreeHandler}>следующий</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className={classes['lili-frog']}>
                    <div className={greenClasses}/>
                    <div className={yellowClasses}/>
                    <div className={classes.greenKrug }/>
                    <div className={classes.yellowKrug}/>
                </div>
        </div>
        </div>
    )
}
export default LevelTwo;