import React, { useContext, useEffect, useState } from 'react';
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    DatePicker,
    Alert
} from 'antd';
import { AppContext } from '../context/AppProvider';
import instance from '../api/api';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const { Option } = Select
const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select
            style={{
                width: 70,
            }}
        >
            <Option value="84">+84</Option>
            <Option value="86">+86</Option>
        </Select>
    </Form.Item>
);

const vietnamProvinces = [
    'Hà Nội',
    'Hồ Chí Minh',
    'Đà Nẵng',
    'Bắc Giang',
    'Bắc Kạn',
    'Bạc Liêu',
    'Bắc Ninh',
    'Bến Tre',
    'Bình Định',
    'Bình Dương',
    'Bình Phước',
    'Bình Thuận',
    'Cà Mau',
    'Cần Thơ',
    'Cao Bằng',
    'Đắk Lắk',
    'Đắk Nông',
    'Điện Biên',
    'Đồng Nai',
    'Đồng Tháp',
    'Gia Lai',
    'Hà Giang',
    'Hà Nam',
    'Hà Tĩnh',
    'Hải Dương',
    'Hải Phòng',
    'Hậu Giang',
    'Hòa Bình',
    'Hưng Yên',
    'Khánh Hòa',
    'Kiên Giang',
    'Kon Tum',
    'Lai Châu',
    'Lâm Đồng',
    'Lạng Sơn',
    'Lào Cai',
    'Long An',
    'Nam Định',
    'Nghệ An',
    'Ninh Bình',
    'Ninh Thuận',
    'Phú Thọ',
    'Quảng Bình',
    'Quảng Nam',
    'Quảng Ngãi',
    'Quảng Ninh',
    'Quảng Trị',
    'Sóc Trăng',
    'Sơn La',
    'Tây Ninh',
    'Thái Bình',
    'Thái Nguyên',
    'Thanh Hóa',
    'Thừa Thiên Huế',
    'Tiền Giang',
    'Trà Vinh',
    'Tuyên Quang',
    'Vĩnh Long',
    'Vĩnh Phúc',
    'Yên Bái',
];
export const FormRegister = () => {
    const [form] = Form.useForm();
    const { isStatusLogin, setIsStatusLogin } = useContext(AppContext);
    const [alertMessage, setAlertMessage] = useState(null);
    const onFinish = async (values) => {

        try {
            const formattedBirthdate = values.birthdate.format('YYYY-MM-DD');
            const dataRegister = {
                username: values.username,
                password: values.password,
                fullName: values.fullname,
                gender: values.gender,
                birthdate: formattedBirthdate,
                phoneNumber: values.phone,
                email: values.email,
                address: values.address
            };
            console.log(dataRegister);
            instance.post('/auth/register', dataRegister, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        setAlertMessage({ type: 'success', message: 'Đăng ký thành công' });
                        setTimeout(() => {
                            setIsStatusLogin("form-login");
                        }, 1500)

                    } else {
                        console.error(`Unexpected status code: ${response.status}`);
                    }
                })
                .catch(error => {
                    setAlertMessage({ type: 'error', message: "Tài khoản hoặc email đã tồn tại" });
                });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {alertMessage && (
                <Alert message={alertMessage.message} type={alertMessage.type} showIcon />
            )}
            <div className='modal-register'>
                <h1 className='login-title'>Register</h1>
                <div className='form-login'>
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{
                            prefix: '86',
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        scrollToFirstError
                    >
                        <Form.Item
                            name="username"
                            label="Username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password "
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The new password that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="fullname"
                            label="Fullname"
                            tooltip="What do you want others to call you?"
                            rules={[
                                {
                                    required: true,
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="gender"
                            label="Gender"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select gender!',
                                },
                            ]}
                        >
                            <Select placeholder="select your gender">
                                <Option value="Male">Male</Option>
                                <Option value="Female">Female</Option>
                                <Option value="Other">Other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Birthday"
                            name="birthdate"
                            rules={[
                                {
                                    type: 'object',
                                    required: true,
                                    message: 'Please select your birthdate!',
                                },
                            ]}
                        >
                            <DatePicker format="DD/MM/YYYY" />
                        </Form.Item>


                        <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input
                                addonBefore={prefixSelector}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="address"
                            label="Address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select gender!',
                                },
                            ]}
                        >
                            <Select placeholder="Please select address">
                                {vietnamProvinces.map((province, index) => (
                                    <Option key={index} value={province}>
                                        {province}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
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
        </>

    )
}
