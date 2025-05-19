<script setup>
	import { onMounted, ref, computed } from 'vue'
	
	const props = defineProps({
		id:Number,
		username:String,
		commentContent:String,
		publishTime:String,
		dog:Boolean
	})
	
	const imageSrc = ref('../../static/good.png')
	const defaultImage = '../../static/good.png'//未点赞图片
	const alternateImage = '../../static/good2.png'//已点赞图片
	
	
	function addGood(){//该用户给这个帖子点赞或取消点赞
		if(imageSrc.value == defaultImage){//如果点击的时候是未点赞图片
			// uni.request({
			// 	// url:'http://localhost:8080/postGood/insert',
			// 	url:currentUrl+'/postGood/insert', //生产环境
			// 	method:'POST',
			// 	data:{
			// 		"postId":props.id,
			// 		"isDeleted":0,
			// 		"userId":1 //暂时写死
			// 	}
			// })
			//改变样式
			imageSrc.value = alternateImage
			//帖子点赞数量本地+1
			// postStore().addGoodNums(props.id)
		}else{//否则
			// uni.request({
			// 	// url:'http://localhost:8080/postGood/delete',
			// 	url:currentUrl+'/postGood/delete', //生产环境
			// 	method:'POST',
			// 	data:{
			// 		"postId":props.id,
			// 		"isDeleted":1,
			// 		"userId":1 //暂时写死
			// 	}
			// })
			imageSrc.value = defaultImage
			//帖子点赞数量本地-1
			// postStore().subGoodNums(props.id)
		}
	}
	const moreVisbility = ref(true)
	
	// 子传父
	const emit = defineEmits(['changeMoney'])
	function notInteresting(){
		emit('notInteresting',props.id)
	}
</script>

<template>
	<!-- 每一条评论 -->
	<view class="commentItem">
		<!-- 头部，包含头像，昵称，点赞 -->
		<view class="commentHead">
			<view class="userHead">
				<image src="/static/userHeader1.png" mode=""></image>
			</view>
			<view class="nickname">
				{{props.username}}
			</view>
			<view class="addGood">
				<image :src="imageSrc" @touchend="addGood"></image>
			</view>
			<view class="more">
				<image src="/static/more.png" v-show="moreVisbility" @touchend="moreVisbility=false"></image>
				<!-- 不感兴趣和举报 -->
				<view v-show="!moreVisbility" class="moreView">
					<!-- 不感兴趣 -->
					<view class="notInteresting" @touchend="notInteresting">
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
		
		<!-- 评论内容 -->
		<view class="commentBody">
			<view class="commentContent">
				{{props.commentContent}}
			</view>
			<view class="emoji" v-show="props.dog">
				<image src="/static/dog.png" mode=""></image>
			</view>
		</view>
		
		<!-- 发布时间，楼层 -->
		<view class="commentFoot">
			<view class="publishTime">
				{{props.publishTime}}
			</view>
		</view>
	</view>
	
</template>



<style lang="less" scoped>
	.commentItem{
		width: 90vw;
		height: 33vw;
		border-bottom: 1px solid #eee;
		
		// height 14vw
		.commentHead{
			position: relative;
			display: flex;
			width: 90vw;
			height: 14vw;
			.userHead{
				width: 10vw;
				height: 10vw;
				margin: 2vw;
				image{
					width: 10vw;
					height: 10vw;
					border-radius: 50%;
				}
			}
			.nickname{
				width: 30vw;
				height: 14vw;
				font-size: 4vw;
				line-height: 14vw;
			}
			.addGood{
				width: 7vw;
				height: 7vw;
				margin: 3.5vw 0;
				position: absolute;
				right: 15vw;
				image{
					width: 6vw;
					height: 6vw;
				}
				
			}
			.more{
				position: absolute;
				width: 7vw;
				height: 7vw;
				margin: 4.2vw 0;
				right: 3vw;
				image{
					width: 5vw;
					height: 5vw;
				}
				
				.moreView{
					position: fixed;
					right: 10vw;
					margin-top: -15vw;
					box-sizing: border-box;
					width: 26vw;
					height: 16vw;
					padding: 2vw;
					border-radius: 3vw;
					// border: 1px solid #000;
					background-color: #e6e6e6;
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
	
		// 10vw 
		.commentBody{
			display: flex;
			width: 90vw;
			height: 10vw;
			padding-left: 14vw;
			
			.commentContent{
				height: 10vw;
				font-size: 4vw;
			}
			.emoji{
				width: 10vw;
				height: 10vw;
				margin-top: -2vw;
				image{
					width: 10vw;
					height: 10vw;
				}
			}
		}
		
		//6vw
		.commentFoot{
			display: flex;
			width: 90vw;
			height: 6vw;
			padding-left: 14vw;
			.publishTime{
				color: #848484;
			}
			
		}
	}
</style>