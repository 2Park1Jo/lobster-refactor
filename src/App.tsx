import { RecoilRoot } from 'recoil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BezierProvider, DarkFoundation, LightFoundation } from '@channel.io/bezier-react'
import Login from './pages/Login'
import Workspace from './pages/Workspace'

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <BezierProvider foundation={DarkFoundation}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/workspace" element={<Workspace />} />
          </Routes>
        </BrowserRouter>
      </BezierProvider>
    </RecoilRoot>
  )
}

export default App
