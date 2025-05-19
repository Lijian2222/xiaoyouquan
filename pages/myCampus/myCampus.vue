<template>
  <view class="my-school-page">
    <!-- 状态栏 -->
    <!-- <view class="status-bar">
      <text class="time">8:21</text>
      <view class="status-bar-center"></view>
      <view class="status-bar-right">
        <text class="signal"></text>
        <text class="wifi"></text>
        <text class="battery"></text>
      </view>
    </view> -->
    
    <!-- 页面头部 -->
    <view class="page-header">
      <!-- <view class="back-button" @click="goBack">
        <text class="back-icon">＜</text>
      </view> -->
      <text class="page-title">我的学校</text>
      <!-- <view class="header-right">
        <text class="dots">•••</text>
        <text class="circle-icon">⊙</text>
      </view> -->
    </view>
    
    <!-- 学历选择 -->
    <view class="education-tabs">
      <view class="education-tab" :class="{ active: activeTab === 'bachelor' }" @click="switchTab('bachelor')">
        <image class="education-icon" :src="activeTab === 'bachelor' ? '/static/academic4.png' : '/static/academic3.png'"></image>
        <text class="education-text" :class="{ 'active-text': activeTab === 'bachelor' }">本科院校</text>
      </view>
      <view class="education-tab" :class="{ active: activeTab === 'master' }" @click="switchTab('master')">
        <image class="education-icon" :src="activeTab === 'master' ? '/static/academic4.png' : '/static/academic3.png'"></image>
        <text class="education-text" :class="{ 'active-text': activeTab === 'master' }">研究生院校</text>
      </view>
      <view class="education-tab" :class="{ active: activeTab === 'doctor' }" @click="switchTab('doctor')">
        <image class="education-icon" :src="activeTab === 'doctor' ? '/static/academic4.png' : '/static/academic3.png'"></image>
        <text class="education-text" :class="{ 'active-text': activeTab === 'doctor' }">博士生院校</text>
      </view>
    </view>
    
    <!-- 本科学校信息卡片 -->
    <view class="school-card" v-show="activeTab === 'bachelor'">
      <!-- 第一学位 -->
      <view class="degree-item">
        <view class="degree-tag">
          <view class="degree-dot"></view>
          <text class="degree-text">第一学位</text>
        </view>
        <view class="school-info">
          <text class="school-title">郑州大学 | 19级 | 力学与安全工程学院 | 安全工程专业</text>
          <view class="school-logo-container">
            <image class="school-logo" src="/static/zhengzhouLogo.png"></image>
          </view>
          <view class="school-name-container">
            <text class="school-name">郑州大学</text>
            <text class="school-name-en">ZHENGZHOU UNIVERSITY</text>
          </view>
          <view class="school-description">
            <text class="description-text">郑州大学，英文名ZHENGZHOU UNIVERSITY（简称郑大、ZZU），位于河南省郑州市，是中华人民共和国教育部与河南省人民政府"部省合作共建高校"，国家"双一流"（一流大学）建设高校、"211工程"建设高校......</text>
          </view>
        </view>
      </view>
      
      <!-- 第二学位 -->
      <view class="degree-item">
        <view class="degree-tag">
          <view class="degree-dot"></view>
          <text class="degree-text">第二学位</text>
        </view>
        <view class="school-info">
          <text class="school-title">哈尔滨工业大学 | 23级 | 计算机部 | 数据科学与大数据技术</text>
          <view class="school-logo-container">
            <image class="school-logo" src="/static/haerbingLogo.png"></image>
          </view>
          <view class="school-name-container">
            <text class="school-name">哈尔滨工业大学</text>
            <text class="school-name-en">HARBIN INSTITUTE OF TECHNOLOGY</text>
          </view>
          <view class="school-description">
            <text class="description-text">哈尔滨工业大学（Harbin Institute of Technology），简称哈工大，校本部位于黑龙江省哈尔滨市，由工业和信息化部主管......</text>
          </view>
        </view>
      </view>
      
      <!-- 查看详情按钮 -->
      <!-- <view class="view-details-btn" @click="viewDetails">
        <text class="btn-text">查看详情</text>
      </view> -->
    </view>
	
	<!-- 硕士学校信息卡片 -->
	<view class="school-card" v-show="activeTab === 'master'">
	  <!-- 第一学位 -->
	  <view class="degree-item">
	    <view class="degree-tag">
	      <view class="degree-dot"></view>
	      <text class="degree-text">第一学位</text>
	    </view>
	    <view class="school-info">
	      <text class="school-title">国防科技大学 | 25级 | 计算学部 | 软件工程</text>
	      <view class="school-logo-container">
	        <image class="school-logo" src="/static/guofangLogo.png"></image>
	      </view>
	      <view class="school-name-container">
	        <text class="school-name">国防科技大学</text>
	        <text class="school-name-en">NATIONAL UNIVERSITY OF DEFENSE TECHNOLOGY</text>
	      </view>
	      <view class="school-description">
	        <text class="description-text">国防科技大学，英文名NATIONAL UNIVERSITY OF DEFENSE TECHNOLOGY（简称国科大、NUT），位于位于湖南省长沙市，这所大学是中国顶尖的军事工程技术院校之一，专注于国防科技研究和人才培养。</text>
	      </view>
	    </view>
	  </view>
	  
	  <!-- 第二学位 -->
	  <!-- <view class="degree-item">
	    <view class="degree-tag">
	      <view class="degree-dot"></view>
	      <text class="degree-text">第二学位</text>
	    </view>
	    <view class="school-info">
	      <text class="school-title">哈尔滨工业大学 | 23级 | 计算机部 | 数据科学与大数据技术</text>
	      <view class="school-logo-container">
	        <image class="school-logo" src="/static/haerbingLogo.png"></image>
	      </view>
	      <view class="school-name-container">
	        <text class="school-name">哈尔滨工业大学</text>
	        <text class="school-name-en">HARBIN INSTITUTE OF TECHNOLOGY</text>
	      </view>
	      <view class="school-description">
	        <text class="description-text">哈尔滨工业大学（Harbin Institute of Technology），简称哈工大，校本部位于黑龙江省哈尔滨市，由工业和信息化部主管......</text>
	      </view>
	    </view>
	  </view> -->
	  
	  <!-- 查看详情按钮 -->
	  <!-- <view class="view-details-btn" @click="viewDetails">
	    <text class="btn-text">查看详情</text>
	  </view> -->
	</view>
	
	
	
  </view>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'bachelor'
    }
  },
  methods: {
    goBack() {
      uni.navigateBack({
        delta: 1
      });
    },
    switchTab(tab) {
      this.activeTab = tab;
    },
    viewDetails() {
      uni.showToast({
        title: '正在开发中',
        icon: 'none'
      });
    }
  }
}
</script>

<style lang="less">
.my-school-page {
  min-height: 100vh;
  background-color: #f7f7f7;
  font-family: PingFang SC, Microsoft YaHei, sans-serif;
  padding-bottom: 5.33vw;
}

/* 状态栏样式 */
.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.67vw 4vw;
  
  .time {
    font-size: 4.27vw;
    font-weight: bold;
  }
  
  .status-bar-center {
    width: 36vw;
    height: 5.33vw;
    background-color: #000;
    border-radius: 4vw;
  }
  
  .status-bar-right {
    display: flex;
    align-items: center;
    
    .signal, .wifi, .battery {
      margin-left: 1.33vw;
      font-size: 3.73vw;
    }
    
    .signal::before {
      content: "▂▃▄";
    }
    
    .wifi::before {
      content: "Wi-Fi";
    }
    
    .battery::before {
      content: "▐";
    }
  }
}

/* 页面头部样式 */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.67vw 4vw;
  position: relative;
  
  .back-button {
    font-size: 5.33vw;
    padding: 1.33vw;
  }
  
  .page-title {
    font-size: 4.8vw;
    font-weight: bold;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .header-right {
    display: flex;
    align-items: center;
    
    .dots {
      font-size: 4vw;
      margin-right: 2.67vw;
    }
    
    .circle-icon {
      width: 6.67vw;
      height: 6.67vw;
      border-radius: 50%;
      background-color: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4vw;
    }
  }
}

/* 学历选择标签样式 */
.education-tabs {
  display: flex;
  justify-content: space-between;
  padding: 2.67vw 4vw;
  margin-bottom: 5.33vw;
  
  .education-tab {
    width: 29.33vw;
    height: 29.33vw;
    background-color: #fff;
    border-radius: 4vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0.53vw 2.67vw rgba(0, 0, 0, 0.05);
    
    &.active {
      &::after {
        content: "";
        position: absolute;
        bottom: -5.33vw;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 2.67vw solid transparent;
        border-right: 2.67vw solid transparent;
        border-top: 2.67vw solid #fff;
      }
    }
    
    .education-icon {
      width: 10.67vw;
      height: 10.67vw;
      margin-bottom: 2.67vw;
    }
    
    .education-text {
      font-size: 3.73vw;
      color: #999;
      
      &.active-text {
        color: #0086ff;
      }
    }
  }
}

/* 学校信息卡片样式 */
.school-card {
  margin: 0 4vw;
  background-color: #fff;
  border-radius: 4vw;
  padding: 5.33vw;
  box-shadow: 0 0.53vw 2.67vw rgba(0, 0, 0, 0.05);
  
  .degree-item {
    margin-bottom: 8vw;
    
    .degree-tag {
      display: flex;
      align-items: center;
      background-color: #0086ff;
      border-radius: 5.33vw;
      padding: 1.33vw 4vw;
      width: fit-content;
      margin-bottom: 2.67vw;
      
      .degree-dot {
        width: 2.13vw;
        height: 2.13vw;
        background-color: #fff;
        border-radius: 50%;
        margin-right: 1.33vw;
      }
      
      .degree-text {
        color: #fff;
        font-size: 3.73vw;
      }
    }
    
    .school-info {
      padding: 2.67vw;
      
      .school-title {
        font-size: 3.73vw;
        color: #333;
        margin-bottom: 4vw;
      }
      
      .school-logo-container {
        display: flex;
        justify-content: center;
        margin-bottom: 2.67vw;
        
        .school-logo {
          width: 21.33vw;
          height: 21.33vw;
        }
      }
      
      .school-name-container {
        text-align: center;
        margin-bottom: 4vw;
        
        .school-name {
          font-size: 5.33vw;
          color: #333;
          font-weight: bold;
          display: block;
          margin-bottom: 1.33vw;
        }
        
        .school-name-en {
          font-size: 3.2vw;
          color: #666;
          display: block;
        }
      }
      
      .school-description {
        .description-text {
          font-size: 3.2vw;
          color: #999;
          line-height: 4.8vw;
        }
      }
    }
  }
  
  .view-details-btn {
    width: 40vw;
    height: 10.67vw;
    background-color: #0086ff;
    border-radius: 5.33vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5.33vw auto 2.67vw;
    
    .btn-text {
      color: #fff;
      font-size: 3.73vw;
    }
  }
}
</style>