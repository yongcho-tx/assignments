import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import {DrugContext} from '../context/DrugProvider.js'


function Auth(props) {

    const initInputs = { username: "", password: "" }
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const { signup, login, errMsg, resetAuthErr, token } = useContext(DrugContext)

    const handleChange = e => {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    const handleSignup = e => {
        e.preventDefault()
        signup(inputs)
    }
    
    const handleLogin = e => {
        e.preventDefault()
        login(inputs)
    }

    const toggleForm = () => {
        setToggle(prev => !prev)
        resetAuthErr()
    }
        return (
            <div className="auth-container">
                { token ?
                    <h1>Search RX Drug-Drug Interactions App</h1>
                :
                    <h1>Login to Do More</h1>
                }   
                { !toggle ?
                    <>
                        <AuthForm
                            handleChange={handleChange}
                            handleSubmit={handleSignup}
                            inputs={inputs}
                            btnText="Sign up"
                            errMsg={errMsg}
                        />
                    <p onClick={toggleForm}>Already a member?</p>
                    </>
                :
                    <>
                        <AuthForm
                            handleChange={handleChange}
                            handleSubmit={handleLogin}
                            inputs={inputs}
                            btnText="Login"
                            errMsg={errMsg}
                        />
                        <p onClick={toggleForm}>Not a member?</p>
                    </>
                }
            </div>
        )
        
    }


export default Auth