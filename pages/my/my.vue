<script setup>
	import { ref } from 'vue'
	import { userStore } from '../../store/user.js'
	const urlParameter = ref('')
	
</script>

<template>
	<!-- 整个页面 -->
	<view class="my">
		
		<!-- 刚进来的时候提示 -->
		<view class="myInit" v-show="!userStore().logInFlag">
			<navigator url="/pages/register/register">
				<view class="logIn">立即登录/注册</view>
			</navigator>
		</view>
		
		<!-- 页面布局 -->
		<view class="myContent" v-show="userStore().logInFlag">
			<!-- 用户头像，昵称，个性签名 -->
			<view class="myHead">
				<view class="userHeadPicture">
					<image :src="userStore().userHeadPicture"></image>
				</view>
				<view class="usernameAndSingnature">
					<view class="usernameAndEdit">
						<view class="username">{{userStore().username}}</view>
						<navigator :url="'/pages/editInfo/editInfo?'+urlParameter">
							<view class="edit">
								编辑资料
							</view>	
						</navigator>
						
					</view>
					<view class="signature">
						<image src="../../static/signature.png"></image>
						<span>这里空空如也</span>
					</view>
				</view>
			</view>
			<!-- 我的发布 -->
			<navigator url="/pages/myPublish/myPublish">
				<view class="myPublish">
					<view>
						<image src="../../static/myPublish.png"></image>
					</view>
					<span>我的发布</span>
				</view>	
			</navigator>
			
			<!-- 我的收藏 -->
			<navigator url="/pages/myFavorite/myFavorite">
				<view class="myCollect">
					<view>
						<image src="../../static/myCollect.png"></image>
					</view>
					<span>我的收藏</span>
				</view>
			</navigator>
			
			<!-- 我的投递 -->
			<navigator url="/pages/myDeliver/myDeliver">
				<view class="myDeliver">
					<view>
						<image src="../../static/myDeliver.png"></image>
					</view>
					<span>我的投递</span>
				</view>
			</navigator>
			
			<!-- 我的技能 -->
			<navigator url="/pages/mySkill/mySkill">
				<view class="mySkill">
					<view>
						<image src="../../static/mySkill.png"></image>
					</view>
					<span>我的技能</span>
				</view>
			</navigator>
			
			<!-- 我的学校 -->
			<navigator url="/pages/myCampus/myCampus">
				<view class="myCampus">
					<view>
						<image src="../../static/academic.png"></image>
					</view>
					<span>我的学校</span>
				</view>
			</navigator>
			
			<!-- 设置 -->
			<!-- <navigator url="/pages/test/test">
				<view class="setting">
					<view>
						<image src="../../static/setting.png"></image>
					</view>
					<span>设置</span>
				</view>
			</navigator> -->
		</view>
		
	</view>
</template>

<style scoped lang="less">
	.my{
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		background-color: #ededed;
		
		
		.myInit{
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
		
		.myContent{
			.myHead{
				display: flex;
				align-items: center;
				width: 100vw;
				height: 30vw;
				background-color: #f8f8f8;
				
				.userHeadPicture{
					width: 20vw;
					height: 20vw;
					margin-left: 5vw;
					border-radius: 50%;
					background-color: #e3e3e3;
					image{
						width: 20vw;
						height: 20vw;
						border-radius: 50%;
					}
				}
				
				.usernameAndSingnature{
					display: flex;
					flex-direction: column;
					width: 72vw;
					height: 20vw;
					margin-left: 3vw;
					
					.usernameAndEdit{
						display: flex;
						width: 72vw;
						height: 10vw;
						
						
						.username{
							width: 50vw;
							height: 10vw;
							line-height: 10vw;
							font-size: 5vw;
							font-weight: bold;
							
						}
						
						.edit{
							width: 16vw;
							height: 5vw;
							margin-top: 2vw;
							background-color: #e3e3e3;
							line-height: 5vw;
							font-size: 4vw;
							color: #848484;
						}
					}
					
					.signature{
						width: 72vw;
						height: 10vw;
						color: #848484;
						line-height: 10vw;
						image{
							width: 5vw;
							height: 5vw;
						}
					}
				}
			}
				
			.myPublish{
				display: flex;
				align-items: center;
				width: 100vw;
				height: 20vw;
				margin: 5vw 0;
				background-color: #f8f8f8;
				font-size: 6vw;
				line-height: 20vw;
				
				view{
					display: flex;
					align-items: center;
					width: 12vw;
					height: 12vw;
					margin: auto 5vw;
					border-radius: 50%;
					background-color: #e0eef9;
					
					image{
						width: 7vw;
						height: 7vw;
						margin-left: 2vw;
						
					}
				}
				
			}
			
			.myCollect{
				display: flex;
				align-items: center;
				width: 100vw;
				height: 20vw;
				background-color: #f8f8f8;
				font-size: 6vw;
				line-height: 20vw;
				border-bottom: 2px solid #ededed;	
				
				view{
					display: flex;
					align-items: center;
					width: 12vw;
					height: 12vw;
					margin: auto 5vw;
					border-radius: 50%;
					background-color: #e0eef9;
					
					image{
						width: 8vw;
						height: 8vw;
						margin-left: 2vw;
						
					}
				}
				
			}
			
			.myDeliver{
				display: flex;
				align-items: center;
				width: 100vw;
				height: 20vw;
				background-color: #f8f8f8;
				font-size: 6vw;
				line-height: 20vw;
				border-bottom: 2px solid #ededed;	
				view{
					display: flex;
					align-items: center;
					width: 12vw;
					height: 12vw;
					margin: auto 5vw;
					border-radius: 50%;
					background-color: #e0eef9;
					image{
						width: 7vw;
						height: 7vw;
						margin-left: 2.5vw;
						
					}
				}
				
			}
			
			.mySkill{
				display: flex;
				align-items: center;
				width: 100vw;
				height: 20vw;
				background-color: #f8f8f8;
				font-size: 6vw;
				line-height: 20vw;
				border-bottom: 2px solid #ededed;	
				
				view{
					display: flex;
					align-items: center;
					width: 12vw;
					height: 12vw;
					margin: auto 5vw;
					border-radius: 50%;
					background-color: #e0eef9;
					image{
						width: 7vw;
						height: 7vw;
						margin-left: 2.5vw;
					}
				}
			}
			
			.myCampus{
				display: flex;
				align-items: center;
				width: 100vw;
				height: 20vw;
				background-color: #f8f8f8;
				font-size: 6vw;
				line-height: 20vw;
				border-bottom: 2px solid #ededed;	
				
				view{
					display: flex;
					align-items: center;
					width: 12vw;
					height: 12vw;
					margin: auto 5vw;
					border-radius: 50%;
					background-color: #e0eef9;
					image{
						width: 9vw;
						height: 9vw;
						margin-left: 1.5vw;
					}
				}
			}
			
			
			.setting{
				display: flex;
				align-items: center;
				width: 100vw;
				height: 20vw;
				background-color: #f8f8f8;
				font-size: 6vw;
				line-height: 20vw;
				border-bottom: 2px solid #ededed;	
				
				view{
					display: flex;
					align-items: center;
					width: 12vw;
					height: 12vw;
					margin: auto 5vw;
					border-radius: 50%;
					background-color: #e0eef9;
					image{
						width: 8vw;
						height: 8vw;
						margin-left: 2vw;
					}
				}
			}
		}
		
		
	}
</style>