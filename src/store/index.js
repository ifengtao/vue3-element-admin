import { createPinia } from 'pinia'

import adminStore from '@/store/module/admin'
const BaseStore = {
    state() {
    },
    getters: {
    },
    actions: {
    },
};
export default createPinia({
    modules: {
        admin: adminStore,
    },
    ...BaseStore
})