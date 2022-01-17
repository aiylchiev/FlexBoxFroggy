import React from 'react'
import classes from './Level.module.css'
import { useState } from 'react'
import { levelOneValue } from '../../constants/constants'
import Numbers from '../UI/Numbers'
import { useContext } from 'react'
import LevelContext from '../../store/LevelContext'
import 'animate.css';


function Level() {
    const context = useContext(LevelContext)
    const [areaValue, setAreaValue] = useState('')
    const [formIsValid, setformIsValid] = useState()
    const [nextLevel, setNextLevel] = useState(false)
    const handleChange = (event) => {
        setAreaValue(event.target.value)
        setformIsValid(event.target.value === levelOneValue)
        setNextLevel(event.target.value === levelOneValue)
    }
    const nextClasses = `${classes.nextButton} ${nextLevel ? 'animate__animated animate__tada' : ''}`
    const btnClasses = `${classes.frogGreen} ${formIsValid ? classes.bump : ''}`
    return (
        <div className={classes.Level}>
            <div>
            <p className={classes.p}>Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь лягушонку <br/> Фроги и его друзьям написанием CSS кода! Направь этого лягушонка на лилию <br/> справа используя свойство <span className={classes.spans}>justify-content</span>, которое выравнивает элементы <br/> горизонтально и принимает следующие значения:</p>
            <ul>
                <li><span className={classes.spans}>flex-start:</span>Элементы выравниваются по левой стороне контейнера.</li>
                <li><span className={classes.spans}>flex-end:</span> Элементы выравниваются по правой стороне контейнера.</li>
                <li><span className={classes.spans}>center:</span> Элементы выравниваются по центру контейнера.</li>
                <li><span className={classes.spans}>space-between:</span>Элементы отображаются с одинаковыми отступами между </li>
                <li><span className={classes.spans}>space-around: </span>Элементы отображаются с одинаковыми отступами вокруг них</li>
            </ul>
            <p className={classes.p}> Например,<span className={classes.spans}> justify-content: flex-end;</span> сдвинет лягушонка вправо.</p>
            <div className={classes.blockTyping}>
            <Numbers  className={classes.numberList}/>
                <div className={classes.inputWrapper}>
                <span className={classes.pond}>#pond {"{"}</span>
                <div className={classes.display}>display: flex;</div>
                    <textarea 
                        type="text"
                        value={areaValue}
                        onChange={handleChange}
                    />
                    <div className={classes.pond}>{'}'}</div>
                    <button className={nextClasses} disabled={!nextLevel} onClick={context.levelHandler}>следующий</button>
                </div>
            </div>
            </div>
            <div className={classes['lili-frog']}>
            <div className={btnClasses}/>
            <div className={classes.greenKrug }/>
            </div>
        </div>
    )
}
export default Level;