import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './LoginScreen.scss'

export const LoginScreen = () => {

    const { user, loginAttempt } = useContext (LoginContext)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        loginAttempt(values)
    }

    return (
        <div className="loginScreen">
            <div className="login">
                <h2>Login Page</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input
                        value={values.nombre}
                        type={'text'}
                        onChange={handleInputChange}
                        className='form-control'
                        placeholder='Nombre'
                        name='nombre'
                    />
                    <input
                        value={values.email}
                        type={'text'}
                        onChange={handleInputChange}
                        className='form-control my-3'
                        placeholder='email'
                        name='email'
                    />
                    <input
                        value={values.password}
                        type={'password'}
                        onChange={handleInputChange}
                        className='form-control my-3'
                        placeholder='Password'
                        name='password'
                    />
                    <button className='btn btn-primary' type='submit'>Login</button>
                </form>

            </div>
        </div>
    )
}