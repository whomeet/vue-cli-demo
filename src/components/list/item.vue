<template>
  <div class="wiki-cell-wrap">
    <div 
      v-if="item.name" 
      class="all-say-cell" 
      @click="jumpPage"
    >
      <div class="allsay-item">
        <div class="allsay-img-wrap">
          <img 
            :src="item.picUrl" 
            class="allsay-img" 
            alt=""
          >
        </div>
        <div class="allsay-detail-wrap">
          <div class="allsay-text">{{ item.title }}</div>
          <div class="allsay-detail-box">
            <div class="allsay-person">
              <div class="person-img-wrap"><img 
                :src="item.userPic" 
                class="person-img" 
                alt=""
              ></div>
              <div class="person-name">{{ item.name }}</div>
            </div>
            <div 
              class="allsay-like" 
              :class="{'has-like': item.userFlower}" 
            >{{ item.flowerTotal }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
    @import "../../assets/css/border.less";
    @import "../../assets/css/util.less";
    .wiki-cell-wrap {
        box-shadow: 0 2px 6px 0 #F0F0F0;
        .radius(6px);
        margin-bottom: 20px;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
        .allsay-item {
            .allsay-img-wrap {
                position: relative;
                .allsay-img {
                    .radius(6px 6px 0 0);
                }
            }
            .allsay-detail-wrap {
                padding: 10px;
                .allsay-text {
                    line-height: 20px;
                    margin: 0 0 5px 0;
                    font-size: 14px;
                    .multi-line(2);
                }
                .allsay-detail-box {
                    .flex();
                    justify-content: space-between;
                    align-items: center;
                    font-size: 12px;
                    color: #777;
                    .allsay-person {
                        .flex();
                        align-items: center;
                        .person-img-wrap {
                            width: 25px;
                            height: 25px;
                            margin: 0 5px 0 0;
                            .person-img {
                                display: block;
                                width: 100%;
                                height: 100%;
                                .radius(50%);
                            }
                        }
                        .person-name {
                            max-width: 80px;
                            .elli();
                        }
                    }
                    .allsay-like {
                        padding: 0 0 0 16px;
                        background: url('../../assets/img/list/icon_like.png') left center no-repeat;
                        background-size: 13px 13px;
                        &.has-like {
                            background: url('../../assets/img/list/has_like.png') left center no-repeat;
                            background-size: 13px 13px;
                        }
                    }
                }
            }
        }
    }
</style>

<script>
    
export default {
    props: {
        item: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
          
        };
    },
    computed: {
        
    },
    computed: {},
    mounted() {
        
    },
    methods: {
        jumpPage() {
            location.href = `${location.origin}/detail.html`
        }
    }
};
</script>
