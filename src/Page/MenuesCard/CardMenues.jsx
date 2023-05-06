import { Card } from 'react-bootstrap'
import Logo1 from '../../../public/image-003.svg'
import styles from './style.module.css'

const CardMenues = () => {
  return (
    <div className={styles.cardContainer}>
      <Card className={styles.card}>
        <div className={styles.imgContainer}>
          <div className={styles.titleContainer}>
            <Card.Img
              variant='top'
              className={styles.top}
              src={Logo1}
              alt='Nahawand Logo 1'
            />

            <span className={styles.title}>Practice</span>
          </div>
          <div className={styles.titleContainer}>
            <Card.Img
              variant='top'
              className={styles.top}
              src={Logo1}
              alt='Nahawand Logo 2'
            />

            <span className={styles.title}>Lunch &amp; Dinner</span>
          </div>
        </div>
        <Card.Body></Card.Body>
      </Card>
    </div>
  )
}

export default CardMenues
