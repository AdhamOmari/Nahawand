import React, { useState } from 'react'
import styled from '@emotion/styled'
import logo from '../../../public/image-003.svg'

const CardCarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;
  width: 60%;
  padding: 30px;
  border-radius: 10px;
  margin: 0 auto;

  box-shadow: 0px 1px 9px 0px rgba(50, 50, 50, 0.13);
`

const Card = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: 300px;
  margin-right: 20px;
`

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
`

const CardTitle = styled.h3`
  text-align: center;
`

const CardCarousel = () => {
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleCardClick = index => {
    console.log(`Card ${index} clicked!`)
  }

  const handleScroll = event => {
    const newScrollLeft = event.target.scrollLeft
    setScrollLeft(newScrollLeft)
  }

  return (
    <CardCarouselContainer onScroll={handleScroll}>
      <Card>
        <CardImage src={logo} onClick={() => handleCardClick(1)} />
        <CardTitle>Card 1</CardTitle>
      </Card>
      <Card>
        <CardImage src={logo} onClick={() => handleCardClick(2)} />
        <CardTitle>Card 2</CardTitle>
      </Card>
      <Card>
        <CardImage src={logo} onClick={() => handleCardClick(3)} />
        <CardTitle>Card 3</CardTitle>
      </Card>
      <Card>
        <CardImage src={logo} onClick={() => handleCardClick(4)} />
        <CardTitle>Card 4</CardTitle>
      </Card>
      <Card>
        <CardImage src={logo} onClick={() => handleCardClick(5)} />
        <CardTitle>Card 5</CardTitle>
      </Card>
    </CardCarouselContainer>
  )
}

export default CardCarousel
