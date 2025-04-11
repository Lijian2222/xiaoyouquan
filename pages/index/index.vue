<script setup>
	
	
	import { onMounted, ref } from 'vue'
	import { postStore } from '../../store/post'
	import { userStore } from '../../store/user.js'
	
	import { environmentStore } from '../../store/environment'  
	const currentUrl = environmentStore().currentUrl
	
	const headTabNum = ref(1)
	
	
	const getList1 = postStore().getList1
	getList1()
	const getList2 = postStore().getList2
	getList2()
	const getList3 = postStore().getList3
	getList3()
	
	//临时测试，可删除
	// function queryCampus(){
	// 	return new Promise((resolve,reject)=>{
	// 		uni.request({
	// 			// url:'http://localhost:8080/user/query',
	// 			// url:'https://www.xiaoyouquan.xyz:8443/post/test', //生产环境
	// 			url:'https://39.107.221.247:8443/post/test', //生产环境
	// 			method:'GET',
	// 			header: {
	// 			    'Content-Type': 'application/json'
					
	// 			},
	// 			// data:{
	// 			// 	"id":4//暂时写死
	// 			// },
	// 			success:(res)=>{
	// 				// console.log(res)
	// 				resolve(res)
	// 			},
	// 			fail:(err)=>{
	// 				reject(err)
	// 			}
	// 		})
	// 	})
	// }
	// queryCampus()
	
</script>

<template>
	<!-- 首页 -->
	<view class="home">
		<!-- 首页上面的推荐、校友圈、关注 -->
		<view class="homeHead">
			<view @touchend="headTabNum=1">
				<span>推荐</span>
				<image src="../../static/line.png" v-show="headTabNum==1"></image>
			</view>
			<view @touchend="headTabNum=2">
				<span>校友圈</span>
				<image src="../../static/line.png" v-show="headTabNum==2"></image>
			</view>
			<view @touchend="headTabNum=3">
				<span>关注</span>
				<image src="../../static/line.png" v-show="headTabNum==3"></image>
			</view>	
		</view>
		
		
		<!-- 首页刚进来的时候提示 -->
		<view class="homeInit" v-show=" !userStore().logInFlag && headTabNum!==1">
			<navigator url="/pages/register/register">
				<view class="logIn">立即登录/注册</view>
			</navigator>
		</view>
		
		<!-- 首页里面的帖子 -->
		<view class="homeBody">
			<homePost 
			v-for="(item,index) in postStore().list1" :key="item.id"
			v-show="headTabNum==1"
			:id="item.id"
			:username="item.nickname"
			:content="item.content"
			:goodNums="item.goodNums"
			:commentNums="item.commentNums"
			:viewNums="item.viewNums"
			:time="item.publishTime"
			:retweet="item.retweet"
			:signature="item.signature"
			></homePost>
			
			<homePost
			v-for="(item,index) in postStore().list2" :key="item.id"
			v-show="headTabNum==2 && userStore().logInFlag"
			:id="item.id"
			:username="item.nickname"
			:content="item.content"
			:goodNums="item.goodNums"
			:commentNums="item.commentNums"
			:viewNums="item.viewNums"
			:time="item.publishTime"
			:retweet="item.retweet"
			:signature="item.signature"
			></homePost>
			
			<homePost
			v-for="(item,index) in postStore().list3" :key="item.id"
			v-show="headTabNum==3 && userStore().logInFlag"
			:id="item.id"
			:username="item.nickname"
			:content="item.content"
			:goodNums="item.goodNums"
			:commentNums="item.commentNums"
			:viewNums="item.viewNums"
			:time="item.publishTime"
			:retweet="item.retweet"
			:signature="item.signature"
			></homePost>
			
		</view>
		<!-- 蓝色的加号 -->
		<view class="publish">
			<image src="../../static/add.png"></image>
		</view>
	</view>
</template>

<style scoped lang="less">
	
	// 主题背景色：灰色
	@themeColor: #f8f8f8;
	
	// *{
	// 	box-sizing: border-box;
	// }
	
	.home{
		// 首页
		width: 100%;
		height: 100%;
		background-color: @themeColor;
		
		.homeHead{
			//首页头部 包含推荐、校友圈、关注
			display: flex;
			width: 100vw;
			height: 10vw;

			view{
				//推荐或校友圈或关注
				display: flex;
				flex-direction: column;
				width: 15vw;
				height: 10vw;
				margin: 0 5vw;
				text-align: center; 
				//应用于块级元素而不是行内元素，span是行内元素，
				//写在span里面在chrome里面有效，在微信开发者工具中无效
				
				span{
					width: 15vw;
					height: 5vw;
					line-height: 5vw;
				}
				
				image{
					//推荐或校友圈或关注里面的下划线
					width: 5vw;
					height: 5vw;
					margin: 0 auto;
				}
			}
			
		}
	
	.homeInit{
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
	
	
	
		.homeBody{
			display: flex;
			flex-direction: column;
			width: 90vw;
			margin: 0 auto;
		}
		
		.publish{
			position: fixed;
			z-index: 9999;
			width: 12vw;
			height: 12vw;
			left: 44%;
			/* #ifdef H5 */
			bottom: 4%;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			bottom: -2%;
			// bottom: calc(4% + var(--window-bottom, 0));
			/* #endif */
			
			
			image{
				width: 12vw;
				height: 12vw;
				border-radius: 50%;
			}
		}
	}
	
	
</style>