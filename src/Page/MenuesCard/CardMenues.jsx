import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Logo1 from '../../../public/image-003.svg'
import styles from './style.module.css'
import { useEffect } from 'react'

const CardMenues = () => {
  const language = useSelector(state => state.isArabic)
  console.log(!language)

  useEffect(() => {
    console.log('Language changed:', language)
    // Place any logic or side effects dependent on the language state here
  }, [!language])
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
            <span className={styles.title}>
              {language ? 'الإفطار' : 'Breakfast'}
            </span>
          </div>
          <div className={styles.titleContainer}>
            <Card.Img
              variant='top'
              className={styles.top}
              src={Logo1}
              alt='Nahawand Logo 2'
            />
            <span className={styles.title}>
              {language ? 'الغداء والعشاء' : 'Lunch & Dinner'}
            </span>
          </div>
        </div>
        <Card.Body></Card.Body>
      </Card>
    </div>
  )
}

export default CardMenues
