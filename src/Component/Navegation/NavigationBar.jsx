import {
  Container,
  Navbar,
  Nav,
  FormControl,
  Button,
  Form,
  Offcanvas
} from 'react-bootstrap'
import Logo from '../../../public/image-003.svg'
import { FaSearch, FaBars, FaArrowLeft } from 'react-icons/fa'
import { CgMenuLeftAlt } from 'react-icons/cg'
import { useEffect, useState } from 'react'
import './NavigationBar.css'

import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../../Redux/Language/LangugeAction'
import SearchNav from './searchNav'
import NavigationMenu from './NavigationMenu'
import { useNavigate } from 'react-router-dom'

function NavigationBar () {
  const [menuShow, setMenuShow] = useState(false)
  const [searchShow, setSearchShow] = useState(false)
  const navigate = useNavigate()

  const handleMenuClose = () => setMenuShow(false)
  const handleMenuShow = () => setMenuShow(true)
  const handleSearchClose = () => setSearchShow(false)
  const handleSearchShow = () => setSearchShow(true)
  const dispatch = useDispatch()
  const [isRootPage, setIsRootPage] = useState(true)

  const language = useSelector(state => state.isArabic)

  useEffect(() => {
    console.log('Language changed:', language)
    // Place any logic or side effects dependent on the language state here
  }, [language])
  useEffect(() => {
    setIsRootPage(window.location.pathname === '/')
  }, [isRootPage])
  const handleLanguageChange = () => {
    dispatch(setLanguage(!language)) // Dispatch the action to update the language in Redux store
  }
  const handleArrowBackClick = () => {
    navigate(-1) // Go back to the previous page
  }
  return (
    <Navbar
      style={{ backgroundColor: '#1632a2' }}
      expand='lg'
      className='mb-3  navs'
    >
      <Container fluid>
        <Button variant='' onClick={handleMenuShow}>
          <CgMenuLeftAlt style={{ color: '#ffffff' }} size={30} />
        </Button>

        <Navbar.Brand
          href='/'
          style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 'bold' }}
        >
          <img
            src={Logo}
            width={80}
            height={80}
            className='d-inline-block align rounded-circle'
            alt='Nahawand logo'
          />
        </Navbar.Brand>

        <Offcanvas
          show={menuShow}
          onHide={handleMenuClose}
          placement='start'
          backdrop='static'
        >
          <Offcanvas.Header
            closeVariant='white'
            closeButton
            style={{
              backgroundColor: '#1632a2',
              padding: '1.2rem',
              textAlign: 'center'
            }}
          >
            <Offcanvas.Title style={{ color: '#ffffff' }}>
              {language ? 'القائمة الرئيسية' : 'Main Menu'}
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body style={{ backgroundColor: '#495057' }}>
            <NavigationMenu handleLanguageChange={handleLanguageChange} />
          </Offcanvas.Body>
        </Offcanvas>

        <Form className='d-flex'>
          {window.location.pathname === '/' ? (
            <Button variant='' onClick={handleSearchShow} className='ms-3'>
              <FaSearch style={{ color: '#ffffff' }} size={25} />
            </Button>
          ) : (
            <Button variant='' onClick={handleArrowBackClick} className='ms-3'>
              <FaArrowLeft style={{ color: '#ffffff' }} size={30} />
            </Button>
          )}
        </Form>

        <Offcanvas
          show={searchShow}
          onHide={handleSearchClose}
          placement='end'
          backdrop='static'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Search</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className='d-flex'>
              {window.location.pathname === '/' ? (
                <>
                  <FormControl
                    type='search'
                    placeholder='Search'
                    className='me-2'
                    aria-label='Search'
                  />
                  <Button variant='outline-primary'>
                    <FaSearch />
                  </Button>
                </>
              ) : (
                <Button
                  variant=''
                  onClick={handleArrowBackClick}
                  className='ms-3'
                >
                  <FaArrowLeft style={{ color: '#ffffff' }} />
                </Button>
              )}
            </Form>
            <br />
            <SearchNav />
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
      <Button
        variant='primary'
        onClick={handleLanguageChange}
        className='language_btn'
      >
        {language ? 'EN' : 'عربي'}
      </Button>
    </Navbar>
  )
}

export default NavigationBar
