import React, { useEffect, useState } from 'react'
import '../style/OrderInAccount.css'
import instance from '../api/api'
function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
export const OrderInAccount = () => {
    const [listOrderInAccount, setListOrderInAccount] = useState([])
    const userId = localStorage.getItem('userId');
    useEffect(() => {
        instance.get(`/order/account/${userId}`)
        .then(res => {
            console.log(res);
            setListOrderInAccount(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <>
            <div className="order-in-account-container">
                <div className='account-infor-header'>
                    <p className='title-infor-account'>Danh sách đơn hàng</p>
                    <div className='bg'>
                        <div className='bgv'>
                            <h2>CHÀO MỪNG QUAY TRỞ LẠI</h2>
                            <p>Kiểm tra và chỉnh sửa cá nhân của bạn tại đây</p>
                        </div>
                    </div>
                </div>
                <div className="order-in-account-content">
                    {listOrderInAccount.length > 0 ? listOrderInAccount.map((value, index) => (
                        <div className="item-order">
                            <div className="item-order-left">
                                <img src={value.castAluminumImage} alt="" />                                  
                            </div>
                            <div className="item-order-right">
                                <p className='order-item-name'>{value.castAluminumName}</p>
                                <p className='order-item-address'>Địa chỉ: {value.specificAddress}</p>
                                <div className="order-item-info">
                                    <p>Giá: {formatNumber(value.castAluminumPrice)} đ</p>
                                    <p>Số lượng: {value.quantity}</p>
                                    <p>Phí vận chuyển: {formatNumber(value.feeShip)} đ</p>
                                    <p>Tổng tiền: {formatNumber(value.totalAmount)} đ</p>
                                </div>
                            </div>
                        </div>
                    )) : ''}
                </div>
            </div>

        </>
    )
}
