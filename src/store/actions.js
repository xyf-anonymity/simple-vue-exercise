import myAxios from '../myAxios'
import {GETGITHUBUSERSDATA,GETSEARCHVALUE,SEARCHSUCCESS,SEARCHFAIL,SEARCHING} from './commitType'
export default {
    async [GETGITHUBUSERSDATA]({ commit, state }) {
        commit(SEARCHING)
        try {
            let {items} = await myAxios.get('/search/users',{
                params:{
                  q:state.searchValue
                }
            })
            if(items) commit(SEARCHSUCCESS)
            let gitHubUsersData = items.map(item => {
                return {
                    id:item.id,
                    userName: item.login,
                    userImage: item.avatar_url,
                    userPage:item.html_url
                }
            })
            commit(GETGITHUBUSERSDATA, gitHubUsersData)  
        } catch (error) {
            if(error) commit(SEARCHFAIL)
        }

    },
    [GETSEARCHVALUE]({commit},searchValue) {
        commit(GETSEARCHVALUE,searchValue)
    }
}