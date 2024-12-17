<template>
	<view class="box">
		<view class="headTab">
			<span @click="changeHeadTabNum(1)">推荐</span>
			<img src="../../static/line.png" alt="line" class="line" v-show="headTabNum==1"/>
		</view>
		<view class="headTab">
			<span @click="changeHeadTabNum(2)">校友圈</span>
			<img src="../../static/line.png" alt="line" class="line" v-show="headTabNum==2"/>
		</view>
		<view class="headTab">
			<span @click="changeHeadTabNum(3)">关注</span>
			<img src="../../static/line.png" alt="line" class="line" v-show="headTabNum==3"/>
		</view>
	</view>
</template>

<script>
	export default {
		name:"homeTab",
		data() {
			return {
				
			};
		},
		props:["headTabNum"],
		methods:{
			changeHeadTabNum(num){
				this.$emit("newNum",num)
			}
		}
	}
</script>

<style scoped>
	.box{
		width: 350px;
		height: 30px;
		margin: 0 auto;
	
		display: flex;
		
	}
	.headTab {
		margin-left:30px;
		width: 70px;
		height: 20px;
		display: flex;
		text-align: center;
		flex-direction: column;
	}
	.headTab:first-child{
		margin-left: 0;
	}
	.line{
		width: 15px;
		margin: 0 auto;
	}
</style>