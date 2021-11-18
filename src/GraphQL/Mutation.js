import { gql } from '@apollo/client'

const InsertPassenger = gql`
	mutation InsertPassenger($nama: String!, $umur: Int!, $jenis_kelamin: String!) {
		insert_anggota( objects: { nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin } ) {
			affected_rows
		}
	}
`

const UpdatePassenger = gql`
	mutation UpdatePassenger( $id: Int! $jenis_kelamin: String $nama: String $umur: Int ) {
		update_anggota_by_pk( pk_columns: { id: $id }	_set: { jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur } ) {
			id
			jenis_kelamin
			nama
			umur
		}
	}
`

const DeletePassenger = gql`
	mutation DeletePassenger($id: Int!) {
		delete_anggota_by_pk(id: $id) {
			id
		}
	}
`

export { InsertPassenger, DeletePassenger, UpdatePassenger }