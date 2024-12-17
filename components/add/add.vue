<template>
	<view class="box">
		<img src="../../static/add.png" alt="add" class="add"/>
	</view>
</template>

<script>
	export default {
		name:"add",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.box{
		/* position: relative; */
	}
	.add{
		width: 40px;
		height: 40px;
		position: absolute;
		top:95%;
		left:50%;
		margin-left: -20px;
		z-index:1
		
	}
</style>