<template>
  <div class="notes-wrap">
    <div class="note-header">笔记</div>
    <div class="note-list" v-for="(item, index) in list" :key="index">
        <item :item="item"></item>
    </div>
    <div class="loading">没有更多了</div>
  </div>
</template>

<script>
import item from '../components/list/item.vue'

export default {
    components: {
        item
    },
    data() {
        return {
           list: [
               {
                    userPic:"https://p1.meituan.net/dpmerchantimage/ad5446d6-6518-4105-a666-7367ce9602f4.jpg%40280w_210h_1e_1c_1l%7Cwatermark%3D0",
                    name:"无法不爱",
                    userFlower:"true",
                    flowerTotal:"11360",
                    picUrl:'https://p1.meituan.net/dpnewvc/ed3299f717bdfad76566582dc99b6bd943384.jpg',
                    id:2716689,
                    title: '蓦然回首，那人却在灯火阑珊处'
                },
                {
                    userPic:"https://p1.meituan.net/dpmerchantimage/ad5446d6-6518-4105-a666-7367ce9602f4.jpg%40280w_210h_1e_1c_1l%7Cwatermark%3D0",
                    name:"无法不爱",
                    userFlower:"true",
                    flowerTotal:"11360",
                    picUrl:'https://p1.meituan.net/dpnewvc/ed3299f717bdfad76566582dc99b6bd943384.jpg',
                    id:2716689,
                    title: '蓦然回首，那人却在灯火阑珊处'
                },
                {
                    userPic:"https://p1.meituan.net/dpmerchantimage/ad5446d6-6518-4105-a666-7367ce9602f4.jpg%40280w_210h_1e_1c_1l%7Cwatermark%3D0",
                    name:"无法不爱",
                    userFlower:"true",
                    flowerTotal:"11360",
                    picUrl:'https://p1.meituan.net/dpnewvc/ed3299f717bdfad76566582dc99b6bd943384.jpg',
                    id:2716689,
                    title: '蓦然回首，那人却在灯火阑珊处'
                },
                {
                    userPic:"https://p1.meituan.net/dpmerchantimage/ad5446d6-6518-4105-a666-7367ce9602f4.jpg%40280w_210h_1e_1c_1l%7Cwatermark%3D0",
                    name:"无法不爱",
                    userFlower:"true",
                    flowerTotal:"11360",
                    picUrl:'https://p1.meituan.net/dpnewvc/ed3299f717bdfad76566582dc99b6bd943384.jpg',
                    id:2716689,
                    title: '蓦然回首，那人却在灯火阑珊处'
                }
           ]
        };
    },
    mounted() {
        
    },
    methods: {
        
    }
};
</script>

<style lang="less" scoped>
  .notes-wrap {
	  width: 100%;
	  background: #FFFFFF;
	  .note-header {
          padding: 15px 15px 2px;
          font-size: 19px;
          font-weight: 900;
          color: #111111;
          text-align: center;
          margin-bottom: 10px;
      }
      .water {
          min-height: 60rem;
      }
      .loading {
          height:30px;
          width: 100%;
          line-height: 30px;
          font-size: 14px;
          color: #999999;
          text-align: center;
          background: #f4f4f4;
      }
  }
</style>


