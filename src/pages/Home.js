import React, {useContext} from 'react'
import { UserContext } from '../context/UserContext'

export default function Home(){

    const {currentUser} = useContext(UserContext)

    return(
        <div className='container p-5'>
            <h1 className='display-5 text-light'>
                {currentUser ? "Welcome buddy" : "Hi, sign up or sign in" }
            </h1>

        </div>
    )
}