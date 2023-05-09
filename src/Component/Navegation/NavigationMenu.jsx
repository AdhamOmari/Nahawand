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

const NavigationMenu = ({ handleLanguageChange }) => {
  const language = useSelector(state => state.isArabic)
  const textDirection = language ? 'rtl' : 'ltr'

  return (
    <div className={`navigation-menu ${textDirection}`}>
      <div className={`offcanvaimg ${textDirection}`}>
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
          <BsHouseFill color='#ffce00' className='icon' />{' '}
          {language ? 'الرئيسية' : 'Home'}
        </Nav.Link>

        <Nav.Link
          as={Link}
          to='/favorites'
          className={`my-nav-link ${textDirection}`}
        >
          <BsHeartFill color='#ffce00' className='icon' />{' '}
          {language ? 'المفضلة' : 'Your Favorites'}
        </Nav.Link>

        <Nav.Link
          as={Link}
          to='/offers'
          className={`my-nav-link ${textDirection}`}
        >
          <BsGiftFill color='#ffce00' className='icon' />{' '}
          {language ? 'العروض' : 'Offers'}
        </Nav.Link>

        <Nav.Link
          as={Link}
          to='/Location'
          className={`my-nav-link ${textDirection}`}
        >
          <ImLocation color='#ffce00' className='icon' />{' '}
          {language ? 'الموقع' : 'Location'}
        </Nav.Link>

        <Nav.Link
          as={Link}
          to='/Opinion'
          className={`my-nav-link ${textDirection}`}
        >
          <BsChatDotsFill color='#ffce00' className='icon' />{' '}
          {language ? 'الملاحظات' : 'Feedback'}
        </Nav.Link>

        <Nav.Link
          href='#'
          className={`my-nav-link ${textDirection}`}
          onClick={handleLanguageChange}
        >
          <RiGlobalLine color='#ffce00' className='icon' />{' '}
          {language ? 'EN' : 'عربي'}
        </Nav.Link>
      </div>
    </div>
  )
}

export default NavigationMenu
