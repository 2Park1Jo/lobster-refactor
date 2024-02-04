import React from 'react'
import {
  VStack,
  StackItem,
  Spacer,
  Button,
  ButtonStyleVariant,
  ButtonColorVariant,
  ButtonSize,
} from '@channel.io/bezier-react'
import { HomeFilledIcon, ChannelIcon, InfoFilledIcon, SettingsIcon } from '@channel.io/bezier-icons'

const LeftNavBar: React.FC = () => {
  return (
    <VStack justify="center" align="center">
      <StackItem marginBefore={15}>
        <Button
          active
          size={ButtonSize.L}
          leftContent={HomeFilledIcon}
          colorVariant={ButtonColorVariant.MonochromeDark}
          styleVariant={ButtonStyleVariant.Tertiary}
        />
      </StackItem>
      <StackItem>
        <Button
          size={ButtonSize.L}
          leftContent={ChannelIcon}
          colorVariant={ButtonColorVariant.MonochromeDark}
          styleVariant={ButtonStyleVariant.Tertiary}
        />
      </StackItem>
      <Spacer />

      <StackItem>
        <Button
          size={ButtonSize.L}
          leftContent={InfoFilledIcon}
          colorVariant={ButtonColorVariant.MonochromeDark}
          styleVariant={ButtonStyleVariant.Tertiary}
        />
      </StackItem>
      <StackItem marginAfter={15}>
        <Button
          size={ButtonSize.L}
          leftContent={SettingsIcon}
          colorVariant={ButtonColorVariant.MonochromeDark}
          styleVariant={ButtonStyleVariant.Tertiary}
        />
      </StackItem>
    </VStack>
  )
}

export default LeftNavBar
