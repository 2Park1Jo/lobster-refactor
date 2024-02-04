import React from 'react'
import { ButtonSize, ButtonStyleVariant, HStack } from '@channel.io/bezier-react'
import TooltipButton from '../../common/TooltipButton'
import { ChatLightningFilledIcon, FaceSmileAddIcon } from '@channel.io/bezier-icons'

const MessageExtraMenu: React.FC = () => {
  return (
    <HStack>
      <TooltipButton
        tooltipContent="리액션 추가"
        buttonContent={FaceSmileAddIcon}
        onClick={() => {}}
        buttonSize={ButtonSize.XS}
        buttonStyleVariant={ButtonStyleVariant.Tertiary}
      />
      <TooltipButton
        tooltipContent="번역하기"
        buttonContent={ChatLightningFilledIcon}
        onClick={() => {}}
        buttonSize={ButtonSize.XS}
        buttonStyleVariant={ButtonStyleVariant.Tertiary}
      />
    </HStack>
  )
}

export default MessageExtraMenu
