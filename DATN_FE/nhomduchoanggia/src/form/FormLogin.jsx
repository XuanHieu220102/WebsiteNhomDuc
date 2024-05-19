import React, { useState } from 'react'
import { useContext } from 'react'
import { Button, Modal, Input } from 'antd';
import { AppContext } from '../context/AppProvider';
import instance from '../api/api';
export const FormLogin = () => {
    const { isStatusLogin, setIsStatusLogin, setIsModalOpen } = useContext(AppContext)
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleBtnLogin = async (e) => {
        try {
            console.log(formData);
            const response = await instance.post("/auth/login", formData);
            setIsModalOpen(false);
            console.log(response);
            const arr = response.data.split('/');
            const userId = arr[0];
            const role = arr[1];
            const username = arr[2]
            const token = arr[3];
            localStorage.setItem('userId', userId);
            localStorage.setItem('role', role);
            localStorage.setItem('username', username);
            localStorage.setItem('token', token);
            setFormData({
                username:'',
                password:'',
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='modal-login'>
            <h1 className='login-title'>Login</h1>
            <div className='form-login'>
                <label htmlFor=''>Username</label>
                <Input
                    name='username' // Đặt đúng name
                    placeholder='Username'
                    className='login-username'
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <label htmlFor=''>Password</label>
                <Input
                    name='password' // Đặt đúng name
                    type='password'
                    placeholder='Password'
                    className='login-password'
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </div>
            {/* <p style={{color:'red'}}>{err}</p> */}
            <Button className='btn-login' onClick={handleBtnLogin}>
                Đăng nhập
            </Button>
            <div className='btn-sub-login'>
                <p className='btn-forgot-password' onClick={() => setIsStatusLogin("form-forgot-password")}>Fortgot Username/ Password</p>
                {
                    isStatusLogin !== "form-create-account" ? (
                        <p className='btn-create-account' onClick={() => setIsStatusLogin("form-create-account")}>Create your account</p>
                    ) :
                        <p className='btn-create-account' onClick={() => setIsStatusLogin("form-login")}>Already have an account</p>
                }
            </div>
        </div>
    )
}
