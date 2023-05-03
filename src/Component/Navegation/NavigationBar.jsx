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
import { FaSearch, FaBars } from 'react-icons/fa'
import { useState } from 'react'
import './NavigationBar.css'
import {
  BsHouseFill,
  BsHeartFill,
  BsGiftFill,
  BsClockFill,
  BsChatDotsFill
} from 'react-icons/bs'
import { RiGlobalLine } from 'react-icons/ri'

function NavigationBar () {
  const [menuShow, setMenuShow] = useState(false)
  const [searchShow, setSearchShow] = useState(false)

  const handleMenuClose = () => setMenuShow(false)
  const handleMenuShow = () => setMenuShow(true)
  const handleSearchClose = () => setSearchShow(false)
  const handleSearchShow = () => setSearchShow(true)

  return (
    <Navbar
      style={{ backgroundColor: '#66480399' }}
      expand='lg'
      className='mb-3'
    >
      <Container fluid>
        <Button variant='' onClick={handleMenuShow}>
          <FaBars style={{ color: '#ffffff' }} />
        </Button>

        <Navbar.Brand
          href='#'
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
              backgroundColor: '#0000ff',
              padding: '1.2rem',
              textAlign: 'center'
            }}
          >
            <Offcanvas.Title style={{ color: '#ffffff' }}>
              Main Menu
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body style={{ backgroundColor: '#333' }}>
            <div className='offcanvaimg'>
              <img
                src={Logo}
                width={70}
                height={70}
                className='d-inline-block align rounded-circle'
                alt='Nahawand logo'
              />
              <p>Welcome</p>
            </div>
            <Nav className='my-nav flex-column'>
              <Nav.Link href='#' className='my-nav-link'>
                <BsHouseFill color='#ffce00' /> Home
              </Nav.Link>
              <Nav.Link href='#' className='my-nav-link'>
                <BsHeartFill color='#ffce00' /> Your Favorites
              </Nav.Link>
              <Nav.Link href='#' className='my-nav-link'>
                <BsGiftFill color='#ffce00' /> Offers
              </Nav.Link>
              <Nav.Link href='#' className='my-nav-link'>
                <BsClockFill color='#ffce00' /> Previous Order
              </Nav.Link>
              <Nav.Link href='#' className='my-nav-link'>
                <BsChatDotsFill color='#ffce00' /> Feedback
              </Nav.Link>
              <Nav.Link href='#' className='my-nav-link'>
                <RiGlobalLine color='#ffce00' /> عربي
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        <Form className='d-flex'>
          <Button variant='' onClick={handleSearchShow} className='ms-3'>
            <FaSearch style={{ color: '#ffffff' }} />
          </Button>
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
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-primary'>
                <FaSearch />
              </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
