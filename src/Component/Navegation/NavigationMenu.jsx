import React from 'react'
import {
  BsHouseFill,
  BsHeartFill,
  BsGiftFill,
  BsClockFill,
  BsChatDotsFill
} from 'react-icons/bs'
import { Nav } from 'react-bootstrap'
import { RiGlobalLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Logo from '../../../public/image-003.svg'
import { useSelector } from 'react-redux'

const NavigationMenu = () => {
  const language = useSelector(state => state.isArabic)

  return (
    <div>
      <div className='offcanvaimg'>
        <img
          src={Logo}
          width={70}
          height={70}
          className='d-inline-block align rounded-circle'
          alt='Nahawand logo'
        />
        <p>{language ? 'مرحبا' : 'Welcome'}</p>
      </div>

      <div className='nav_wrap'>
        <Nav.Link as={Link} to='/' exact className='my-nav-link'>
          <BsHouseFill color='#ffce00' /> {language ? 'الرئيسية' : 'Home'}
        </Nav.Link>

        <Nav.Link as={Link} to='/favorites' className='my-nav-link'>
          <BsHeartFill color='#ffce00' />{' '}
          {language ? 'المفضلة' : 'Your Favorites'}
        </Nav.Link>

        <Nav.Link as={Link} to='/offers' className='my-nav-link'>
          <BsGiftFill color='#ffce00' /> {language ? 'العروض' : 'Offers'}
        </Nav.Link>

        <Nav.Link as={Link} to='/previous-orders' className='my-nav-link'>
          <BsClockFill color='#ffce00' />{' '}
          {language ? 'الطلبات السابقة' : 'Previous Order'}
        </Nav.Link>

        <Nav.Link as={Link} to='/feedback' className='my-nav-link'>
          <BsChatDotsFill color='#ffce00' />{' '}
          {language ? 'الملاحظات' : 'Feedback'}
        </Nav.Link>

        <Nav.Link
          href='#'
          className='my-nav-link'
          // onClick={handleLanguageChange}
        >
          <RiGlobalLine color='#ffce00' />
          {language ? 'EN' : 'عربي'}
        </Nav.Link>
      </div>
    </div>
  )
}

export default NavigationMenu
