import {GETGITHUBUSERSDATA,GETSEARCHVALUE,SEARCHSUCCESS,SEARCHFAIL,SEARCHING} from './commitType'
export default {
    [GETGITHUBUSERSDATA](state,items) {
        state.gitHubUsersData = items
    },
    [GETSEARCHVALUE](state, searchValue) {
        state.searchValue = searchValue
    },
    [SEARCHSUCCESS](state) {
        state.searchBefore = false,
        state.searching = false,
        state.searchError = false
    },
    [SEARCHFAIL](state) {
        state.searchBefore = false,
        state.searching = false,
        state.searchError = true
    },
    [SEARCHING](state) {
        state.searchBefore = false,
        state.searching = true,
        state.searchError = false
    }
}