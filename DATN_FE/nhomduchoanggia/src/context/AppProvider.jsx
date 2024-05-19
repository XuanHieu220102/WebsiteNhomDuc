import React, { useState } from 'react'
import { FormLogin } from '../form/FormLogin';
import { FormForgotPassword } from '../form/FormForgotPassword';
import { FormRegister } from '../form/FormRegister';

export const AppContext = React.createContext();
const renderLoginForm = () => <FormLogin/>
const renderForgotPasswordForm = () => <FormForgotPassword/>
const renderRegisterForm = () => <FormRegister/>

export const AppProvider = ({ children }) => {
    const [isStatusLogin, setIsStatusLogin] = useState("form-login")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('home');
    const [productSelected, setProductSelected] = useState(null);
    const [formDataOrder, setFormDataOrder] = useState({
      accountId: '',
      castAluminumId: '',
      email: '',
      username: '',
      phoneNumber: '',
      province: '',
      specificAddress: '',
      note: '',
      quantity: '',
      feeShip: '',
      totalAmount: '',
      image:'',
      productName:'',
      price:'',
  });
    const renderModalContent = () => {
      switch(isStatusLogin){
        case 'form-login':
          return renderLoginForm();
        case 'form-forgot-password':
          return renderForgotPasswordForm();
        case 'form-create-account':
          return renderRegisterForm();
        default:
          return null;      
      }
    }
  
    const showModalLogin = () => {
      setIsModalOpen(true);
    }

    const handleLoginOk = () => {
      setIsModalOpen(false);
    }

    const handleLoginCancel = () => {
      setIsModalOpen(false);
    }
    const vietnamProvinces = [
      'Hà Nội',
      'Hồ Chí Minh',
      'Đà Nẵng',
      'Bắc Giang',
      'Bắc Kạn',
      'Bạc Liêu',
      'Bắc Ninh',
      'Bến Tre',
      'Bình Định',
      'Bình Dương',
      'Bình Phước',
      'Bình Thuận',
      'Cà Mau',
      'Cần Thơ',
      'Cao Bằng',
      'Đắk Lắk',
      'Đắk Nông',
      'Điện Biên',
      'Đồng Nai',
      'Đồng Tháp',
      'Gia Lai',
      'Hà Giang',
      'Hà Nam',
      'Hà Tĩnh',
      'Hải Dương',
      'Hải Phòng',
      'Hậu Giang',
      'Hòa Bình',
      'Hưng Yên',
      'Khánh Hòa',
      'Kiên Giang',
      'Kon Tum',
      'Lai Châu',
      'Lâm Đồng',
      'Lạng Sơn',
      'Lào Cai',
      'Long An',
      'Nam Định',
      'Nghệ An',
      'Ninh Bình',
      'Ninh Thuận',
      'Phú Thọ',
      'Quảng Bình',
      'Quảng Nam',
      'Quảng Ngãi',
      'Quảng Ninh',
      'Quảng Trị',
      'Sóc Trăng',
      'Sơn La',
      'Tây Ninh',
      'Thái Bình',
      'Thái Nguyên',
      'Thanh Hóa',
      'Thừa Thiên Huế',
      'Tiền Giang',
      'Trà Vinh',
      'Tuyên Quang',
      'Vĩnh Long',
      'Vĩnh Phúc',
      'Yên Bái',
  ];
  const [accountStatusSelected, setAccountStatusSelected] = useState('account-infor');

  
  return (
    <AppContext.Provider
      value={{
        selectedMenu,
        setSelectedMenu,
        isStatusLogin,
        setIsStatusLogin,
        renderModalContent,
        isModalOpen,
        setIsModalOpen,
        showModalLogin,
        handleLoginOk,
        handleLoginCancel,
        productSelected,
        setProductSelected,
        formDataOrder,
        setFormDataOrder,
        vietnamProvinces,
        accountStatusSelected,
        setAccountStatusSelected
      }}>
      {children}
    </AppContext.Provider>
  )
}
