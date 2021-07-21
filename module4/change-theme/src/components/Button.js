import React, {useContext} from "react"
import {ThemeContext} from "../ContextProvider"
import { Button, Dropdown, ButtonGroup } from "react-bootstrap"

const Btn = props => {

    const {className, changeTheme, darkTheme, lightTheme, whackyTheme, changeLayout} = useContext(ThemeContext)

    return (
     
            <Dropdown as={ButtonGroup}>
                <Button onClick={changeTheme} className={`${className}-theme`} variant="info">Switch Theme</Button>
                <Dropdown.Toggle  split variant="info" id="dropdown-split-basic" />

                <Dropdown.Menu>
                <Dropdown.Item onClick={darkTheme}>Dark Theme</Dropdown.Item>
                <Dropdown.Item onClick={lightTheme}>Light Theme</Dropdown.Item>
                <Dropdown.Item onClick={whackyTheme}>Whacky Theme</Dropdown.Item>
                <Dropdown.Item onClick={changeLayout}>Layout Change Theme</Dropdown.Item>
                </Dropdown.Menu>

             </Dropdown>
    )
}

export default Btn