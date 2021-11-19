import { useMutation } from '@apollo/client'
import { UpdatePassenger } from '../GraphQL/Mutation'

export default function useUpdatePassenger() {
  const [updatePassenger, { loading: loadingUpdate }] = useMutation(UpdatePassenger)

  return { updatePassenger, loadingUpdate }
}