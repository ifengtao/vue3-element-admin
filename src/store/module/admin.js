import { defineStore } from 'pinia'

export const useAdminStore = defineStore('admin', () => {
    const user = {
        username: 'admin',
        password: 'admin',

    }


    return {
        user,
    }
})