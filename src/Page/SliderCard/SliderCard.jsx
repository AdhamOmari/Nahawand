import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './SliderCard.css'

const SliderCard = () => {
  const images = [
    {
      id: 1,
      src: 'https://picsum.photos/id/1/800/400',
      title: 'Title 1',
      description: 'Description 1'
    },
    {
      id: 2,
      src: 'https://picsum.photos/id/2/800/400',
      title: 'Title 2',
      description: 'Description 2'
    },
    {
      id: 3,
      src: 'https://picsum.photos/id/3/800/400',
      title: 'Title 3',
      description: 'Description 3'
    }
  ]

  return (
    <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
      {images.map(image => (
        <div key={image.id} className='width-slider'>
          <img src={image.src} alt='' />
          <div className='legend'>
            <div className='title'>{image.title}</div>
            <div className='description'>{image.description}</div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default SliderCard
