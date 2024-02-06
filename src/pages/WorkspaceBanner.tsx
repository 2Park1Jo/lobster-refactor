import React, { useState } from 'react'
import WorkSpaceBanner from '../components/workspace/banner/WorkspaceBanner'
import { getWorkspaceData } from '../assets/workspaceData'
import workspaceBannerStyles from '../styles/workspace/workspaceBanner.module.scss'

interface WorkspaceBannerProps {}

const WorkspaceBanner: React.FC<WorkspaceBannerProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div className={workspaceBannerStyles.container}>
      <WorkSpaceBanner allWorkspace={getWorkspaceData()} modalIsOpen={isModalOpen} setModalIsOpen={setIsModalOpen} />
    </div>
  )
}

export default WorkspaceBanner
