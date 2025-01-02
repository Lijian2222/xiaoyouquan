<template>
	<view class="box">
		<view class="head">
			<img src="../../static/userHeader1.jpg" class='userPicture' alt="good"/>	
			<span class="username">{{username}}</span>
			<span class="time">{{time}}</span>
			<homePostMore @changeInteresting="handleChange"></homePostMore>
		</view>
		<view class="body">
			<span class="content2">{{content}}</span>
		</view>
		<view class="footer">
			<view>
				<img :src="imageSrc" class='footerPicture' alt="good" @click="addGood()"/>
				<span>{{goodNums}}</span>
			</view>
			<view>
				<img src="../../static/message_selected.png" class='footerPicture' alt="good"/>
				<span>{{commentNums}}</span>
			</view>
			<view>
				<img src="../../static/pageView.png" class='footerPicture' alt="good"/>
				<span>{{viewNums}}</span>
			</view>	
		</view>
	</view>
</template>

<script>
	import axios from 'axios'
	export default {
		name:"homePost",
		
		data() {
			return {
				imageSrc: '../../static/good.png',
				defaultImage: '../../static/good.png',
				alternateImage: '../../static/good2.png',
				insertPostGood:{
					"postId":this.id,
					"userId":1 //暂时写死
				},
				queryPostGood:{
					"postId":this.id,
					"userId":1 //暂时写死
				},
				
			};
		},
		props:["id","username","time","content","viewNums","commentNums","goodNums"],
		methods:{
			handleChange(newValue){
				this.$emit("notInteresting",this.id)
			},
			addGood(){//该用户给这个帖子点赞
				axios.post('http://localhost:8080/postGood/insert', this.insertPostGood)
			}
		},
		created(){//请求该用户是否点赞过这个帖子
			axios.post('http://localhost:8080/postGood/query', this.queryPostGood)
				.then(response => {
				  // 处理响应数据
				  console.log(response.data);
				  if(response.data.data==1){
					  this.imageSrc = this.alternateImage;
					  
				  }else{
					  this.imageSrc = this.defaultImage;
				  }
				})
				.catch(error => {
				  // 处理错误情况
				  console.error(error);
				});
		}
	
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
	/* .more{
		height:20px;
		position: absolute;
		right:10px;
		top:10px;
	} */
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