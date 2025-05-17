<script setup>
	import { ref } from 'vue'
	import { postStore } from '../../store/post'
	import { userStore } from '../../store/user.js'
	import { environmentStore } from '../../store/environment'
	import { onReachBottom } from '@dcloudio/uni-app'
	const currentUrl = environmentStore().currentUrl
	const pageIndex = ref(1)
	
	
	// 我的收藏 岗位
	const myFavoriteList = ref([])
	
	async function getMyFavoriteList(pageIndex){
		// console.log(pageIndex)
		let res = await uni.request({
			// url:'http://localhost:8080/job/query',
			url:currentUrl+'/job/queryMyFavorite',
			// header: { 'content-type': 'application/x-www-form-urlencoded' },
			method:'post',
			data:{
				"userId":userStore().userId,
				"pageIndex":pageIndex,
				"pageSize":10,
				"isDeleted":0
			}
		})
		// console.log(res)
		res.data.data.forEach( 
			postStore().handleTime
		)
		myFavoriteList.value = [...myFavoriteList.value,...res.data.data]
		// console.log(list1)
	}
	
	getMyFavoriteList(pageIndex.value)
	
	//触底加载更多
	onReachBottom(()=>{
		pageIndex.value = pageIndex.value + 1
		getMyFavoriteList(pageIndex.value)	
	})
</script>

<template>
	<view class="myFavorite">
		<view class="myFavoriteHead">
			<view>岗位</view>
		</view>
		<view class="myFavoriteBody">
			<JobPost
			v-for="(item,index) in myFavoriteList" :key="item.id"
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
	.myFavorite{
		width: 100vw;
		height: 100vh;
		background-color: #f8f8f8;
		
		.myFavoriteHead{
			display: flex;
			justify-content: center;
			width: 90vw;
			height: 10vw;
			margin: 0 auto;
		}
		
	}
</style>
