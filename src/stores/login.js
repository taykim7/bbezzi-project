import { defineStore } from 'pinia'
import { auth } from '@/plugins/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useStorage } from '@vueuse/core'

export const useLoginStore = defineStore('login', {
  state: () => ({
    // 상태
    user: {},
    accessToken: useStorage('accessToken', null),
    refreshToken: useStorage('refreshToken', null)
  }),
  actions: {
    // Login
    async postLogin(email, password) {
      try {
        await signInWithEmailAndPassword(auth, email, password).then((response) => {
          this.user = response.user
          this.accessToken = this.user.accessToken
          this.refreshToken = this.user.refreshToken
        })
        return true
      } catch (error) {
        console.log(error)
        this.user = {}
        this.accessToken = null
        this.refreshToken = null
        return false
      }
    }
  }
})
