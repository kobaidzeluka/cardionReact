import React from 'react'
import './Service.css'
import Item from '../Item';
import Button from '../Button';
function Service({ item }) {


    return (
        <div className='Service-container'>
            <Item title='ბინაზე გამოძახებით' />
            <h2 className='service-title'>კარდიოლოგიური სერვისები</h2>
            <div>
                {
                    item.map((item, index) => {
                        return (
                            <div className='description-line'>
                                <span>{index  + 1}</span>
                                <div>
                                    {
                                        item.title
                                        ? (
                                            <>
                                                <h5>{item.title}</h5>
                                                <h6> {item.subTitle}</h6>
                                            </>
                                        )
                                        : <h5>{item}</h5>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Button title='დაჯავშნე ვიზიტი' customClass='Primary' />
        </div>
    )
}

export default Service
