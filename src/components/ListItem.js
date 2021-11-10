const ListItem = ({ item, hapusPengunjung }) => {
  return (
    <tr>
      <td style={{ border: "1px solid black" }}>{item.nama}</td>
      <td style={{ border: "1px solid black" }}>{item.umur}</td>
      <td style={{ border: "1px solid black" }}>{item.jenisKelamin}</td>
      <td>
        <button onClick={() => { hapusPengunjung(item.id) }}>Hapus</button>
      </td>
    </tr>
  )
}

export default ListItem