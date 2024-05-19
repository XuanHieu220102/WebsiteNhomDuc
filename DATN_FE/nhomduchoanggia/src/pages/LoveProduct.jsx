import React, { useEffect, useState } from 'react'
import { Header } from '../layouts/Header'
import FixedIcons from '../components/FixedIcons'
import { Footer } from '../layouts/Footer'
import instance from '../api/api'
import '../style/LoveProduct.css'
import { StarFilled, StarOutlined } from '@ant-design/icons'
import { Button, Modal, Alert } from 'antd'
import { data } from 'jquery'
import { Link } from 'react-router-dom'

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


export const LoveProduct = () => {
    const userId = localStorage.getItem('userId');
    const [loveList, setLoveList] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [alert, setAlert] = useState({ type: '', message: '' })
    const [isStatus, setIsStatus] = useState(false);

    const [loveProductSelected, setLoveProductSelected] = useState({
        accountId: '',
        castAluminumId: '',
    })
    useEffect(() => {
        instance.get(`/favorite-product/${userId}`)
            .then(res => {
                console.log(res.data);
                setLoveList(res.data)
            }).catch(err => {
                console.log(err);
            })
    }, [isStatus])

    const handleOrder = (productId) => {
        localStorage.setItem('idProductSelected', productId)
    }

    const handleDelete = (userId, productId) => {
        // Xử lý khi người dùng xóa sản phẩm khỏi danh sách yêu thích
        setLoveProductSelected({
            accountId: userId,
            castAluminumId: productId
        });
        setTimeout(() => {
            setIsModalVisible(true);
        }, 0);
    }
    const handleOk = () => {
        instance.delete(`/favorite-product/${loveProductSelected.accountId}/${loveProductSelected.castAluminumId}`)
            .then(res => {
                setAlert({ type: 'success', message: res.data })
                setTimeout(() => {
                    setAlert({ type: '', message: '' });
                }, 2000);
                setIsModalVisible(false);
                setIsStatus(!isStatus);
            }).catch(err => {
                setAlert({ type: 'error', message: err.response.data })
                setTimeout(() => {
                    setAlert({ type: '', message: '' });
                }, 2000);
                setIsModalVisible(false);
            })

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <div className="alert-container">
                {alert.message && <Alert message={alert.message} type={alert.type} showIcon />}
            </div>
            <Header />
            <div className="love-product-container">
                <div className="title-love-product">
                    <h2 className='title-love-product-content'>SẢN PHẨM YÊU THÍCH</h2>
                </div>
                <div className="love-product-content">
                    {loveList.length > 0 ? (
                        <table border={1} className='table-love-products'>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Rating</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loveList.map((value, index) => (
                                    <tr key={index}>
                                        <td><img className='image-love-product' src={value.castAluminumImage} alt={value.castAluminumName} /></td>
                                        <td>{value.castAluminumName}</td>
                                        <td>{formatNumber(value.castAluminumPrice)} / m2</td>
                                        <td className="rating-stars">
                                            {[...Array(5)].map((_, starIndex) => (
                                                <span
                                                    className='star'
                                                    key={starIndex}
                                                    style={{ cursor: 'pointer', color: starIndex < value.castAluminumRating ? 'gold' : 'gray' }}
                                                >
                                                    {starIndex < value.castAluminumRating ? <StarFilled /> : <StarOutlined />}
                                                </span>
                                            ))}
                                        </td>
                                        <td>
                                            <Button className='btn-order-now' onClick={() => handleOrder(value.castAluminumId)}><Link to={'/order-now'}>Đặt hàng ngay</Link></Button>
                                            <Button className='btn-delete-order' onClick={() => handleDelete(value.accountId, value.castAluminumId)}>Xóa</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className='title-not-product'>
                            {userId ? (
                                <p className='text-np'>BẠN CHƯA CÓ SẢN PHẨM YÊU THÍCH NÀO</p>
                            ) : (
                                <p className='text-np'>VUI LÒNG ĐĂNG NHẬP ĐỂ XEM SẢN PHẨM YÊU THÍCH CỦA BẠN</p>

                            )}
                        </div>
                    )}

                </div>
            </div>
            <Modal
                title="Xác nhận xóa"
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Xác nhận"
                cancelText="Hủy"
            >
                <p>Bạn có chắc chắn muốn xóa sản phẩm này khỏi danh sách yêu thích?</p>
            </Modal>
            <FixedIcons />
            <Footer />
        </>
    )
}
