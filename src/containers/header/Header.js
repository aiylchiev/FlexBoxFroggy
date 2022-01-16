import React from 'react'
import classes from './Header.module.css'
import MainBlock from '../../components/UI/MainBlock'
import Title from '../navigation/Title'
import Navigation from '../navigation/Navigation'
import Card from '../../components/UI/Card'
import Button from '../../components/UI/Button'
import Indecator from '../navigation/Indecator'
import iconLeft from '../../assets/images/premium-icon-arrow-3634104.png'
import conRight from '../../assets/images/premium-icon-arrow-3634295.png'
import LevelModal from '../../components/UI/LevelModal'
import LevelContext from '../../store/LevelContext'
import Level from '../../components/levels/Level'
import LevelTwo from '../../components/levels/LevelTwo'
import { useState } from 'react'

function Header() {
    const [modalIndecator, setmodalIndecator] = useState(false)
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const levelHandler = () => {
        setisLoggedIn(true)
    }
    const logoutHandler = () => {
        setisLoggedIn(false)
    }
    const showModal = () =>{
        setmodalIndecator(true)
    }
    const hideModal = () => {
        setmodalIndecator(false)
    }
        return (
        <>
        <LevelContext.Provider value={{
            hideModal: hideModal,
            levelHandler: levelHandler,
            modalIndecator: modalIndecator,
            logoutHandler: logoutHandler, 
        }}>
            <header className={classes.header}>
                <Navigation>
                        <Title/>
                        <Card className={classes.cartBlock}>
                            <Button className={classes.arrow} onClick={logoutHandler}>
                                <img className={classes.Left} src={iconLeft} alt="/"/>
                            </Button>
                            {modalIndecator &&  <LevelModal/> }
                                <Indecator onClick={showModal} className={classes.levelIndecator}>уровень 2 из 16</Indecator>
                            <Button className={classes.arrow } onClick={levelHandler} >
                                <img className={classes.right} src={conRight} alt="/"/>
                            </Button>
                        </Card>
                </Navigation>
                    <MainBlock className={classes.MainBlock}>
                        {!isLoggedIn && <Level/>}
                        {isLoggedIn && <LevelTwo/>}
                    </MainBlock>
            </header>
            </LevelContext.Provider>
            </>
        )
}
export default Header;