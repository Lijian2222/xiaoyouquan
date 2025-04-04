<script setup>
	import { userStore } from '../../store/user.js'
	const messageList = ([
		{userPictureUrl:"../../static/notice.png",username:"系统通知",messageDetail:"人才直聘新版本即将上线"},
		{userPictureUrl:"../../static/userHeader1.png",username:"张先生",messageDetail:"你好学长，我对此岗位。。。"}
	])
</script>


<template>
	<!-- 整个消息页面 -->
	<view class="message">
		
		<!-- 刚进来的时候提示 -->
		<view class="messageInit" v-show="!userStore().logInFlag">
			<navigator url="/pages/register/register">
				<view class="logIn">立即登录/注册</view>
			</navigator>
		</view>
		
		<!-- 单个消息通知 -->
		<view class="messageComponent" 
		v-for="(item,index) in messageList" :key="item.userId" 
		v-show="userStore().logInFlag">
			<view class="messagePicture">
				<image :src="item.userPictureUrl"></image>
			</view>
			<view class="messageContent">
				<view class="username">{{item.username}}</view>
				<view class="messageDetail">{{item.messageDetail}}</view>
			</view>
		</view>
		
	</view>
</template>

<style scoped lang="less">
	.message{
		display: flex;
		flex-direction: column;
		background-color: #f8f8f8;
		
		
		.messageInit{
			width: 100vw;
			height: 100vh;
			
			
			.logIn{
				width: 30vw;
				height: 10vw;
				margin: 40vw auto;
				padding-left: 5vw;
				border-radius: 5vw;
				background-color: #0d99ff;
				color: #fff;
				line-height: 10vw;
				
				
			}
			
		}
		
		
		.messageComponent{
			display: flex;
			align-items: center;
			width: 100vw;
			height: 20vw;
			border-bottom: 2px solid #ededed;
			// background-color: pink;
			.messagePicture{
				width: 15vw;
				height: 15vw;
				margin-left: 3vw;
	
				image{
					width: 15vw;
					height: 15vw;
					border-radius: 50%;
				}
			}
			
			.messageContent{
				display: flex;
				flex-direction: column;
				margin-left: 3vw;
				
				.username{
					font-size: 5vw;
					font-weight: bold;
				}
				
				.messageDetail{
					font-size: 4vw;
				}
				
			}
		}
	}
</style>