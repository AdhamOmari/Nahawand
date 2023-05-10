import React from 'react'
import {
  BsHouseFill,
  BsHeartFill,
  BsGiftFill,
  BsChatDotsFill
} from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { Nav } from 'react-bootstrap'
import { RiGlobalLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Logo from '../../../public/image-003.svg'
import { useSelector } from 'react-redux'

import './NavigationBar.css' // Import your CSS file

const NavigationMenu = ({ handleLanguageChange }) => {
  const language = useSelector(state => state.isArabic)
  const textDirection = language ? 'rtl' : 'ltr'

  return (
    <div className={`navigation-menu ${textDirection}`}>
      <div className={`offcanvaimg `}>
        <img
          src={Logo}
          width={90}
          height={90}
          className='d-inline-block align rounded-circle'
          alt='Nahawand logo'
        />
        <h2>
          {language
            ? 'نهاوند بيت المشاوي الأعلى تقييماً'
            : 'Nahawand Highest Rated'}
        </h2>
      </div>

      <div className='nav_wrap'>
        <Nav.Link as={Link} to='/' className={`my-nav-link ${textDirection}`}>
          <span className='link-text'>{language ? 'الرئيسية' : 'Home'}</span>
          <BsHouseFill color='#ffce00' className='icon' />
        </Nav.Link>

        <Nav.Link
          as={Link}
          to='/favorites'
          className={`my-nav-link ${textDirection}`}
        >
          <span className='link-text'>
            {language ? 'المفضلة' : 'Your Favorites'}
          </span>
          <BsHeartFill color='#ffce00' className='icon' />
        </Nav.Link>

        <Nav.Link
          as={Link}
          to='/offers'
          className={`my-nav-link ${textDirection}`}
        >
          <span className='link-text'>{language ? 'العروض' : 'Offers'}</span>
          <BsGiftFill color='#ffce00' className='icon' />
        </Nav.Link>

        <Nav.Link
          as={Link}
          to='/Location'
          className={`my-nav-link ${textDirection}`}
        >
          <span className='link-text'>{language ? 'الموقع' : 'Location'}</span>
          <ImLocation color='#ffce00' className='icon' />
        </Nav.Link>

        <Nav.Link
          as={Link}
          to='/Opinion'
          className={`my-nav-link ${textDirection}`}
        >
          <span className='link-text'>
            {language ? 'الملاحظات' : 'Feedback'}
          </span>
          <BsChatDotsFill color='#ffce00' className='icon' />
        </Nav.Link>

        <Nav.Link
          href='#'
          className={`my-nav-link ${textDirection}`}
          onClick={handleLanguageChange}
        >
          <span className='link-text'>{language ? 'EN' : 'عربي'}</span>
          <RiGlobalLine color='#ffce00' className='icon' />
        </Nav.Link>
      </div>
    </div>
  )
}

export default NavigationMenu
