import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
// import App from './App.tsx'
import Login from './pages/Login.tsx';
import Dashboard from './pages/Dashboard.tsx'
import Adm from './pages/Adm.tsx';
import "./styles/global.css";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Adm />
  </StrictMode>,
)
