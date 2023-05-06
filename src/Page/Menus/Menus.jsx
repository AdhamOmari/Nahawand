import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './style.module.css'

import logo from '../../../public/image-003.svg'

const Menus = () => {
  var settings = {
    dots: true,
    infinite: true,
    rows: 1,
    speed: 300,
    slidesPerRow: 3,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true
  }

  return (
    <Slider {...settings} className={styles.slickContainer}>
      <div className={`${styles.card} clider`}>
        <img src={logo} alt='Image 1' className='card-img-top' />
        <div className='card-body'>
          <h3 className={`${styles.cardTitle} card-title`}>Title 1</h3>
        </div>
      </div>
      <div className={`${styles.card} clider`}>
        <img src={logo} alt='Image 2' className='card-img-top' />
        <div className='card-body'>
          <h3 className={`${styles.cardTitle} card-title`}>Title 2</h3>
        </div>
      </div>
      <div className={`${styles.card} clider`}>
        <img src={logo} alt='Image 3' className='card-img-top' />
        <div className='card-body'>
          <h3 className={`${styles.cardTitle} card-title`}>Title 3</h3>
        </div>
      </div>
      <div className={`${styles.card} clider`}>
        <img src={logo} alt='Image 4' className='card-img-top' />
        <div className='card-body'>
          <h3 className={`${styles.cardTitle} card-title`}>Title 4</h3>
        </div>
      </div>
      <div className={`${styles.card} clider`}>
        <img src={logo} alt='Image 5' className='card-img-top' />
        <div className='card-body'>
          <h3 className={`${styles.cardTitle} card-title`}>Title 5</h3>
        </div>
      </div>
      <div className={`${styles.card} clider`}>
        <img src={logo} alt='Image 6' className='card-img-top' />
        <div className='card-body'>
          <h3 className={`${styles.cardTitle} card-title`}>Title 6</h3>
        </div>
      </div>
    </Slider>
  )
}

export default Menus
