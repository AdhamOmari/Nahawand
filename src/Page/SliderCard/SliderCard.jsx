import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './SliderCard.css'

const SliderCard = () => {
  const images = [
    {
      id: 1,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfoTysfPlY5RAk0hiOv-7cBwu2slR8FMdIQ&usqp=CAU',
      title: 'Title 1',
      description: 'Description 1'
    },
    {
      id: 2,
      src: 'https://media.istockphoto.com/id/1145017702/photo/grilled-vegetables-in-a-cast-iron-pan-top-view.jpg?s=612x612&w=0&k=20&c=7w-QIObf4mmHDDapA3J5Tknm45F370T5ZCPbnXcVBbg=',
      title: 'Title 2',
      description: 'Description 2'
    },
    {
      id: 3,
      src: 'https://media.istockphoto.com/id/182159870/photo/roasting-vegetables-on-the-grill.jpg?s=612x612&w=0&k=20&c=Dvoe8i3nnhl45MrYDBELOWz7hdJdSA8K5ePyiVVtXAc=',
      title: 'Title 3',
      description: 'Description 3'
    }
  ]

  return (
    <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
      {images.map(image => (
        <div key={image.id} className='width-slider'>
          <img src={image.src} alt='' className='slider_image' />
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
