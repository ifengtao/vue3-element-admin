import { createStore, defineStore } from 'pinia'

import adminStore from '@/store/module/admin'
const BaseStore = defineStore({
    state() {
    },
    getters: {
    },
    actions: {
    },
});
export default createStore({
    modules: {
        admin: adminStore,
    },
    ...BaseStore
})