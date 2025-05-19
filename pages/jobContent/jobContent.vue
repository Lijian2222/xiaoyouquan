<script setup>
	import { onMounted, onUpdated, ref } from 'vue'
	import {onLoad} from "@dcloudio/uni-app"
	import { jobStore } from '../../store/job'
	import { userStore } from '../../store/user'
	import { environmentStore } from '../../store/environment'
	const currentUrl = environmentStore().currentUrl
	//新页面接收传过来的参数：
	const options = ref({})
	//解决salaryStary在onMounted前处于udnefine的报错
	options.value.salaryStart = 0
	options.value.salaryEnd = 0
	//页面之间传参，可以再onLoad里面接受参数
	onLoad((e)=>{
	    // console.log(e)
	    options.value = e
		if (options.value.campus=="null"){
			options.value.campus="哈尔滨工业大学"
		}
	})//接收参数页面
	
	const favorite = ref("收 藏")
	//点击收藏
	function addFavorite(){
		if (favorite.value=="收 藏"){
			uni.showToast({
				title: '收藏成功', // 提示内容
				icon: 'success',  // 图标类型（success、loading、none）
				duration: 2000,   // 显示时长（毫秒）
				mask: true,       // 是否显示透明蒙层，防止触摸穿透
				success: () => {
					console.log('Toast 显示成功');
				}
			})
			//发起网络请求
			uni.request({
				url:currentUrl+'/favorite/insert',
				method:'POST',
				data:{
					"userId":userStore().userId,
					"concerned":options.value.id,
					"status":1,
					"isDeleted":0
				}
			})
			favorite.value="已收藏"
		}else{
			uni.showToast({
				title: '取消收藏成功', // 提示内容
				icon: 'success',  // 图标类型（success、loading、none）
				duration: 2000,   // 显示时长（毫秒）
				mask: true,       // 是否显示透明蒙层，防止触摸穿透
				success: () => {
					console.log('Toast 显示成功');
				}
			})
			favorite.value="收 藏"
		}
	}
	const deliverText = ref("立即投递")
	
	onMounted(()=>{
		//查询是否投递过
		uni.request({
			url:currentUrl+'/deliver/query',
			method:'POST',
			data:{
				"userId":userStore().userId,
				"jobId":options.value.id,
				"isDeleted":0
			},
			success:(res) => {
				// console.log(res)
				if(res.data.data.length==0){//如果数据库里面没有记录
					// console.log("没有投递过")
					deliverText.value="立即投递"
					// resolve(true)
				}else{ //如果数据库里面有记录
					// console.log("投递过")
					deliverText.value="已投递"
					// resolve(false)
				}
			},
			fail:(err) => {
				reject(err)
			},
		})
		//查询是否收藏过
		uni.request({
			url:currentUrl+'/favorite/query',
			method:'POST',
			data:{
				"userId":userStore().userId,
				"concerned":options.value.id,
				"isDeleted":0
			},
			success:(res) => {
				// console.log(res)
				if(res.data.data.length==0){//如果数据库里面没有记录
					// console.log("没有收藏过")
					favorite.value="收 藏"
					// resolve(true)
				}else{ //如果数据库里面有记录
					// console.log("投递过")
					favorite.value="已收藏"
					// resolve(false)
				}
			},
			fail:(err) => {
				reject(err)
			},
		})
	})
	//用户点击投递
	function deliver(){
		if (deliverText.value=="立即投递"){
			uni.showToast({
				title: '投递成功', // 提示内容
				icon: 'success',  // 图标类型（success、loading、none）
				duration: 2000,   // 显示时长（毫秒）
				mask: true,       // 是否显示透明蒙层，防止触摸穿透
				success: () => {
					console.log('Toast 显示成功');
				}
			})
			deliverText.value="已投递"
		}else{
			uni.showToast({
				title: '请不要重复投递', // 提示内容
				icon: 'error',  // 图标类型（success、loading、none）
				duration: 2000,   // 显示时长（毫秒）
				mask: true,       // 是否显示透明蒙层，防止触摸穿透
				success: () => {
					console.log('Toast 显示成功');
				}
			})
			deliverText.value="立即投递"
		}
		
		console.log("正在查询是否投递过")
		console.log(options.value.id)
		uni.request({
			url:currentUrl+'/deliver/query',
			method:'POST',
			data:{
				"userId":userStore().userId,
				"jobId":options.value.id,
				"isDeleted":0
			},
			success:(res) => {
				// console.log(res)
				if(res.data.data.length==0){//如果数据库里面没有记录，直接插入记录
					// console.log("没有投递过")
					uni.request({
						// url:'http://localhost:8080/job/query',
						url:currentUrl+'/deliver/insert',
						// header: { 'content-type': 'application/x-www-form-urlencoded' },
						method:'post',
						data:{
							"isDeleted":0,
							"jobId":options.value.id,
							"userId":userStore().userId
						}
					})
					// resolve(true)
				}else{ //如果数据库里面有记录,就修改记录
					// console.log("投递过")
					uni.request({
						// url:'http://localhost:8080/job/query',
						url:currentUrl+'/deliver/update',
						// header: { 'content-type': 'application/x-www-form-urlencoded' },
						method:'post',
						data:{
							"isDeleted":0,
							"jobId":options.value.id,
							"userId":userStore().userId
						}
					})
					// resolve(false)
				}
			},
			fail:(err) => {
				reject(err)
			}
		})
	}
</script>



<template>
	<view class="jobContent">
		<!-- 帖子简况 -->
		<view class="jobContentHead">
			<view class="jobName">
				<span>{{options.jobName}}</span>
			</view>
			<view class="salary">{{jobStore().formatSalary(Number(options.salaryStart))}}-{{jobStore().formatSalary(Number(options.salaryEnd))}}*{{options.salaryNums}}</view>
			<view class="positionAndAcademicAndExperience">
				<view class="position">
					<image src="../../static/position.png"></image>
					<span>{{options.position}}</span>
				</view>
				<view class="academic">
					<image src="../../static/academic2.png"></image>
					<span>{{options.academicAcquired}}</span>
				</view>
				<view class="experience">
					<image src="../../static/experience.png"></image>
					<span>{{options.experienceAcquired}}</span>
				</view>
			</view>
		</view>
		<!-- 用户信息 -->
		<view class="jobContentBody1">
			<view class="userHead">
				<image src="../../static/userHeader1.png"></image>
			</view>
			<view class="usernameAndCampus">
				<view class="username">
					{{options.nickname}}
				</view>
				<view class="campus">
					{{options.campus}}
				</view>
			</view>
		</view>
		<!-- 帖子详情 -->
		<view class="jobContentBody2">
			<text>
				{{options.jobDetail}}
			</text>
		</view>
		<!-- 只是为了能让body2的内容不被下面的foot挡住 -->
		<view class="jobContentBody3">
			
		</view>
		<!-- 收藏 投递 -->
		<view class="jobContentFoot">
			<button @touchend="addFavorite">{{favorite}}</button>
			<button @touchend="deliver">{{deliverText}}</button>
		</view>
	</view>
</template>



<style scoped lang="less">
	.jobContent{
		width: 100vw;
		height: 100vh;
		background-color: #f8f8f8;
		
		.jobContentHead{
			display: flex;
			flex-direction: column;
			width: 90vw;
			height: 40vw;
			margin: 0 auto;
			border-radius: 3vw;
			background-color: #fff;
			
			.jobName{
				width: 90vw;
				height: 10vw;
				margin: 3vw;
				font-size: 6vw;
				font-weight: bold;
			}
			
			.salary{
				width: 90vw;
				height: 10vw;
				// 上下0 左右3vw
				margin: 0 3vw;
				font-size: 5vw;
				font-weight: bold;
				color: #0d99ff;	
			}
			
			.positionAndAcademicAndExperience{
				display: flex;
				width: 90vw;
				height: 10vw;
				margin: 3vw;
				font-size: 4vw;
				color: #848484;
				.position{
					height: 10vw;
					margin-right:3vw;
					image{
						width: 4vw;
						height: 4vw;
						margin-right: 1vw;
					}
				}
				
				.academic{
					height: 10vw;
					margin-right:3vw;
					image{
						width: 4vw;
						height: 4vw;
						margin-right: 1vw;
					}
				}
				
				.experience{
					height: 10vw;
					margin-right:3vw;
					image{
						width: 4vw;
						height: 4vw;
						margin-right: 1vw;
					}
				}
			}
		}
		
		.jobContentBody1{
			display: flex;
			align-items: center;
			width: 90vw;
			height: 20vw;
			margin: 5vw auto;
			border-radius: 3vw;
			background-color: #fff;
			
			.userHead{
				width: 15vw;
				height: 15vw;
				margin: 0 3vw;
				image{
					width: 15vw;
					height: 15vw;
					border-radius: 50%;
				}
			}
			
			.usernameAndCampus{
				display: flex;
				flex-direction: column;
				width: 69vw;
				height: 20vw;
				
				.username{
					width: 69vw;
					height: 10vw;
					font-size: 4.5vw;
					line-height: 13vw;

				}
				
				.campus{
					width: 69vw;
					height: 10vw;
					font-size: 4vw;
					color: #848484;
				}
			}
		}
		
		.jobContentBody2{
			box-sizing: border-box;
			width: 90vw;
			margin: 0 auto;
			padding: 3vw;
			border-radius: 3vw;
			background-color: #fff;
			font-size: 4vw;
			line-height: 8vw;
			// color: #848484;
		}
		
		.jobContentBody3{
			width: 90vw;
			height: 23vw;
			content: "";
		}
		
		.jobContentFoot{
			display: flex;
			align-items: center;
			position: fixed;
			bottom: 0%;
			width: 100vw;
			height: 20vw;
			background-color: #fff;
			
			button{
				display: inline-block;
				width: 30vw;
				height: 10vw;
				border-radius: 5vw;
				border: 1px solid #0d99ff;
				line-height: 10vw;
				color: #0d99ff;
				background-color: #fff;
			}
			
			button:nth-child(2n){
				color: #fff;
				background-color: #0d99ff;
			}
		}
	}
</style>
