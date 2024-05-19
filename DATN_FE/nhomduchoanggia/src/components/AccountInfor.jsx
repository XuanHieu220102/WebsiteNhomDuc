import React, { useContext, useEffect, useState } from 'react'
import '../style/Account.css';
import {
  AutoComplete,
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  Alert
} from 'antd';
import instance from '../api/api';
const { Option } = Select;
import moment from 'moment';
import { Modal } from 'antd';
import { AppContext } from '../context/AppProvider';
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
export const AccountInfor = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formRegister, setFormRegister] = useState({
        username: '',
        fullname: '',
        gender: '',
        birthdate: '',
        phoneNumber: '',
        email: '',
        address: ''

    })
    const [form] = Form.useForm();

    const userId = localStorage.getItem('userId');
    useEffect(() => {
        instance.get(`http://localhost:8080/api/v1/account/${userId}`)
            .then(res => {
                // Assuming res.data is an object with properties matching formRegister
                form.setFieldsValue({
                    username: res.data.username || '',
                    password: res.data.password || '',
                    fullName: res.data.fullName || '',
                    gender: res.data.gender || '',
                    birthdate: moment(res.data.birthdate), // Moment object directly
                    phoneNumber: res.data.phoneNumber || '',
                    email: res.data.email || '',
                    address: res.data.address || ''
                });
            })
            .catch(err => {
                console.log(err);
            });
    }, [form, userId]);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const username = localStorage.getItem('username');
    const onFinish = (values) => {
        const formatBirthdate = values.birthdate.format("YYYY-MM-DD");
        values.birthdate = formatBirthdate;
        console.log('Received values of form: ', values);
        instance.put(`/auth/update-account/${userId}`, values)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
    };
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
    const {vietnamProvinces} = useContext(AppContext);
    const [alertMessage, setAlertMessage] = useState(null);

    const onFinishChangePass = (values) => {
        const dataForm = {
            oldPassword: values.oldPassword,
            newPassword: values.newPassword,
        }
        const userId = localStorage.getItem('userId');
        instance.post(`/auth/change-password/${userId}`, dataForm)
            .then(res => {
                setAlertMessage({ type: 'success', message: 'Đổi mật khẩu thành công' });
                setTimeout(() => {
                    setIsModalOpen(false);
                }, 1500)
            }).catch(err => {
                setAlertMessage({ type: 'error', message: "Mật khẩu không chính xác" });
            })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='account-info-container'>
            <div className='account-infor-header'>
                <p className='title-infor-account'>Thông tin tài khoản</p>
                <div className='bg'>
                    <div className='bgv'>
                        <h2>{username ? `CHÀO MỪNG QUAY TRỞ LẠI, ${username.toUpperCase()}` : 'CHÀO MỪNG QUAY TRỞ LẠI'}</h2>
                        <p>Kiểm tra và chỉnh sửa cá nhân của bạn tại đây</p>
                    </div>
                </div>
            </div>
            <div className='form-info-account'>
                <p className='title-update-info-account'>Cập nhật thông tin cá nhân</p>
                <Form
                    className='form-update-account'
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={formRegister}
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
                        name="fullName"
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
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            <Option value="other">Other</Option>
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
                        name="phoneNumber"
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
                            Save
                        </Button>
                    </Form.Item>
                </Form>
                <Button className='change-password' onClick={showModal}>Đổi mật khẩu</Button>
                <Modal title="Change Password" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    {alertMessage && (
                        <Alert message={alertMessage.message} type={alertMessage.type} showIcon />
                    )}
                    <Form
                        name="Change password"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinishChangePass}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Old password"
                            name="oldPassword"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            label="New paswsword"
                            name="newPassword"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input again your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </div>
    )
}
