<template>
  <div class="banner-info-wrap">
    <div class="banner-images" v-if="detail.contentPics&&detail.contentPics.length">
      <swiper :options="swiperOption">
        <swiper-slide 
          v-for="(item, index) in detail.contentPics" 
          :key="index" 
          class="swiper-item"
        >
          <img 
            class="banner-video-pic"
            :src="item.url"
            :style="{height: '281px'}"
          >
          <div class="pic-counts">
            <span>{{ index + 1 }}/{{ detail.contentPics.length }}</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="banner-info" v-if="userInfo">
      <div 
        class="user-info">
        <div 
          v-if="userInfo && userInfo.userPic" 
          class="user-pic">
          <img :src="userInfo.userPic">
        </div>
        <div class="user-other-info">
          <div 
            v-if="userInfo && userInfo.userName" 
            class="user-name">
            <span class="name">{{ userInfo.userName }}</span>
          </div>
          <div class="user-time">{{ detail.addTime }}</div>
        </div>
      </div>
      <div class="project-info" v-if="detail.contentBody">
        <div 
          class="project-text"
          v-html="detail.contentBody"
        />
      </div>
      <div class="tag-info">
        <div 
          v-if="detail.ugcTopic" 
          class="tag-info-btn topic" 
          data-view-bid="b_h0ejukak">
          <span class="topic">{{ detail.ugcTopic }}</span>
        </div>
        <div 
          v-if="detail.technicianId" 
          class="tag-info-btn technician">
          <span class="name">{{ detail.technicianName }}</span>
          <span class="title">{{ detail.technicianTitle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
    components: {
        'swiper-slide': swiperSlide,
        swiper,
    },
    
    data() {
        return {
            swiperOption: {
                speed: 500,
                touchAngle: 30,
                direction: 'horizontal',
                autoHeight: true,
                onSlideNextStart: this.slide,
                onSlidePrevStart: this.slide
            },
            userInfo: {
                userName: '用户名称',
                userPic: 'https://p1.meituan.net/userheadpicbackend/2136d9010cfa6f791e79f0b28ea151d4109114.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0',
            },
            detail: {
                addTime: '2小时前',
                contentBody: '8年整形经验，教你如何不猜坑。8年整形经验，教你如何不猜坑8年整形经验，教你如何不猜坑。8年整形经验，教你如何不猜坑。8年整形经验，教你如何不猜坑。8年整形经验，教你如何不猜坑。',
                contentPics: [
                    {
                        url: 'https://p1.meituan.net/wedding/8803d38eeefceba555e77c866f5a1e8d279865.png'
                    },
                    {
                        url: 'https://p1.meituan.net/wedding/8803d38eeefceba555e77c866f5a1e8d279865.png'
                    },
                    {
                        url: 'https://p1.meituan.net/wedding/8803d38eeefceba555e77c866f5a1e8d279865.png'
                    },
                    {
                        url: 'https://p1.meituan.net/wedding/8803d38eeefceba555e77c866f5a1e8d279865.png'
                    },
                    {
                        url: 'https://p1.meituan.net/wedding/8803d38eeefceba555e77c866f5a1e8d279865.png'
                    },
                    {
                        url: 'https://p1.meituan.net/wedding/8803d38eeefceba555e77c866f5a1e8d279865.png'
                    },
                    {
                        url: 'https://p1.meituan.net/wedding/8803d38eeefceba555e77c866f5a1e8d279865.png'
                    },
                    {
                        url: 'https://p1.meituan.net/wedding/8803d38eeefceba555e77c866f5a1e8d279865.png'
                    }
                ],
                topicId: '282',
                ugcTopic: '90后抗老初体验',
                technicianId: '1464894',
                technician: 'wewewe',
                technicianTitle: '主治医生',
                shopId: '8067981',
                shopName: '太美医院',
            }
        };
    },
    mounted() {
        
    },
    methods: {
        //跳转话题页
        goTopic(id) {
            location.href = `${location.href}topic`;;
        }
    }
};
</script>

<style lang="less" scoped>
    @import "../assets/css/border.less";
    @import "../assets/css/util.less";
    .banner-info-wrap {
        width: 100%;
        background: #FFFFFF;
        .banner-images {
            position: relative;
            width: 100%;
            .banner-video-pic {
                cursor: pointer;
                width: 100%;
                height: 100%;
            }
            .pic-counts {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 37px;
                height: 20px;
                right: 10px;
                bottom: 10px;
                background: rgba(0,0,0,0.50);
                border-radius: 12.5px;
                font-size: 11px;
                letter-spacing: 0;
                color: #FFFFFF;
                font-family: PingFangSC-Medium;
                z-index: 99;
            }
        }
        .banner-info {
            padding: 12px 15px 0 15px;
            margin-bottom: 10px;
            .owner {
                padding-top: 15px;
                padding-bottom: 12px;
                .borderline(#E1E1E1, top);
            }
            .user-info {
                display: flex;
                align-items: center;
                position: relative;
                padding-bottom: 5px;
            }
            .user-pic {
                display: inline-block;
                position: relative;
                height: 40px;
                width: 40px;
                border-radius: 20px;
                img {
                    height: 100%;
                    width: 100%;
                    border-radius: 20px;
                }
            }
            .user-other-info {
                display: inline-block;
                padding-left: 10px;
                .user-name {
                    display: flex;
                    position: relative;
                    .name {
                        font-size: 15px;
                        color: #466889;
                        max-width: 130px;
                        white-space: nowrap;
                        word-wrap: normal;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
                .user-time {
                    margin-top: 2px;
                    font-size: 12px;
                    color: #000000;
                    opacity: 0.4;
                }
            }
            .project-info {
                font-size: 14px;
                color: #111111; 
                margin: 12px 0 5px;
                .tag-item {
                    display: inline-block;
                    padding-right: 5px;
                }
                .project-text {
                    width: 100%;
                    margin-top: 3px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    img{
                        max-width:100%;
                    }
                }
            }
            .tag-info {
                padding: 0 0 10px;
                .tag-info-btn {
                    display: inline-block;
                    padding: 6px 20px;
                    margin: 10px 10px 10px 0;
                    font-size: 14px;
                    color: #111111;
                    background: rgba(225,225,225,.4);
                    border-radius: 24px;
                    .topic {
                        display: inline-block;
                        padding: 0 0 0 15px;
                        background: url("../assets/img/detail/icon_topic.png") left center no-repeat;
                        background-size: 11.5px 13px;
                    }
                    .name {
                        padding-right: 5px;
                    }
                    &.last-child {
                        margin-right: 0px;
                    }
                }
            }
        } 
        .swiper-container {
            margin-left: auto;
            margin-right: auto;
            position: relative;
            overflow: hidden;
            z-index: 1;
        }
        .swiper-wrapper {
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
            -webkit-transition-property: -webkit-transform,height;
            -webkit-transition-property: height,-webkit-transform;
            transition-property: height,-webkit-transform;
            transition-property: transform,height;
            transition-property: transform,height,-webkit-transform;
        }
        .swiper-item {		
            position: inherit !important;		
        }  
    }
</style>
