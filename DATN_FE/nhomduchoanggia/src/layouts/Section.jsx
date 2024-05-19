import React, { useEffect, useState } from 'react'
import { Corevalue } from '../components/Corevalue'
import { Product } from '../components/Product'
import instance from '../api/api'
import { error } from 'jquery'


export const Section = () => {
    const [listCategoryProduct, setListCategoryProduct] = useState('gate');
    const [listProduct, setListProduct] = useState([])
    const [dataList, setDataList] = useState([]);
    const [IdCategorySelected, setIdCategorySelected] = useState(1);
    const [dataListCategorySelected, setDataListCategorySelected] = useState([])

    useEffect(() => {
        instance.get("/cast-aluminum?size=16")
            .then(res => {
                setDataList(res.data.content);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        let newIdCategorySelected;
        if (listCategoryProduct === 'gate') {
            newIdCategorySelected = 1;
        } else if (listCategoryProduct === 'bancony') {
            newIdCategorySelected = 3;
        } else if (listCategoryProduct === 'stair') {
            newIdCategorySelected = 6;
        }
        console.log(newIdCategorySelected);
        instance.get(`/cast-aluminum/category/${newIdCategorySelected}?size=8`)
            .then(res => {
                console.log(res.data);
                setDataListCategorySelected(res.data.content);
            }).catch(err => {
                console.log(err);
            });
    }, [listCategoryProduct]);
    return (
        <div>
            <div className="section">
                <p className='title-section'>SẢN PHẨM MỚI NHẤT</p>
                <div className="list-product">
                    {dataList.map((value, index) => (
                        <Product
                            id={value.id}
                            img={value.image}
                            name={value.name}
                            index={index + 1}
                            price={value.price}
                            rating={value.rating}
                        />
                    ))}
                </div>
                <div className="section-images">
                    <div className="image-wrapper">
                        <img className='section-image' src="https://congnhomducquangthanhgroup.com/wp-content/uploads/2022/03/banner-1-1024x428.jpg" alt="anh-section-1" />
                    </div>
                    <div className="image-wrapper">
                        <img className='section-image' src="https://congnhomducquangthanhgroup.com/wp-content/uploads/2022/03/Bao-duong-dinh-ky-1024x428.jpg" alt="anh-section-2" />
                    </div>
                </div>
                <div className="tabbed-content">
                    <ul className='tab'>
                        <li className={listCategoryProduct === 'gate' ? 'active' : ''} onClick={() => setListCategoryProduct('gate')}>CỔNG NHÔM ĐÚC</li>
                        <li className={listCategoryProduct === 'bancony' ? 'active' : ''} onClick={() => setListCategoryProduct('bancony')}>LAN CAN NHÔM ĐÚC</li>
                        <li className={listCategoryProduct === 'stair' ? 'active' : ''} onClick={() => setListCategoryProduct('stair')}>CẦU THANG NHÔM ĐÚC</li>
                    </ul>
                    <div className="products">
                        {dataListCategorySelected.length > 0 && dataListCategorySelected.map((value, index) => (
                            <Product
                                id={value.id}
                                img={value.image}
                                name={value.name}
                                index={index + 1}
                                price={value.price}
                                rating={value.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="collapse">
                    <img src="src\assets\z4290090014622_46dceb18693c4d23a49c7d4029759b78-1024x515.jpg" alt="" />
                    <img src="src\assets\z4290090123122_9983e8aa98c7f4a867d1fa8fc1bff8fe-1024x515.jpg" alt="" />
                    <img src="src\assets\z4290090188782_4cdbcd0c5bdf9d5b930bc81635ebb507-1024x515.jpg" alt="" />
                    <img src="src\assets\z4290090218735_2aaca887163ecaed8ebe381424949bad-1024x515.jpg" alt="" />
                </div>
                <Corevalue />
            </div>
        </div>
    )
}
