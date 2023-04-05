import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './LoginScreen.scss'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {

    const { login, googleLogin } = useContext (LoginContext)

    const [values, setValues] = useState({
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
        login(values)
    }

    return (
        <div className="bg-primary loginScreen">
            <div className="login">
                <h2>Login Page</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
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
                    <button className='btn btn-primary me-2' type='submit'>Login</button>
                    <Link className='btn btn-success' to="/register">Registrate</Link>
                </form>

                <button className='btn btn-outline-primary mt-3' onClick={googleLogin}>Login con tu cuenta Google</button>


            </div>
        </div>
    )
}