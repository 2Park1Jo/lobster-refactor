import React from 'react'
import { ButtonGroup, ButtonColorVariant, ButtonStyleVariant } from '@channel.io/bezier-react'
import TooltipButton from '../../common/TooltipButton'
import { PlusIcon, PowerIcon } from '@channel.io/bezier-icons'

const WorkspaceBannerMenu: React.FC = () => {
  return (
    <ButtonGroup>
      <TooltipButton
        tooltipContent="새 워크스페이스 만들기"
        buttonContent={PlusIcon}
        buttonStyleVariant={ButtonStyleVariant.Secondary}
        buttonColorVariant={ButtonColorVariant.Red}
        onClick={() => {}}
      />
      <TooltipButton
        tooltipContent="로그아웃"
        buttonContent={PowerIcon}
        buttonStyleVariant={ButtonStyleVariant.Secondary}
        buttonColorVariant={ButtonColorVariant.Red}
        onClick={() => {}}
      />
    </ButtonGroup>
  )
}

export default WorkspaceBannerMenu
