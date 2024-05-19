import { Button } from 'antd'
import React from 'react'

export const New = (props) => {
  return (
    <div>
        <div className="new-container">
            <div className="new-content-left">
                <img src={props.image} alt={props.image} />                
            </div>
            <div className="new-content-right">
                <h2>{props.title}</h2>
                <p className='new-time'>{props.time} | Đăng bởi Admin</p>
                <p className='new-description'>{props.description}</p>
                <Button className='btn-more-view'>XEM THÊM</Button>
            </div>
        </div>
    </div>
  )
}
