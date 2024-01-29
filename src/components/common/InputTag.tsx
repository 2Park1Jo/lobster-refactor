import React from 'react'
import loginStyles from '../../styles/login/loginPage.module.scss'

interface InputTagProps {
  type: string
  place_holder: string
  value: string
  onChange: (value: string) => void
}

const InputTag: React.FC<InputTagProps> = ({ type, place_holder, value, onChange }) => {
  return (
    <input
      className={loginStyles.login_input_tag}
      type={type}
      placeholder={place_holder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default InputTag
