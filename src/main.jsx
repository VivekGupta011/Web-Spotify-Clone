import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './app.scss'
import './components/AlbumItem/albumItem.scss'
import './components/Sidebar/sidebar.scss'
import PlayerContextProvider from './context/PlayerContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <PlayerContextProvider>
            <App />
        </PlayerContextProvider>
    </BrowserRouter>
    
)
