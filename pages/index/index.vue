<template>
	<view class="home">
		<view class="head">
			<homeTab :headTabNum="headTabNum" @newNum="headTabNum=$event"></homeTab>
		</view>
		<view class="body">
			<homePost  v-for="(item,index) in list" :key="item.id" 
			:id="item.id"
			:username="item.nickname"
			:content="item.content"
			:goodNums="item.goodNums"
			:commentNums="item.commentNums"
			:viewNums="item.viewNums"
			:time="item.publishTime"
			@notInteresting="handleNotInteresting"
			></homePost>
		</view> 
	</view>
	
</template>

<script>
	import axios from 'axios'
	// const service = axios.create({
	//   baseURL: 'http://localhost:8080/post/query', // API base URL
	//   timeout: 5000, // 请求超时时间
	// });
	export default {
		data() {
			return {
				list:[],
				headTabNum:1,
				queryPost:{
					"isDeleted":0
				}
			}
		},
		created(){
			axios.post('http://localhost:8080/post/query', this.queryPost)
			        .then(response => {
			          // 处理响应数据
			          console.log(response.data);
					  response.data.forEach(function(element) {
					  	// 创建一个新的 Date 对象
						const date=new Date(element.publishTime)
						// 获取月份（加1因为 getMonth() 返回的月份是从0开始的）
						const month = (date.getMonth()+1).toString().padStart(2,0);
						// 获取日期
						const day = date.getDate().toString().padStart(2, '0');
						// 获取小时
						const hours = date.getHours().toString().padStart(2, '0');
						// 获取分钟
						const minutes = date.getMinutes().toString().padStart(2, '0');
						// 获取秒
						const seconds = date.getSeconds().toString().padStart(2, '0');
						// 拼接成所需的格式
						const formattedTime = `${month}-${day} ${hours}:${minutes}:${seconds}`;
						//重新赋值
						element.publishTime=formattedTime;
					  });
					  this.list=response.data;
			        })
			        .catch(error => {
			          // 处理错误情况
			          console.error(error);
			        });
		},
		onLoad() {

		},
		methods: {
			handleNotInteresting(id){
				 this.list = this.list.filter(item => item.id!=id);
			}
		},
		// mounted() {
		//     // 监听点击事件
		//     document.body.addEventListener('touchend', this.handleBodyTap);
		// },
		// beforeDestroy() {
		//     // 组件销毁前移除事件监听
		//     document.body.removeEventListener('touchend', this.handleBodyTap);
		// }
	}
</script>

<style scoped>
	.home{
		background-color: #f8f8f8;
	}
	
	
	
</style>
