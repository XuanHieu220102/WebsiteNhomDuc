import React, { useContext, useState } from 'react'
import { Input, Button} from 'antd'
import { AppContext } from '../context/AppProvider'

export const FormForgotPassword = () => {
    const {isStatusLogin, setIsStatusLogin} = useContext(AppContext)
    const [email, setEmail] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleForgotPassword = () => {
        console.log(email);
    }
  return (
    <div className='modal-forgot-password'>
                <h1 className='forgot-password-title'>Forgot password</h1>
                <div className='form-register'>
                    <span className='email-register'>Email: </span>
                    <Input
                        placeholder='Please enter your email'
                        className='forgot-account'
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                {/* <p style={{color:'red'}}>{err}</p> */}
                <Button className='btn-login' onClick={handleForgotPassword}>                  
                    Quên mật khẩu
                </Button>
                <div className='btn-sub-login btn-sub-login-2'>
                    <p className='btn-forgot-password' onClick={() => setIsStatusLogin("form-login")}>
                        Already have an account
                    </p>
                    {isStatusLogin !== "form-create-account" ? (
                        <p className='btn-create-account' onClick={() => setIsStatusLogin("form-create-account")}>
                            Create your account
                        </p>
                    ) : (
                        <p className='btn-create-account' onClick={() => setIsStatusLogin("form-login")}>
                            Already have an account
                        </p>
                    )}
                </div>
            </div>
  )
}
