import React from "react";
const LevelContext = React.createContext({
    hideModal: () => {},
    modalIndecator: false,
    levelHandler: () => {},
    logoutHandler: () => {},
    showModal: () => {},
    levelThreeHandler: () => {},
    hideLevelThree: () => {},
})
export default LevelContext;