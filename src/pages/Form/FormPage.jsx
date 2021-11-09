import React, { useRef, useState } from 'react'
import styles from './FormPage.module.css'

export default function FormPage() {
  const initData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  }

  const errData = {
    nama: "",
    email: "",
    noHandphone: "",
  }

  const [data, setData] = useState(initData)
  const [errMsg, setErrMsg] = useState(errData)
  const regexchar = /^[A-Za-z ]*$/
  const regexnum = /^(\d{9,14})$/
  const regexemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const suratKesungguhan = useRef('')

  function setErr(name, message) {
    setErrMsg((prev) => ({ ...prev, [name]: message }));
  }

  const handleInput = e => {
    const name = e.target.name
    const value = e.target.value

    if (name === "nama") {
      if (regexchar.test(value)) {
        setErr(name, "")
      } else {
        setErr(name, "Nama Lengkap Harus Berupa Huruf")
      }
    }

    if (name === "email") {
      if (regexemail.test(value)) {
        setErr(name, "")
      } else {
        setErr(name, "Email Tidak Sesuai")
      }
    }

    if (name === "noHandphone") {
      if (regexnum.test(value)) {
        setErr(name, "")
      } else {
        setErr(name, "No Handphone Tidak Sesuai")
      }
    }

    setData({
      ...data,
      [name]: value
    })

    console.log("data", data)
    console.log("err", errMsg)
  }

  const handleSubmit = (e) => {
    const keys = Object.keys(errMsg);
    let valid = keys.every((key) => errMsg[key] === "")
    if (!valid) {
      alert("Data Pendaftar Tidak Sesuai")
    } else {
      alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`)
      resetData()
    }
    e.preventDefault()
  }

  const resetData = () => {
    setData(initData)
    setErrMsg("")
  }

  return (
    <>
      <h1 style={{ "text-align": "center" }}>Pendaftaran Peserta Coding Bootcamp</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nama Lengkap:
          <input type="text" name="nama" className={styles.input} value={data.nama} onChange={handleInput} required />
          <span className={styles.errorMessage}>{errMsg.nama}</span>
        </label>
        <label>
          Email:
          <input type="text" name="email" className={styles.input} value={data.email} onChange={handleInput} required />
          <span className={styles.errorMessage}>{errMsg.email}</span>
        </label>
        <label>
          No Handphone:
          <input type="text" name="noHandphone" className={styles.input} value={data.noHandphone} onChange={handleInput} required />
          <span className={styles.errorMessage}>{errMsg.noHandphone}</span>
        </label>
        <label style={{ "margin": "unset" }}>
          Latar Belakang Pendidikan:
          <div>
            <input type="radio" name="pendidikan" value="IT" onChange={handleInput} checked={data.pendidikan === "IT" ? true : false} required />
            <label style={{ "padding": "unset" }}>IT</label>
            <input type="radio" name="pendidikan" value="Non IT" onChange={handleInput} checked={data.pendidikan === "Non IT" ? true : false} required />
            <label style={{ "padding": "unset" }}>Non IT</label>
          </div>
        </label>
        <label>
          Kelas Coding yang Dipilih:
          <select type="text" name="kelas" className={styles.input} value={data.kelas} onChange={handleInput} required>
            <option value="" selected disabled hidden>Pilih Salah Satu Program</option>
            <option>Coding BackEnd with Golang</option>
            <option>Coding FrontEnd with ReactJS</option>
            <option>Fullstack Developer</option>
          </select>
        </label>
        <label>
          Foto Surat Kesungguhan:
          <input type="file" className={styles.input} refs={suratKesungguhan} />
        </label>
        <label>
          Harapan Untuk Coding Bootcamp ini:
          <textarea name="harapan" id="" cols="30" rows="5" className={styles.input} value={data.harapan} onChange={handleInput}></textarea>
        </label>
        <div>
          <input type="submit" className={styles.btn} value="Submit" />
          <button className={`${styles.btn} ${styles.btnReset}`} onClick={resetData}>Reset</button>
        </div>

      </form>
    </>
  )
}
