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

  const whatsappText = isArabic
    ? 'مرحبًا، أرغب في معرفة المزيد عن عناصر القائمة في المطعم 😃 🥩'
    : 'Hello, I want to know more about the menu items in the restaurant 😃 🥩'

  return (
    <footer className={`bg-dark footer `}>
      <a
        href={`https://api.whatsapp.com/send?phone=962796087362&text=${encodeURIComponent(
          whatsappText
        )}`}
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
            ? 'متوسط السعرات الحرارية التي يتناولها الشخص في اليوم 2000'
            : 'Average calorie intake per person in  day is 2000'}
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
              <p className={`mb-0 text-center ${isArabic ? 'rtl' : 'ltr'}`}>
                © {new Date().getFullYear()}{' '}
                {isArabic ? 'مطعم نهواند' : 'NAHAWAND Grill House'}.{' '}
                {isArabic ? 'جميع الحقوق محفوظة' : 'All rights reserved.'}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
