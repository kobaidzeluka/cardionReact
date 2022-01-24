import React from 'react';
import {ReactComponent as CoverImg} from '../../assets/photos/Cover.svg';
import './Cover.css';
import Item from '../Item';
import Button from '../Button';
function Cover() {
    return (
        <div className='Cover-div'>
            <div className='cover-middle'>
                <CoverImg />
                <div className='Cover-info'>
                    <Item title='ბინაზე გამოძახებით' />
                    <h2>დაჯავშნე 24/7 ონლაინ</h2>
                    <Button customClass='Primary' title='დაჯავშნე ონლაინ' />
                </div>
            </div>
        </div>
    )
}

export default Cover
