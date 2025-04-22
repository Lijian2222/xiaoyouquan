//用户仓库，用来保存用户资料
import { defineStore } from "pinia"
import { ref } from "vue"

import { environmentStore } from "./environment"
const currentUrl = environmentStore().currentUrl

//post是仓库的唯一标识
export const userStore = defineStore('user',()=>{
	
	
	//查询用户有哪些学校
	function queryCampus(){
		return new Promise((resolve,reject)=>{
			uni.request({
				// url:'http://localhost:8080/user/query',
				url:currentUrl+'/user/query', //生产环境
				method:'post',
				data:{
					"id":4//暂时写死
				},
				success:(res)=>{
					const user = res.data.data
					const campus = []
					if (user.campus1!=null){
						campus.push({
							"text":user.campus1,
							"value":user.campus1
						})
					}
					if (user.campus2!=null){
						campus.push({
							"text":user.campus2,
							"value":user.campus2
						})
					}
					if (user.campus3!=null){
						campus.push({
							"text":user.campus3,
							"value":user.campus3
						})
					}
					resolve(campus)
				},
				fail:(err)=>{
					reject(err)
				}
			})
		})
	}
	
	const campus = []
	
	function logInSuccess(){
		uni.showToast({
			title: '登录成功', // 提示内容
			icon: 'success',  // 图标类型（success、loading、none）
			duration: 2000,   // 显示时长（毫秒）
			mask: true,       // 是否显示透明蒙层，防止触摸穿透
			success: () => {
				console.log('Toast 显示成功');
			}
		})
		// uni.navigateTo({
		//     url: '/pages/index/index', // 目标页面路径
		//     success: () => {
		//         console.log('跳转成功');
		//     },
		//     fail: (err) => {
		//         console.error('跳转失败', err);
		//     }
		// })
		uni.switchTab({
		    url: '/pages/index/index', // 替换为你的 TabBar 页面路径
		    success: () => {
		        console.log('跳转成功');
		    },
		    fail: (err) => {
		        console.error('跳转失败', err);
		    }
		});
	}
	
	function logIn(phoneNumber,password){
		// console.log("logIn触发")
		// console.log(phoneNumber)
		// console.log(password)
		uni.request({
			// url:'http://localhost:8080/user/logIn',
			url:currentUrl+'/user/logIn', //生产环境
			method:'post',
			data:{
				"phoneNumber":phoneNumber,
				"password":password
			},
			success:(res)=>{
				const user = res.data.data
				// console.log(user)
				if (user!=null){ //user不为空，说明登录或者注册成功，载入相关资料
					console.log("登录注册成功")
					userId.value = user.id //载入用户id
					setTimeout(logInSuccess,5000) //5s后显示登录成功
					if (user.campus1!=null){ //载入学校资料
						campus.push({
							"text":user.campus1,
							"value":user.campus1
						})
					}
					if (user.campus2!=null){
						campus.push({
							"text":user.campus2,
							"value":user.campus2
						})
					}
					if (user.campus3!=null){
						campus.push({
							"text":user.campus3,
							"value":user.campus3
						})
					}
					//载入用户昵称
					if (user.nickname!=null){
						username.value=user.nickname
					}
					//载入用户头像
					if (user.profilePicture!=null){
						userHeadPicture.value = user.profilePicture 
					}
					// resolve(campus)
					logInFlag.value = true //flag变成true
				}else{ //如果用户为空，说明密码错误
					console.log("密码错误")
				}
				
			},
			fail:(err)=>{
				reject(err)
			}
		})
	}
	
	const logInFlag = ref(false)
	const userId = ref(-1)
	const username = ref("点此建立昵称")
	const userHeadPicture = ref("../../static/user4.png")
	return {
		logIn,
		campus,
		logInFlag,
		userId,
		username,
		userHeadPicture
	}
})