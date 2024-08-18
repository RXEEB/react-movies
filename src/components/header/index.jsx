import React from 'react'
import './styles.css'
import logo from '../../assets/images/filmix-logo-new.svg'
import { Link } from 'react-router-dom'
import { Search } from '../search/'

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className='header-contaner'>
                    <div className='left-block'>
                        <div className="menu">menu</div>
                        <Link to='/'>
                            <img className='logo' src={logo} alt='logo' />
                        </Link>
                    </div>
                    <div className='right-block'>
                        <Search />
                    </div>
                </div>
            </header>




        </>
    )
}
