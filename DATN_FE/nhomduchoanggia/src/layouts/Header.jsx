import React, { useContext, useState } from 'react'
import '../style/Header.css'
import { HeartOutlined, ShoppingCartOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons'
import { AppContext } from '../context/AppProvider'
import { Link, useNavigate } from 'react-router-dom'
import { Modal } from 'antd'

export const Header = () => {
  const { renderModalContent, isModalOpen, setIsModalOpen, showModalLogin, handleLoginOk, handleLoginCancel } = useContext(AppContext);
  const { selectedMenu, setSelectedMenu } = useContext(AppContext);
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();
  const handleAccountClick = () => {
    navigate('/account');
  };
  const {accountStatusSelected, setAccountStatusSelected} = useContext(AppContext);
  const handleNavigate = () => {
    if(userId) {
      navigate('/account');
      setAccountStatusSelected('order-list');
    }else{
      navigate('/shop-cart');
    }
  }
  const handlePhoneClick1 = () => {
    window.location.href = 'tel:+84858250715'; 
  };

  const handlePhoneClick2 = () => {
    window.location.href = 'tel:+0373148888'; 
  };
  return (
    <>
      <div className="header-container">
        <div className="header-nav-menu">
          <Link to={'/'}><img className='logo-website' src="src\assets\cropped-Artboard-2.png" alt="" /></Link>
          <ul className='list-menu'>
            <li className={selectedMenu === 'home' ? 'menu-active' : ''} onClick={() => setSelectedMenu('home')}><Link to={'/'}>TRANG CHỦ</Link></li>
            <li className={selectedMenu === 'products' ? 'menu-active' : ''} onClick={() => setSelectedMenu('products')}><Link to={'/products'}>SẢN PHẨM</Link></li>
            <li className={selectedMenu === 'project' ? 'menu-active' : ''} onClick={() => setSelectedMenu('project')}><Link to={'/project'}>DỰ ÁN</Link></li>
            <li className={selectedMenu === 'introduce' ? 'menu-active' : ''} onClick={() => setSelectedMenu('introduce')}><Link to={'/introduce'}>GIỚI THIỆU</Link></li>
            <li className={selectedMenu === 'service' ? 'menu-active' : ''} onClick={() => setSelectedMenu('service')}><Link to={'/service'}>DỊCH VỤ</Link></li>
            <li className={selectedMenu === 'news' ? 'menu-active' : ''} onClick={() => setSelectedMenu('news')}><Link to={'/news'}>TIN TỨC</Link></li>
            <li className={selectedMenu === 'contact' ? 'menu-active' : ''} onClick={() => setSelectedMenu('contact')}><Link to={'/contact'}>LIÊN HỆ</Link></li>
          </ul>
        </div>
        <div className="header-nav-right">
          <div className="contact-in-header">
            <p className="phone-number-1" onClick={handlePhoneClick1}>0858 250 715</p>
            <p className="phone-number-2" onClick={handlePhoneClick2}>0373 14 8888</p>
          </div>
          <div className="wish-list">
            <Link to={'/love-product'}><HeartOutlined className='heart-icon' /></Link>
          </div>
          <div className="shop-cart">
            <ShoppingCartOutlined className='cart-icon' onClick={handleNavigate} />
          </div>
          <div className="account">
            {userId ? <UserOutlined onClick={handleAccountClick} className='user-icon' /> : <LoginOutlined onClick={showModalLogin} className='user-icon' />}
          </div>
          <Modal className='modal-account' open={isModalOpen} onOk={handleLoginOk} onCancel={handleLoginCancel}>
            {renderModalContent()}
          </Modal>
        </div>
      </div>
    </>
  )
}
