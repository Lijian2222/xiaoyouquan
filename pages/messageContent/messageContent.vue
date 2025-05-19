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
		if (options.value.flag=="false"){
			messageList.value=[]
			jobFlag.value=false
			console.log("jobFlag.value=false")
		}
		
		
	})//接收参数页面
	const messageList = ref([
		"你好，学长",
		"这个岗位的内推还有吗"
	])
	const inputText = ref("")
	function push(){
		messageList.value.push(inputText.value)
		inputText.value=""
	}
	const jobFlag = ref(true)
	// onMounted(()=>{
	// 	if (options.value.flag=="false"){
	// 		messageList.value=[]
	// 	}
	// 	console.log("jobFlag.value=false")
	// 	jobFlag.value=false
	// })
</script>

<template>
	<view class="messageContent">
		<view class="title">
			{{options.nickname}}
		</view>
		<!-- 存岗位内容 -->
		<!-- 帖子简况 -->
		<view class="jobContentHead" v-if="jobFlag">
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
			<!-- 帖子详情 -->
			<view class="jobContentBody2">
				<text>
					{{options.jobDetail}}
				</text>
			</view>
		</view>
		
		<!-- 对话 -->
		<view class="body">
			<view class="dialog" 
			v-for="(item,index) in messageList" :key="index">
				<view class="content">
					{{item}}
				</view>
				<view class="userHead">
					<image src="/static/userHeader1.png"></image>
				</view>
			</view>
			<!-- <view class="dialog">
				<view class="content">
					这个岗位的内推还有名额吗？
				</view>
				<view class="userHead">
					<image src="/static/userHeader1.png"></image>
				</view>
			</view> -->
		</view>
		
		<view class="foot">
			<view class="inp">
				<input type="text" placeholder="请输入消息内容" v-model="inputText"/>
			</view>
			<view class="enter">
				<button @touchend="push">发送</button>
			</view>
			
		</view>
	</view>
</template>


<style lang="less" scoped>
	.messageContent{
		position: relative;
		width: 100vw;
		min-height: 100vh;
		height: 100vh;
		background-color: #f8f8f8;
		
		.title{
			text-align: center;
			font-size: 5vw;
			font-weight: bold;
			margin-bottom: 10vw;
		}
		
		.jobContentHead{
			display: flex;
			flex-direction: column;
			width: 90vw;
			// height: 110vw;
			margin: 5vw auto;
			border-radius: 3vw;
			background-color: #fff;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
			
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
			
			.jobContentBody2{
				box-sizing: border-box;
				width: 90vw;
				margin: 0 auto;
				padding: 3vw;
				border-radius: 3vw;
				background-color: #fff;
				font-size: 4vw;
				line-height: 8vw;
				color: #848484;
			}
		}
		
		.body{
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			width: 90vw;
			margin: 0 auto;
			.dialog{
				right: 0;
				display: flex;
				height: 15vw;
				.content{
					height: 10vw;
					background-color: #0d99ff;
					color: #fff;
					font-size: 4vw;
					vertical-align: middle;
					border-radius: 2vw;
					padding-top: 3vw;
					padding-left: 3vw;
					padding-right: 3vw;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
				}
				.userHead{
					width: 11vw;
					height: 11vw;
					margin-left: 3vw;
					margin-top: 1.5vw;
					image{
						width: 10vw;
						height: 10vw;
						border-radius: 50%;
					}
				}
			}
		}
	
		.foot{
			display: flex;
			position: absolute;
			bottom: 0%;
			width: 100vw;
			height: 20vw;
			background-color: #fff;
			padding: 0 5vw;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
			.inp{
				width: 70vw;
				height: 10vw;
				margin: 5vw 0;
				
				input{
					width: 70vw;
					height:10vw;
					background-color: #f8f8f8;
					border-radius: 3vw;
				}
			}
				
			.enter{
				width: 20vw;
				height: 10vw;
				margin-top: 5vw;
				margin-left: 2vw;
				button{
					width: 20vw;
					height: 10vw;
					color: #fff;
					font-size: 4vw;
					background-color: #0d99ff;
					border-radius: 3vw;
				}
			}
		}
	}
</style>
