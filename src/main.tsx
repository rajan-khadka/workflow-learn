import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import NoteState from './context/NoteContext/NoteState.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NoteState><App /></NoteState>
  </React.StrictMode>,
)
