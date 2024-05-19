import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/Footer'
import FixedIcons from '../components/FixedIcons'
import '../style/Account.css';
import { AccountInfor } from '../components/AccountInfor';
import { OrderInAccount } from '../components/OrderInAccount';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppProvider';

const AccountInfo = () => <AccountInfor/>
const OrderList = () => <OrderInAccount/>

export const Account = () => {
  const {accountStatusSelected, setAccountStatusSelected} = useContext(AppContext);
  const navigate = useNavigate();
  const renderAccountContent = () => {
    switch(accountStatusSelected){
      case 'account-infor':
        return AccountInfo();
      case 'order-list':
        return OrderList();
      default:
        return null;    
    }
  }  

  const HandleLogoutFunction = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    navigate('/');
  }

  return (
    <>
      <Header />
      <div className="account-managerment">
        <div className="account-managerment-function">
          <ul className="list-function">
            <li onClick={() => setAccountStatusSelected('account-infor')}>Thông tin tài khoản</li>
            <li onClick={() => setAccountStatusSelected('order-list')}>Danh sách đơn hàng</li>
            <li onClick={HandleLogoutFunction}>Đăng xuất</li>
          </ul>
        </div>
        <div className="account-managerment-content">
          {renderAccountContent()}
        </div>
      </div>
      <FixedIcons />
      <Footer />
    </>
  )
}
