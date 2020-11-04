<template>
    <div class="searchList">
        <van-search
                v-model="value"
                show-action
                label="地址"
                placeholder="请输入搜索关键词"
                @search="onSearch"
        >
            <template #action>
                <div @click="onSearch">搜索</div>
            </template>

        </van-search>

        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <van-cell v-for="(item,index) in list" :key="index" :title="item.name"
                      to="/detail"
            />

        </van-list>

    </div>


</template>

<script>
    import {Http} from '../../view/util/api'

    export default {
        name: "Search",
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
            }
        },
       async mounted(){
         // await this.onSearch();
        },
        activated(){
            console.log('1aaaaaaaaaaaaaaaaaaaaaaa');
        },
        deactivated(){
            console.log('2bbbbbbbbbbbbbbbbbbbbbbb');
        },
        methods: {
            async onSearch() {
                this.loading = true;
                let body = await Http.get('/getList/')
                if (body.status === 200) {
                    this.list = body.data.data || [];
                    this.finished = true;
                    this.loading = false;
                }
            },

        }
    }
</script>

<style scoped>
    .searchList {
        width: 100%;
        height: 100vh;
    }

    .list {
        border: 2px solid red;
        height: 900px;
    }
</style>
