import React from 'react'
import styles from '../Styles.module.css'

export default function About(props) {
  const { title, text } = props;
  return (
    <div className={styles.AboutTitle}>
      <div>
        <h1>{title !== "Page" ? `About the ${title}` : `About ${title}`}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

