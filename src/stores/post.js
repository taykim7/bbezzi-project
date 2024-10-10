import { defineStore } from 'pinia'
import { db } from '@/plugins/firebase'
import {
  query,
  collection,
  orderBy,
  getDocs,
  where,
  setDoc,
  doc,
  deleteDoc
} from 'firebase/firestore'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: []
  }),
  actions: {
    // 조회
    async fetchPosts(uid, start, end) {
      try {
        const url = `post/${uid}/datas`
        const q = await query(
          collection(db, url),
          where('standardDate', '>=', start),
          where('standardDate', '<=', end),
          orderBy('standardDate', 'desc')
        )
        const response = await getDocs(q)
        const resposeArray = []
        response.forEach((doc) => {
          resposeArray.push(doc.data())
        })
        this.posts = [...resposeArray]
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
        const key = postData.standardDate
        const url = `${uid}/datas/${key}`
        const response = setDoc(doc(db, 'post', url), {
          createdDate: postData.createdDate,
          standardDate: postData.standardDate,
          memo: postData.memo,
          gram: postData.gram
        }).then((response) => response)
        return response
      } catch (error) {
        console.log(error)
      }
    },

    // 삭제
    deletePost(uid, standardDate) {
      const url = `${uid}/datas/${standardDate}`
      return deleteDoc(doc(db, 'post', url)).then((response) => response)
    }
  }
})
