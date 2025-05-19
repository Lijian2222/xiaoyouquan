<script setup>
	import { onMounted, ref, watch } from 'vue'
	import {onLoad} from "@dcloudio/uni-app"
	import { userStore } from '../../store/user'

	
	
	const userHeadPicture = ref("../../static/user.png")
	const getAvatar = (e) => {
		// console.log(e)
		userHeadPicture.value = e.detail.avatarUrl
		userStore().userHeadPicture=e.detail.avatarUrl
	}
	const phoneNumber = ref("")
	const password = ref("")
	
</script>


<template>
	<view class="register">
		<view class="Head">
			<view class="title">
				欢迎来到职引派
			</view>
			<view class="tips">
				毕业之前，先上职引派
			</view>
		</view>
		<view class="phoneNumber">
			<input type="text" placeholder="请输入您的手机号" v-model="phoneNumber"/>
		</view>
		<view class="password">
			<input type="safe-password" placeholder="密码默认为123456" v-model="password">
		</view>
		<!-- <view class="attention">
			<span>我已阅读并同意</span>
			<span style="color: #0d99ff;">《职引Π用户隐私政策》</span>
		</view> -->
		<button @touchend="userStore().logIn(phoneNumber,password)" 
		open-type="chooseAvatar" @chooseavatar="getAvatar">登录/注册</button>
	</view>
</template>



<style scoped lang="less">
	.register{
		width: 100vw;
		height: 100vh;
		background-color: #fff;
		margin-top: 30vw;
		.Head{
			width: 100vw;
			height: 25vw;
			padding-left: 10vw;
			
			.title{
				font-size: 9vw;
				margin-bottom: 3vw;
			}
			
			.tips{
				color: rgba(0, 0, 0, 0.5);
				font-size: 5vw;
			}
		}
			
		.phoneNumber{
			height: 10vw;
			margin-top: 5vw;
			padding-left: 10vw;
			input{
				height: 10vw;
				width: 80vw;
				background-color: #ededed;
				font-size: 5vw;
				border-radius: 2vw;
			}
			
		}
		
		.password{
			height: 10vw;
			margin-top: 5vw;
			padding-left: 10vw;
			input{
				height: 10vw;
				width: 80vw;
				background-color: #ededed;
				font-size: 5vw;
				border-radius: 2vw;
			}
		}
		
		
		button{
			width: 30vw;
			height: 10vw;
			margin: 10vw auto;
			padding-left: 5vw;
			border-radius: 5vw;
			background-color: #0d99ff;
			color: #fff;
			line-height: 10vw;
		}
	}
	
</style>
