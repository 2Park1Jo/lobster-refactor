import React, { useEffect, useRef, useState } from 'react'
import Carousel from 'react-spring-3d-carousel'
import { useNavigate } from 'react-router-dom'
import { config } from 'react-spring'
import { useSetRecoilState } from 'recoil'
// import { ACCESSED_DEPARTMENT, WORKSPACE_ID } from '../../recoil/Atoms'
// import { WORKSPACE_ADD_KEY } from '../../utils/Constant'

interface Card {
  // Adjust types according to your card structure
  key: string
  // ... other properties
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

export default function WorkspaceCarousel(props: WorkspaceCarouselProps) {
  const table: Card[] = props.cards.map((element, index) => ({
    ...element,
    onClick: () => onClickCard(index),
  }))

  const [offsetRadius, setOffsetRadius] = useState<number>(2)
  const [showArrows, setShowArrows] = useState<boolean>(false)
  const [goToSlide, setGoToSlide] = useState<number>(0)
  const [cards] = useState<Card[]>(table)
  const currentSlide = useRef<number>(goToSlide)
  //   const setWorkspaceId = useSetRecoilState(WORKSPACE_ID)
  //   const setAccessedDepartment = useSetRecoilState(ACCESSED_DEPARTMENT)
  const navigate = useNavigate()

  function onClickCard(index: number) {
    if (currentSlide.current === index) {
      if (cards[index].key === '0') {
        props.setModalIsOpen(true)
        document.body.style.overflow = 'hidden'
      } else {
        // setWorkspaceId(cards[index].key)
        // setAccessedDepartment({
        //   id: cards[index].key + '_1',
        //   name: '📢 공지방',
        // })
        localStorage.setItem('accessedWorkspaceId', cards[index].key)
        localStorage.setItem('accessedDepartmentId', cards[index].key)
        navigate('/workspace/' + cards[index].key + '/chat/department/' + cards[index].key)
      }
    } else {
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
