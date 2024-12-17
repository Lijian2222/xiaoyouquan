<template>
	<view class="box">
		<view class="head">
			<img src="../../static/userHeader1.jpg" class='userPicture' alt="good"/>	
			<span class="username">{{username}}</span>
			<span class="time">{{time}}</span>
			<img src="../../static/more.png" alt="more" class="more"/>
		</view>
		<view class="body">
			<span class="content2">{{content}}</span>
		</view>
		<view class="footer">
			<view>
				<img src="../../static/good.png" class='footerPicture' alt="good"/>
				<span>123</span>
			</view>
			<view>
				<img src="../../static/message_selected.png" class='footerPicture' alt="good"/>
				<span>123</span>
			</view>
			<view>
				<img src="../../static/good.png" class='footerPicture' alt="good"/>
				<span>123</span>
			</view>	
		</view>
	</view>
</template>

<script>
	export default {
		name:"homePost",
		data() {
			return {
				
			};
		},
		props:["username","time","content"]
			
	
	}
</script>

<style scoped>
	.box{
		width: 350px;
		height: 120px;
		margin:10px auto;
		overflow: hidden;
		border-radius: 10px;
		border: 2px solid #dfdfdf;
		background-color: #fff;
	
	}
	.head{
		position: relative;
	}
	
	.userPicture{
		width: 40px;
		height: 40px;
		margin: 5px;
		border-radius: 50%;
	}
	.username{
		margin-top: 5px;
		position: absolute;
	}
	.time{
		color: #d1d1d1;
		position: absolute;
		top:25px;
		left: 50px;
		font-size: 14px;
	}
	.more{
		height:20px;
		position: absolute;
		right:10px;
		top:10px;
	}
	.body{
		height: 40px;
	}
	.content2{
		margin-left: 10px;
	}
	.footer{
		display: flex;
		justify-content: space-between;
		color: #d1d1d1;
		margin-right: 5px;
	}
	.footerPicture{
		width: 20px;
		height: 20px;
		margin: 0 5px;
		vertical-align: bottom;
	}
</style>