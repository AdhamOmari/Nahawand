import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './NavigationBar.css'

const SearchNav = () => {
  const language = useSelector(state => state.isArabic)

  return (
    <div className={language ? 'rtl' : 'ltr'}>
      <h5>{language ? 'قائمة الغداء' : 'Lunch Menu'}</h5>
      <Nav className='flex-column'>
        <Nav.Link as={Link} to='/menu/sandwich'>
          {language ? 'ساندويتش' : 'Sandwich'}
        </Nav.Link>
        <Nav.Link as={Link} to='/menu/salad'>
          {language ? 'سلطة' : 'Salad'}
        </Nav.Link>
        <Nav.Link as={Link} to='/menu/soup'>
          {language ? 'شوربة' : 'Soup'}
        </Nav.Link>
      </Nav>
      <hr />
      <h5>{language ? 'قائمة العشاء' : 'Dinner Menu'}</h5>
      <Nav className='flex-column'>
        <Nav.Link as={Link} to='/menu/appetizer'>
          {language ? 'مقبلات' : 'Appetizer'}
        </Nav.Link>
        <Nav.Link as={Link} to='/menu/main-course'>
          {language ? 'الطبق الرئيسي' : 'Main Course'}
        </Nav.Link>
        <Nav.Link as={Link} to='/menu/dessert'>
          {language ? 'حلوى' : 'Dessert'}
        </Nav.Link>
      </Nav>
    </div>
  )
}

export default SearchNav
