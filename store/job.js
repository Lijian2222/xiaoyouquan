//帖子仓库
import { defineStore } from "pinia"
import { ref } from "vue"
import { environmentStore } from "./environment"
const currentUrl = environmentStore().currentUrl
//job是仓库的唯一标识
export const jobStore = defineStore('job',()=>{
	
	
	//对工资进行处理
	function formatSalary(salary) {
	    // 判断输入是否为数字
		// console.log(salary,'xxx')
		// console.log(typeof salary)
	    if (typeof salary !== 'number' || isNaN(salary)) {
	        throw new Error('输入的工资必须是一个有效的数字')
	    }
	
	    if (salary < 1000) {
	        return salary.toString()
	    } else {
	        let result = salary / 1000;
			if (result % 1 === 0) {
	            return result + 'k'
	        } else {
	            return result.toFixed(1) + 'k';
	        }
	    }
	}
	
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
	
	
	
	return {
		formatSalary,
		queryCampus
	}
})