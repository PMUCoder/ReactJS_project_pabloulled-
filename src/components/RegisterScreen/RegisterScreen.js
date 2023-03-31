import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'
import './RegisterScreen.scss'

export const RegisterScreen = () => {

    const { register } = useContext (LoginContext)

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
        register(values)
    }

    return (
        <div className="loginScreen">
            <div className="login">
                <h2>Registrate como usuario</h2>
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
                    <button className='btn btn-success me-2' type='submit'>Crear Usuario</button>
                    <Link className='btn btn-primary' to="/login">Login</Link>
                </form>

            </div>
        </div>
    )
}