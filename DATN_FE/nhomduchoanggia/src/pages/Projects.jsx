import React from 'react'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/Footer'
import '../style/Project.css'
import { Link } from 'react-router-dom'
import {RightOutlined} from '@ant-design/icons'
import FixedIcons from '../components/FixedIcons'

const listProject = [
    {
        image: 'https://congnhomducquangthanhgroup.com/wp-content/uploads/2021/03/ct-nguyen-hoang-ha_duong-noi-ha-dong.jpg',
        name: 'Công trình Nguyễn Hoàng Hà – Dương Nội – Hà Đông'
    },
    {
        image: 'https://congnhomducquangthanhgroup.com/wp-content/uploads/2021/03/CT-Manh-Van-manh_dong-hung-thai-binh.jpg',
        name: 'Công trình Mạnh Văn Mạnh – Đông Hưng – Thái Bình'
    },
    {
        image: 'https://congnhomducquangthanhgroup.com/wp-content/uploads/2021/03/ct-Mai-Van-Thang-da-dang.jpg',
        name: 'CÔNG TRÌNH NHÀ ANH VĨNH YÊN MÔ, NINH BÌNH',
    },
    {
        image: 'https://congnhomducquangthanhgroup.com/wp-content/uploads/2021/03/ct-anh-hung-ninhbinh-2048x1424.jpg',
        name: 'Công trình Anh Hùng – Ninh Binh',
    },
    {
        image: 'https://congnhomducquangthanhgroup.com/wp-content/uploads/2021/03/chu-quoc-lang-son-2048x1306.jpg',
        name: 'Anh Trung – Bắc Giang'
    },
    {
        image: 'https://congnhomducquangthanhgroup.com/wp-content/uploads/2021/03/anh-trung-anh_Phu-yen-2048x1470.jpg',
        name: 'Công trình Anh Trung Anh – Phú Yên',
    },
    {
        image: 'https://congnhomducquangthanhgroup.com/wp-content/uploads/2021/03/anh-thanh-bac-giang-2048x1373.jpg',
        name: 'Anh Thành - Bắc Giang'
    },
    {
        image: 'https://congnhomducquangthanhgroup.com/wp-content/uploads/2021/03/CT-Manh-Van-manh_dong-hung-thai-binh.jpg',
        name: 'Công trình Mạnh Văn Mạnh – Đông Hưng – Thái Bình'
    },
    {
        image: 'https://congnhomducquangthanhgroup.com/wp-content/uploads/2021/03/ct-Mai-Van-Thang-da-dang.jpg',
        name: 'CÔNG TRÌNH NHÀ ANH VĨNH YÊN MÔ, NINH BÌNH',
    },
]

export const Projects = () => {
    return (
        <div>
            <Header />
            <div className="image-service">
                <img src="src\assets\bg_default-1.jpg" alt="" />
            </div>
            <div className="redirect-in-projects">
                <div className="redirect-in-projects-sub">
                    <p><Link to={'/'} onClick={() => setSelectedMenu('home')}>Trang chủ</Link><RightOutlined className='arrow-right-icon' />Projects</p>
                </div>
            </div>
            <div className="project-container">
                {listProject.map((value, index) => (
                    <div className='project-content' key={index}>
                        <img className='image-project' src={value.image} alt="" />
                        <p className='project-name'>{value.name.toUpperCase()}</p>
                    </div>
                ))}
            </div>
            <FixedIcons/>
            <Footer />
        </div>
    )
}
