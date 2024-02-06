import React from 'react'
import WorkspaceCard from './WorkspaceCard'
import WorkspaceCarousel from './WorkspaceCarousel'
import { WORKSPACE_EMPTY_CARD_KEY, RANDOM_IMAGE_URL } from '../../../constants/workspace'

interface WorkSpaceBannerProps {
  allWorkspace: any[]
  modalIsOpen: boolean
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const WorkSpaceBanner: React.FC<WorkSpaceBannerProps> = (props) => {
  const cards: { key: string; content: React.ReactNode }[] = []

  props.allWorkspace.map((workspace) => {
    cards.push({
      key: workspace.workspaceId,
      content: (
        <WorkspaceCard
          image={RANDOM_IMAGE_URL + workspace.workspaceId}
          overline={workspace.workspaceDeadline}
          heading={workspace.workspaceName}
          body={workspace.workspaceGoal}
        />
      ),
    })
  })

  if (cards.length === 2) {
    cards.push({
      key: WORKSPACE_EMPTY_CARD_KEY,
      content: <></>,
    })
  }

  return (
    <WorkspaceCarousel
      cards={cards}
      height="90%"
      width="80%"
      margin="0 auto"
      offset={2}
      showArrows={false}
      modalIsOpen={props.modalIsOpen}
      setModalIsOpen={props.setModalIsOpen}
    />
  )
}

export default WorkSpaceBanner
