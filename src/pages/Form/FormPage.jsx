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
  const regex = /^[A-Za-z ]*$/
  const suratKesungguhan = useRef('')

  const handleInput = e => {
    const name = e.target.name
    const value = e.target.value

    if (name === "nama") {
      if (regex.test(value)) {
        setErrMsg("")
      } else {
        setErrMsg({ nama: "Nama Lengkap Harus Berupa Huruf" })
      }
    }

    setData({
      ...data,
      [name]: value
    })

    console.log("data", data)
    console.log("err nama", errMsg.nama)
  }

  const handleSubmit = (e) => {
    if (errMsg !== "") {
      alert("Data Pendaftar Tidak Sesuai")
    } else {
      alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`)
    }
    resetData()
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
        </label>
        <label>
          Email:
          <input type="text" name="email" className={styles.input} value={data.email} onChange={handleInput} required />
        </label>
        <label>
          No Handphone:
          <input type="text" name="noHandphone" className={styles.input} value={data.noHandphone} onChange={handleInput} />
        </label>
        <label style={{ "margin": "unset" }}>
          Latar Belakang Pendidikan:
          <div>
            <input type="radio" name="pendidikan" value={data.pendidikan} onChange={handleInput} />
            <label style={{ "padding": "unset" }}>IT</label>
            <input type="radio" name="pendidikan" value={data.pendidikan} onChange={handleInput} />
            <label style={{ "padding": "unset" }}>Non IT</label>
          </div>
        </label>
        <label>
          Kelas Coding yang Dipilih:
          <select type="text" name="kelas" className={styles.input} value={data.kelas} onChange={handleInput}>
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
        <span className={styles.errorMessage}>{errMsg.nama}</span>
        <div>
          <input type="submit" className={styles.btn} value="Submit" />
          <button className={`${styles.btn} ${styles.btnReset}`} onClick={resetData}>Reset</button>
        </div>

      </form>
    </>
  )
}
