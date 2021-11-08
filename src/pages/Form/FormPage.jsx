import React, { useRef, useState } from 'react'
import styles from './FormPage.module.css'

export default function FormPage() {
  const initData = {
    judul: "",
    pengarang: "",
    cetakan: "",
    tahunTerbit: 0,
    kotaTerbit: "",
    harga: 0,
  }

  const [data, setData] = useState(initData)
  const regex = /^[A-Za-z ]*$/
  const [errMsg, setErrMsg] = useState("")
  const fotoSampul = useRef(null)

  const handleInput = e => {
    const name = e.target.name
    const value = e.target.value

    if (name === "pengarang") {
      if (regex.test(value)) {
        setErrMsg("")
      } else {
        setErrMsg("Nama Pengarang Harus Berupa Huruf")
      }
    }

    if (name === "judul") {
      if (regex.test(value)) {
        setErrMsg("")
      } else {
        setErrMsg("Nama Pengarang Harus Berupa Huruf")
      }
    }

    setData({
      ...data,
      [name]: value
    })

    console.log("data", data)
  }

  const handleSubmit = (e) => {
    if (errMsg !== "") {
      alert("Terdapat data yang tidak sesuai")
    } else {
      alert(`Data Buku "${data.judul}" Berhasil Diterima`)
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
      <h1 style={{ "text-align": "center" }}>Formulir Buku Baru</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Judul:
          <input type="text" name="judul" className={styles.input} value={data.judul} onChange={handleInput} required />
        </label>
        <label>
          Pengarang:
          <input type="text" name="pengarang" className={styles.input} value={data.pengarang} onChange={handleInput} required />
        </label>
        <label>
          Cetakan:
          <input type="text" name="cetakan" className={styles.input} value={data.cetakan} onChange={handleInput} />
        </label>
        <label>
          Tahun Terbit:
          <input type="number" name="tahunTerbit" className={styles.input} value={data.tahunTerbit} onChange={handleInput} />
        </label>
        <label>
          Kota Terbit:
          <input type="text" name="kotaTerbit" className={styles.input} value={data.kotaTerbit} onChange={handleInput} />
        </label>
        <label>
          Harga:
          <input type="number" name="harga" className={styles.input} value={data.harga} onChange={handleInput} />
        </label>
        <label>
          Foto Sampul:
          <input type="file" className={styles.input} refs={fotoSampul} />
        </label>
        <span className={styles.errorMessage}>{errMsg}</span>
        <div>
          <input type="submit" className={styles.btn} value="Submit" />
          <button className={`${styles.btn} ${styles.btnReset}`} onClick={resetData}>Reset</button>
        </div>

      </form>
    </>
  )
}
