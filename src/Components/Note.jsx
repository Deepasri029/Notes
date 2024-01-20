import React from 'react'
import style from "./Note.module.css"

const Note = (x) => {
    return (
        <li id={style.nav}>
            <p>{x.name}</p>
            <p>{x.like}</p>
        </li>
    )
}

export default Note
