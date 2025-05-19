<script setup>
	import { ref } from 'vue'
	import { userStore } from '../../store/user.js'
</script>

<template>
	<view class="editInfo">
		<view class="userHeadPicture">
			<view>头像</view>
			<view class="picture">
				<!-- <image src="../../static/user.png"></image> -->
				<image :src="userStore().userHeadPicture"></image>
			</view>
		</view>
		<view class="username">
			<view>昵称</view>
			<view class="createUsername">
				<input type="text" placeholder="熊大爱睡觉"/>
			</view>
		</view>
		<view class="gender">
			<view>性别</view>
			<view class="selectGender">
				<input type="text" placeholder="男"/>
			</view>
		</view>
		<view class="born">
			<view>出生年月</view>
			<view class="selectBorn">
				<input type="text" placeholder="2000-10-03"/>
			</view>
		</view>
		<view class="signature">
			<view>个性签名</view>
			<view class="createSignature">
				<input type="text" placeholder="这里空空如也"/>
			</view>
		</view>
		<view class="campus">
			
		</view>
	</view>
</template>

<style scoped lang="less">
	.editInfo{
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		background-color: #f8f8f8;
		
		.userHeadPicture{
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			width: 100vw;
			height: 20vw;
			padding: 3vw;
			border-bottom: 2px solid #f8f8f8;
			background-color: #fff;
			font-size: 5vw;
			.picture{
				width: 15vw;
				height: 15vw;
				image{
					width: 15vw;
					height: 15vw;
					margin-left: -30vw;
				}
			}
		}
		
		
		.username{
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			width: 100vw;
			height: 15vw;
			padding: 3vw;
			border-bottom: 2px solid #f8f8f8;
			background-color: #fff;
			font-size: 5vw;
			
			.createUsername{
				color: #848484;
				
			}
		}
		
		
		.gender{
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			width: 100vw;
			height: 15vw;
			padding: 3vw;
			border-bottom: 2px solid #f8f8f8;
			background-color: #fff;
			font-size: 5vw;
			
			.selectGender{
				color: #848484;
				
			}
		}
		
		.born{
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			width: 100vw;
			height: 15vw;
			padding: 3vw;
			border-bottom: 2px solid #f8f8f8;
			background-color: #fff;
			font-size: 5vw;
			
			.selectBorn{
				color: #848484;
				
			}
		}
		
		.signature{
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			width: 100vw;
			height: 15vw;
			padding: 3vw;
			border-bottom: 2px solid #f8f8f8;
			background-color: #fff;
			font-size: 5vw;
			.createSignature{
				color: #848484;
			}
		}
		
	}
</style>
