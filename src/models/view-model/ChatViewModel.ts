import { Message } from '../../interfaces/chat/Message'
import { useRecoilState } from 'recoil'
import { CHAT_ATOM } from '../model/atoms'

interface ChatViewModel {
  messages: Message[]
  addMessage: (message: Message) => void
  getMessages: () => Message[]
  updateMessage: (index: number, updatedMessage: Message) => void
  deleteMessage: (index: number) => void
}

const useChatViewModel = (): ChatViewModel => {
  const [messages, setMessages] = useRecoilState(CHAT_ATOM)

  const addMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message])
  }

  const getMessages = (): Message[] => {
    return messages
  }

  const updateMessage = (index: number, updatedMessage: Message) => {
    setMessages((prevMessages) => {
      const newMessages = [...prevMessages]
      newMessages[index] = updatedMessage
      return newMessages
    })
  }

  const deleteMessage = (index: number) => {
    setMessages((prevMessages) => {
      const newMessages = [...prevMessages]
      newMessages.splice(index, 1)
      return newMessages
    })
  }

  return {
    messages,
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
  }
}

export default useChatViewModel
