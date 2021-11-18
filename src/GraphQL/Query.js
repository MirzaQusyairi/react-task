import { gql } from '@apollo/client'

const GetPassengerAll = gql`
  query GetPassengerAll {
    anggota {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`

const GetPassengerByID = gql`
  query GetPassengerByID($id: Int!) {
    anggota(where: { id: { _eq: $id } }) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`

export { GetPassengerAll, GetPassengerByID }