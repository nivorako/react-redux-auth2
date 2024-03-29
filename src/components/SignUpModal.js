import React, {useContext, useEffect, useRef, useState} from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

export function SignUpModal() {

    const navigate = useNavigate()
    const { modalState, toggleModals, signUp } = useContext(UserContext)
    const [validation, setValidation] = useState("")
    const inputs = useRef([])
    const addInputs = el => {
        if(el && !inputs.current.includes(el)) {
            inputs.current.push(el)
            // console.log("el :", el)
            // console.log("inputs.current :", inputs.current)
        }
    }
    
    const formRef = useRef()
    
    const handleForm = async (e) => {
        e.preventDefault()
        
        if((inputs.current[1].value.length || inputs.current[2].value.length) < 6){
            setValidation("Six characters min")
            return
        }
        if(inputs.current[1].value !== inputs.current[2].value){
            setValidation('Password do not match')
            return
        }
        try{
            
            const cred = await signUp(
                inputs.current[0].value,
                inputs.current[1].value
            ) 
            formRef.current.reset()
            setValidation("")
            //alert('opération réussi')
            toggleModals("close")
            navigate("/private/private-home")
        }catch(err){
           
            if(err.code === "auth/invalid-email"){
                setValidation("invalid email")
            }
            else if(err.code === "auth/email-already-in-use"){
                setValidation("email already used")
            }
          
        }
       
    }
    const closeModal = () => {
        setValidation('')
        toggleModals("close")
    }

    return(
        <>
            {modalState.signUpModal && (
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
                                    <h5 className='modal-title'>Sign Up</h5>
                                    <button className='btn-close' onClick={() => closeModal()}></button>
                                </div>
                                <div className='modal-body'>
                                    <form className='sign-up-form' onSubmit={handleForm} ref={formRef}>
                                        <div className='mb-3 d-flex flex-column' >
                                            <label 
                                                htmlFor='signUpEmail' 
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
                                                id='signUpEmail'
                                            />
                                        </div>

                                        <div className='mb-3 d-flex flex-column' >
                                            <label htmlFor='signUpPwd' className='form-label'>
                                                Password
                                            </label>
                                            <input 
                                                ref={addInputs}
                                                required
                                                name='pwd'
                                                type='password'
                                                className='form-controll'
                                                id='signUpPwd'
                                            />
                                        </div>

                                        <div className='mb-3 d-flex flex-column' >
                                            <label htmlFor='repeatPwd' className='form-label'>
                                                Repeat Password
                                            </label>
                                            <input
                                                ref={addInputs} 
                                                required
                                                name='pwd'
                                                type='password'
                                                className='form-controll'
                                                id='repeatPwd'
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