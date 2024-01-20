import React from 'react'
import style from "./Note.module.css"

const Note = (x) => {
    return (
        <li className={style.note}>
            <p className={style.name}>{x.name}</p>
            <p className={style.like}>{x.like}</p>
        </li>
    )
}

export default Note
