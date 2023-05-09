import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Logo1 from '../../../public/image-003.svg'
import Logo2 from '../../../public/vite.svg'
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
    <div className={styles.wrap_card}>
      <div className={`${styles.cardContainer} rtl`}>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <Card.Img
              variant='top'
              className={styles.top}
              src={
                'data:image/jpeg;base64,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'
              }
              d
            />

            <div className={styles.shadow}></div>
            <p className={styles.title}>{language ? 'الإفطار' : 'Breakfast'}</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <Card.Img
              variant='top'
              className={styles.top}
              src={
                'data:image/jpeg;base64,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'
              }
            />{' '}
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
