import React from 'react'
import './styles.css'
import logo from '../../assets/images/filmix-logo-new.svg'
import { Link } from 'react-router-dom'
import { SearchForm } from '../search/'
import { Menu } from '../menu/index.jsx'
import { AlignJustify } from 'lucide-react';

export const Header = () => {

    const [openMenu, setOpenMenu] = React.useState(false)

    const handleMenuClick = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <>

            <header className="header">
                {openMenu ? <Menu className='menu-block' handleMenuClick={handleMenuClick} /> : null}

                <div className='left-block'>

                    <div className="menu" onClick={handleMenuClick}><AlignJustify color='tomato' size={40} strokeWidth={2.2} /></div>

                    <div className='logo'>
                        <Link to='/'>
                            <img className='logo' src={logo} alt='logo' />
                        </Link>
                    </div>

                </div>
                <div className='right-block'>
                    <SearchForm className='search' />
                </div>


            </header>
        </>
    )
}
