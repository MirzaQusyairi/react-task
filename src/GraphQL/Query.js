import { gql } from '@apollo/client'

const GETDATA = gql`
  query GetDataAll {
    anggota {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`

const GETDATABYID = gql`
  query GetDataByID($id: Int!) {
    anggota(where: { id: { _eq: $id } }) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`

export { GETDATA, GETDATABYID }