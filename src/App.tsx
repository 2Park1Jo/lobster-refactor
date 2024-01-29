import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import WorkspaceBanner from './pages/WorkspaceBanner'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/workspaceBanner" element={<WorkspaceBanner />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
