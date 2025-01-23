<script setup>
	
	import { onMounted, ref } from 'vue'
	import { postStore } from '../../store/post';
	
	
	const moreVisbility = ref(true)
	
	
	//由于写了setup,所以无法直接配置props选项
	//所以此处需要借助于‘编译器宏’函数接收子组件传递的数据
	const props = defineProps({
		id:Number,
		username:String,
		time:String,
		content:String,
		goodNums:Number,
		commentNums:Number,
		viewNums:Number
	})
	
	//点赞图片相关
	let imageSrc = ref('../../static/good.png')
	const defaultImage = '../../static/good.png'//未点赞图片
	const alternateImage = '../../static/good2.png'//已点赞图片
	uni.request({//请求该用户是否点赞过这个帖子，每个帖子都会请求一次后端
		url:'http://localhost:8080/postGood/query',
		method:'POST',
		data:{
			"postId":props.id,
			"isDeleted":0,//如果点赞过且isDeleted=0
			"userId":1 //暂时写死
		},
		success:res=>{
			// console.log(res)
			if(res.data.data==1){
				imageSrc.value = alternateImage
			}
		}
	})
	function addGood(){//该用户给这个帖子点赞
		if(imageSrc.value == defaultImage){//如果点击的时候是未点赞图片
			uni.request({
				url:'http://localhost:8080/postGood/insert',
				method:'POST',
				data:{
					"postId":props.id,
					"isDeleted":0,
					"userId":1 //暂时写死
				}
			})
			imageSrc.value = alternateImage//改变样式
			//帖子点赞数量+1
			postStore().addGoodNums(props.id)
		}else{//否则
			uni.request({
				url:'http://localhost:8080/postGood/delete',
				method:'POST',
				data:{
					"postId":props.id,
					"isDeleted":1,
					"userId":1 //暂时写死
				}
			})
			
			imageSrc.value = defaultImage
			//帖子点赞数量-1
			postStore().subGoodNums(props.id)
		}
		
	}

</script>

<template>
	<view class="homePost">
		<!-- 存帖子的头部，包括头像，昵称，发布时间，更多 -->
		<view class="homePostHead">
			<!-- 用户头像 -->
			<view class="userHeadPicture">
				<image src="../../static/userHeader1.jpg"></image>
			</view>
			<!-- 用户昵称和发布时间 -->
			<view class="usernameAndPublishTime">
				<view class="username">{{username}}</view>
				<view class="publishTime">{{time}}</view>
			</view>	
			<!-- 更多，点击可以显示不感兴趣和举报 -->
			<view class="more">
				<!-- @touchend="moreVisbility.value=false" -->
				<image src="../../static/more.png" v-show="moreVisbility" @touchend="moreVisbility=false"></image>
				<!-- 不感兴趣和举报 -->
				<view v-show="!moreVisbility" class="moreView">
					<!-- 不感兴趣 -->
					<view class="notInteresting">
						<image src="../../static/notInteresting.png"></image>
						<view>不感兴趣</view>
					</view>
					<!-- 关闭 -->
					<view class="close" @touchend="moreVisbility=true">
						<image src="../../static/close.png"></image>
						<view>关闭</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 存帖子的内容 -->
		<view class="homePostBody">
			<!-- <navigator url="/pages/postContent/postContent"> -->
				<!-- 存帖子的主要内容,点击跳转到详情页 -->
				<span>{{content}}</span>
			<!-- </navigator> -->
		</view>
		<!-- 存帖子的底部，包括点赞，评论，浏览量 -->
		<view class="homePostFoot">	
			<!-- 点赞图片和数量 -->
			<view class="addGood">
				<image :src='imageSrc' alt='addGood' @touchend="addGood"></image>
				<view>{{ goodNums }}</view>
			</view>
			<!-- 评论图片和数量 -->
			<view class='comment'>
				<image src="../../static/message_selected.png"></image>
				<view>{{ commentNums }}</view>
			</view>
			<!-- 浏览量图片和数量 -->
			<view class='pageView'>
				<image src="../../static/pageView.png"></image>
				<view>{{ viewNums }}</view>
			</view>	
		</view>
	</view>
</template>



<style scoped lang="less">

	//首页帖子的背景颜色：白色
	@homePostColor: #fff;
	//发布时间，点赞数量，评论数量，浏览量的文字颜色：灰色
	@fontColor1:#848484;
	
	
	// *{ 微信开发者工具wxss不支持通配符选择器
	// 	box-sizing: border-box;
	// }
	
	//帖子的盒子模型
	.homePost{
		width: 90vw;
		height: 35vw;
		margin:2vw auto;
		border-radius: 3vw;
		background-color: @homePostColor;
	
		//帖子的头部，包含头像，昵称，发帖时间及更多
		.homePostHead{
			box-sizing: border-box;
			display: flex;
			width: 90vw;
			height: 16vw;
			padding: 3vw 3vw 0vw 3vw;
			
			//用户头像 正方形->圆形
			.userHeadPicture{
				width: 13vw;
				height: 13vw;
				
				image{
					width: 13vw;
					height: 13vw;
					border-radius: 50%;
				}
			}
			
			//用户昵称和发布时间
			.usernameAndPublishTime{
				display: flex;
				flex-direction: column;
				width: 30vw;
				height: 13vw;
				padding-left: 3vw;
				
				.username{
					width: 30vw;
					height: 6vw;
				}
				
				.publishTime{
					width: 30vw;
					height: 7vw;
					color: @fontColor1;
				}
			}
		
			//更多
			.more{
				display: flex;
				justify-content: flex-end;
				width: 47vw;
				height: 13vw;
				
				image{
					width: 5vw;
					height: 5vw;
				}
				
				.moreView{
					box-sizing: border-box;
					width: 26vw;
					height: 16vw;
					padding: 2vw;
					border-radius: 3vw;
					border: 1px solid #000;
					font-size: 4vw;
					.notInteresting{
						display: flex;
						width: 22vw;
						height: 6vw;
						line-height: 4vw;
						image{
							width: 5vw;
							height: 5vw;
							margin-right: 1vw;
						}
					}
					
					.close{
						display: flex;
						width: 22vw;
						height: 6vw;
						line-height: 3.5vw;
						image{
							width: 4vw;
							height: 4vw;
							margin-left: 1vw;
							margin-right: 1vw;
						}
					}
				}
			}
		}
	
	
		//帖子的内容
		.homePostBody{
			width: 90vw;
			height: 8vw;
			margin-top:3vw;
			padding-left: 3vw;
		}
		
		//贴子底部，包括点赞，评论数量，浏览量
		.homePostFoot{
			display: flex;
			width: 90vw;
			height: 8vw;
			padding: 0 3vw;
			color:@fontColor1;
			font-size: 3vw;
			.addGood{
				display: flex;
				width: 30vw;
				height: 8vw;
				line-height: 6vw;
				
				image{
					width: 6vw;
					height: 6vw;
					margin-right: 2vw;
				}
			}
			
			.comment{
				display: flex;
				width: 30vw;
				height: 8vw;
				line-height: 6vw;
				image{
					width: 6vw;
					height: 6vw;
					margin-right: 2vw;
				}
			}
			
			.pageView{
				display: flex;
				width: 30vw;
				height: 8vw;
				line-height: 6vw;
				image{
					width: 6vw;
					height: 6vw;
					margin-right: 2vw;
				}
			}
		}
	}
	
	
	
</style>