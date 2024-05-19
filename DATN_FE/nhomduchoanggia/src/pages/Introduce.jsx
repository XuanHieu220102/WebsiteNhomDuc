import React from 'react'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/Footer'
import '../style/Introduce.css'
import FixedIcons from '../components/FixedIcons'

export const Introduce = () => {
  return (
    <div>
      <Header />
      <div className="image-introduce">
        <img className='image-balcony' src="src\assets\cong-nhom-duc-hoa-la-tay-019.jpg" alt="" />
      </div>
      <div className="introduce-myself">
        <div className="introduce-myself-left">
          <h3 className='who-are-you'>CHÚNG TÔI LÀ AI</h3>
          <p className='i-am'>Chào mừng Quý khách đến với Nhôm đúc Hoàng Gia. Chúng tôi là
            một công ty chuyên sản xuất và cung cấp các sản phẩm nhôm đúc như cửa cổng, cầu thang, hàng rào, ban công, bông gió,
            với những thiết kế độc đáo và phong cách hoàng gia. Chúng tôi
            cam kết sản xuất các sản phẩm chất lượng, với đội ngũ nhân
            viên chuyên nghiệp và công nghệ hiện đại như khuôn đúc 3D
            và máy cắt CNC đảm bảo độ chính xác và tỉ mỉ trên từng họa
            tiết.</p>
          <p className='des-company'><span className='ctcpdt'>CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN</span> Hoàng Gia của chúng tôi có 10 năm kinh nghiệm trong lĩnh vực thiết kế nội thất. Chúng tôi luôn tìm tòi và cập nhật xu hướng mới trong thiết kế để cung cấp cho khách hàng những thiết kế đa dạng, độc đáo và sang trọng. Qua nhiều năm hoạt động, chúng tôi được sự tin tưởng của nhiều khách hàng. Chúng tôi sẽ tiếp tục hoàn thiện bản thân để cung cấp sản phẩm tốt nhất cho khách hàng.</p>
        </div>
        <div className="introduce-myself-right">
          <img className='image-introduce-myself' src="src\assets\image_10.jpg" alt="" />
        </div>
      </div>
      <div className="strengths">
        <p className="strengths-1">
          Thế mạnh làm nên thương hiệu Nhôm Đúc Hoàng Gia khác biệt chính là: Sự chuyên môn hóa trong từng bộ phận, tính trách nhiệm cao cùng những giám sát kỹ thuật làm việc nghiêm túc, cẩn thận nhằm tạo nên những sản phẩm hoàn thiện đến từng chi tiết nhỏ nhất. Ngoài ra, các bộ phận thường xuyên trao đổi công việc, chia sẻ những khó khăn, sáng kiến xây dựng nên một Việt Phát năng động, sáng tạo, chuyên nghiệp hơn trong từng dự án chúng tôi tham gia.
        </p>
        <p className='strengths-2'>
          Sản phẩm nhôm đúc là nhôm gồm nhôm cứng kết hợp với nhôm dẻo nguyên chất. Vì vậy các sản phẩm làm từ hợp kim nhôm có độ bền rấ cao, bên cạnh đó sản phẩm còn mang tính nhẹ, có thể tái sử dụng…Sản phẩm hợp kim nhôm nhẹ hơn hẳn so với sắt, còn về độ cứng thì bạn yên tâm với cấu tạo hợp kim đảm bảo độ vững chắc. Đồng thời hợp kim nhôm không bị oxy hóa nên có thể chống rỉ sét trong điều kiện thời tiết nhiệt đới như ở Việt Nam. Và để phù hợp với phong thủy, phong cách riêng  của từng ngôi nhà nên công ty chúng tôi nhận thiết kế theo yêu cầu của từng khách hàng. Sản phẩm của chúng tôi góp phần tạo nên sự sang trọng, quý phái cho ngôi nhà của bạn.
        </p>
        <img src="src\assets\image-introduce-2048x1276.jpg" alt="" />
      </div>
      <div className="vmt">
        <div className="vmt-content">
          <h2 className='vmt-title'>TẦM NHÌN</h2>
          <p>Chúng tôi tự hào về chất lượng sản phẩm và dịch vụ chuyên nghiệp, đảm bảo đáp ứng mọi nhu cầu của khách hàng. Với mục tiêu đó, Nhôm Đúc Hoàng Minh sẽ tiếp tục nỗ lực, phát triển và cải tiến hệ thống sản xuất và kinh doanh để cung cấp sản phẩm và dịch vụ tốt nhất cho khách hàng.</p>
        </div>
        <div className="vmt-content">
          <h2 className='vmt-title'>SỨ MỆNH</h2>
          <p>Sứ mệnh của Nhôm Đúc Hoàng Gia là đặt chất lượng sản phẩm và sự hài lòng của khách hàng lên hàng đầu, tạo nên một thương hiệu được tin dùng. Chúng tôi cam kết sẽ cố gắng hoàn thành mục tiêu này bằng cách sản xuất các sản phẩm chất lượng cao với giá cả hợp lý.</p>
        </div>
        <div className="vmt-content">
          <h2 className='vmt-title'>MỤC TIÊU</h2>
          <p>Chiến lược kinh doanh của Nhôm Đúc Hoàng Gia đưa ra tầm nhìn, sứ mệnh, trung thực, tôn trọng và kỷ luật. Chúng tôi nỗ lực để hiện thực hóa niềm tin của khách hàng trên mỗi sản phẩm nên chúng tôi trung thực với chính mình và với khách hàng. Mỗi sản phẩm chúng tôi sản xuất là sự tôn trọng của chúng tôi với chính mình, đồng nghiệp và khách hàng. Chúng tôi luôn tỉ mỉ và chính xác trong từng chi tiết sản phẩm nhưng vẫn đảm bảo hoàn thành đúng tiến độ và cung cấp sản phẩm đúng thời gian yêu cầu của khách hàng, vì chúng tôi hiểu rằng thời gian của họ là quý báu.</p>
        </div>
      </div>
      <div className="why-choose-me">
        <h2>TẠI SAO NÊN CHỌN CHÚNG TÔI</h2>
        <p>Tại sao chọn chúng tôi? Chúng tôi có 10 năm kinh nghiệm trong việc thiết kế và xây dựng kiến trúc, đội ngũ nhân viện đào tạo bài bản và trưởng thành. Chúng tôi sử dụng công nghệ khuôn đúc 3D và máy CNC để tạo ra những sản phẩm độc đáo với độ chính xác cao. Sản phẩm của chúng tôi bền với thời gian, là hợp kim nhôm đúc cứng cáp với màu sắc tươi mới sau nhiều năm sử dụng.</p>
      </div>
      <div className="logo-decorative">
        <img src="src\assets\Capture.JPG" alt="" />
      </div>
      <FixedIcons />
      <Footer />
    </div>
  )
}
