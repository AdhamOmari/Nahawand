import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSnapchatGhost
} from 'react-icons/fa'

function Footer () {
  const isArabic = useSelector(state => state.isArabic)

  return (
    <footer className={`bg-dark footer `}>
      <a
        href='https://api.whatsapp.com/send?phone=0796087362&text=hello'
        className='float'
        target='_blank'
        rel='noreferrer'
      >
        <i className='fa fa-whatsapp my-float whatsapp-icon'></i>
      </a>

      <div className='footer-info'>
        <h5 className='text-uppercase'>
          {isArabic
            ? 'تشمل الأسعار ضريبة القيمة المضافة'
            : 'Prices include VAT'}
        </h5>
        <p className='text-uppercase'>
          {isArabic
            ? 'متوسط السعرات الحرارية التي يتناولها الشخص في اليوم هو 2000'
            : 'Average calorie intake per person in a day is 2000'}
        </p>
      </div>
      <div className='socialmediaicons'>
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaSnapchatGhost />
      </div>
      <div className='bg-dark text-white text-center py-2'>
        <Container>
          <Row>
            <Col xs={12} className='mb-0'>
              <p className='mb-0 text-center'>
                © {new Date().getFullYear()} Your Company. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
