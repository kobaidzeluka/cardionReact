import React from 'react'
import './Button.css'
function Button({title, onClick, customClass, icon, phone}) {
    return (
        <div onClick={onClick} className={`button ${customClass ? customClass : ""}`}>
            { icon ?
                <div className='iconDiv'>
                    {icon}
                </div>
                : null
            }
            { phone ?
                <a href={`tel: ${phone}`}>{phone}</a>
                : null
            }
            { title ?
                <p>{title}</p>
                : null
            }
        </div>
    )
}

export default Button
