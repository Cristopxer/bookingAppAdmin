import React, { useContext, useState } from 'react'
import { AuthContext } from "../../context/AuthContext"
import axios from 'axios'
import './login.scss'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const { loading, error, dispatch } = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const navitate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("/auth/login", credentials)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
            navitate("/")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
        }
    }

    return (
        <div className="login">            
            <div className="loginWrapper">
                <div className="lContainer">
                    <input type="text" placeholder='username' id='username' onChange={handleChange} className="lInput" />
                    <input type="password" placeholder='password' id='password' onChange={handleChange} className="lInput" />
                    <button disabled={loading} className="lButton" onClick={handleClick}>Login</button>
                    {error && <span>{error.message}</span>}
                    <hr />
                    <p className='lText'> By signing in or creating an account, you agree with our Terms & Conditions and Privacy Statement All rights reserved.</p>
                    <hr />
                    <p>Developed 💙 by Cristopher Ortiz</p>
                </div>
            </div>
        </div>
    )
}

export default Login