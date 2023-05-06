import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

function Footer () {
  return (
    <footer className='bg-dark  footer'>
      <a
        href='https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202.'
        className='float'
        target='_blank'
        rel='noreferrer'
      >
        <i className='fa fa-whatsapp my-float whatsapp-icon'></i>
      </a>
      <Container>
        <Row>
          <Col md={6} className='mb-3'>
            <h5 className='text-uppercase'>Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </Col>

          <Col md={3} className='mb-3'>
            <h5 className='text-uppercase'>Links</h5>
            <ul className='list-unstyled'>
              <li>
                <a href='#!'>Link 1</a>
              </li>
              <li>
                <a href='#!'>Link 2</a>
              </li>
              <li>
                <a href='#!'>Link 3</a>
              </li>
              <li>
                <a href='#!'>Link 4</a>
              </li>
            </ul>
          </Col>

          <Col md={3} className='mb-3'>
            <h5 className='text-uppercase'>Links</h5>
            <ul className='list-unstyled'>
              <li>
                <a href='#!'>Link 1</a>
              </li>
              <li>
                <a href='#!'>Link 2</a>
              </li>
              <li>
                <a href='#!'>Link 3</a>
              </li>
              <li>
                <a href='#!'>Link 4</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div className='bg-dark text-white text-center py-2'>
        <p className='mb-0'>
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
