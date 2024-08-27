import { storeToRefs } from 'pinia'
import { useLoginStore } from '@/stores/login'

export function useLogin() {
  const { user } = storeToRefs(useLoginStore())
  const { logIn, logOut } = useLoginStore()
  return {
    user,
    logIn,
    logOut
  }
}
