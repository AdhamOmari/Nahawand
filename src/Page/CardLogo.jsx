import { Card } from 'react-bootstrap'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSnapchatGhost
} from 'react-icons/fa'
import Logo from '../../public/image-003.svg'
import styles from './style.module.css'

const CardLogo = () => {
  return (
    <center>
      <Card className={styles.card}>
        <Card.Img
          variant='top'
          className={styles.top}
          src={Logo}
          alt='Nahawand Logo '
        />
        <div className={styles.socialmediaicons}>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaSnapchatGhost />
        </div>
        <Card.Body></Card.Body>
      </Card>
    </center>
  )
}

export default CardLogo
