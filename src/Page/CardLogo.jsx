import { Card } from 'react-bootstrap'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSnapchatGhost
} from 'react-icons/fa'
import Logo from '../../public/image-003.svg'
import './CardLogo.css'

const CardLogo = () => {
  return (
    <center>
      <Card className='card' style={{ backgroundColor: '#fff' }}>
        <Card.Img
          variant='top'
          src={Logo}
          alt='Nahawand Logo '
          style={{ width: '128px' }}
        />
        <Card.Body>
          <div className='social-media-icons'>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaSnapchatGhost />
          </div>
        </Card.Body>
      </Card>
    </center>
  )
}

export default CardLogo
