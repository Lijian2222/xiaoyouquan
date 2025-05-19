<script setup>
	import { ref, computed, onMounted } from 'vue'
	import { jobStore } from '../../store/job'
	import { environmentStore } from '../../store/environment'
	import { userStore } from '../../store/user'
	const currentUrl = environmentStore().currentUrl
	const messageList = ([
		{userPictureUrl:"../../static/notice.png",username:"系统通知",messageDetail:"人才直聘新版本即将上线"},
		{userPictureUrl:"../../static/userHeader1.png",username:"张先生",messageDetail:"你好学长，我对此岗位。。。"}
	])
	
	// console.log(props.campus)
	// 动态计算 当imageSrc.value,props.goodNums发生变化，重新计算urlParameter
	// 因为url是静态解析的，一开始imageSrc=${imageSrc.value}}的值已经写死了,相当于imageSrc=xxx字符串
	// 但是在页面内部修改这些来自仓库的数据，页面内部并不会实时更新，因为url传递数据是一次性的，没有绑定关系
	const urlParameter = computed(()=>{
		return "id=1&userId=1&jobName=量化金融开发工程师&jobDetail=负责金融市场产品的估值定价模型研发，并落地为可用于系统开发的文档和案例&position=杭州&academicAcquired=本科&experienceAcquired=不限&jobBelonging=互联网&nature=国企&nickname=张先生&publishTime=2025-03-19&salaryStart=20000&salaryEnd=30000&salaryNums=14&campus=哈尔滨工业大学&flag=true" 
	})
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
			v-show="userStore().logInFlag">
			<view class="messagePicture">
				<image src="../../static/notice.png"></image>
			</view>
			<view class="messageContent">
				<view class="username">系统通知</view>
				<view class="messageDetail">人才直聘新版本即将上线</view>
			</view>
		</view>
		
		<navigator :url="'/pages/messageContent/messageContent?'+urlParameter">
			<view class="messageComponent"
				v-show="userStore().logInFlag">
				<view class="messagePicture">
					<image src="../../static/userHeader1.png"></image>
				</view>
				<view class="messageContent">
					<view class="username">张先生</view>
					<view class="messageDetail">你好学长，我对此岗位。。。</view>
				</view>
			</view>
		</navigator>
		
		<!-- <view class="messageComponent" 
			v-for="(item,index) in messageList" :key="item.userId" 
			v-show="userStore().logInFlag">
				
			<view class="messagePicture">
				<image :src="item.userPictureUrl"></image>
			</view>
			<view class="messageContent">
				<view class="username">{{item.username}}</view>
				<view class="messageDetail">{{item.messageDetail}}</view>
			</view>
		</view> -->
		
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