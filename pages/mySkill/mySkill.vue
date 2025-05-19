<script setup>
	import {onLoad} from "@dcloudio/uni-app"
	import { onMounted, ref, watch } from 'vue'
	import { postStore } from '../../store/post'
	import { userStore } from '../../store/user.js'
	import { onReachBottom } from '@dcloudio/uni-app'
	import { environmentStore } from '../../store/environment'  
	const currentUrl = environmentStore().currentUrl
	const tipFlag = ref(false)
	const deleteFlag = ref(false)
	
	const skillText = ref("")
	const skillList = ref([
		"掌握java语言和python语言，熟悉alibaba编程规范和restful接口规范",
		"掌握linux、docker、nacos、git、apifox、xshell、pandas以及charles工具的使用",
		"掌握spring、springMVC、springboot、mybatis-plus-join、shiro、xxl-job开发框架",
		"掌握mysql、postgres、redis数据库，熟悉mysql锁，索引以及底层存储结构",
		"掌握html、css、javascript、vue、element-ui前端技术，掌握cookie、session原理"
	])
	
	// 点击添加帖子
	function addSkill(){
		tipFlag.value=true
	}
	
	// 点击确认
	function enter(){
		tipFlag.value=false
		skillList.value.push(skillText.value)
		skillText.value=""
	}
	
	function yes(index){
		deleteFlag.value=false
		skillList.value.splice(index,1)
	}
	
	function no(){
		deleteFlag.value=false
	}
</script>

<template>
	<view class="mySkill">
		<view class="singleSkill" 
		v-for="(item,index) in skillList" :key="index"
		@touchend="deleteFlag=true">
			<view class="picture">
				<image src="/static/skill.png" mode=""></image>
			</view>
			<view class="content">
				<text>{{item}}</text>
			</view>
		</view>
		
		<view class="addSkill" @touchend="addSkill">
			<image src="/static/add.png"></image>
		</view>
		
		<!-- 点击add显示 -->
		<view class="skillTip" v-show="tipFlag">
			<view class="titleTip">
				请输入你的技能
			</view>
			<view class="contentTip">
				<input type="text" placeholder="点击输入" v-model="skillText"/>
			</view>
			<view class="enter">
				<button @touchend="enter">确认</button>
			</view>
		</view>
		
		<!-- 点击add显示 -->
		<view class="deleteTip" v-show="deleteFlag">
			<view class="deleteTitle">
				确认删除吗？
			</view>
			<view class="enter">
				<button @touchend="no">取消</button>
				<button @touchend="yes(index)">确认</button>
			</view>
		</view>
	</view>
	
	
</template>



<style lang="less" scoped>
	.mySkill{
		position: relative;
		width: 100vw;
		height: 100vh;
		background-color: #f8f8f8;
		overflow: hidden;
		
		.singleSkill{
			width: 90vw;
			height: 25vw;
			margin: 5vw auto;
			display: flex;
			background-color: #fff;
			border-radius: 3vw;
			box-shadow: 0 -2rpx 10rpx rgba(0, 0, 0, 0.05);
			.picture{
				width: 15vw;
				height: 15vw;
				margin-top: 5vw;
				margin-left: 5vw;
				border-radius: 50%;
				background-color: #e0eef9;
				image{
					width: 11vw;
					height: 11vw;
					margin: 2vw;
				}
			}
			
			.content{
				width: 65vw;
				height: 10vw;
				margin: 5vw;
			}
		}
		
		.addSkill{
			position: absolute;
			left: 43vw;
			bottom: 20vw;
			width: 15vw;
			height: 15vw;
			image{
				width: 15vw;
				height: 15vw;
			}
		}
		
		.skillTip{
			position: absolute;
			left: 10vw;
			top:50vw;
			width: 80vw;
			height: 60vw;
			border-radius: 3vw;
			background-color: #fff;
			box-shadow: 0 -2rpx 10rpx rgba(0, 0, 0, 0.05);
			
			.titleTip{
				width: 80vw;
				height: 10vw;
				font-size: 5vw;
				margin: 3vw auto;
				text-align: center;
			}
			
			.contentTip{
				width: 80vw;
				height: 30vw;
				
				input{
					font-size: 4vw;
				}
			}
			
			.enter{
				button{
					width: 20vw;
					height: 10vw;
					border-radius: 2vw;
					background-color: #0d99ff;
					color: #fff;
					line-height: 10vw;
				}
			}
		}
		
		.deleteTip{
			position: absolute;
			left: 10vw;
			top:50vw;
			width: 80vw;
			height: 30vw;
			border-radius: 3vw;
			background-color: #fff;
			box-shadow: 0 -2rpx 10rpx rgba(0, 0, 0, 0.05);
			
			.deleteTitle{
				width: 80vw;
				height: 10vw;
				font-size: 5vw;
				margin: 3vw auto;
				text-align: center;
			}
			
			
			
			.enter{
				display: flex;
				justify-content: space-around;
				button{
					width: 20vw;
					height: 10vw;
					border-radius: 2vw;
					background-color: #0d99ff;
					color: #fff;
					line-height: 10vw;
				}
			}
		}
	}
</style>
