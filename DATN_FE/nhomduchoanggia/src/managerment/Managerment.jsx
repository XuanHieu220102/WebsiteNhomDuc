import React, { useState } from 'react'
import { LoginAdmin } from './LoginAdmin';
import '../style/management/Managerment.css';
import { ProductManagement } from './ProductManagement';
import { CategoryManagement } from './CategoryManagement';
import { Statistical } from './Statistical';
import { Dashboard } from './Dashboard'
import { AccountManagement } from './AccountManagement'
import { useNavigate } from 'react-router-dom';
// import { DashboardPage } from '../sections/DashboardPage';

const ProductManagermentComponent = () => <ProductManagement />
const CategoryManagementComponent = () => <CategoryManagement />
const AccountManagementComponent = () => <AccountManagement />
const StatisticalComponent = () => <Statistical />
const DashboardComponent = () => <Dashboard />
export const Managerment = () => {
    const role = localStorage.getItem('role');
    const [isStatusManagement, setIsStatusManagement] = useState('dashboard');
    const navigate = useNavigate();
    const renderManagementContent = () => {
        switch (isStatusManagement) {
            case 'dashboard':
                return DashboardComponent();
            case 'product-management':
                return ProductManagermentComponent();
            case 'category-management':
                return CategoryManagementComponent();
            case 'account-management':
                return AccountManagementComponent();
            case 'statistical':
                return StatisticalComponent();
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
            {role !== 'Admin' ? (
                <LoginAdmin />
            ) : (
                <div className="managerment-container">
                    <div className="managerment-header">

                    </div>
                    <div className="managerment-content">
                        <div className="managerment-content-left">
                            <ul className="list-managerment">
                                <li onClick={() => setIsStatusManagement('dashboard')}>Dashboard</li>
                                <li onClick={() => setIsStatusManagement('product-management')}>Quản lý sản phẩm</li>
                                <li onClick={() => setIsStatusManagement('category-management')}>Quản lý danh mục sản phẩm</li>
                                <li onClick={() => setIsStatusManagement('account-management')}>Quản lý người dùng</li>
                                <li onClick={() => setIsStatusManagement('statistical')}>Thống kê</li>
                                <li onClick={() => HandleLogoutFunction()}>Đăng xuất</li>
                            </ul>
                        </div>
                        <div className="managerment-content-right">
                            {renderManagementContent()}
                        </div>
                    </div>
                    <div className="managerment-footer">

                    </div>
                </div>
            )}
        </>
    )
}
