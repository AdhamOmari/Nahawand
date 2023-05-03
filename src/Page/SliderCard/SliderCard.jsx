// SliderCard.js
import { Card, Button, Carousel } from 'react-bootstrap'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
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
    <Carousel
      prevIcon={<BsChevronLeft />}
      nextIcon={<BsChevronRight />}
      interval={2000}
    >
      {images.map(image => (
        <Carousel.Item key={image.id}>
          <Card>
            <img className='d-block w-100' src={image.src} alt='' />
            <Carousel.Caption>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
              <Button variant='primary'>More</Button>
            </Carousel.Caption>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default SliderCard
