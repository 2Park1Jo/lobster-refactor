import React from 'react'
import {
  Button,
  ButtonColorVariant,
  ButtonSize,
  ButtonStyleVariant,
  Tooltip,
  TooltipPosition,
} from '@channel.io/bezier-react'
import { BezierIcon } from '@channel.io/bezier-icons'

interface TooltipButtonProps {
  tooltipContent: string
  buttonContent: BezierIcon | string
  buttonSize?: ButtonSize
  buttonStyleVariant?: ButtonStyleVariant
  onClick: () => void
}

const TooltipButton: React.FC<TooltipButtonProps> = (props) => {
  return (
    <Tooltip
      content={props.tooltipContent}
      delayHide={0}
      delayShow={0}
      offset={4}
      placement={TooltipPosition.BottomCenter}
    >
      <Button
        size={props.buttonSize ? props.buttonSize : ButtonSize.M}
        leftContent={props.buttonContent}
        colorVariant={ButtonColorVariant.MonochromeDark}
        styleVariant={props.buttonStyleVariant ? props.buttonStyleVariant : ButtonStyleVariant.Secondary}
        onClick={props.onClick}
      />
    </Tooltip>
  )
}

export default TooltipButton
