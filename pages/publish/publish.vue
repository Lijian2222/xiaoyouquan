<script setup>
	import { ref } from 'vue'
	import { environmentStore } from '../../store/environment'
	import { userStore } from '../../store/user'
	const currentUrl = environmentStore().currentUrl
	const active = ref(1) //active=1表示帖子，active=2表示岗位
	const postTextAreaValue = ref("")
	const jobTitle = ref("")
	const jobTextAreaValue = ref("")
	const position = ref("")
	const jobBelonging = ref("")
	const jobNature = ref("")
	const jobAcademic = ref("")
	const jobExperience = ref("")
	const jobSalaryStart = ref(1000)
	const jobSalaryEnd = ref(5000)
	const jobSalaryNums = ref(12)
	
	function insertPost(){
		if (active.value==1){
			uni.request({
				url:currentUrl+'/post/insert',
				method:'POST',
				data:{
					content:postTextareaValue.value,
					userId:userStore().userId,
					publishTime:Date.now(),
				}
			})
		}else{
			uni.request({
				url:currentUrl+'/job/insert',
				method:'POST',
				data:{
					"userId":userStore().userId,
					"jobName":jobTitle.value,
					"jobDetail":jobTextAreaValue.value,
					"position":position.value,
					"nature":jobNature.value,
					"academicAcquired":jobAcademic.value,
					"experienceAcquired":jobExperience.value,
					"jobBelonging":jobBelonging.value,
					"publishTime":Date().now,
					"salaryStart":jobSalaryStart.value,
					"salaryEnd":jobSalaryEnd.value,
					"salaryNums":jobSalaryNums.value
				}
			})
		}
		
	}
</script>

<template>
	<view class="publishPage">
		<view class="publishHead">
			<view class="post" @touchend="active=1">
				<view>帖子</view>
				<image src="/static/line.png" v-show="active==1"></image>
			</view>
			<view class="job" @touchend="active=2">
				<view>岗位</view>
				<image src="/static/line.png" v-show="active==2"></image>
			</view>
		</view>
		<!-- 帖子发布页面 -->
		<view class="postBody" v-show="active==1">
			<view class="postContent">
				<textarea class="postTextAreaValue" maxlength="500" placeholder="点此输入正文" v-model="postTextAreaValue"></textarea>
			</view>
			<view class="addTopic">
				<view class="addTopicHead">
					<view class="addTopicHeadMain">#添加话题</view>
					<view class="addTopicHeadTip">添加话题会让内容有更多曝光哦</view>
				</view>
				<view class="addTopicBody">
					<view>#校友圈创作赏金赛#</view>
					<view>#校友圈</view>
				</view>
			</view>
		</view>
		<!-- 岗位发布页面 -->
		<view class="jobBody" v-show="active==2">
			<view class="jobContentHead">
				<input class="jobTitle" type="text" placeholder="请输入岗位名称" v-model="jobTitle">
			</view>
			<view class="jobContent">
				<textarea class="jobTextAreaValue" maxlength="500" placeholder="点此输入正文" v-model="jobTextAreaValue"></textarea>
			</view>
			<view class="jobOptions">
				<view class="jobBelonging">
					所属行业：<input type="text" placeholder="请输入岗位所属行业 如互联网" v-model="jobBelonging">
				</view>
				<view class="jobPosition">
					工作地点：<input type="text" placeholder="请输入岗位工作地点 如哈尔滨" v-model="position"/>
				</view>
				<view class="jobNature">
					企业性质：<input type="text" placeholder="请输入企业性质 如国企或者私企" v-model="jobNature"/>
				</view>
				<view class="jobAcademic">
					学历要求：<input type="text" placeholder="请输入最低学历要求 如本科" v-model="jobAcademic"/>
				</view>
				<view class="jobExperience">
					经验要求：<input type="text" placeholder="请输入工作经验要求 如不限或者1-3年" v-model="jobExperience">
				</view>
				<view class="jobSalaryStart">
					最低薪资：<input type="text" placeholder="1000" v-model="jobSalaryStart"/> 
				</view>
				<view class="jobSalaryEnd">
					最高薪资：<input type="text" placeholder="5000" v-model="jobSalaryEnd"/>
				</view>
				<view class="jobSalaryNums">
					薪资月数：<input type="text" placeholder="12" v-model="jobSalaryNums"/>
				</view>
				
			</view>
		</view>
		
		<view class="publishFoot">
			<button @touchend="insertPost">发布</button>
		</view>
	</view>
</template>



<style scoped lang="less">
	
	.publishPage{
		width: 100vw;
		height: 100%;
		background-color: #f8f8f8;
		
		//10vw
		.publishHead{
			display: flex;
			justify-content: center;
			width: 90vw;
			height: 10vw;
			margin: 0 auto;
			border-bottom: 2px solid #eee;
			
			.post{
				display: flex;
				flex-direction: column;
				width: 10vw;
				height: 10vw;
				margin-right: 5vw;
				image{
					width: 5vw;
					height: 5vw;
					margin-left: 1vw;
				}
			}
			
			.job{
				display: flex;
				flex-direction: column;
				width: 10vw;
				height: 10vw;
				margin-right: 5vw;
				image{
					width: 5vw;
					height: 5vw;
					margin-left: 1.5vw;
				}
			}
		}
		
		//150vw
		.postBody{
			width:90vw;
			height: 150vw;
			margin: 0 auto;
			
			//90vw
			.postContent{
				width: 90vw;
				height: 90vw;
				border-bottom: 2px solid #eee;
				
				.postTextAreaValue{
					width: 90vw;
					height: 90vw;
					margin: 0 auto;
					background-color: #f8f8f8;
					font-size: 5vw;
				}
			}
			
			.addTopic{
				width: 90vw;
				margin: 0 auto;
				
				.addTopicHead{
					display: flex;
					justify-content: space-between;
					margin-top: 3vw;
					.addTopicHeadMain{
						font-size: 5vw;
						font-weight: bold;
					}
					.addTopicHeadTip{
						font-size: 4vw;
						color: #ccc;
					}	
				}
				
				.addTopicBody{
					display: flex;
					justify-content: start;
					margin-top: 4vw;
					color: #0d99ff;
					view{
						margin-right: 3vw;
					}
				}
			}
		}
		
		//250vw
		.jobBody{
			width: 90vw;
			height: 250vw;
			margin: 0 auto;
			
			//10vw
			.jobContentHead{
				width: 90vw;
				height: 10vw;
				border-bottom: 2px solid #eee;
				
				
				.jobTitle{
					width: 90vw;
					height: 10vw;
					line-height: 10vw;
					font-size: 5vw;
				}
			}
			
			//90vw
			.jobContent{
				width: 90vw;
				height: 90vw;
				border-bottom: 2px solid #eee;
				margin-top: 3vw;
				
				.jobTextAreaValue{
					width: 90vw;
					height: 90vw;
					margin: 0 auto;
					background-color: #f8f8f8;
					font-size: 5vw;
				}
			}
		
			//150vw
			.jobOptions{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 90vw;
				height: 150vw;
				margin: 0 auto;
				font-size: 5vw;
				background-color: #f8f8f8;
				
				
			}
		}
		
		
		.publishFoot{
			width: 90vw;
			height: 30vw;
			margin: 5vw auto;
			
			button{
				width: 30vw;
				height: 10vw;
				margin-top: 15vw;
				border-radius: 5vw;
				background-color: #0d99ff;
				color: #fff;
				line-height: 10vw;
			}
		}
	}
</style>
