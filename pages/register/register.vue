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
	<view>
		<view class="phoneNumber">
			<input type="text" placeholder="请输入您的手机号" v-model="phoneNumber"/>
		</view>
		<view class="password">
			<input type="safe-password" placeholder="第一次登录密码默认为123456" v-model="password">
		</view>
		
		<button @touchend="userStore().logIn(phoneNumber,password)" 
		open-type="chooseAvatar" @chooseavatar="getAvatar">登录/注册</button>
	</view>
</template>



<style scoped lang="less">
		
	.phoneNumber{
		height: 10vw;
		margin-top: 50vw;
		
		input{
			height: 10vw;
			background-color: #ededed;
			font-size: 5vw;
		}
		
	}
	
	.password{
		height: 10vw;
		margin-top: 5vw;
		
		input{
			height: 10vw;
			background-color: #ededed;
			font-size: 5vw;
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
</style>
