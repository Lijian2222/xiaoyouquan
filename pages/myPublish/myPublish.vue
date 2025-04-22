
<script setup>
	import { ref } from 'vue'
	import { postStore } from '../../store/post'
	import { userStore } from '../../store/user.js'
	import { environmentStore } from '../../store/environment'
	const currentUrl = environmentStore().currentUrl
	const active = ref(1) //active=1表示帖子，active=2表示岗位
	
	// 我的发布 帖子
	const myPublishList1 = ref([])
	// 我的发布 岗位
	const myPublishList2 = ref([])
	
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
				"userId":userStore().userId
			}
		})
		// console.log(res)
		res.data.data.forEach( 
			postStore().handleTime
		)
		myPublishList1.value = [...myPublishList1.value,...res.data.data]
		// console.log(myPublishList1)
	}
	
	getMyPublishList1(1)
	
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
				"userId":userStore().userId
			}
		})
		// console.log(res)
		res.data.data.forEach( 
			postStore().handleTime
		)
		myPublishList2.value = [...myPublishList2.value,...res.data.data]
		// console.log(list1)
	}
	
	getMyPublishList2(1)
	
</script>

<template>
	<view class="myPublish">
		<!-- 我的发布上面的帖子和岗位导航栏 -->
		<view class="myPublishHead">
			<view class="post" @touchend="active=1">
				<view>帖子</view>
				<image src="/static/line.png" v-show="active==1"></image>
			</view>
			<view class="job" @touchend="active=2">
				<view>岗位</view>
				<image src="/static/line.png" v-show="active==2"></image>
			</view>
		</view>
		
		<view class="myPublishBody">
			<homePost
			v-for="(item,index) in myPublishList1" :key="item.id"
			v-show="active==1"
			:id="item.id"
			:username="item.nickname"
			:content="item.content"
			:goodNums="item.goodNums"
			:commentNums="item.commentNums"
			:viewNums="item.viewNums"
			:time="item.publishTime"
			:retweet="item.retweet"
			:signature="item.signature"
			></homePost>
			
			<JobPost
			v-for="(item,index) in myPublishList2" :key="item.id"
			v-show="active==2"
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
			
		</view>
	</view>
</template>


<style scoped lang="less">
	.myPublish{
		width: 100vw;
		height: 100vh;
		background-color: #f8f8f8;
		
		.myPublishHead{
			display: flex;
			justify-content: center;
			width: 90vw;
			height: 10vw;
			margin: 0 auto;
			
			
			.post{
				display: flex;
				flex-direction: column;
				width: 10vw;
				height: 10vw;
				margin-right: 5vw;
				image{
					width: 5vw;
					height: 5vw;
					margin-left: 1vw;
				}
			}
			
			.job{
				display: flex;
				flex-direction: column;
				width: 10vw;
				height: 10vw;
				margin-right: 5vw;
				image{
					width: 5vw;
					height: 5vw;
					margin-left: 1.5vw;
				}
			}
		}
		
	}

</style>
