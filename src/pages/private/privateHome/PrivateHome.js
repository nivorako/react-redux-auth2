import React from 'react'
import gif from "../../../assets/giphy.gif"

export default function PrivateHome(){
    return(
        <div className='container p-5'>
            <h1 className='display-3 text-light mb-4'>
                Homeswee private home
            </h1>
            <img src={gif} alt='image animée'></img>
        </div>
    )
}