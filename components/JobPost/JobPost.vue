<script setup>
	import { ref, computed, onMounted } from 'vue'
	import { jobStore } from '../../store/job'
	import { environmentStore } from '../../store/environment'
	import { userStore } from '../../store/user'
	const currentUrl = environmentStore().currentUrl
	const defaultStar = '../../static/star2.png'
	const alredyStar = "../../static/star3.png"
	const starUrl = ref("../../static/star2.png")
	
	const props = defineProps({
		id:Number,
		userId:Number,
		jobName:String,
		jobDetail:String,
		position:String,
		academicAcquired:String,
		experienceAcquired:String,
		jobBelonging:String,
		nature:String,
		nickname:String,
		publishTime:String,
		salaryStart:Number,
		salaryEnd:Number,
		salaryNums:Number,
		campus:String
	})

	// 异步方法想要return结果，必须使用promise或者async/await
	// 查询用户有没有收藏过该岗位
	function queryFavorite(){
		return new Promise((resolve,reject)=>{
			uni.request({ 
				url:currentUrl+'/favorite/query', //生产环境
				method:'POST',
				data:{
					"isDeleted":0,
					"concerned":props.id,
					"status":1, //1是收藏岗位，0是关注用户
					"userId":userStore().userId
				},
				success:(res) => {
					// console.log(res)
					if(res.data.data.length==0){//如果没有收藏该帖子
						starUrl.value = defaultStar
						resolve(true)
					}else{
						starUrl.value = alredyStar
						resolve(false)
					}
				},
				fail:(err) => {
					reject(err)
				}
			})
		})
	}
	
	queryFavorite()

	// console.log(props.campus)
	// 动态计算 当imageSrc.value,props.goodNums发生变化，重新计算urlParameter
	// 因为url是静态解析的，一开始imageSrc=${imageSrc.value}}的值已经写死了,相当于imageSrc=xxx字符串
	// 但是在页面内部修改这些来自仓库的数据，页面内部并不会实时更新，因为url传递数据是一次性的，没有绑定关系
	const urlParameter = computed(()=>{
		return `id=${props.id}&userId=${props.userId}&jobName=${props.jobName}&jobDetail=${props.jobDetail}&position=${props.position}&academicAcquired=${props.academicAcquired}&experienceAcquired=${props.experienceAcquired}&jobBelonging=${props.jobBelonging}&nature=${props.nature}&nickname=${props.nickname}&publishTime=${props.publishTime}&salaryStart=${props.salaryStart}&salaryEnd=${props.salaryEnd}&salaryNums=${props.salaryNums}&campus=${props.campus}` 
	})
	
	//用户点击收藏
	function addStar(){
		if (starUrl.value==defaultStar){ //点击前是default表示未收藏，点击后改为已收藏
			starUrl.value=alredyStar  //本地改变
			//先查询数据库里面有没有记录
			uni.request({
				url:currentUrl+'/favorite/query',
				method:'post',
				data:{
					"concerned":props.id,
					"status":1, //1是收藏岗位，0是关注用户
					"userId":userStore().userId
				},
				success:(res) => {
					// console.log(res)
					if(res.data.data.length==0){//如果数据库里面没有记录，直接插入记录
						uni.request({
							// url:'http://localhost:8080/job/query',
							url:currentUrl+'/favorite/insert',
							// header: { 'content-type': 'application/x-www-form-urlencoded' },
							method:'post',
							data:{
								"isDeleted":0,
								"concerned":props.id,
								"status":1, //1是收藏岗位，0是关注用户
								"userId":userStore().userId
							}
						})
						// resolve(true)
					}else{ //如果数据库里面有记录,就修改记录
						uni.request({
							// url:'http://localhost:8080/job/query',
							url:currentUrl+'/favorite/update',
							// header: { 'content-type': 'application/x-www-form-urlencoded' },
							method:'post',
							data:{
								"isDeleted":0,
								"concerned":props.id,
								"status":1, //1是收藏岗位，0是关注用户
								"userId":userStore().userId
							}
						})
						// resolve(false)
					}
				},
				fail:(err) => {
					reject(err)
				}
			})
			
		}else{ //点击前是already表示已收藏，点击后改为未收藏，其实就是将is_deleted改成1
			// console.log("update")
			starUrl.value=defaultStar
			uni.request({
				// url:'http://localhost:8080/job/query',
				url:currentUrl+'/favorite/update',
				// header: { 'content-type': 'application/x-www-form-urlencoded' },
				method:'post',
				data:{
					"isDeleted":1,
					"concerned":props.id,
					"status":1, //1是收藏岗位，0是关注用户
					"userId":userStore().userId
				}
			})
		}
	}
</script>



<template>
	<!-- 岗位的盒子模型 -->
	<view class="jobPost">
		<!-- 头部，包括岗位名称，薪资 -->
		<view class="jobPostHead">
			<view class="jobName">{{props.jobName}}</view>
			<view class="salaryAndStar">
				{{ jobStore().formatSalary(props.salaryStart) }}-{{ jobStore().formatSalary(props.salaryEnd) }}*{{props.salaryNums}}
				<image :src="starUrl" @touchend="addStar"></image>
			</view>
		</view>
		<!-- 标签 -->
		<navigator :url="'/pages/jobContent/jobContent?'+urlParameter">
			<view class="jobPostBody">
				<view>{{props.position}}</view>
				<view>{{props.nature}}</view>
				<view>{{props.academicAcquired}}</view>
				<view>{{props.experienceAcquired}}</view>
				<view>{{props.jobBelonging}}</view>
				<!-- <view>架构师</view> -->
			</view>
		</navigator>
		
		<!-- 底部，包括头像，名称，发布时间 -->
		<view class="jobPostFoot">
			<!-- 为了布局包装了一层left和right -->
			<view class="jobPostFootLeft">
				<navigator :url="`/pages/personHome/personHome?username=${props.nickname}`">
					<view class="userHead">
						<image src="../../static/userHeader1.png"></image>
					</view>
				</navigator>
				<view class="username">{{props.nickname}}</view>
				<view class="academicPicture">
					<image src="../../static/academic.png"></image>
				</view>
				<view class="academicInfo">16本/20硕</view>
			</view>
			<view class="jobPostFootRight">
				<view class="publishTime">
					2024-11-06 23:06
				</view>
			</view>
		</view>
	</view>
</template>



<style scoped lang="less">
	
	//发布时间，点赞数量，评论数量，浏览量的文字颜色：灰色
	@fontColor1:#848484;
	
	/* 岗位的盒子模型 */
	.jobPost{
		box-sizing: border-box;
		width: 100vw;
		height: 32vw;
		margin: 2vw auto;
		padding: 3vw 3vw 2vw 3vw;
		background-color: #fff;
		
		// height 7vw
		.jobPostHead{	
			display: flex;
			justify-content: space-between;
			width: 94vw;
			height: 7vw;
			
			// background-color: pink;
			.jobName{
				width: 50vw;
				height: 7vw;
				font-size: 5vw;
				line-height: 7vw;
			}
			
			.salaryAndStar{
				display: flex;
				justify-content: flex-end;
				width: 44vw;
				height: 7vw;
				font-size: 5vw;
				font-weight: 900;
				line-height: 7vw;
				color: #0d99ff;
				
				image{
					width: 7vw;
					height: 7vw;
					margin-top: -3vw;
				}
			}
		}
		
		// height 13vw
		.jobPostBody{
			width: 94vw;
			height: 10vw;
			margin-top: 3vw;
			
			view{
				display: inline-block;
				padding: 1.5vw;
				margin-right: 1.5vw;
				border-radius: 1vw;
				font-size: 3vw;
				color: @fontColor1;
				background-color: #ededed;
			}
		}
		
		//7vw
		.jobPostFoot{
			display: flex;
			justify-content: space-between;
			width: 94vw;
			height: 7vw;
			// background-color: pink;
			
			.jobPostFootLeft{
				display: flex;
				.userHead{
					height: 7vw;
					margin: auto 0;
					image{
						width: 7vw;
						height: 7vw;
						border-radius: 50%;
					}
				}
				.username{
					margin-left: 2vw;
					color: @fontColor1;
					font-size: 3vw;
					line-height: 7vw;
				}
				.academicPicture {
					height: 7vw;
					margin: auto 0;
					margin-left: 3vw;
					image{
						width: 7vw;
						height: 7vw;
					}
				}
				.academicInfo{
					color: @fontColor1;
					font-size: 3vw;
					line-height: 7vw;
				}
			}
			.jobPostFootRight{
				
				.publishTime{
					margin-left: 3vw;
					height: 10vw;
					color: @fontColor1;
					font-size: 3vw;
					line-height: 7vw;
				}
			}
		}
	}
</style>