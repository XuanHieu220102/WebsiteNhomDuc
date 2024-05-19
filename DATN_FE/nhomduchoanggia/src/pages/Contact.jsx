import React, { useState } from 'react'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/Footer'
import { Input, Button, Alert, message } from 'antd'
import '../style/Contact.css'
import FixedIcons from '../components/FixedIcons'
import { type } from 'jquery'

export const Contact = () => {
  const [formContact, setFormContact] = useState({
    fullname: '',
    phonenumber: '',
  })
  const [alert, setAlert] = useState({ type: '', message: '' })
  const handleFullnameChange = (e) => {
    setFormContact({ ...formContact, fullname: e.target.value });
  }

  const handlePhonenumberChange = (e) => {
    setFormContact({ ...formContact, phonenumber: e.target.value });
  }

  const handleFormContact = () => {
    if (formContact.fullname.trim() === '' && formContact.phonenumber.trim() === '') {
      setAlert({ type: 'error', message: 'Vui lòng điền đầy đủ thông tin' })
      setTimeout(()=> {
        setAlert({type:'', message:''})
      }, 2000)
    } else {
      if (!/^\d{10,11}$/.test(formContact.phonenumber.trim())) {
        setAlert({ type: 'error', message: 'Số điện thoại không hợp lệ' })
        setTimeout(()=> {
          setAlert({type:'', message:''})
        }, 2000)
      } else {
        setAlert({ type: 'success', message: 'Gửi thông tin thành công' })
        setFormContact({
          fullname: '',
          phonenumber: '',
        })
        setTimeout(()=> {
          setAlert({type:'', message:''})
        }, 2000)
      }

    }
  }

  return (
    <div>
      <div className="alert-container">
        {alert.message && <Alert type={alert.type} message={alert.message} showIcon />}
      </div>
      <Header />
      <div className="show-banner-sub">
        <img className='img-banner-sub' src="src\assets\anh_contact.jpg" alt="" />
      </div>
      <div className="contact-container">
        <div className="contact-title">
          <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
        </div>
        <div className="contact-content">
          <div className="contact-content-left">
            <h3>THÔNG TIN LIÊN HỆ</h3>
            <ul>
              <li>Địa chỉ: Xuân Đài, Xuân Trường, Nam Định</li>
              <li>Hotline: 0858250715</li>
              <li>Email: nhomduchoanggia@gmail.com</li>
              <li>Website: nhomduchoanggia.com.vn</li>
            </ul>
          </div>
          <div className="contact-content-right">
            <div className="form-contact">
              <h3>GỬI TIN NHẮN LIÊN HỆ</h3>
              <Input placeholder='Họ tên*' value={formContact.fullname} onChange={handleFullnameChange} />
              <Input placeholder='Số điện thoại*' value={formContact.phonenumber} onChange={handlePhonenumberChange} />
              <Button className='btn-contact-send-to' onClick={handleFormContact}>GỬI ĐI</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="gg-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.396019829992!2d106.37634577608061!3d20.325252281153894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135fd0074aade2f%3A0x49c8179d65c9f91a!2sCLB%20Bi%20a%20Ho%C3%A0ng%20Gia!5e0!3m2!1sen!2s!4v1712304069466!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <FixedIcons />
      <Footer />
    </div>
  )
}
