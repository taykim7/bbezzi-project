import { defineStore } from 'pinia'
import { auth } from '@/plugins/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useLoginStore = defineStore('login', {
  state: () => ({
    // 상태
    user: {}
  }),
  actions: {
    // 로그인
    async postLogin(email, password) {
      await signInWithEmailAndPassword(auth, email, password).then((response) => {
        this.user = response
        console.log(this.user.auth)
      })
    }
  }
})
