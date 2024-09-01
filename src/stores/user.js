import { defineStore } from 'pinia'
import { auth } from '@/plugins/firebase'

export const useUserStore = defineStore('user', {
  state: () => ({
    uid: '',
    email: '',
    displayName: ''
  }),
  actions: {
    async getMyInfo() {
      try {
        this.uid = auth.currentUser.uid
        this.email = auth.currentUser.email
        this.displayName = auth.currentUser.displayName
        return
      } catch (error) {
        console.log(error)
        return
      }
    }
  }
})
