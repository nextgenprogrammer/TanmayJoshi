import React from 'react'
import logo from '../images/Logo.png'

const Header = () => {
    return(
        <div className='w-screen flex justify-center'>
            <div className='mt-20'>
                <img src={logo} height={250} width={550}/>
            </div>
        </div>
    );
}


export default Header;