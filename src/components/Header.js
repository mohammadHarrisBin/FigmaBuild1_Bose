import React from 'react'
import './Header.css'
function Header() {
    return (
        <div id={'header-container'}>
            <div id={'header-inner-container'}>


                {/* ICON/LOGO */}
                {/* <img src={require('../assets/Logo.png')} width={'20%'} color={'white'}/> */}
                <h1 style={{ color: 'white', fontFamily:'Helvetica Neue' }}>BOSE</h1>
                {/* MENU */}

                <ul>
                    <li><a href='#'>Headphones</a></li>
                    <li><a href='#'>Speakers</a></li>
                    <li><a href='#'>Support</a></li>
                </ul>

                {/* EMPTY */}

                <div>
                </div>
            </div>
        </div>
    )
}

export default Header
