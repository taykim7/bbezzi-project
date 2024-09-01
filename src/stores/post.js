import { defineStore } from 'pinia'
import { db } from '@/plugins/firebase'
import { query, collection, orderBy, getDocs } from 'firebase/firestore'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: []
  }),
  actions: {
    async fetchPosts(uid) {
      try {
        const url = `post/${uid}/datas`
        const q = await query(collection(db, url), orderBy('standardDate', 'desc'))
        this.posts = []
        const response = await getDocs(q)
        response.forEach((doc) => {
          this.posts.push(doc.data())
        })
        return
      } catch (error) {
        console.log(error)
        this.posts = []
        return
      }
    }
  }
})
