import React, { useState } from "react"
import { NoteContext } from "./NoteContext"

export interface INoteContext{
    note: string
}

export interface IProps{
    children: React.ReactNode
}

function NoteState({children}: IProps) {
    const [note, ] = useState("this is nopte")


  return (
    <NoteContext.Provider value={{note}}>
        {children}
    </NoteContext.Provider>
  )
}

export default NoteState