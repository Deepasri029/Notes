import React from 'react'
import Note from './Note'
import style from "./NoteList.module.css"

const NoteList = () => {
  return (
   
   <ul id={style.list}>
    <Note name="Meena" like="loves chocolates"/>
    <Note name="Deepa" like="loves chocolates"/>
   </ul>
   
  )
}

export default NoteList
