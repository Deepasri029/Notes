import React from 'react'
import Note from './Note'
import style from "./NoteList.module.css"

const NoteList = () => {
  return (
   
   <ul className={style.list}>
    <NoteList/>
    <Note name="Meena" like="loves chocolates"/>
    <Note name="Deepa" like="loves chocolates"/>
   </ul>
   
  )
}

export default NoteList
