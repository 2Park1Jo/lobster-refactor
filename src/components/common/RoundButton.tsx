import React from 'react'
import styled from 'styled-components'

interface RoundButtonProps {
  text: string
  width: string
  background_color?: string
  text_color?: string
  hover_color?: string
  disable?: boolean
  disabled_color?: string
  padding?: string
  onClick?: () => void
}

const RoundButtonWrapper = styled.div<RoundButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ background_color, disabled_color, disable }) =>
    disable ? (disabled_color ? disabled_color : 'gray') : background_color ? background_color : '#3498db'};
  color: ${({ text_color }) => text_color || '#ffffff'};
  padding: ${({ padding }) => padding || '10px'};
  width: ${({ width }) => (width ? width : 'auto')};
  cursor: 'pointer';
  border-radius: 10px;
  user-select: none;

  &:hover {
    background-color: ${({ hover_color, disable }) => (disable ? '' : hover_color)};
  }
`

const RoundButton: React.FC<RoundButtonProps> = (props) => {
  return (
    <RoundButtonWrapper {...props} onClick={!props.disable ? props.onClick : undefined}>
      {props.text}
    </RoundButtonWrapper>
  )
}

export default RoundButton
