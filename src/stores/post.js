import { defineStore } from 'pinia'
import { db } from '@/plugins/firebase'
import { query, collection, orderBy, getDocs, where, setDoc, doc } from 'firebase/firestore'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: []
  }),
  actions: {
    async fetchPosts(uid, start, end) {
      try {
        const url = `post/${uid}/datas`
        const q = await query(
          collection(db, url),
          where('standardDate', '>=', start),
          where('standardDate', '<=', end),
          orderBy('standardDate', 'desc')
        )
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
    },

    // 생성
    async setPost(uid, postData) {
      try {
        console.log(postData)
        const key = postData.standardDate
        const url = `${uid}/datas/${key}`
        const response = setDoc(doc(db, 'post', url), {
          createdDate: postData.createdDate,
          standardDate: postData.standardDate,
          memo: postData.memo,
          gram: postData.gram
        }).then((response) => response)
        console.log(response)
        return response
      } catch (error) {
        console.log(error)
      }
    }
  }
})
