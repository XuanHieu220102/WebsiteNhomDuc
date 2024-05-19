import React, { useContext, useEffect, useState } from 'react'
import instance from '../api/api';
import { Button, Form, Input, Modal, Select, Space, Table } from 'antd';
import '../style/management/AccountManagement.css';
import { AppContext } from '../context/AppProvider';
import { message } from 'antd';


export const AccountManagement = () => {
  const [listAccount, setListAccount] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(false);
  const { vietnamProvinces } = useContext(AppContext);
  const [dataUpdate, setDataUpdate] = useState({});
  const [isUpdateDataLoaded, setIsUpdateDataLoaded] = useState(false);
  const [idUpdate, setIdUpdate] = useState();
  const showUpdateModal = (record) => {
    setIdUpdate(record.id);
    setIsUpdateDataLoaded(false);
    instance.get(`/account/${record.id}`)
      .then(res => {
        setDataUpdate(res?.data);
        setIsUpdateDataLoaded(true);
      }).catch(err => {
        console.log(err);
      })

    setIsModalUpdateVisible(true);
  }

  const handleCancelUpdateModal = () => {
    setIsModalUpdateVisible(false);
  }

  const onFinishUpdate = (values) => {
    instance.put(`auth/update-account/${idUpdate}`, values)
    .then(res => {
      message.success('Cập nhật thông tin tài khoản thành công!')
      setIsLoading(!isLoading);
      setIsModalUpdateVisible(false);
    }).catch(err => {
      message.error('Đã xảy ra lỗi khi cập nhật thông tin tài khoản!');
    })
  }

  useEffect(() => {
    instance.get('/account')
      .then(res => {
        setListAccount(res.data.content);
      }).catch(err => {
        console.log(err);
      })
  }, [isLoading])

  const handleDelete = (item) => {
    console.log(item);
    Modal.confirm({
      title: 'Confirm delete',
      content: 'Are you sure you want to delete this account ?',
      onOk() {
        const productId = item.id;
        instance
          .delete(`/account/${productId}`)
          .then((res) => {
            setIsLoading(!isLoading);
            message.success('Xóa tài khoản thành công !');
          })
          .catch((err) => {
            message.error('Xóa tài khoản thất bại !');
          });
      },
      onCancel() {
        // Handle cancel
      },
    });
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'FullName',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Birthdate',
      dataIndex: 'birthdate',
      key: 'birthdate',
    },
    {
      title: 'Action',
      key: 'operation',
      render: (_, option) => (
        <Space>
          <a onClick={() => showUpdateModal(option)}>Edit</a>
          <a onClick={() => handleDelete(option)}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div className="management-account-conntainer">
      <div className="management-account-header">
        <div className="management-account-title">
          <h2>QUẢN LÝ DANH SÁCH TÀI KHOẢN</h2>
        </div>
        <div className="product-management-filter">
          <div className="filter-search">
            <Input className='product-management-search' placeholder='Nhập tên sản phẩm' />
            <Button className='product-management-btn'>Tìm kiếm</Button>
          </div>
        </div>
      </div>
      <div className="management-account-content">
        <Table className='table-account' columns={columns} dataSource={listAccount} />
      </div>
      {isUpdateDataLoaded ? (
      <Modal open={isModalUpdateVisible} onCancel={handleCancelUpdateModal} footer={null}>
        <h2>Cập nhật thông tin tài khoản</h2>
        <Form onFinish={onFinishUpdate} initialValues={dataUpdate}>
          <Form.Item label="Tên đăng nhập" name="username">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Số điện thoại" name="phoneNumber">
            <Input />
          </Form.Item>
          <Form.Item label="Họ và tên" name="fullName">
            <Input />
          </Form.Item>
          <Form.Item label="Địa chỉ" name="address">
            <Select placeholder="Chọn địa chỉ">
              {vietnamProvinces.map((province, index) => (
                <Option key={index} value={province}>
                  {province}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Ngày sinh" name="birthdate">
            <Input />
          </Form.Item>
          <Form.Item label="Giới tính" name="gender">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Modal>      
      ) : 'loading'};

    </div>
  )
}
