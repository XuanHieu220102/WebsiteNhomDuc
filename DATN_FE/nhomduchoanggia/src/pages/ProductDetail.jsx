import React, { useEffect, useState } from 'react'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/Footer'
import '../style/ProductDetail.css'
import { Link } from 'react-router-dom'
import { RightOutlined, StarFilled, StarOutlined } from '@ant-design/icons'
import Slider from 'react-slick'
import { Product } from '../components/Product'
import { Button, Input } from 'antd'
import instance from '../api/api'
import FixedIcons from '../components/FixedIcons'
import { Alert } from 'antd';

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
export const ProductDetail = () => {
  const [productSelected, setProductSelected] = useState({});
  const [categoryIdSelected, setCategoryIdSelected] = useState();
  const [relatedProduct, setRelatedProduct] = useState([])
  const [alert, setAlert] = useState({ type: '', message: '' })
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };
  const [rating, setRating] = useState(0); // State để lưu trữ giá trị đánh giá
  const [comment, setComment] = useState(''); // State để lưu trữ nội dung đánh giá
  const [rate, setRate] = useState(5);
  const [loading, setLoading] = useState(true);
  // Hàm để cập nhật giá trị đánh giá
  const handleRatingChange = (value) => {
    setRating(value);
  };

  // Hàm để cập nhật nội dung đánh giá
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitReview = () => {
    instance.post(`/cast-aluminum/voting/${idProductSelected}/${rating}`)
      .then(res => {
        setAlert({ type: 'success', message: 'Gửi đánh giá thành công' })
        setTimeout(() => {
          setAlert({ type: '', message: '' });
        }, 2000);
        setRating(0);
        setComment('');
      }).catch(err => {
        console.log(err);
        setAlert({ type: 'error', message: 'Gửi đánh giá thất bại' })
        setRating(0);
        setComment('');
        setTimeout(() => {
          setAlert({ type: '', message: '' })
        }, 2000)
      })
  };

  const idProductSelected = localStorage.getItem("idProductSelected");
  useEffect(() => {
    instance.get(`/cast-aluminum/${idProductSelected}`)
      .then(res => {
        console.log("Here", res.data);
        setProductSelected(res.data);
        setCategoryIdSelected(res.data.category.id);
      }).catch(err => {
        console.log(err);
      })
  }, [idProductSelected])
  useEffect(() => {
    if (categoryIdSelected) {
      console.log(categoryIdSelected);
      instance.get(`/cast-aluminum/category/${categoryIdSelected}`)
        .then(res => {
          console.log(res.data);
          setRelatedProduct(res.data.content);
          setLoading(false);
        }).catch(err => {
          console.log(err);
        });
    }
  }, [categoryIdSelected]);

  const handleAddProductToLoveList = () => {
    const userId = localStorage.getItem('userId');
      instance.post(`/favorite-product/${userId}/${idProductSelected}`)
      .then(res => {
        setAlert({type:'success', message:res.data})
        setTimeout(() => {
          setAlert({ type: '', message: '' });
        }, 2000);
      }).catch(err => {
        setAlert({type:'error', message:err.response.data })
        setTimeout(() => {
          setAlert({ type: '', message: '' });
        }, 2000);
      })
  }
  return (
    <div>
      <div className="alert-container">
        {alert.message && <Alert message={alert.message} type={alert.type} showIcon />}
      </div>
      <Header />
      <div className="product-detail-header">
        <img className='image-title-product-detail' src="http://localhost:5173/src/assets/bg_default-1.jpg" alt="" />
      </div>
      <div className="product-detail-container">
        <div className="redirect-from-pt-to-home">
          <p><Link to={"/"}>Trang chủ</Link><RightOutlined className='arrow-right-icon' />Product name</p>
        </div>
        <div className="product-detail-content-2">
          <div className="product-detail-content-left">
            <img src={productSelected.image} alt="" />
          </div>
          <div className="product-detail-content-right">
            <h2>{productSelected.name}</h2>
            <p>{productSelected.price} đ/ m2</p>
            <p>Chi tiết sản phẩm</p>
            <ul>
              <li>– Phối màu theo yêu cầu của Quý khách hàng.</li>
              <li>– Kích thước theo yêu cầu của Quý khách hàng</li>
              <li>– Bảo trì trọn đời</li>
              <li>– Chất liệu: Hợp kim nhôm đúc nguyên khối, nhôm nguyên chất trên 90%</li>
              <li>– Công nghệ: Đúc chân không</li>
              <li>– Liên hệ tư vấn 24/7: 037 314 8888</li>
            </ul>
            <div className='rating-product-in-product-detail'>
              {[...Array(5)].map((_, index) => (
                <span
                  className='star-in-product-detail'
                  key={index}
                  style={{ cursor: 'pointer', color: index < productSelected.rating ? 'gold' : 'gray' }} // Tô màu cho các ngôi sao dựa trên giá trị đánh giá
                >
                  &#9733;
                </span>
              ))}
            </div>
            <Button className='btn-order-in-product-detail'><Link to={'/order-now'}>ĐẶT HÀNG NGAY</Link></Button>
            <Button className='btn-contact-in-product-detail'><Link to={'/contact'}>LIÊN HỆ</Link></Button>
            <Button className='btn-add-to-love-list' onClick={handleAddProductToLoveList}>THÊM VÀO MỤC YÊU THÍCH</Button>
          </div>
        </div>
        <div className="product-review">
          <h2 className='rating-title'>ĐÁNH GIÁ</h2>
          <div className="rating-container">
            <p>Luợt đánh giá: {productSelected.votes}</p>
            <p className='rating-title-text'>Đánh giá của bạn*</p>
            <span className="rating-stars">
              {[...Array(5)].map((_, index) => (
                <span
                  className='star'
                  key={index}
                  onClick={() => handleRatingChange(index + 1)} // Gọi hàm khi người dùng nhấp vào ngôi sao
                  style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }} // Tô màu cho các ngôi sao dựa trên giá trị đánh giá
                >
                  {index < rating ? <StarFilled /> : <StarOutlined />}
                </span>
              ))}
            </span>
          </div>
          <p className='comment-title'>Nhận xét của bạn*</p>
          <Input
            placeholder="Nhập nhận xét của bạn"
            value={comment}
            onChange={handleCommentChange}
          />
          <Button onClick={handleSubmitReview}>Gửi đánh giá</Button>
        </div>
        <div className="related-product">
          <h3 className='title-product-related'>SẢN PHẨM LIÊN QUAN</h3>
          <Slider {...settings}>
            {loading ? (
              <div className="loading-spinner">Đang tải...</div>
            ) : (
              relatedProduct.map((value, index) => (
                <div className="slider-item" key={index}>
                  <Product
                    id={value.id}
                    name={value.name}
                    img={value.image}
                    price={value.price}
                    rating={value.rating}
                  />
                </div>
              ))
            )}
          </Slider>
        </div>
      </div>
      <FixedIcons />
      <Footer />
    </div>
  )
}
