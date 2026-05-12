import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MysurHomes from './MysurHomes.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MysurHomes />
  </StrictMode>,
)
