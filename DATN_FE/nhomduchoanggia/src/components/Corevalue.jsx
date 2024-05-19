import React from 'react'
import {SolutionOutlined, ExportOutlined, CustomerServiceOutlined,InsertRowLeftOutlined } from '@ant-design/icons'
import '../style/Corevalue.css'
export const Corevalue = () => {
    return (
        <div className='corevalue-content'>
            <div className='corevalue-item-content'>
                <div className='corevalue-box-icon'>
                    <SolutionOutlined className='corevalue-icon' />
                </div>
                <div className='corevalue-des'>
                    <p>Sản phẩm</p>
                    <h2>CHÍNH HÃNG</h2>
                </div>
            </div>
            <div className='corevalue-item-content'>
                <div className='corevalue-box-icon'>
                    <ExportOutlined className='corevalue-icon' />
                </div>
                <div className='corevalue-des'>
                    <p>Miễn phí vận chuyển</p>
                    <h2>TOÀN QUỐC</h2>
                </div>
            </div>
            <div className='corevalue-item-content'>
                <div className='corevalue-box-icon'>
                    <CustomerServiceOutlined className='corevalue-icon' />
                </div>
                <div className='corevalue-des'>
                    <p>Hotline</p>
                    <h2>1900.2091</h2>
                </div>
            </div>
            <div className='corevalue-item-content'>
                <div className='corevalue-box-icon'>
                    <InsertRowLeftOutlined className='corevalue-icon' />
                </div>
                <div className='corevalue-des'>
                    <p>Thủ tục đổi trả</p>
                    <h2>Dễ dàng</h2>
                </div>
            </div>
        </div>
    )
}
