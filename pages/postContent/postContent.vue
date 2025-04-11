<script setup>
	import { onMounted, ref } from 'vue'
	import { postStore } from '../../store/post'
	import {onLoad} from "@dcloudio/uni-app"
	const options = ref({})
	
	//页面之间传参，可以再onLoad里面接受参数
	onLoad((e)=>{
	    // console.log(e)
	    options.value = e
	})//接收参数页面
	
	//点赞图片相关 每个帖子都有一个独立的imageSrc 只要涉及到imageSrc就不能写到post.js仓库里面
	let imageSrc = ref('../../static/good.png')
	const defaultImage = '../../static/good.png'//未点赞图片
	const alternateImage = '../../static/good2.png'//已点赞图片
	
	//请求该用户是否点赞过这个帖子，每个帖子都会请求一次后端
	postStore().requestGood(options.id).then((result)=>{
		if(result){
			imageSrc.value = alternateImage
		}
	})
	
	
	function addGood(){//该用户给这个帖子点赞或取消点赞
		// console.log(options.value.imageSrc)
		
		if(options.value.imageSrc == defaultImage){//如果点击的时候是未点赞图片
			// console.log(options.value.id)
			uni.request({
				url:'http://localhost:8080/postGood/insert',
				method:'POST',
				data:{
					"postId":options.value.id,
					"isDeleted":0,
					"userId":1 //暂时写死
				}
			})
			//本地页面改变样式
			options.value.imageSrc = alternateImage
			//触发主页改变样式
			uni.$emit("goodImageSrc",alternateImage,options.value.id)
			//帖子点赞数量本地+1
			postStore().addGoodNums(options.value.id)
			//页面内容不会同步更新，手动+1
			options.value.goodNums++
		}else{//否则
			uni.request({
				url:'http://localhost:8080/postGood/delete',
				method:'POST',
				data:{
					"postId":options.value.id,
					"isDeleted":1,
					"userId":1 //暂时写死
				}
			})
			//本地页面改变样式
			options.value.imageSrc = defaultImage
			//触发主页改变样式
			uni.$emit("goodImageSrc",defaultImage,options.value.id)
			//帖子点赞数量本地-1
			postStore().subGoodNums(options.value.id)
			//页面内容不会同步更新，手动-1
			options.value.goodNums--
		}
	}
	
</script>

<template>
	<view class="postContent">
		<!-- 用户头像，用户昵称，个性签名 -->
		<view class="postContentHead">
			<view class="userHeader">
				<image src="@/static/userHeader1.png" alt="" />
			</view>
			<view class="usernameAndSingnature">
				<view class="username">
					<span>{{options.username}}</span>
					<button>+关注</button>
				</view>
				<view class="signature">
					<image src="../../static/signature.png"></image>
					<span class="signature">{{options.signature}}</span>
				</view>
				
			</view>
		</view>
		<!-- 帖子详情和评论 -->
		<view class="postContentBody">
			<!-- 帖子详情 -->
			<view class="content">
				<view class="details">{{options.content}}</view>
				<view class="title">#校友圈创作赏金赛</view>		
				<view class="publishTime">{{options.time}} 深圳</view>
			</view>
			<!-- 评论 -->
			<view class="comment">
				<!-- 蓝色的竖线和“全部评论”标题 -->
				<view class="commentTitle">
					<image src="../../static/line.png"></image>
					<span>全部评论</span>
				</view>
				<view class="commentDetails">
					
				</view>
				
			</view>
		</view>
		<!-- 参与评论和点赞收藏情况 -->
		<view class="postContentBodyFoot">
			<input type="text" placeholder="      参与一下~"/>
			<view class="share">
				<image src="../../static/share.png"></image>
				<span>{{ postStore().formatNumber(options.retweet) }}</span>
			</view>
			<view class="good" @touchend="addGood">
				<image :src="options.imageSrc"></image>
				<span>{{ postStore().formatNumber(options.goodNums) }}</span>
			</view>
			<view class="pageView">
				<image src="../../static/pageView.png"></image>
				<span>{{ postStore().formatNumber(options.viewNums) }}</span>
			</view>
		</view>
	</view>
	
</template>



<style scoped lang="less">
	
	// 主题背景色：灰色
	@themeColor: #f8f8f8;
	
	//发布时间，点赞数量，评论数量，浏览量的文字颜色：灰色
	@fontColor1:#848484;
	
	// 整个帖子详情页
	.postContent{
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		background-color: @themeColor;
		
		// 用户头像，昵称，个性签名
		.postContentHead{
			display: flex;
			width: 90vw;
			height: 20vw;
			margin: 2vw auto;
			// background-color: pink;
			
			.userHeader{
				width: 20vw;
				height: 20vw;
				image{
					width: 20vw;
					height: 20vw;
					border-radius: 50%;
				}
			}
			
			.usernameAndSingnature{
				display: flex;
				flex-direction: column;
				width:70vw;
				height: 20vw;
				padding: 0 3vw;
				
				
				.username{
					display: flex;
					width: 70vw;
					height: 10vw;
					font-size: 4vw;
					line-height: 10vw;
					button{
						display: inline-block;
						width: 13vw;
						height: 6vw;
						padding: 0;
						margin: 2vw;
						font-size: 3.5vw;
						line-height: 6vw;
						color: #fff;
						background-color: #0d99ff;
					}
				}
				
				.signature{
					display: flex;
					width: 70vw;
					height: 10vw;
					color: @fontColor1;
					image{
						width: 5vw;
						height: 5vw;
					}
				}
			}
		}
	
		//帖子详情和评论区
		.postContentBody{
			
			display: flex;
			flex-direction: column;
			width: 90vw;
			height: 100vh;
			margin: 2vw auto;
			
			
			//帖子详情
			.content{
				box-sizing: border-box;
				width: 90vw;
				padding: 3vw;
				border-radius: 3vw;
				background-color: #fff;
				
				.details{
					margin: 2vw 0;
					font-size: 4.5vw;
				}
				
				.title{
					margin: 2vw 0;
					font-size: 4vw;
					color: #0d99ff;
				}
				
				.publishTime{
					font-size: 3vw;
					color: @fontColor1;
				}
				
			}
		
			//评论区
			.comment{
				
				
				width: 90vw;
				
				// 蓝色竖线和“全部评论”标题
				.commentTitle{
					display: flex;
					width: 90vw;
					height: 10vw;
					margin: 3vw auto;
					line-height: 10vw;
					image{
						width: 6vw;
						height: 6vw;
						margin-top: 2vw;
						transform: rotate(90deg);
					}
				}
				
				.commentDetails{
					width: 90vw;
					height: 90vw;
					margin: 0 auto;
					border-radius: 3vw;
					background-color: #fff;
				}
				
			}
		
		
		}
	
		//底部参与评论，点赞
		.postContentBodyFoot{
			position: fixed;
			bottom: 0%;
			display: flex;
			width: 100vw;
			height: 15vw;
			border-radius: 0 0 5vw 5vw;
			color: @fontColor1;
			background-color: #fff;
			
			
			input{
				width: 50vw;
				height: 10vw;
				margin: 3vw;
				border-radius: 5vw;
				background-color: @themeColor;
			}
			
			image{
				width: 7vw;
				height: 7vw;
				margin-top: 4vw;
			}
			
			.share{
				display: flex;
				width: 15vw;
				height: 15vw;
				image{
					width: 6vw;
					height: 6vw;
					margin-top: 5vw;
				}
				
			}
			
			.good{
				display: flex;
				width: 15vw;
				height: 15vw;
			}
			
			.pageView{
				display: flex;
				width: 15vw;
				height: 15vw;
			}
		}
	
	}
	
	
</style>
