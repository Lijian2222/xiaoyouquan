<script setup>
	
</script>

<template>
	<view class="my">
		<!-- 用户头像，昵称，个性签名 -->
		<view class="myHead">
			<view class="userHeadPicture">
				<image src="../../static/userHeader1.jpg"></image>
			</view>
			<view class="usernameAndSingnature">
				<view class="usernameAndEdit">
					<view class="username">
						邪恶栀子花
					</view>
					<view class="edit">
						编辑资料
					</view>
				</view>
				<view class="signature">
					<image src="../../static/signature.png"></image>
					<span>这个人有点懒，什么也没有留下</span>
				</view>
			</view>
		</view>
		<!-- 我的发布 -->
		<view class="myPublish">
			<view>
				<image src="../../static/myPublish.png"></image>
			</view>
			<span>我的发布</span>
		</view>
		<!-- 我的收藏 -->
		<view class="myCollect">
			<view>
				<image src="../../static/myCollect.png"></image>
			</view>
			<span>我的收藏</span>
		</view>
		<!-- 我的投递 -->
		<view class="myDeliver">
			<view>
				<image src="../../static/myDeliver.png"></image>
			</view>
			<span>我的投递</span>
		</view>
		<!-- 我的技能 -->
		<view class="mySkill">
			<view>
				<image src="../../static/mySkill.png"></image>
			</view>
			<span>我的技能</span>
		</view>
		<!-- 我的学校 -->
		<view class="myCampus">
			<view>
				<image src="../../static/academic.png"></image>
			</view>
			<span>我的技能</span>
		</view>
		<!-- 设置 -->
		<view class="setting">
			<view>
				<image src="../../static/setting.png"></image>
			</view>
			<span>设置</span>
		</view>
	</view>
</template>

<style scoped lang="less">
	.my{
		width: 100vw;
		height: 100vh;
		background-color: #ededed;
		
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
</style>