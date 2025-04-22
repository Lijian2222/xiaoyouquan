// 帖子仓库
import { defineStore } from "pinia"
import { ref } from "vue"

import { environmentStore } from "./environment"
const currentUrl = environmentStore().currentUrl

//post是仓库的唯一标识
export const postStore = defineStore('post',()=>{
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
  
	function formatNumber(num) {
		if (num >= 0 && num < 1000) {
			return num.toString();
		} else if (num >= 1000 && num < 10000) {
			return (num / 1000).toFixed(1) + 'k';
		} else if (num >= 10000) {
			return (num / 10000).toFixed(1) + 'w';
		} else {
			return 'Number out of range';
		}
	}
	
	async function getList1(pageIndex){
		// console.log(pageIndex)
		let res = await uni.request({
			// url:'http://localhost:8080/post/query',
			url:currentUrl+'/post/query',
			// header: { 'content-type': 'application/x-www-form-urlencoded' },
			method:'post',
			data:{
				"isDeleted":0,
				"pageIndex":pageIndex,
				"pageSize":5
			}
		})
		// console.log(res)
		res.data.data.forEach( 
			handleTime
		)
		list1.value = [...list1.value,...res.data.data]
		// console.log(list1)
	}
	
	async function getList2(pageIndex){
		let res = await uni.request({
			// url:'http://localhost:8080/post/query', //测试环境
			url:currentUrl+'/post/query', //生产环境
			method:'post',
			data:{
				"isDeleted":0,
				"campus":'哈尔滨工业大学',//暂时写死
				"pageIndex":pageIndex,
				"pageSize":5
			}
		})
		res.data.data.forEach(
			handleTime
		)
		list2.value = [...list2.value,...res.data.data]
	}

	async function getList3(pageIndex){
		let res = await uni.request({
			// url:'http://localhost:8080/post/query', 
			url:currentUrl+'/post/query', //生产环境
			method:'post',
			data:{
				"isDeleted":0,
				"currentUserId":1,//暂时写死
				"pageIndex":pageIndex,
				"pageSize":5
			}
		})
		res.data.data.forEach(
			handleTime
		)
		list3.value = [...list3.value,...res.data.data]
	}
	
	
	
	function notInteresting(postId){ //不感兴趣后，推荐，校友圈，关注都将会看不见
		list1.value = list1.value.filter(item=>item.id!=postId)
		list2.value = list2.value.filter(item=>item.id!=postId)
		list3.value = list3.value.filter(item=>item.id!=postId)
	}
	
	
	// 异步方法想要return结果，必须使用promise或者async/await
	function requestGood(postId){//请求该用户是否点赞过这个帖子，每个帖子都会请求一次后端
		return new Promise((resolve,reject)=>{
			uni.request({
				// url:'http://localhost:8080/postGood/query', 
				url:currentUrl+'/postGood/query', //生产环境
				method:'POST',
				data:{
					"postId":postId,
					"isDeleted":0,//如果点赞过且isDeleted=0
					"userId":1 //暂时写死
				},
				success:(res) => {
					// console.log(res)
					if(res.data.data==1){//如果点赞了这个帖子
						resolve(true)
					}else{
						resolve(false)
					}
				},
				fail:(err) => {
					reject(err)
				}
			})
		})
	}
	
	
	function addGoodNums(postId){ //点赞后本地数据+1，不用重新请求后端
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
	
	//用户点击内容，不仅发生跳转，还会增加浏览量,本地增加,不用重新请求后端
	function addView(postId){
		uni.request({
			// url:'http://localhost:8080/post/addViewNums',
			url:currentUrl+'/post/addViewNums', //生产环境
			method:'GET',
			data:{
				"postId":postId,
			}
		})
		list1.value.map((item,index)=>{
			if(item.id==postId){
				item.viewNums++
			}
			return item
		})
		list2.value.map((item,index)=>{
			if(item.id==postId){
				item.viewNums++
			}
			return item
		})
		list3.value.map((item,index)=>{
			if(item.id==postId){
				item.viewNums++
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
		notInteresting,
		formatNumber,
		requestGood,
		addGoodNums,
		subGoodNums,
		addView,
		handleTime
	}
})