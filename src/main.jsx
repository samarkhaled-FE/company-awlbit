import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// React Router
import { BrowserRouter } from 'react-router-dom';
import ContextsProvider from '@contexts/ContextsProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ContextsProvider>
        <App />
      </ContextsProvider>
    </BrowserRouter>
  </StrictMode>,
)