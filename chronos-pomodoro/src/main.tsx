import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppTeste } from './App'
  

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppTeste/>
  </StrictMode>,
)
