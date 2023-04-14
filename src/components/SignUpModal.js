import React from 'react'

export function SignUpModal() {
    return(
        <>
            <div className='position-fixed top-0 vw-100 vh-100'>
                <div className='w-100 h-100 bg-dark bg-opacity-75'>
                    <div 
                        className='position-absolute bg-light p-2 rounded-2 top-50 start-50 translate-middle'
                        style={{minWidth: "400px"}}
                    >
                        <div className='modal-dialog'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h5 className='modal-title'>Sign Up</h5>
                                    <button className='btn-close'></button>
                                </div>
                                <div className='modal-body'>
                                    <form className='sign-up-form'>
                                        <div className='mb-3 d-flex flex-column' >
                                            <label htmlFor='signUpEmail' className='form-label'>
                                                Email adress
                                            </label>
                                            <input 
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
                                                required
                                                name='pwd'
                                                type='password'
                                                className='form-controll'
                                                id='repeatPwd'
                                            />
                                            <p className='text-danger mt-1'></p>
                                        </div>
                                        <button className='btn btn-primary'>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}