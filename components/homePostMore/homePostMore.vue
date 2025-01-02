<template>
	
	<img src="../../static/more.png" alt="more" class="more" v-show="!visbility"
	@click="visbility=true"/>
	<view v-show="visbility" class="windowFather">
		<view class="window">
			<img src="../../static/notInteresting.png" alt="" 
			class="notInteresting"
			@click="changeInteresting()"/>
			<span class="notInteresting" @click="changeInteresting()">不感兴趣</span>
			<br>
			<img src="../../static/report.png" alt="" class="report"/><span class="report">举报</span>
		</view>
	</view>
</template>

<script>
	export default {
		name:"homePostMore",
		emits: ['changeInteresting'], // 声明自定义事件
		data() {
			return {
				visbility:false,
			};
		},
		methods:{
			handleBodyTap(event) {
			      // 检查点击事件的目标是否是模态框本身或其子元素
			      if (event.target.classList.contains('window') 
				  || event.target.classList.contains('notInteresting')
				  || event.target.classList.contains('report')) {
			        // console.log(event.target.classList)
					return;
			      }
			      // 如果点击的是模态框外部，则关闭模态框
			      this.visbility=false;
			},
			changeInteresting(){
				// console.log("触发不感兴趣")
				this.$emit("changeInteresting",1)
			}
		},
		mounted() {
		    // 监听点击事件
		    document.body.addEventListener('touchend', this.handleBodyTap);
		},
		beforeDestroy() {
		    // 组件销毁前移除事件监听
		    document.body.removeEventListener('touchend', this.handleBodyTap);
		}
	}
</script>

<style scoped>
	.more{
		height:20px;
		position: absolute;
		right:10px;
		top:10px;
	}
	.window{
		height: 80px;
		width: 100px;
		/* background-color: #009dff; */
		position: absolute;
		right: 10px;
		top:10px;
		text-align: center;
		line-height: 40px;
		border: 1px solid #009dff;
		border-radius: 10px;
		color:#210, 236, 255;
		
	}
	.notInteresting{
		width: 20px;
		height: 20px;
		vertical-align: middle;
		margin-right: 5px;
	}
	.report{
		width: 16px;
		height: 16px;
		vertical-align: baseline;
		margin-right: 5px;
	}
</style>