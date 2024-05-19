import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/Footer'
import '../style/Products.css'
import { Link } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'
import { Button, Input, Select } from 'antd'
import { Product } from '../components/Product'
import { Pagination } from 'antd';
import { Corevalue } from '../components/Corevalue'
import { AppContext } from '../context/AppProvider'
import instance from '../api/api'
import FixedIcons from '../components/FixedIcons'
const { Option } = Select;

export const Products = () => {
  const [selectedOption, setSelectedOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const { selectedMenu, setSelectedMenu } = useContext(AppContext);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const [descriptionCategory, setDescriptionCategory] = useState('')
  const [listCategory, setListCategory] = useState([])
  const [dataSelectedCategory, setDataSelectedCategory] = useState([])
  const [categoryNameSelected, setCategoryNameSelected] = useState('');
  const [sellingProducts, setSellingProducts] = useState([])
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState('');
  const [listDataSearch, setListDataSearch] = useState([]);
  useEffect(() => {
    instance.get("/category")
      .then(res => {
        console.log(res);
        setListCategory(res.data)
        if (res.data.length > 0) {
          setDescriptionCategory(res.data[0].description)
          setCategoryNameSelected(res.data[0].name)
        }
      }).catch(err => {
        console.log(err);
      })
  }, [])

  useEffect(() => {
    instance.get("/cast-aluminum?size=2")
      .then(res => {
        setSellingProducts(res.data.content);
      }).catch(err => {
        console.log(err);
      })
  }, [])

  useEffect(() => {
    instance.get(`/cast-aluminum/category/${selectedCategoryId}?sort=${sortBy},${sortOrder}`)
      .then(res => {
        console.log(res.data.content);
        setDataSelectedCategory(res.data.content);
      }).catch(err => {
        console.log(err);
      })
  }, [selectedCategoryId, isLoading])

  const handleChangePage = (page) => {
    setCurrentPage(page);
  }

  const endIndex = Math.min(startIndex + itemsPerPage, dataSelectedCategory.length);
  const currentPageProducts = dataSelectedCategory.slice(startIndex, endIndex);

  const handleSelectedChange = (value) => {
    console.log(value);
    setSelectedOption(value);
    if (value === 'lowToHigh') {
      setSortBy('price');
      setSortOrder('asc');
      setIsLoading(!isLoading);
    } else if (value === 'highToLow') {
      setSortBy('price');
      setSortOrder('desc');
      setIsLoading(!isLoading);
    } else if (value === 'default') {
      setSortBy('id');
      setSortOrder('asc');
      setIsLoading(!isLoading);
    }
  }
  const filterLowToHigh = () => {}

  const filterHighToLow = () => {}

  const filterDefaultValue = () => {}

  const handleChangeInput = (e) => {
    setSearchData(e.target.value)
  }

  const handleBtnSearch = () => {
    instance.get(`/cast-aluminum?size=16&name=${searchData}`)
    .then(res => {
      console.log(res);
      setDataSelectedCategory(res.data.content);
    }).catch(err => {
      console.log(err);
    })
  }

  const handleBtnResetSearch = () => {
    setSearchData('');
    setIsLoading(!isLoading);
  }

  return (
    <div>
      <Header />
      <div className="show-banner-sub">
        <img className='img-banner-sub' src="src\assets\bg_default-1.jpg" alt="" />
      </div>
      <div className="shop-page-titlle">
        <div className="page-title-inner">
          <div className="page-title-content">
            <h2 className='title-category'> Sản phẩm</h2>
            <div className="is-small">
              <Link className='redirect-to-home' to={'/'} onClick={() => setSelectedMenu('home')}>Trang chủ</Link> <RightOutlined className='arrow-right-icon' /> <Link className='redirect-to-category'>{categoryNameSelected}</Link>
            </div>
          </div>
          <div className="fillter-products">
            <Select value={selectedOption} onChange={handleSelectedChange} style={{ width: 200 }}>
              <Option value="default" onCLick={filterDefaultValue}>Mặc định</Option>
              <Option value="lowToHigh" onClick={filterLowToHigh}>Giá thấp đến cao</Option>
              <Option value="highToLow" onClick={filterHighToLow}>Giá cao đến thấp</Option>
            </Select>
          </div>
        </div>
      </div>
      <div className="image-title">
        <img className='image-elementor' src="src\assets\Capture.JPG" alt="" />
        <h2 className='category-content-title'>DANH MỤC: {categoryNameSelected.toUpperCase()}</h2>
        <p className='description-category'>{descriptionCategory}</p>
      </div>
      <div className="search-container">
        <Input className='search-product-innput' value={searchData} onChange={handleChangeInput} placeholder='please enter product name !'></Input>
        <Button className='search-product-btn' onClick={handleBtnSearch}>Tìm kiếm</Button>
        <Button className='btn-reset-search' onClick={handleBtnResetSearch}>Reset</Button>
      </div>
      <div className="category-page">
        <div className="category-page-content">
          <div className="main-left">
            <div className="list-categories">
              <h2 className='list-category-title'>DANH MỤC SẢN PHẨM</h2>
              <ul className='categories'>
                {listCategory.map((value, index) => (
                  <li className='category-name' key={index} onClick={() => { setSelectedCategoryId(value.id); setDescriptionCategory(value.description), setCategoryNameSelected(value.name) }}>{value.name}</li>
                ))}
              </ul>
            </div>
            <div className="selling-products">
              <h2 className='selling-products-title'>SẢN PHẨM BÁN CHẠY</h2>
              {sellingProducts.map((value, index) => (
                <div className='selling-products-items'>
                  <Product
                    id={value.id}
                    key={index}
                    img={value.image}
                    name={value.name}
                    price={value.price}
                    rating={value.rating}
                  />
                </div>

              ))}
            </div>
          </div>
          <div className="main-right">
            {currentPageProducts.length === 0 ? (
              <p className='title-no-product'>Không có sản phẩm nào.</p>
            ) : (
              currentPageProducts.map((value, index) => (
                <Product
                  id={value.id}
                  img={value.image}
                  name={value.name}
                  price={value.price}
                  rating={value.rating}
                />
              ))
            )}
            <Pagination
              className='pagition-product-category'
              current={currentPage}
              total={dataSelectedCategory.length}
              pageSize={itemsPerPage}
              onChange={handleChangePage}
            />
          </div>
        </div>
      </div>
      <div className="image-title-footer">
        <img className='image-elementor' src="src\assets\Capture.JPG" alt="" />
      </div>
      <FixedIcons />
      <Corevalue />
      <Footer />
    </div>
  )
}
