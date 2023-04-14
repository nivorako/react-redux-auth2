import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export default function Navbar() {
    const {toggleModals} = useContext(UserContext)
    return(
        <nav className='navbar navbar-light bg-light px-4'>
            <Link 
                to="/"
                className='navbar-brand'
            >
                AuthJS
            </Link>
            <div>
                <button 
                    className='btn btn-primary'
                    onClick={() => toggleModals("signUp")}
                >
                    Sign Up
                </button>
                <button 
                    className='btn btn-primary ms-2'
                    onClick={() => toggleModals("signIn")}
                >
                    Sign In
                </button>
                <button 
                    className='btn btn-danger ms-2'
                    
                >
                    Log Out
                </button>
            </div>
        </nav>
    )
}