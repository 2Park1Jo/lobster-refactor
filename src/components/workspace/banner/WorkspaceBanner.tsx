import React from 'react'
import WorkspaceCard from './WorkspaceCard'
import WorkspaceCarousel from './WorkspaceCarousel'
import { Workspace } from '../../../interfaces/workspace/Workspace'
import { WORKSPACE_ADD_CARD_KEY, WORKSPACE_EMPTY_CARD_KEY, RANDOM_IMAGE_URL } from '../../../constants/workspace'

interface WorkSpaceBannerProps {
  allWorkspace: Workspace[]
}

const WorkSpaceBanner: React.FC<WorkSpaceBannerProps> = (props) => {
  const cards: { key: string; content: React.ReactNode }[] = []

  props.allWorkspace.map((workspace) => {
    cards.push({
      key: workspace.id,
      content: (
        <WorkspaceCard
          id={workspace.id}
          image={RANDOM_IMAGE_URL + workspace.id}
          overline={workspace.deadline}
          heading={workspace.name}
          body={workspace.goal}
        />
      ),
    })
  })

  if (cards.length === 0) {
    cards.push({
      key: WORKSPACE_ADD_CARD_KEY,
      content: <WorkspaceCard id={WORKSPACE_ADD_CARD_KEY} heading="워크스페이스를 추가해보세요" />,
    })
  }

  if (cards.length === 2) {
    cards.push({
      key: WORKSPACE_EMPTY_CARD_KEY,
      content: <></>,
    })
  }

  return <WorkspaceCarousel cards={cards} height="90%" width="80%" margin="0 auto" offset={2} showArrows={false} />
}

export default WorkSpaceBanner
