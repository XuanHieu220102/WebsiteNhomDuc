import React, { useEffect, useState } from 'react'
import instance from '../api/api';
import { Button, Form, Input, Modal, Space, Table } from 'antd';
import '../style/CategoryManagement.css';
import { message } from 'antd';

export const CategoryManagement = () => {
  const [listCategory, setListCategory] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(false);
  const [productIdSelected, setProductIdSelected] = useState();
  const [form] = Form.useForm();
  const [formUpdate] = Form.useForm(); 
  const showModalAddCategory = () => {

    setIsModalVisible(true);
  }

  const cancelModal = () => {
    setIsModalVisible(false);
  }

  const showUpdateModal = (item) => {
    formUpdate.setFieldsValue(item);
    setProductIdSelected(item.id);
    setIsModalUpdateVisible(true);
  }

  const handleCancel = () => {
    setIsModalUpdateVisible(false);
  }

  const handleDelete = (item) => {
    console.log(item);
    Modal.confirm({
      title: 'Confirm delete',
      content: 'Are you sure you want to delete this category ?',
      onOk() {
        const productId = item.id;
        instance
          .delete(`/category/${productId}`)
          .then((res) => {
            message.success('Xoá danh mục thành công');
            setIsLoading(!isLoading);
          })
          .catch((err) => {
            message.error('Đã xảy ra lỗi !!!');
          });
      },
      onCancel() {
        // Handle cancel
      },
    });
  };
  useEffect(() => {
    instance.get('/category')
      .then(res => {
        setListCategory(res.data);
      }).catch(err => {
        console.log(err);
      })
  }, [isLoading])

  const onFinishAddCategory = (values) => {
    console.log("Here: ", values);
    instance.post('/category', values)
    .then(res => {
      message.success('Thêm danh mục thành công');
      setIsLoading(!isLoading);
      setIsModalVisible(false);
      form.resetFields();
    }).catch(err => {
      message.error('Đã xảy ra lỗi !');
    })
  }

  const onFinishUpdateCategory = (values) => {
    instance.put(`/category/${productIdSelected}`, values)
    .then(res => {
      message.success('Cập nhập thành công !');
    }).catch(err => {
      message.error('Đã xảy ra lỗi ');
    })
  }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
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
    <div className="management-category-container">
      <div className="management-category-header">
        <div className="management-category-title">
          <h2>QUẢN LÝ DANH MỤC SẢN PHẨM</h2>
        </div>
        <div className="btn-add-category">
          <Button onClick={showModalAddCategory}>Thêm danh mục</Button>
        </div>
        <div className="product-management-filter">
          <div className="filter-search">
            <Input className='product-management-search' placeholder='Nhập tên sản phẩm' />
            <Button className='product-management-btn'>Tìm kiếm</Button>
          </div>
        </div>
      </div>
      <Table className='table-category' columns={columns} dataSource={listCategory} />
      <Modal title="Thêm danh mục" visible={isModalVisible} onCancel={cancelModal} footer={null}>
        <Form
          className="add-product-form"
          name="addProductForm"
          onFinish={onFinishAddCategory}
          form={form}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input the product name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input the product name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Thêm danh mục</Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal title="Sửa danh mục" visible={isModalUpdateVisible} onCancel={handleCancel} footer={null}>
        <Form
          className="update-category-form"
          name="updateCategoryForm"
          onFinish={onFinishUpdateCategory}
          form={formUpdate}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input the product name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input the product name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Sửa danh mục</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
