import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ToDoProvider } from './context/ToDoProvider.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ToDoProvider>
      <App />
    </ToDoProvider>
  </BrowserRouter>
)
