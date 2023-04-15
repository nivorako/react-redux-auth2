import React, {useContext, useEffect, useRef, useState} from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

export function SignInModal() {

    const navigate = useNavigate()
    const { modalState, toggleModals, signIn } = useContext(UserContext)
    const [validation, setValidation] = useState("")
    const inputs = useRef([])
    const addInputs = el => {
        if(el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }
    
    const formRef = useRef()
    
    const handleForm = async (e) => {
        e.preventDefault()
        
        try{
            
            const cred = await signIn(
                inputs.current[0].value,
                inputs.current[1].value
            ) 
            // a voir tester
            // formRef.current.reset()
            setValidation("")
            toggleModals("close")
            navigate("/private/private-home")
        }catch{
           setValidation("woopsy, email and / or pwd incorrect")          
        }
       
    }
    const closeModal = () => {
        setValidation('')
        toggleModals("close")
    }

    return(
        <>
            {modalState.signInModal && (
                <div className='position-fixed top-0 vw-100 vh-100'>
                    <div 
                        className='w-100 h-100 bg-dark bg-opacity-75' 
                        onClick={() => closeModal()}>
                    </div>
                    <div 
                        className='position-absolute bg-light p-2 rounded-2 top-50 start-50 translate-middle'
                        style={{minWidth: "400px"}}
                    >
                        <div className='modal-dialog'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h5 className='modal-title'>Sign In</h5>
                                    <button className='btn-close' onClick={() => closeModal()}></button>
                                </div>
                                <div className='modal-body'>
                                    <form className='sign-up-form' onSubmit={handleForm} ref={formRef}>
                                        <div className='mb-3 d-flex flex-column' >
                                            <label 
                                                htmlFor='signInEmail' 
                                                className='form-label'
                                            >
                                                Email adress
                                            </label>
                                            <input 
                                                ref={addInputs}
                                                required
                                                name='email'
                                                type='email'
                                                className='form-controll'
                                                id='signInEmail'
                                            />
                                        </div>

                                        <div className='mb-3 d-flex flex-column' >
                                            <label htmlFor='signInPwd' className='form-label'>
                                                Password
                                            </label>
                                            <input 
                                                ref={addInputs}
                                                required
                                                name='pwd'
                                                type='password'
                                                className='form-controll'
                                                id='signInPwd'
                                            />
                                            <p className='text-danger mt-1'>
                                                {validation}
                                            </p>
                                        </div>

                                        <button className='btn btn-primary'>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            )}
        </>
    )
}