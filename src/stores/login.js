import { defineStore } from 'pinia'
import { auth } from '@/plugins/firebase'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const useLoginStore = defineStore('login', {
  state: () => ({
    user: {}
  }),
  actions: {
    // Login
    async logIn(email, password) {
      try {
        await signInWithEmailAndPassword(auth, email, password).then((response) => {
          this.user = response.user
        })
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    },
    // Logout
    async logOut() {
      try {
        await signOut(auth)
        this.user = {}
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    }
  }
})
