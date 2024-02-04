import React from 'react'
import WorkspaceCard from './WorkspaceCard'
import WorkspaceCarousel from './WorkspaceCarousel'

interface WorkSpaceBannerProps {
  allWorkspace: any[]
  modalIsOpen: boolean
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const WorkSpaceBanner: React.FC<WorkSpaceBannerProps> = ({ allWorkspace, modalIsOpen, setModalIsOpen }) => {
  let cards: { key: string; content: React.ReactNode }[] = []

  cards.push({
    key: '0',
    content: <WorkspaceCard image="assets/images/plus.png" heading="워크스페이스 추가하기" overline={'0'} />,
  })

  allWorkspace.map((workspace) => {
    cards.push({
      key: workspace.workspaceId,
      content: (
        <WorkspaceCard
          image={`https://picsum.photos/500/300?img=${workspace.workspaceId}`}
          overline={workspace.workspaceDeadline}
          heading={workspace.workspaceName}
          body={workspace.workspaceGoal}
        />
      ),
    })
  })

  if (cards.length === 2) {
    cards.push({
      key: '0',
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
      modalIsOpen={modalIsOpen}
      setModalIsOpen={setModalIsOpen}
    />
  )
}

export default WorkSpaceBanner
