import React from 'react'
import IconNotFound from '../assets/img/NotFoundIcon.png'
import { useHistory } from 'react-router-dom'
import styles from '../Styles.module.css'

export default function NotFound() {
  const history = useHistory()

  function goHome() {
    history.push('/')
  }

  return (
    <div className={styles.NotFoundBody}>
      <div className={styles.NotFoundContainer}>
        <img src={IconNotFound} alt="" />
        <h1>Oops! Something Went Wrong!</h1>
        <button onClick={goHome}>RETURN TO HOME</button>
      </div>
    </div>
  )
}
