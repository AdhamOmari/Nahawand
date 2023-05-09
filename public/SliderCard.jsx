import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './SliderCard.css'
import { image } from '../../assets/image.jpg'
import { image2 } from '../../assets/image2.jpg'
import { image3 } from '../../assets/image3.jpg'
import { useNavigate } from 'react-router-dom'

const SliderCard = () => {
  const images = [
    {
      id: 1,
      src: { image1 },
      title: 'Title 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend dolor ac aliquet lacinia. Nullam eu augue velit. Aenean dictum eleifend metus, id congue est volutpat id.'
    },
    {
      id: 2,
      src: { image2 },
      title: 'Title 2',
      description:
        'Vestibulum lobortis ligula ut mauris fringilla, ac feugiat nulla tristique. Maecenas ultricies ullamcorper ante ut dapibus.'
    },
    {
      id: 3,
      src: { image3 },
      title: 'Title 3',
      description:
        'Proin finibus est quis urna dignissim, eu placerat arcu aliquet. Nulla ultrices facilisis massa, id scelerisque nisi sagittis at.'
    }
  ]

  const navigate = useNavigate()

  const handleClick = () => {
    console.log('Button clicked')
    navigate('/Menu')
  }

  const renderDotIndicator = (onClickHandler, isSelected) => {
    return null // Render null to hide the dot indicators
  }

  return (
    <>
      <div className='wrap_slider'>
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay
          infiniteLoop
          renderIndicator={renderDotIndicator}
        >
          {images.map(image => (
            <div key={image.id} className='width-slider'>
              <img src={image.src} alt='' className='slider_image' />
              <div className='legend'>
                <h2 className='title'>{image.title}</h2>
                <p className='description'>{image.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
        <button className='btn btn-more' onClick={() => handleClick()}>
          More
        </button>
      </div>
    </>
  )
}

export default SliderCard
