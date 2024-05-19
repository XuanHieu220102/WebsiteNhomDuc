import React from 'react'
import { Input, Button } from 'antd'
import '../style/Footer.css'
export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="contact-infor">
                <h2 className='h2-footer'>THÔNG TIN LIÊN HỆ</h2>
                <h3 className='h3-footer'>Trụ sở chính</h3>
                <p className='p-footer'>Địa chỉ: Xóm 3- Xuân Đài-Xuân Trường-Nam Định</p>
                <p className='p-footer'>Email: xuanhieu0031@gmail.com</p>
                <p className='p-footer'>Hotline: 0858.250.715</p>
                <h3 className='h3-footer'>Nhà máy sản xuất</h3>
                <p className='p-footer'>Địa chỉ: QL21 cụm CN Hải Vân, Hải Hậu, Nam Định</p>
            </div>
            <div className="about-us">
                <h2 className='h2-footer'>VỀ CHÚNG TÔI</h2>
                <p className='p-footer p-111'>Giới thiệu</p>
                <p className='p-footer p-111'>Dự án</p>
                <p className='p-footer p-111'>Tin tức</p>
                <p className='p-footer p-111'>Liên hệ</p>
            </div>
            <div className="info">
                <h2 className='h2-footer'>THÔNG TIN</h2>
                <p className='p-footer p-111'>Dịch vụ</p>
                <p className='p-footer p-111'>Video</p>
                <p className='p-footer p-111'>Sản phẩm</p>
            </div>
            <div className="register-offer">
                <h2 className='h2-footer'>Đăng ký nhận ưu đãi</h2>
                <Input className='input-register-offer' placeholder='Họ tên' />
                <Input className='input-register-offer' placeholder='Số điện thoại' />
                <Button className='btn-receive-register-offer'>Gửi</Button>
            </div>
        </div>
    )
}
