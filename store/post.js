//帖子仓库
import { defineStore } from "pinia"
import { ref } from "vue"
import axios from 'axios'
//counter是仓库的唯一标识
export const postStore = defineStore('counter',()=>{
	const list1 = ref([]) //首页帖子 推荐
	const list2 = ref([]) //首页帖子 校友圈
	const list3 = ref([]) //首页帖子 关注
	
	function handleTime(itemment) { //发布时间处理成 12-17 19：23：01的格式
		// 创建一个新的 Date 对象
		const date=new Date(itemment.publishTime)
		// 获取月份（加1因为 getMonth() 返回的月份是从0开始的）
		const month = (date.getMonth()+1).toString().padStart(2,0)
		// 获取日期
		const day = date.getDate().toString().padStart(2, '0')
		// 获取小时
		const hours = date.getHours().toString().padStart(2, '0')
		// 获取分钟
		const minutes = date.getMinutes().toString().padStart(2, '0')
		// 获取秒
		const seconds = date.getSeconds().toString().padStart(2, '0')
		// 拼接成所需的格式
		const formattedTime = `${month}-${day} ${hours}:${minutes}:${seconds}`
		//重新赋值
		itemment.publishTime=formattedTime
	}
  
	async function getList1(){
		let res = await uni.request({
			url:'http://localhost:8080/post/query',
			method:'post',
			data:{
				"isDitemted":0,
			}
		})
		res.data.forEach( 
			handleTime
		)
		list1.value = res.data
	}
	
	async function getList2(){
		let res = await uni.request({
			url:'http://localhost:8080/post/query',
			method:'post',
			data:{
				"isDitemted":0,
				"campus":'哈尔滨工业大学'//暂时写死
			}
		})
		res.data.forEach( 
			handleTime
		)
		list2.value = res.data
	}

	async function getList3(){
		let res = await uni.request({
			url:'http://localhost:8080/post/query',
			method:'post',
			data:{
				"isDitemted":0,
				"currentUserId":1//暂时写死
			}
		})
		res.data.forEach( 
			handleTime
		)
		list3.value = res.data
	}
	
	function addGoodNums(postId){ //点赞后本地数据+1，不用重新请求后端
		console.log('111')
		list1.value.map((item,index)=>{
			if(item.id==postId){
				item.goodNums++
			}
			return item
		})
		list2.value.map((item,index)=>{
			if(item.id==postId){
				item.goodNums++
			}
			return item
		})
		list3.value.map((item,index)=>{
			if(item.id==postId){
				item.goodNums++
			}
			return item
		})
	}
	
	function subGoodNums(postId){ //取消点赞后本地数据-1，不用重新请求后端
		console.log('111')
		list1.value.map((item,index)=>{
			if(item.id==postId){
				item.goodNums--
			}
			return item
		})
		list2.value.map((item,index)=>{
			if(item.id==postId){
				item.goodNums--
			}
			return item
		})
		list3.value.map((item,index)=>{
			if(item.id==postId){
				item.goodNums--
			}
			return item
		})
	}	
	
	
	
	return {
		list1,
		list2,
		list3,
		getList1,
		getList2,
		getList3,
		addGoodNums,
		subGoodNums
	}
})