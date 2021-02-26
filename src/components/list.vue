<template>
    <div>
      <div v-if="searchBefore">请输入用户名搜索用户</div>
      <div v-else-if="searching">loading......</div>
      <div v-else-if="searchError">请求出错，请稍后重试</div>
      <div v-else class="row">
      <div class="card" v-for="item in gitHubUsersData" :key="item.id">
        <a :href="item.userPage" target="_blank">
          <img :src="item.userImage" style='width: 100px'/>
        </a>
        <p class="card-text">{{item.userName}}</p>
      </div>
    </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
      name:'list',
      data(){
        return {
        }
      },
      computed:{
        ...mapState(['searchValue','gitHubUsersData','searchBefore','searching','searchError']),
      },
    }
</script>

<style  scoped>
    .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>