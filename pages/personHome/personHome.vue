<script setup>


	import {onLoad} from "@dcloudio/uni-app"
	import { onMounted, ref, watch } from 'vue'
	import { postStore } from '../../store/post'
	import { userStore } from '../../store/user.js'
	import { onReachBottom } from '@dcloudio/uni-app'
	import { environmentStore } from '../../store/environment'  
	const currentUrl = environmentStore().currentUrl

//接收参数页面,最好写在最上面
const options = ref({})
const userId = ref(1)
onLoad((e)=>{
    console.log(e)
    options.value=e
	// console.log("options.value="+options.value)
	// console.log("options.value.userId="+options.value.userId)
	userId.value = Number(e.userId)
})

	// 我的发布 帖子
	const myPublishList1 = ref([])
	async function getMyPublishList1(pageIndex){
		// console.log(pageIndex)
		let res = await uni.request({
			// url:'http://localhost:8080/post/query',
			url:currentUrl+'/post/query',
			// header: { 'content-type': 'application/x-www-form-urlencoded' },
			method:'post',
			data:{
				"isDeleted":0,
				"pageIndex":pageIndex,
				"pageSize":5,
				"userId":userId.value
			}
		})
		// console.log(res)
		res.data.data.forEach( 
			postStore().handleTime
		)
		myPublishList1.value = [...myPublishList1.value,...res.data.data]
		console.log(myPublishList1)
	}
	
	// 我的发布 岗位
	const myPublishList2 = ref([])
	
	async function getMyPublishList2(pageIndex){
		// console.log(pageIndex)
		let res = await uni.request({
			// url:'http://localhost:8080/job/query',
			url:currentUrl+'/job/query',
			// header: { 'content-type': 'application/x-www-form-urlencoded' },
			method:'post',
			data:{
				"isDeleted":0,
				"pageIndex":pageIndex,
				"pageSize":5,
				"userId":userId.value
			}
		})
		// console.log(res)
		res.data.data.forEach( 
			postStore().handleTime
		)
		myPublishList2.value = [...myPublishList2.value,...res.data.data]
		console.log(myPublishList2)
	}
	
	onMounted(()=>{
		getMyPublishList1(1)
		getMyPublishList2(1)
	})
	
	
	


// 当前激活的标签页
const activeTab = ref('position');
const headTabNum = ref(1)

// 模拟岗位数据
const jobList = ref([
  {
    id: 1,
    title: 'C++大数据开发工程师',
    location: '杭州',
    education: '本科',
    experience: '3-5年',
    salary: '12-15k·14'
  },
  {
    id: 2,
    title: '数仓开发工程师（基础数据...）',
    location: '杭州·深圳·成都',
    education: '本科',
    experience: '3-5年',
    salary: '12-15k·14'
  }
]);

// 切换标签页
const switchTab = (tab) => {
  activeTab.value = tab;
};

// 申请岗位
const applyJob = (jobId) => {
  uni.showToast({
    title: '投递成功',
    icon: 'success',
    duration: 2000
  });
};

function navigator(){
	uni.navigateTo({
	    url: `/pages/messageContent/messageContent?id=1&userId=${options.userId}&jobName=量化金融开发工程师&jobDetail=负责金融市场产品的估值定价模型研发，并落地为可用于系统开发的文档和案例&position=杭州&academicAcquired=本科&experienceAcquired=不限&jobBelonging=互联网&nature=国企&nickname=${options.value.username}&publishTime=2025-03-19&salaryStart=20000&salaryEnd=30000&salaryNums=14&campus=哈尔滨工业大学&flag=false`, // 目标页面路径及参数
	    success: function () {
	        console.log('跳转成功');
	    },
	    fail: function (err) {
	        console.error('跳转失败', err);
	    }
	});
}

	const guanzhuText = ref("关 注")
	function guanzhu(){
		uni.showToast({
			title: '关注成功', // 提示内容
			icon: 'success',  // 图标类型（success、loading、none）
			duration: 2000,   // 显示时长（毫秒）
			mask: true,       // 是否显示透明蒙层，防止触摸穿透
			success: () => {
				console.log('Toast 显示成功');
			}
		})
		guanzhuText.value="已关注"
	}
</script>

<template>
  <view class="alumni-page">
    <!-- 顶部状态栏 -->
    <view class="status-bar">
      <!-- <view class="back-icon">
        <text class="iconfont icon-back">&#xe60e;</text>
      </view> -->
      <text class="page-title">校友主页</text>
      <!-- <view class="action-buttons">
        <text class="iconfont icon-more">&#xe61f;</text>
        <text class="iconfont icon-share">&#xe620;</text>
      </view> -->
    </view>
    
    <!-- 个人信息卡片 -->
    <view class="user-card">
      <!-- 背景图 -->
      <view class="banner-bg">
		  <image src="/static/bgc.jpg" mode=""></image>
	  </view>
      
      <!-- 用户信息 -->
      <view class="user-info">
        <image class="avatar" src="/static/userHeader1.png" mode="aspectFill"></image>
        <view class="user-name">{{options.username}}</view>
        
        <view class="user-stats">
          <view class="stat-item">
            <text class="label">关注</text>
            <text class="value">223</text>
          </view>
          <view class="stat-item">
            <text class="label">粉丝</text>
            <text class="value">5000</text>
          </view>
          <view class="stat-item">
            <text class="label">朋友</text>
            <text class="value">50</text>
          </view>
        </view>
        
        <view class="bio">
          <!-- <text class="bio-icon">&#xe614;</text> -->
          <text class="bio-text">这个人有点懒，什么也没留下...</text>
        </view>
        
        <!-- 基本信息 -->
        <view class="basic-info">
          <view class="info-item">
            <!-- <text class="iconfont icon-gender">&#xe623;</text> -->
            <text class="info-text">23岁</text>
          </view>
          <view class="info-item">
            <!-- <text class="iconfont icon-location">&#xe624;</text> -->
            <text class="info-text">北京</text>
          </view>
          <view class="online-status">
            <switch checked color="#0d99ff" />
            <text>在线</text>
          </view>
        </view>
      </view>
    </view>
    
    <!-- 教育信息 -->
    <view class="education-section">
      <view class="section-title">
        <view class="title-bar"></view>
        <text>Ta的学校</text>
        <text class="sub-title">(只显示与您相同学校的经历)</text>
      </view>
      
      <view class="school-item">
        <view class="school-icon">
          <image src="/static/academic.png"></image>
        </view>
        <view class="school-info">
          <text>哈尔滨工业大学 | 硕士 | 20级</text>
        </view>
      </view>
    </view>
    
    <!-- 标签导航 -->
    <view class="tab-nav">
      <view class="tab-item" :class="{ active: activeTab === 'position' }" @tap="switchTab('position')">
        <text>岗位</text>
        <view class="active-line" v-if="activeTab === 'position'"></view>
      </view>
      <view class="tab-item" :class="{ active: activeTab === 'post' }" @tap="switchTab('post')">
        <text>帖子</text>
        <view class="active-line" v-if="activeTab === 'post'"></view>
      </view>
      <!-- <view class="tab-item" :class="{ active: activeTab === 'skill' }" @tap="switchTab('skill')">
        <text>技能</text>
        <view class="active-line" v-if="activeTab === 'skill'"></view>
      </view> -->
    </view>
    
    <!-- 岗位列表 -->
    <view class="job-list" v-if="activeTab === 'position'">
		<JobPost
		v-for="(item,index) in myPublishList2" :key="item.id"
		:id="item.id"
		:userId="item.userId"
		:jobName="item.jobName"
		:jobDetail="item.jobDetail"
		:position="item.position"
		:academicAcquired="item.academicAcquired"
		:experienceAcquired="item.experienceAcquired"
		:jobBelonging="item.jobBelonging"
		:nature="item.nature"
		:nickname="item.nickname"
		:publishTime="item.publishTime"
		:salaryStart="item.salaryStart"
		:salaryEnd="item.salaryEnd"
		:salaryNums="item.salaryNums"
		:campus="item.campus"
		></JobPost>
      <!-- <view class="job-item" v-for="(job, index) in jobList" :key="index">
        <view class="job-title">{{job.title}}</view>
        <view class="job-detail">
          <view class="job-location">{{job.location}} | {{job.education}} | {{job.experience}}</view>
          <view class="job-salary">{{job.salary}}</view>
        </view>
        <view class="apply-btn" @tap="applyJob(job.id)">立即投递</view>
      </view> -->
    </view>
	<!-- 我发布的帖子 -->
	<view class="job-list" v-if="activeTab === 'post'">
		<homePost
		v-for="(item,index) in myPublishList1" :key="item.id"
		:id="item.id"
		:username="item.nickname"
		:content="item.content"
		:goodNums="item.goodNums"
		:commentNums="item.commentNums"
		:viewNums="item.viewNums"
		:time="item.publishTime"
		:retweet="item.retweet"
		:signature="item.signature"
		:profilePicture="item.profilePicture"
		></homePost>
    </view>
    <!-- 底部按钮 -->
    <view class="bottom-buttons">
      <view class="follow-btn" @touchend="guanzhu">{{guanzhuText}}</view>
      <view class="message-btn" @touchend="navigator">私信</view>
    </view>
  </view>
</template>

<style lang="less" scoped>
.alumni-page {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  position: relative;
  padding-bottom: 120rpx; // 为底部按钮留出空间
}

// 顶部状态栏
.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx 30rpx;
  background-color: #fff;
  position: relative;
  
  .back-icon {
    font-size: 40rpx;
  }
  
  .page-title {
	  margin: 0 auto;
    font-size: 36rpx;
    font-weight: bold;
  }
  
  .action-buttons {
    display: flex;
    gap: 40rpx;
    font-size: 40rpx;
  }
}

// 用户卡片
.user-card {
  position: relative;
  overflow: hidden;
  
  .banner-bg {
    height: 300rpx;
    background: linear-gradient(to bottom, #59c1ff, #119efc);
	image{
		width: 100vw;
		height: 300rpx;
	}
  }
  
  .user-info {
    position: relative;
    margin-top: -50rpx;
    padding: 0 30rpx;
    background-color: #fff;
    border-radius: 20rpx 20rpx 0 0;
    padding-bottom: 30rpx;
    
    .avatar {
      width: 150rpx;
      height: 150rpx;
      border-radius: 50%;
      border: 4rpx solid #fff;
      margin-top: -75rpx;
      margin-bottom: 20rpx;
    }
    
    .user-name {
      font-size: 40rpx;
      font-weight: bold;
      margin-bottom: 20rpx;
    }
    
    .user-stats {
      display: flex;
      margin-bottom: 20rpx;
      
      .stat-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 60rpx;
        
        .label {
          font-size: 28rpx;
          color: #666;
        }
        
        .value {
          font-size: 32rpx;
          font-weight: bold;
        }
      }
    }
    
    .bio {
      display: flex;
      align-items: center;
      margin-bottom: 20rpx;
      color: #666;
      
      .bio-icon {
        font-size: 32rpx;
        margin-right: 10rpx;
      }
      
      .bio-text {
        font-size: 28rpx;
      }
    }
    
    .basic-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      .info-item {
        display: flex;
        align-items: center;
        margin-right: 30rpx;
        
        .iconfont {
          font-size: 32rpx;
          margin-right: 10rpx;
          color: #0d99ff;
        }
        
        .info-text {
          font-size: 28rpx;
        }
      }
      
      .online-status {
        display: flex;
        align-items: center;
        
        text {
          margin-left: 10rpx;
          font-size: 28rpx;
        }
      }
    }
  }
}

// 教育信息
.education-section {
  background-color: #fff;
  padding: 30rpx;
  margin-bottom: 20rpx;
  
  .section-title {
    display: flex;
    align-items: center;
    margin-bottom: 30rpx;
    
    .title-bar {
      width: 8rpx;
      height: 30rpx;
      background-color: #0d99ff;
      margin-right: 15rpx;
    }
    
    .sub-title {
      font-size: 24rpx;
      color: #999;
      margin-left: 15rpx;
    }
  }
  
  .school-item {
    display: flex;
    align-items: center;
    
    .school-icon {
      width: 60rpx;
      height: 60rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #e6f5ff;
      border-radius: 50%;
      margin-right: 20rpx;
      
      image {
        width: 36rpx;
        height: 36rpx;
      }
    }
    
    .school-info {
      font-size: 30rpx;
    }
  }
}

// 标签导航
.tab-nav {
  display: flex;
  background-color: #fff;
  border-bottom: 2rpx solid #eee;
  
  .tab-item {
    flex: 1;
    text-align: center;
    padding: 30rpx 0;
    position: relative;
    
    &.active {
      color: #0d99ff;
      font-weight: bold;
    }
    
    .active-line {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60rpx;
      height: 6rpx;
      background-color: #0d99ff;
      border-radius: 3rpx;
    }
  }
}

// 岗位列表
.job-list {
  background-color: #fff;
  // padding: 30rpx;
  
  .job-item {
    padding: 30rpx 0;
    border-bottom: 2rpx solid #eee;
    position: relative;
    
    &:last-child {
      border-bottom: none;
    }
    
    .job-title {
      font-size: 34rpx;
      font-weight: bold;
      margin-bottom: 20rpx;
    }
    
    .job-detail {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20rpx;
      
      .job-location {
        font-size: 28rpx;
        color: #999;
      }
      
      .job-salary {
        font-size: 32rpx;
        color: #0d99ff;
        font-weight: bold;
      }
    }
    
    .apply-btn {
      position: absolute;
      right: 0;
      bottom: 30rpx;
      background-color: #0d99ff;
      color: #fff;
      padding: 15rpx 30rpx;
      border-radius: 40rpx;
      font-size: 28rpx;
    }
  }
}

// 底部按钮
.bottom-buttons {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20rpx 30rpx;
  background-color: #fff;
  box-shadow: 0 -2rpx 10rpx rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  
  .follow-btn, .message-btn {
    flex: 1;
    height: 80rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40rpx;
    font-size: 32rpx;
  }
  
  .follow-btn {
    border: 2rpx solid #0d99ff;
    color: #0d99ff;
    margin-right: 20rpx;
  }
  
  .message-btn {
    background-color: #0d99ff;
    color: #fff;
  }
}
</style>