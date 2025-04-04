<script setup>

	import { onMounted, ref, watch } from 'vue'
	import { jobStore } from '../../store/job'
	import { userStore } from '../../store/user'
	import { environmentStore } from '../../store/environment'  
	const currentUrl = environmentStore().currentUrl
	
	const campusValue = ref('')
	const campusList = ref([])
	
	const jobList = ref([])
	
		
	const list = ref([1,2,3])
	
	
	campusList.value = userStore().campus
	// console.log(campusList.value)
	

	
	
	// 根据学校查询岗位
	function selectCampus(){
		// console.log(campusValue.value)
		uni.request({
			// url:"http://localhost:8080/job/query",
			url:currentUrl+'/job/query', //生产环境
			method:"post",
			data:{
				id:'4',
				campus:campusValue.value
			},
			success:(res)=>{
				// console.log(res,"xx")
				jobList.value=res.data.data
				// resolve(campus)
			},
			fail:(err)=>{
				reject(err)
			}
		})
	}
</script>

<template>
	<view class="jobFistPage">
		<!-- 选择学校，行业，职位，薪资，经验 -->
		<view class="jobFistPageHead">
			<view class="campusSelect">
				<uni-data-select v-model="campusValue" :localdata='campusList' placeholder="请选择您的学校" @change="selectCampus"></uni-data-select>
			</view>
			<view class="otherSelect">
				<view class="industrySelect">
					<uni-data-select v-model="campusValue" :localdata='list' text-key='text' value-key='value' placeholder="行业筛选"></uni-data-select>
				</view>
				<view class="roleSelect">
					<uni-data-select v-model="campusValue" :localdata='list' text-key='text' value-key='value' placeholder="职位筛选"></uni-data-select>
				</view>
				<view class="salarySelect">
					<uni-data-select v-model="campusValue" :localdata='list' text-key='text' value-key='value' placeholder="薪资范围"></uni-data-select>
				</view>
				<view class="experienceSelect">
					<uni-data-select v-model="campusValue" :localdata='list' text-key='text' value-key='value' placeholder="经验要求"></uni-data-select>
				</view>
			</view>
		</view>
		
		<!-- 岗位首页刚进来的时候提示 -->
		<view class="jobFistPageInit" v-show=" !userStore().logInFlag ">
			<navigator url="/pages/register/register">
				<view class="logIn">立即登录/注册</view>
			</navigator>
		</view>
		
		<!-- 岗位的帖子 -->
		<view class="jobFistPageBody">
			<JobPost 
			v-for="(item,index) in jobList" :key="item.id"
			:id="item.id"
			:userId="item.userId"
			:jobName="item.jobName"
			:jobDetail="item.jobDetail"
			:position="item.position"
			:academicAcquired="item.academicAcquired"
			:experienceAcquired="item.experienceAcquired"
			:jobBelonging="item.jobBelonging"
			:nature="item.nature"
			:nickname="item.nickname"
			:publishTime="item.publishTime"
			:salaryStart="item.salaryStart"
			:salaryEnd="item.salaryEnd"
			:salaryNums="item.salaryNums"
			:campus="item.campus"
			></JobPost>
		</view>
	</view>
</template>

<style scoped lang="less">
	
	// 主题背景色：灰色
	@themeColor: #f8f8f8;
	
	// 整个岗位页面
	.jobFistPage{
		width: 100vw;
		height: 120vh;
		background-color: @themeColor;
	
		//上面的选择栏
		.jobFistPageHead{
			display: flex;
			flex-direction: column;
			width: 100vw;
			height: 20vw;
			text-align: center;
			
			
			.campusSelect{
				width: 100vw;
				height: 10vw;
				
				uni-data-select{
					width: 30vw;
					height: 10vw;
					margin: 0 auto;
					padding: 0;
					border: none !important;
				}
				
				
			}
			
			.otherSelect{
				display: flex;
				width: 100vw;
				height: 10vw;
				
				.industrySelect{
					width: 25vw;
					height: 10vw;
					uni-data-select{
						width: 25vw;
						height: 10vw;
						margin: 0;
						padding: 0;
					}
				}
				
				.roleSelect{
					width: 25vw;
					height: 10vw;
					uni-data-select{
						width: 25vw;
						height: 10vw;
						margin: 0;
						padding: 0;
					}
				}
				
				.salarySelect{
					width: 25vw;
					height: 10vw;
					uni-data-select{
						width: 25vw;
						height: 10vw;
						margin: 0;
						padding: 0;
					}
				}
				
				.experienceSelect{
					width: 25vw;
					height: 10vw;
					uni-data-select{
						width: 25vw;
						height: 10vw;
						margin: 0;
						padding: 0;
					}
				}
			}
			
			
		}
	
		.jobFistPageInit{
			width: 100vw;
			height: 100vw;
			
			
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
		
	}
	
	
</style>