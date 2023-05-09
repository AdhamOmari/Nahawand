import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Logo1 from '../../../public/image-003.svg'
import Logo2 from '../../../public/vite.svg'
import styles from './style.module.css'
import aleftarImage from '../../../public/KHA02269.jpg'
import lanchImage from '../../../public/KHA02282.jpg'
import { useEffect } from 'react'

const CardMenues = () => {
  const language = useSelector(state => state.isArabic)
  console.log(!language)

  useEffect(() => {
    console.log('Language changed:', language)
    // Place any logic or side effects dependent on the language state here
  }, [!language])

  return (
    <div className={styles.wrap_card}>
      <div className={`${styles.cardContainer} rtl`}>
        <h2 className={styles.menu_center}>Menu</h2>

        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <Card.Img
              variant='top'
              className={styles.top}
              src={aleftarImage}
              d
            />

            <div className={styles.shadow}></div>
            <p className={styles.title}>{language ? 'الإفطار' : 'Breakfast'}</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <Card.Img variant='top' className={styles.top} src={lanchImage} />
            <div className={styles.shadow}></div>
            <p className={styles.title}>
              {language ? 'الغداء والعشاء' : 'Lunch & Dinner'}
            </p>{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardMenues
