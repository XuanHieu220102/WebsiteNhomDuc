import React, { useContext } from 'react'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/Footer'
import { Link } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'
import '../style/News.css'
import { New } from '../components/New'
import { AppContext } from '../context/AppProvider'
import FixedIcons from '../components/FixedIcons'

const listNews = [
  {
    title: 'Hàng rào nhôm đúc – Những lưu ý khi mua mưa đến',
    time: '27/03/2021',
    description: 'Thời tiết ẩm ướt cùng với những cơn mưa dai dẳng có thể mang đến những rắc rối có thể xảy ra cho ngôi nhà của mình. Yếu tố an ninh luôn cần được xem...',
    image: 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/Cong-nhom-duc-qua-giong-bao-510x363-1.jpg'
  },
  {
    title: 'Ưu điểm của những mẫu cổng biệt thự tại Hoàng Anh Jsc',
    time: ' 04/03/2021',
    description: 'Bạn đang băn khoăn không biết chọn loại cổng biệt thự nào cho ngôi nhà của mình? Có quá nhiều loại cổng trên thị trường, nếu không phải người trong nghề thì khó có thể...',
    image: 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/cong-nhom-duc-chau-au.png'
  },
  {
    title: 'Cổng hợp kim nhôm đúc là gì?',
    time: ' 04/03/2021',
    description: 'Bạn thường xuyên nghe đến cụm từ cổng hợp kim nhôm đúc? Tuy nhiên bạn chưa hiểu rõ về loại cổng này như thế nào? Hôm nay Hoàng Anh Jsc sẽ cung cấp những thông...',
    image: 'https://nhomduchoanggia.vn/wp-content/uploads/2024/04/c001.jpg'
  },
  {
    title: 'Những lưu ý khi chọn mẫu cổng biệt thự hiện đại',
    time: ' 04/03/2021',
    description: 'Cổng biệt thự không chỉ bảo vệ an toàn cho biệt thự mà còn giúp tôn lên vẻ đẹp của toàn bộ ngôi nhà. Bạn có thể chọn mẫu cổng biệt thự với thiết kế...',
    image: 'https://nhomduchoanganh.vn/wp-content/uploads/2023/07/z4505743207626_a51da155bcdff377f8f4a4c3318e6eee.jpg'
  },
]

export const News = () => {
  const { selectedMenu, setSelectedMenu } = useContext(AppContext);

  return (
    <div>
      <Header />
      <div className="image-service">
        <img src="src\assets\anh_new.jpg" alt="" />
      </div>
      <div className="redirect-in-news">
        <div className="redirect-in-news-sub">
          <p><Link to={'/'} onClick={() => setSelectedMenu('home')}>Trang chủ</Link><RightOutlined className='arrow-right-icon' />News</p>
        </div>
      </div>
      <div className="news-container">
        {listNews.map((value, index) => (
          <New 
            image = {value.image}
            title = {value.title}
            time = {value.time}
            description = {value.description}
          />
        ))}
      </div>
      <div className="sub-news-footer">
        <div className="content">
          <h3>Hãy để Nhôm Đúc Hoàng Gia giúp bạn</h3>
          <p>Tư vấn thiết kế, sản xuất và thi công sản phẩm nhôm đúc</p>
        </div>
        <div className="phone-number">
          <p>GỌI NGAY 0858 250 715</p>
        </div>
      </div>
      <FixedIcons/>
      <Footer />
    </div>
  )
}
