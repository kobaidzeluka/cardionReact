import React from 'react';
import './Header.css';
import {ReactComponent as Logo} from '../../assets/photos/Vector.svg'; 
import {ReactComponent as Cardion} from '../../assets/photos/Cardion.svg'
import NavBar from './NavBar/NavBar';
import Button from '../Button';
import {ReactComponent as Phone} from '../../assets/photos/phone.svg'
function Header() {
    return (
        <header>
            <div className='header'>
                <div className='logo-div'>
                    <Logo className='logo-img'/>
                    <Cardion  />
                </div>
                <NavBar />
                <div className='ContactButton'>
                    <Button icon={<Phone />} phone='599 39 87 39' />
                </div>
            </div>
        </header>
    )
}

export default Header
