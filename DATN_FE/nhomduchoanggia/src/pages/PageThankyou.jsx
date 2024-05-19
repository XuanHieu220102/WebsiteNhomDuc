import React, { useContext, useEffect } from 'react'
import { Header } from '../layouts/Header'
import FixedIcons from '../components/FixedIcons'
import { Footer } from '../layouts/Footer'
import { Button } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import '../style/PageThankyou.css'
import { AppContext } from '../context/AppProvider'
import { Link } from 'react-router-dom'

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

export const PageThankyou = () => {
    const {formDataOrder, setFormDataOrder} = useContext(AppContext);
    useEffect(() => {
        console.log("Here: ",formDataOrder);
    }, [])
    return (
        <>
            <Header />
            <div className="page-thank-you-container">
                <div className="page-thank-you-container-left">
                    <div className="thankyou-message-container">
                        <div className="thankyou-message-container-left">
                            <CheckCircleOutlined className='icon-checked' />
                        </div>
                        <div className="thankyou-message-container-right">
                            <h3>Cảm ơn bạn đã đặt hàng</h3>
                            <p>Một email xác nhận đã được gửi tới xuanhieu0031@gmail.com</p>
                        </div>
                    </div>
                    <div className="infor-content">
                        <div className="infor-content-left">
                            <div className="purchase-information">
                                <h3>Thông tin mua hàng</h3>
                                <p>{formDataOrder.username}</p>
                                <p>{formDataOrder.email}</p>
                                <p>{formDataOrder.phoneNumber}</p>
                            </div>
                            <div className="method-payment-in-thank-you">
                                <h3>Phương thức thanh toán</h3>
                                <p>Thu hộ (COD)</p>
                            </div>
                        </div>
                        <div className="infor-content-right">
                            <div className="delivery-address">
                                <h3>Địa chỉ nhận hàng</h3>
                                <p>{formDataOrder.specificAddress}</p>
                                <p>{formDataOrder.province}</p>
                                <p>{formDataOrder.note}</p>
                            </div>
                            <div className="method-transport-in-thank-you">
                                <h3>Phương thức vận chuyển</h3>
                                <p>Giao hàng tận nơi</p>
                            </div>
                            <div className="continue-buy">
                                <Button className='btn-continue-buy'><Link to={"/products"}>TIẾP TỤC MUA HÀNG</Link></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-thank-you-container-right">
                    <p className="order-name">Đơn hàng: #10001</p>
                    <div className="infor-order">
                        <img src={formDataOrder.image} alt="" />
                        <p className='text-name-product'>{formDataOrder.productName}</p>
                        <p>{formDataOrder.price ?  formatNumber(formDataOrder.price) : ''} đ</p>
                    </div>
                    <div className="infor-order-sub">
                        <div className="provisional">
                            <p>Tạm tính: </p>
                            <p> {formDataOrder.price ? formatNumber(formDataOrder.price * formDataOrder.quantity) : ''}  đ</p>
                        </div>
                        <div className="fee-ship">
                            <p>Phí vận chuyển</p>
                            <p>{formatNumber(formDataOrder.quantity * 50000)} đ</p>
                        </div>
                        <div className="order-summary">
                            <div className="summary">
                                <p>Tổng cộng</p>
                                <p>{formatNumber(formDataOrder.totalAmount)} đ</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <FixedIcons />
            <Footer />
        </>
    )
}
