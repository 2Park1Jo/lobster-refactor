import React from 'react'
import WorkSpaceBanner from '../components/workspace/banner/WorkspaceBanner'
import WorkspaceBannerMenu from '../components/workspace/banner/WorkspaceBannerMenu'
import { getWorkspaceData } from '../assets/workspaceData'
import workspaceBannerStyles from '../styles/workspace/workspaceBanner.module.scss'

const WorkspaceBanner: React.FC = () => {
  return (
    <div className={workspaceBannerStyles.container}>
      <div className={workspaceBannerStyles.header_container}>
        <WorkspaceBannerMenu />
      </div>
      <div className={workspaceBannerStyles.body_container}>
        <WorkSpaceBanner allWorkspace={getWorkspaceData()} />
      </div>
    </div>
  )
}

export default WorkspaceBanner
