import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../layouts/Header'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../layouts/Footer'
import FixedIcons from '../components/FixedIcons'
import { Button, Input, Select, Alert } from 'antd'
import '../style/OrderNow.css';
import instance from '../api/api'
import { AppContext } from '../context/AppProvider'

const { Option } = Select
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
    'Nam Dinh',
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

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const OrderNow = () => {
    const userId = localStorage.getItem('userId');
    const [inforAccount, setInforAccount] = useState({});
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [province, setProvince] = useState('');
    const [specificAddress, setSpecificAddress] = useState('');
    const [note, setNote] = useState('');
    const [quantity, setQuantity] = useState(1);
    const productId = localStorage.getItem('idProductSelected');
    const [productSelected, setProductSelected] = useState({})
    const [isCheckboxTransport, setIsCheckboxTransport] = useState(false);
    const [isCheckboxPayment, setIsCheckboxPayment] = useState(false);
    const [alert, setAlert] = useState({ type: '', message: '' })
    const navigate = useNavigate();
    const {formDataOrder, setFormDataOrder} = useContext(AppContext);
    useEffect(() => {
        instance.get(`/account/${userId}`)
            .then(res => {
                console.log(res.data);
                setFullName(res.data.fullName)
                setEmail(res.data.email)
                setPhoneNumber(res.data.phoneNumber)
                setProvince(res.data.address)
                setInforAccount(res.data)
            }).catch(err => {
                console.log(err);
            });
    }, []);
    useEffect(() => {
        instance.get(`/cast-aluminum/${productId}`)
            .then(res => {
                setProductSelected(res.data)
            }).catch(err => {
                console.log(err);
            })
    }, [])

    const handleSubmit = () => {
        if (email.trim() === '' || fullName.trim() === '' || phoneNumber === '' || specificAddress === '') {
            setAlert({ type: 'error', message: 'Vui lòng nhập đầy đủ thông tin !!!' })
            setTimeout(() => {
                setAlert({ type: '', message: '' })
            }, 2000)
            return;
        } else {
            if (isCheckboxPayment == true && isCheckboxTransport == true) {
                const feeShip = quantity * 50000;
                const total = productSelected.price * quantity + feeShip;
                const formData = {
                    accountId: userId,
                    castAluminumId: productId,
                    email: email,
                    username: fullName,
                    phoneNumber: phoneNumber,
                    province: province,
                    specificAddress: specificAddress,
                    note: note,
                    quantity: quantity,
                    feeShip: feeShip,
                    totalAmount: total,
                    image: productSelected.image,
                    productName: productSelected.name,
                    price: productSelected.price
                };
                setFormDataOrder(formData);
                console.log(formData);
                instance.post("/order", formData)
                    .then(res => {
                        console.log(res);
                        navigate("/thank-you")
                    }).catch(err => {
                        console.log(err);
                    })
            } else {
                setAlert({ type: 'error', message: 'Vui lòng chọn đầy đủ phương thức vận chuyển và thanh toán !!!' })
                setTimeout(() => {
                    setAlert({ type: '', message: '' })
                }, 2000)
            }
        }


    };
    return (
        <div>
            <div className="alert-container">
                {alert.message && <Alert message={alert.message} type={alert.type} showIcon />}
            </div>
            <Header />
            <div className="order-now-container">
                <div className="receiving-information">
                    <h3>Thông tin nhận hàng</h3>
                    <div className="form-receiving-infor">
                        <label htmlFor="">Họ và tên</label>
                        <Input placeholder='Họ và tên' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        <label htmlFor="">Email</label>
                        <Input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="phone-number">Số điện thoại</label>
                        <Input placeholder='Số điện thoại' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        <label htmlFor="province">Tỉnh</label>
                        <Select className='province-address' placeholder="Please select address" defaultValue={province} onChange={(value) => setProvince(value)}>
                            {vietnamProvinces.map((province, index) => (
                                <Option className="province-address-option" key={index} value={province}>
                                    {province}
                                </Option>
                            ))}
                        </Select>
                        <label htmlFor="address">Địa chỉ</label>
                        <Input placeholder='Địa chỉ cụ thể' value={specificAddress} onChange={(e) => setSpecificAddress(e.target.value)} />
                        <label htmlFor="note">Ghi chú</label>
                        <Input placeholder='Ghi chú' value={note} onChange={(e) => setNote(e.target.value)} />
                    </div>
                </div>
                <div className="transport">
                    <div className="transport-method">
                        <h2>Vận chuyển</h2>
                        <label>
                            <input className='checkbox-transport' type="checkbox" checked={isCheckboxTransport} onChange={() => setIsCheckboxTransport(!isCheckboxTransport)} />
                            Giao hàng tận nơi
                        </label>
                    </div>
                    <div className="payment-method">
                        <h2>Thanh toán</h2>
                        <label>
                            <input type="checkbox" checked={isCheckboxPayment} onChange={() => setIsCheckboxPayment(!isCheckboxPayment)} />
                            Thanh toán khi nhận hàng
                        </label>
                    </div>
                </div>
                <div className="information-line">
                    <h2>Đơn hàng</h2>
                    <div className="infor-order">
                        <img src={productSelected.image} alt="" />
                        <p className='text-name-product'>{productSelected.name}</p>
                        <p>{productSelected.price ? formatNumber(productSelected.price) : ''} đ</p>
                    </div>
                    <div className="total">
                        <label htmlFor="">Số lượng</label>
                        <Input className='input-total' type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='số lượng' />
                    </div>
                    <div className="voucher">
                        <label htmlFor="">Voucher (nếu có)</label>
                        <Input className='input-voucher' placeholder='Nhập mã giảm giá' />
                    </div>
                    <div className="infor-order-sub">
                        <div className="provisional">
                            <p>Tạm tính: </p>
                            <p> {productSelected.price ? formatNumber(quantity * productSelected.price) : ''} đ</p>
                        </div>
                        <div className="fee-ship">
                            <p>Phí vận chuyển</p>
                            <p>{formatNumber(quantity * 50000)} đ</p>
                        </div>
                        <div className="order-summary">
                            <div className="summary">
                                <p>Tổng cộng</p>
                                <p>{productSelected.price ? formatNumber(quantity * productSelected.price + quantity * 50000) : ''} đ</p>
                            </div>
                            <Button className='button-order-now' onClick={handleSubmit}>ĐẶT HÀNG</Button>
                        </div>
                    </div>
                </div>
            </div>
            <FixedIcons />
            <Footer />
        </div>
    )
}
