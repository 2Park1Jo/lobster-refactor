import React, { useState, useEffect } from 'react'
import loginStyles from '../styles/login/loginPage.module.scss'
import InputTag from '../components/common/InputTag'
import Logo from '../components/common/Logo'
import RoundButton from '../components/common/RoundButton'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loginButtonDisabled, setLoginbuttonDisabled] = useState<boolean>(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (email !== '' && password !== '') {
      setLoginbuttonDisabled(false)
    } else {
      setLoginbuttonDisabled(true)
    }
  }, [email, password])

  const handleLogin = () => {
    if (!loginButtonDisabled) {
      navigate('/workspace')
    }
  }

  return (
    <div className={loginStyles.container}>
      <div className={loginStyles.login_layout}>
        <div className={loginStyles.login_box}>
          <div className={loginStyles.login_box_logo_container}>
            <Logo />
          </div>
          <div className={loginStyles.login_box_input_container}>
            <InputTag
              value={email}
              type="email"
              place_holder="전화번호, 사용자 이름 또는 이메일"
              onChange={(value) => setEmail(value)}
            />
            <InputTag
              value={password}
              type="password"
              place_holder="비밀번호"
              onChange={(value) => setPassword(value)}
            />
            <RoundButton
              text="로그인"
              width="80%"
              padding="6px"
              text_color={getComputedStyle(document.documentElement).getPropertyValue('--primary-button-text')}
              disabled_color={getComputedStyle(document.documentElement).getPropertyValue('--primary-button-disabled')}
              background_color={getComputedStyle(document.documentElement).getPropertyValue(
                '--primary-button-background',
              )}
              hover_color={getComputedStyle(document.documentElement).getPropertyValue('--primary-button-hover')}
              onClick={handleLogin}
              disable={loginButtonDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
