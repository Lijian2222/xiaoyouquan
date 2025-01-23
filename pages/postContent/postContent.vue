<script setup>
	import { ref } from 'vue'
	
</script>

<template>
	<!-- <view class="head">
		<view class="headLeft">
			<image src="@/static/userHeader1.jpg" alt="" class="userHeader"/>
		</view>
		<view class="headRight">
			<span class="username">我的昵称</span>
			<button class="concern">+关注</button>
			<br />
			<br />
			<image src="../../static/signature.png" mode="" class="signaturePicture"></image>
			<span class="signature">这个人有点懒什么也没留下</span>
		</view>
	</view>
	<view class="body"> -->
		<!-- 帖子详情 -->
		<!-- <view class="content">
			有了大模型......似乎好像没他也行
			#校友圈创作赏金赛
			11-09 16：55 深圳
		</view> -->
		<!-- 评论 -->
		<!-- <br />
		<br />
		<image src="../../static/line.png" mode="" class="line"></image>
		<span>全部评论</span>
		<br />
		<br />
		<view class="commentBox">
			
		</view>
		<br />
		<br />
	</view>
	<view class="foot">
		<br />
		<br />
		<input type="text" placeholder="      参与一下~" class="input"/>
		<image src="../../static/share.png" mode="" class="share"></image>
		<span>1231</span>
		<image src="../../static/good4.png" mode="" class="good"></image>
		<span>122</span>
		<image src="../../static/pageView2.png" mode="" class="pageView"></image>
		<span>1223</span>
	</view> -->
</template>



<style scoped>
	
	.userHeader{
		width: 80px;
		height: 80px;
		margin: 10px;
		border-radius: 50%;
	}
	.head{
		display: flex;
		background-color: #f8f8f8;
	}
	.headRight{
		width: 200px;
		height: 100px;
		
	}
	
	.username{
		
	}
	
	.concern{
		padding: 0px;
		padding-top: 3px;
		width: 40px;
		height: 20px;
		color: white;
		font-size: 12px;
		background-color: #0d99ff;
		line-height: 12px;
		display: inline-block;
		margin-left: 10px;
		margin-top: 15px;
		vertical-align: bottom;
		
	}
	
	.signature{
		font-size: 12px
	}
	.signaturePicture{
		width: 14px;
		height: 14px;
		vertical-align: middle;
		
	}
	
	.body{
		background-color: #f8f8f8;
		height: 700px;
	}
	.content{
		background-color: #fff;
		width: 350px;
		height: 150px;
		margin: 0 auto;
		border: 1px solid #000;
		border-radius: 10px;
		
	}
	
	.line{
		width: 20px;
		height: 20px;
		transform: rotate(90deg);
		vertical-align: bottom;
	}
	
	.commentBox{
		margin: 0 auto;
		background-color: #fff;
		width: 350px;
		height: 200px;
	}
	
	.foot{
		background-color: #fff;
		width: 100%;
		height: 50px;
		padding:10px;
		display: flex;
		position: absolute;
		bottom: 0%;
		left: 0%;
	}
	
	.input{
		background-color: #f8f8f8;
		width: 150px;
		height: 35px;
		border-radius: 10px;
		margin-top: 10px;
	}
	
	.share{
		width: 25px;
		height: 25px;
		margin-top: 17px;
		margin-left: 10px;
	}
	
	.good{
		width: 25px;
		height: 25px;
		margin-top: 15px;
		margin-left: 10px;
	}
	
	.pageView{
		width: 30px;
		height: 30px;
		margin-top: 13px;
		margin-left: 10px;
	}
</style>
