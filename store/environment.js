//仓库
import { defineStore } from "pinia"


//environment是仓库的唯一标识
export const environmentStore = defineStore('environment',()=>{
	
	const devUrl = "http://localhost:8080"
	const prodUrl = "https://www.xiaoyouquan.xyz:8443" //好像域名解析不稳定
	// const prodUrl = "https://39.107.221.247:8443"
	const currentUrl = prodUrl
	

	return {
		currentUrl
	}
})