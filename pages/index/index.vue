<template>
	<view class="home">
		<view class="head">
			<homeTab :headTabNum="headTabNum" @newNum="headTabNum=$event"></homeTab>
		</view>
		<view class="body">
			<homePost  v-for="(item,index) in list" :key="item.id" 
			:username="item.username"
			:time="item.time"
			:content="item.content"
			></homePost>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{id:1,username:"邪恶栀子花",time:"今天23:06",content:"睡不着了,哥们国企开出6*12..."},
					{id:2,username:"大浪该喝药了",time:"刚刚",content:"人人都在说大厂,有没有值得去的中小厂推荐?"},
					{id:3,username:"QIQI",time:"刚刚",content:"家人们,现在大环境咋样了啊?"},
					{id:4,username:"熊大爱睡觉",time:"今天08:00",content:"华子给我发offer了"},
					{id:5,username:"熊大爱睡觉",time:"今天08:00",content:"华子给我发offer了"},
					{id:6,username:"熊大爱睡觉",time:"今天08:00",content:"华子给我发offer了"},
					{id:7,username:"熊大爱睡觉",time:"今天08:00",content:"华子给我发offer了"},
				],
				headTabNum:1,
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.home{
		background-color: #f8f8f8;
	}
	
	
	
</style>
