<template>
    <div>
        <div v-for="(item,index) in detailInfo.url">
            <img :src="item">
        </div>
        <div class="detail-text">
            {{detailInfo.text}}
        </div>
    </div>
</template>

<script>
    import {Http} from '../../view/util/api'

    export default {
        name: "Detail",
        data() {
            return {
                detailInfo: {},

            }
        },
        computed: {},
        async mounted() {
            await this.getDetail();
        },
        methods: {
            async getDetail() {
                let body = await Http.get('/getDetail/')
                if (body.status === 200) {
                    console.log('sssssssss111111111111', body);
                    this.detailInfo = {...body.data} || {};
                    console.log('22222222222', this.detailInfo.url);
                }
            }
        },
    }
</script>

<style scoped>
 .detail-text{
     padding: 20px;
 }
    img{
        width: 300px;
    }
</style>
