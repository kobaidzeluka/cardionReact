import React from 'react'
import './Footer.css'
import {ReactComponent as Mail} from '../../assets/photos/mail.svg'
import {ReactComponent as Mask} from '../../assets/photos/Mask.svg'
import {ReactComponent as Instagram} from '../../assets/photos/instagram.svg'
import {ReactComponent as Phone} from '../../assets/photos/phone.svg'
import Button from '../Button'
function Footer() {
    return (
        <footer>
           <div className='footerContainer'>
               <div className='footerTopContainer'>
                    <div className='contactPreview'>
                        <h3>კონტაქტი</h3>
                        <p>კარდიოლოგიის და ექოსკოპიის სერვისები, ბინაზე გამოძახებით.</p>
                    </div>
                    <div className='contactDiv'>
                        <ul>
                            <li>
                                <div className='footerIconDiv'>
                                <Phone />
                                </div>
                                <a href=''>+995 599 28 07 10</a>
                            </li>
                            <li>
                            <div className='footerIconDiv'>
                                <Mail />
                                
                            </div>
                            <a href='mailto:info@cardion.ge'>info@cardion.ge</a>
                            </li>
                            <li>
                            <div className='footerIconDiv'>
                                <Mask />
                                </div>
                                <a href=''>@Cardion.ge</a>
                            </li>
                            <li>
                            <div className='footerIconDiv'>
                                <Instagram />
                                </div>
                                <a href=''>Cardion</a>
                            </li>
                        </ul>
                    </div>
                    <div className='anything'>
                        <h4>ბინაზე გამოძახებით 24/7, ნებისმიერ დროს</h4>
                        <Button customClass='footerButton' title='დაჯავშნე ვიზიტი' />
                    </div>
               </div>
               <span className='borderLine'></span>
               <p className='copyRight'>&copy; 2022 Cardion.ge ყველა უფლება დაცულია</p>
           </div>
        </footer>
    )
}

export default Footer
