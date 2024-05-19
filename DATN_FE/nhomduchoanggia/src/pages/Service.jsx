import React from 'react'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/Footer'
import '../style/Service.css'
import { Button, Input } from 'antd'
import FixedIcons from '../components/FixedIcons'
export const Service = () => {
  return (
    <div>
      <Header />
      <div className="image-service">
        <img src="src\assets\snh_1102JPG.JPG" alt="" />
      </div>
      <div className="design-service-title">
        <h2 className='design-service-title-content'>Dịch vụ thiết kế 3D sản phẩm nhôm đúc</h2>
      </div>
      <div className="design-service">
        <div className="design-service-left">
          <p className='design-service-text-1'>Quá trình thiết kế 3D đóng vai trò quan trọng để có một mẫu sản phẩm từ nhôm đúc ưng ý. Với đội ngũ thiết kế 3D giàu kinh nghiệm, Hoàng Gia cung cấp cho Quý khách dịch vụ thiết kế các sản phẩm từ nhôm đúc theo yêu cầu với chi phí phù hợp, thời gian thực hiện nhanh chóng.</p>
          <p className='design-service-text-2'>Quy trình triển khai thiết kế sản phẩm nhôm đúc tại Hoàng Gia đi theo các bước như sau:</p>
          <ul>
            <li>Bước 1: tiếp nhận yêu cầu của khách hàng và tư vấn sơ bộ</li>
            <li>Bước 2: ký hợp đồng và tạm ứng</li>
            <li>Bước 3: lên bản vẽ chi tiết</li>
            <li>Bước 4: duyệt bản vẽ và chỉnh sửa</li>
            <li>Bước 5: hoàn tất bản vẻ và làm phối cảnh 3D</li>
            <li>Bước 6: nghiệm thu, bàn giao thiết kế</li>
          </ul>
        </div>
        <div className="design-service-right">
          <img src="src\assets\C-S-046.jpg" alt="" />
        </div>
      </div>
      <div className="production-service-title">
        <h2 className='production-service-title-content'>Dịch vụ sản xuất và thi công sản phẩm nhôm đúc</h2>
      </div>
      <div className="production-service">
        <div className="production-service-left">
          <img src="src\assets\C-S-055.jpg" alt="" />
        </div>
        <div className="production-service-right">
          <p className='design-service-text-1'>Quá trình thiết kế 3D đóng vai trò quan trọng để có một mẫu sản phẩm từ nhôm đúc ưng ý. Với đội ngũ thiết kế 3D giàu kinh nghiệm, Hoàng Gia cung cấp cho Quý khách dịch vụ thiết kế các sản phẩm từ nhôm đúc theo yêu cầu với chi phí phù hợp, thời gian thực hiện nhanh chóng.</p>
          <p className='design-service-text-2'>Quy trình triển khai thiết kế sản phẩm nhôm đúc tại Hoàng Gia đi theo các bước như sau:</p>
          <ul>
            <li>Bước 1: tiếp nhận yêu cầu của khách hàng và tư vấn sơ bộ</li>
            <li>Bước 2: ký hợp đồng và tạm ứng</li>
            <li>Bước 3: lên bản vẽ chi tiết</li>
            <li>Bước 4: duyệt bản vẽ và chỉnh sửa</li>
            <li>Bước 5: hoàn tất bản vẻ và làm phối cảnh 3D</li>
            <li>Bước 6: nghiệm thu, bàn giao thiết kế</li>
          </ul>
        </div>
      </div>
      <div className="call-for-service">
        <h2>ĐẶT DỊCH VỤ</h2>
        <p>Quý khách vui lòng điền thông tin vào form bên dưới, Nhôm Đúc Hoàng Gia sẽ liên hệ lại với Quý khách trong thời gian sớm nhất.</p>
        <div className="form-call-for-service">
          <Input placeholder='Họ tên*'/>
          <Input placeholder='Số điện thoại*'/>
          <Button className='btn-call-for-service'>GỬI</Button>
        </div>
      </div>
      <FixedIcons/>
      <Footer />
    </div>
  )
}
