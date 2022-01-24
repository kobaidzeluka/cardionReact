import React from 'react'
import './Item.css'
function Item({title}) {
    return (
        <div className='item-container'>
            <p>{title}</p>
        </div>
    )
}

export default Item
