import React, { useState, useRef, useEffect } from 'react'
import { Button, ButtonColorVariant, ButtonSize, ButtonStyleVariant, HStack } from '@channel.io/bezier-react'
import { DEFAULT_USER } from '../../../constants/user'
import useChatViewModel from '../../../models/view-model/ChatViewModel'
import { FaceSmileAddIcon, ClipIcon, SendFilledIcon } from '@channel.io/bezier-icons'
import EmojiPicker, { Theme, EmojiClickData } from 'emoji-picker-react'

interface MessageEditorMenuProps {
  content: string
  setContent: React.Dispatch<React.SetStateAction<string>>
}

const MessageEditorMenu: React.FC<MessageEditorMenuProps> = (props) => {
  const chatViewModel = useChatViewModel()
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false)
  const buttonRef = useRef<any>()
  const [emojiPickerPosition, setEmojiPickerPosition] = useState({ top: 0, left: 0 })

  const handleAddMessage = () => {
    const today = new Date()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const date = today.getDate()

    const hour = today.getHours()
    const minute = today.getMinutes()
    const currentDate = year + '/' + month + '/' + date + ' ' + hour + ':' + minute

    if (props.content.trim() !== '') {
      chatViewModel.addMessage({
        sender: DEFAULT_USER,
        timeStamp: currentDate,
        content: props.content,
      })
      props.setContent('')
    }
  }

  useEffect(() => {
    const buttonElement = buttonRef.current
    if (buttonElement) {
      const buttonRect = buttonElement.getBoundingClientRect()
      const emojiPickerTop = buttonRect.top - 455
      const emojiPickerLeft = buttonRect.left

      setEmojiPickerPosition({ top: emojiPickerTop, left: emojiPickerLeft })
    }
  }, [showEmojiPicker])

  const onEmojiClick = (emojiClickData: EmojiClickData) => {
    props.setContent((prev) => prev + emojiClickData.emoji)
    setShowEmojiPicker(false)
  }
  return (
    <HStack>
      <Button
        size={ButtonSize.M}
        onClick={() => {}}
        colorVariant={ButtonColorVariant.MonochromeDark}
        styleVariant={ButtonStyleVariant.Tertiary}
        leftContent={ClipIcon}
      />
      <Button
        ref={buttonRef}
        size={ButtonSize.M}
        onClick={() => {
          setShowEmojiPicker(!showEmojiPicker)
        }}
        colorVariant={ButtonColorVariant.MonochromeDark}
        styleVariant={ButtonStyleVariant.Tertiary}
        leftContent={FaceSmileAddIcon}
      />
      <EmojiPicker
        open={showEmojiPicker}
        theme={Theme.AUTO}
        style={{
          position: 'absolute',
          top: `${emojiPickerPosition.top}px`,
          left: `${emojiPickerPosition.left}px`,
          zIndex: '999',
        }}
        onEmojiClick={(emojiClickData) => onEmojiClick(emojiClickData)}
      />
      <div style={{ marginLeft: 'auto' }}>
        <Button size={ButtonSize.M} onClick={handleAddMessage} leftContent={SendFilledIcon} />
      </div>
    </HStack>
  )
}

export default MessageEditorMenu
