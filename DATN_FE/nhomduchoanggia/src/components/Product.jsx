import React, { useContext, useState } from 'react'
import '../style/Home.css'
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppProvider';
function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const Product = (props) => {
    const [rating, setRating] = useState(5); // State để lưu trữ giá trị đánh giá

    // Hàm để cập nhật giá trị đánh giá

    const handleProductClick = () => {
        localStorage.setItem("idProductSelected", props.id);
    };
    return (
        <>
            <div className="product-new-item">
                <Link className='product-detail-content' to={`/product/${props.name}`} onClick={handleProductClick}>
                    <img className='product-new-item-image' src={props.img} alt={`Product ${props.index + 1}`} />
                    <p className='product-new-item-name'>{props.name}</p>
                    {props.price && (
                        <p className='product-new-item-price'>{formatNumber(props.price)} / M2</p>
                    )}
                </Link>
                <p className='contact-in-product'>LIÊN HỆ</p>
                <div className='rating-product'>
                    {[...Array(5)].map((_, index) => (
                        <span
                            className='star'
                            key={index}
                            // onClick={() => handleRatingChange(index + 1)} // Gọi hàm khi người dùng nhấp vào ngôi sao
                            style={{ cursor: 'pointer', color: index < props.rating ? 'gold' : 'gray' }} // Tô màu cho các ngôi sao dựa trên giá trị đánh giá
                        >
                            &#9733;
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
}
