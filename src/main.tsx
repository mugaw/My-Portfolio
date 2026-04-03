import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { Toaster } from 'sonner'
import { store } from './store'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster 
        position="bottom-right" 
        theme="dark"
        toastOptions={{
          style: {
            background: '#111',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
          },
        }}
      />
    </Provider>
  </StrictMode>,
)
