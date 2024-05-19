import React, { useEffect, useState } from 'react'
import { Button, Input, Table, Select, Space, Modal, Form, message } from 'antd';
import '../style/management/ProductManagement.css';
import instance from '../api/api';
import { useForm } from 'antd/es/form/Form';
const { Option } = Select;


export const ProductManagement = () => {
    const [selectedOption, setSelectedOption] = useState("default");
    const [dataProduct, setDataProduct] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({})
    const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(false);
    const [isUpdateDataLoaded, setIsUpdateDataLoaded] = useState(false);
    const [idUpdate, setIdUpdate] = useState();
    const [form] = useForm();
    useEffect(() => {
        instance.get('/cast-aluminum?size=999')
            .then(res => {
                setDataProduct(res.data.content);
            }).catch(err => {
                console.log(err);
            })
    }, [isLoading])
    useEffect(() => {
        instance.get('/category')
            .then(res => {
                setCategoryData(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, [])
    const handleSelectedChange = (value) => {
        setSelectedOption(value);
        console.log(value);
    }
    // Hàm lọc sản phẩm từ thấp đến cao
    const filterLowToHigh = () => {
        console.log('Lọc từ thấp đến cao');
    }

    // Hàm lọc sản phẩm từ cao đến thấp
    const filterHighToLow = () => {
        console.log('Lọc từ cao đến thấp');
    }

    const filterDefaultValue = () => {
        console.log("default");
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const showModalUpdate = (record) => {
        setIsUpdateDataLoaded(false);
        setIdUpdate(record.id);
        instance.get(`/cast-aluminum/${record.id}`)
            .then(res => {
                setDataUpdate(res.data);
                setIsUpdateDataLoaded(true);
            }).catch(err => {
                console.log(err);
            })

        setIsModalUpdateVisible(true);
    }

    const handleCancelUpdate = () => {
        setIsModalUpdateVisible(false);
    }
    const onFinish = (values) => {
        instance.post('/cast-aluminum', values)
            .then(res => {
                message.success('Thêm sản phẩm thành công !');
                setIsModalVisible(false);
                setIsLoading(!isLoading);
                form.resetFields();
            }).catch(err => {
                message.error('Đã xảy ra lỗi');
            })
    };
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <img src={image} alt='product' style={{ maxWidth: '50px', maxHeight: '50px' }} />
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price (m2)',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Thể loại',
            dataIndex: 'category',
            key: 'category',
            render: (category) => category.name,
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating'
        },
        {
            title: 'Votes',
            dataIndex: 'votes',
            key: 'votes',
        },
        {
            title: 'Action',
            key: 'operation',
            render: (_, option) => (
                <Space>
                    <a onClick={() => showModalUpdate(option)}>Edit</a>
                    <a onClick={() => handleDelete(option)}>Delete</a>
                </Space>
            ),
        },
    ];

    const onFinishUpdateProduct = (values) => {
        instance.put(`/cast-aluminum/${idUpdate}`, values)
            .then(res => {
                message.success('Cập nhập thành công !');
                setIsLoading(!isLoading);
                setIsModalUpdateVisible(false);
            }).catch(err => {
                message.error('Đã xảy ra lỗi');
            })
    }

    const handleDelete = (item) => {
        console.log(item);
        Modal.confirm({
            title: 'Confirm delete',
            content: 'Are you sure you want to delete this category ?',
            onOk() {
                const productId = item.id;
                instance
                    .delete(`/cast-aluminum/${productId}`)
                    .then((res) => {
                        message.success('Xóa sản phẩm thành công');
                        setIsLoading(!isLoading);
                    })
                    .catch((err) => {
                        message.error('Đã xảy ra lỗi')
                    });
            },
            onCancel() {
                // Handle cancel
            },
        });
    };

    return (
        <div className='product-management-container'>
            <div className="product-management-title">
                <h1>QUẢN LÝ SẢN PHẨM</h1>
            </div>
            <Button className='btn-add-product' onClick={showModal}>Thêm sản phẩm</Button>
            <div className="product-management-filter">
                <div className="filter-search">
                    <Input className='product-management-search' placeholder='Nhập tên sản phẩm' />
                    <Button className='product-management-btn'>Tìm kiếm</Button>
                </div>
                <div className="filter-sort">
                    <Select value={selectedOption} onChange={handleSelectedChange} style={{ width: 200 }}>
                        <Option value="default" onCLick={filterDefaultValue}>Mặc định</Option>
                        <Option value="lowToHigh" onClick={filterLowToHigh}>Giá thấp đến cao</Option>
                        <Option value="highToLow" onClick={filterHighToLow}>Giá cao đến thấp</Option>
                    </Select>
                </div>
            </div>
            <Table dataSource={dataProduct} columns={columns} />
            <Modal title="Thêm sản phẩm" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                <Form
                    className="add-product-form"
                    name="addProductForm"
                    onFinish={onFinish}
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
                        label="Image"
                        name="image"
                        rules={[{ required: true, message: 'Please input the image URL!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Price (m2)"
                        name="price"
                        rules={[{ required: true, message: 'Please input the price!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Category"
                        name="categoryId"
                        rules={[{ required: true, message: 'Please select the category!' }]}
                    >
                        <Select>
                            {categoryData.map((value, index) => (
                                <Option key={value.id} value={value.id}>{value.name}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Add Product</Button>
                    </Form.Item>
                </Form>
            </Modal>
            {isUpdateDataLoaded ? (
                <Modal title="Update sản phẩm" visible={isModalUpdateVisible} onCancel={handleCancelUpdate} footer={null}>
                    <Form
                        className="add-product-form"
                        name="addProductForm"
                        onFinish={onFinishUpdateProduct}
                        initialValues={dataUpdate}
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input the product name!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Image"
                            name="image"
                            rules={[{ required: true, message: 'Please input the image URL!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Price (m2)"
                            name="price"
                            rules={[{ required: true, message: 'Please input the price!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Category"
                            name="categoryId"
                            rules={[{ required: true, message: 'Please select the category!' }]}
                            initialValue={dataUpdate.category ? dataUpdate.category.id : undefined}
                        >
                            <Select>
                                {categoryData.map((value, index) => (
                                    <Option key={value.id} value={value.id}>{value.name}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Update Product</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            ) : (
                <p>loading ...</p>
            )}

        </div>
    )
}
