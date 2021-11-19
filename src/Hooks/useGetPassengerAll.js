import { useQuery } from '@apollo/client'
import { GetPassengerAll } from '../GraphQL/Query'
import { SubscriptionPassenger } from '../GraphQL/Subscription'

export default function useGetPassengerAll() {
  const { data, loading, error, subscribeToMore } = useQuery(GetPassengerAll)

  const subscribePassenger = () => {
    subscribeToMore({
      document: SubscriptionPassenger,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        return data;
      },
    })
  }

  return { data, loading, error, subscribePassenger }
}