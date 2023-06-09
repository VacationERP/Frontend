import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import largeSidebar from './modules/largeSidebar'

export default createStore({
  state: {
    role: 'anonymous',
    emp: {},
    empNum: '',
    mgr: {},
  },
  mutations: {
    setRole(state, role) {
      state.role = role
    },
    setEmp(state, emp) {
      state.emp = emp
    },
    setEmpNum(state, empNum) {
      state.empNum = empNum
    },
    setManager(state, mgr) {
      state.mgr = mgr
    },
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage, // session에 저장
    }),
  ],
  modules: {
    largeSidebar,
  },
})
