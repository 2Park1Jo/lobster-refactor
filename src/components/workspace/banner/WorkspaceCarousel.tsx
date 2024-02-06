import React, { useEffect, useRef, useState } from 'react'
import Carousel from 'react-spring-3d-carousel'
import { config } from 'react-spring'

interface Card {
  key: string
}

interface WorkspaceCarouselProps {
  cards: Card[]
  setModalIsOpen: (isOpen: boolean) => void
  width: string
  height: string
  margin: string
  modalIsOpen: any
  offset: number
  showArrows: boolean
}

const WorkspaceCarousel: React.FC<WorkspaceCarouselProps> = (props: WorkspaceCarouselProps) => {
  const table: Card[] = props.cards.map((element, index) => ({
    ...element,
    onClick: () => onClickCard(index),
  }))

  const [offsetRadius, setOffsetRadius] = useState<number>(2)
  const [showArrows, setShowArrows] = useState<boolean>(false)
  const [goToSlide, setGoToSlide] = useState<number>(0)
  const [cards] = useState<Card[]>(table)
  const currentSlide = useRef<number>(goToSlide)

  function onClickCard(index: number) {
    if (currentSlide.current !== index) {
      setGoToSlide(index)
    }
  }

  useEffect(() => {
    currentSlide.current = goToSlide
  }, [goToSlide])

  useEffect(() => {
    setOffsetRadius(props.offset)
    setShowArrows(props.showArrows)
  }, [props.offset, props.showArrows])

  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        margin: props.margin,
      }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  )
}

export default WorkspaceCarousel
