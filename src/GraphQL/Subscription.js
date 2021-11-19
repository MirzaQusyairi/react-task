import { gql } from '@apollo/client'

const SubscriptionPassenger = gql`
	subscription SubsPassenger {
		anggota {
			id
			nama
			jenis_kelamin
			umur
		}
	}
`

export { SubscriptionPassenger }