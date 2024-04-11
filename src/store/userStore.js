// stores/counter.js
import axios from 'axios'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    fullName: null,
    email: null,
    phone: null,
    image: null
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async setUserDetails(res) {
        this.$state.id = res.data.user.id
        this.$state.token = res.data.token
        this.$state.fullName = res.data.user.fullName
        this.$state.email = res.data.user.email
        this.$state.phone = res.data.user.phone
    },

    async fetchUser() {
        let res = await axios(`api/users/${this.$state.id}`)

        this.$state.id = res.data.user.id
        this.$state.fullName = res.data.user.fullName
        this.$state.email = res.data.user.email
        this.$state.phone = res.data.user.phone
    },

    clearUser() {
        this.$state.id = null
        this.$state.token = null
        this.$state.fullName = null
        this.$state.email = null
        this.$state.phone = null
    }
  },
  persist: true,
})