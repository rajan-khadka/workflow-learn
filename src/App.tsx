import { useContext, useId } from 'react'
import './App.css'
import { NoteContext } from './context/NoteContext/NoteContext'
import { INoteContext } from './context/NoteContext/NoteState'
import useCustomCount from './useCustomCount'

function App() {
  const note = useContext(NoteContext) as INoteContext
  const id = useId()

  const count = useCustomCount(5);
  return (
    <>
      { count }
      {note?.note}
      <p>{id}</p>
    </>
  )
}

export default App
