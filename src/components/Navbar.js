import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import {auth} from "../firebase-config"

export default function Navbar() {

    const {toggleModals} = useContext(UserContext)
    
    const navigate = useNavigate()

    const logOut = async () => {
        try {
            await signOut(auth)
        } catch {
            alert("for some reason we cannot deconnect, please check your internet connexion and retry !!")
        }
    }
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
                    onClick={logOut}
                >
                    Log Out
                </button>
            </div>
        </nav>
    )
}