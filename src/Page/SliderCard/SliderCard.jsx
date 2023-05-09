import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './SliderCard.css'
import { useNavigate } from 'react-router-dom'

const SliderCard = () => {
  const images = [
    {
      id: 1,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfoTysfPlY5RAk0hiOv-7cBwu2slR8FMdIQ&usqp=CAU',
      title: 'Title 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend dolor ac aliquet lacinia. Nullam eu augue velit. Aenean dictum eleifend metus, id congue est volutpat id.'
    },
    {
      id: 2,
      src: 'https://media.istockphoto.com/id/1145017702/photo/grilled-vegetables-in-a-cast-iron-pan-top-view.jpg?s=612x612&w=0&k=20&c=7w-QIObf4mmHDDapA3J5Tknm45F370T5ZCPbnXcVBbg=',
      title: 'Title 2',
      description:
        'Vestibulum lobortis ligula ut mauris fringilla, ac feugiat nulla tristique. Maecenas ultricies ullamcorper ante ut dapibus.'
    },
    {
      id: 3,
      src: 'https://media.istockphoto.com/id/182159870/photo/roasting-vegetables-on-the-grill.jpg?s=612x612&w=0&k=20&c=Dvoe8i3nnhl45MrYDBELOWz7hdJdSA8K5ePyiVVtXAc=',
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
            <button className='btn btn-more' onClick={() => handleClick()}>
              More
            </button>
          </div>
        ))}
      </Carousel>
    </>
  )
}

export default SliderCard
