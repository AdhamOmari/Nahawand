import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SearchNav = () => {
  return (
    <div>
      <h5>Lunch Menu</h5>
      <Nav className='flex-column'>
        <Nav.Link as={Link} to='/menu/sandwich'>
          Sandwich
        </Nav.Link>
        <Nav.Link as={Link} to='/menu/salad'>
          Salad
        </Nav.Link>
        <Nav.Link as={Link} to='/menu/soup'>
          Soup
        </Nav.Link>
      </Nav>
      <hr />
      <h5>Dinner Menu</h5>
      <Nav className='flex-column'>
        <Nav.Link as={Link} to='/menu/appetizer'>
          Appetizer
        </Nav.Link>
        <Nav.Link as={Link} to='/menu/main-course'>
          Main Course
        </Nav.Link>
        <Nav.Link as={Link} to='/menu/dessert'>
          Dessert
        </Nav.Link>
      </Nav>
    </div>
  )
}

export default SearchNav
