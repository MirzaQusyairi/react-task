import { useMutation } from '@apollo/client'
import { DeletePassenger } from '../GraphQL/Mutation'

export default function useDeletePassenger() {
  const [deletePassenger, { loading: loadingDelete }] = useMutation(DeletePassenger)

  return { deletePassenger, loadingDelete }
}