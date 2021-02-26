<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">搜索 GitHub 用户</h3>
        <br/>
        <div>
            <input 
                type="text" 
                placeholder="请输入用户名进行搜索" 
                v-model="searchValue"
                @keydown.13="handleSearch"
            />
            <button @click="handleSearch">搜索</button>
        </div>
    </section>
</template>

<script>
    import {GETGITHUBUSERSDATA,GETSEARCHVALUE} from '../store/commitType'
    export default {
        name:'search',
        computed:{
            searchValue:{
                get(){
                    return this.$store.state.searchValue
                },
                set(searchValue){
                    console.log(searchValue)
                    this.$store.dispatch(GETSEARCHVALUE,searchValue)
                }
            }
        },
        methods:{
            handleSearch(){
                this.$store.dispatch(GETGITHUBUSERSDATA)
            }
        }
    }
</script>

<style  scoped>
</style>