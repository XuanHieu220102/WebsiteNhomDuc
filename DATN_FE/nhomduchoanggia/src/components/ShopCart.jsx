import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/Footer'
import FixedIcons from './FixedIcons'
import { Button, Input, message } from 'antd'
import instance from '../api/api'
import '../style/ShopCart.css';
import { AppContext } from '../context/AppProvider'
export const ShopCart = () => {
    const [dataOrder, setDataOrder] = useState([]);
    const { isModalOpen, setIsModalOpen, showModalLogin } = useContext(AppContext);

    const [pn, setPn] = useState();

    const handleSearchOrder = () => {

        instance.get(`/order/phonenumber/${pn}`)
            .then(res => {
                console.log(res.data);
                setDataOrder(res.data)
            }).catch(err => {
                message.error('Thông tin tìm kiếm không chính xác');
            })
    }
    const handleChangePn = (e) => {
        setPn(e.target.value);
    }
    return (
        <>
            <Header />
            <div className="oder-cart-container">
                <h2 className='title-order-cart'>Vui lòng nhập số điện thoại để theo dõi đơn hàng của bạn</h2>
                <div className="searh-order">
                    <Input placeholder='Số điện thoại' onChange={handleChangePn} />
                    <Button onClick={handleSearchOrder}>TRA CỨU</Button>
                </div>
                <div className="order-content">
                    {dataOrder.length > 0 ? (
                        dataOrder.map((value, index) => (
                            <div className='item-order-search' key={index}>
                                <img src={value.castAluminumImage} alt="aaa" />
                                <div className="order-infor-search">
                                    <p>Mã đơn hàng: {value.orderId}</p>
                                    <p>Ngày đặt: {value.creationDate}</p>
                                    <p>Địa chỉ: {value.specificAddress}</p>
                                    <div className="row-aaa">
                                        <p>Giá: {value.castAluminumPrice}</p>
                                        <p>Số lượng: {value.quantity}</p>
                                        <p>Phí vận chuyển :{value.feeShip}</p>
                                        <p>Tổng tiền: {value.castAluminumPrice}</p>
                                    </div>
                                    <Button className='btn-follow-order'>THEO DÕI ĐƠN HÀNG</Button>
                                </div>

                            </div>
                        ))
                    ) : (
                        <p className='note-order-login'>Đăng nhập để theo dõi đơn hàng của bạn tốt hơn, <Button className='btn-login-now' onClick={() => setIsModalOpen(true)}>Đăng nhập ngay</Button></p>
                    )}
                </div>
            </div>
            <FixedIcons />
            <Footer />
        </>
    )
}
