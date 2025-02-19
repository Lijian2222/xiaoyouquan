<script setup>
	import { onMounted, onUpdated, ref } from 'vue'
	import { jobStore } from '../../store/job'
	//新页面接收传过来的参数：
	const options = ref({})
	//解决salaryStary在onMounted前处于udnefine的报错
	options.value.salaryStart = 0
	options.value.salaryEnd = 0
	onMounted(()=>{
		const pages = getCurrentPages()
		const currentPage = pages[pages.length - 1]
		options.value = currentPage.options
		// console.log(options.value.campus)
	})
	
	
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
				<image src="../../static/userHeader1.jpg"></image>
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
			<button>收 藏</button>
			<button>立即投递</button>
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
