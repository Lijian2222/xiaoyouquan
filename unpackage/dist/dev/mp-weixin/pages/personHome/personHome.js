"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_post = require("../../store/post.js");
require("../../store/user.js");
const store_environment = require("../../store/environment.js");
if (!Array) {
  const _easycom_JobPost2 = common_vendor.resolveComponent("JobPost");
  const _easycom_homePost2 = common_vendor.resolveComponent("homePost");
  (_easycom_JobPost2 + _easycom_homePost2)();
}
const _easycom_JobPost = () => "../../components/JobPost/JobPost.js";
const _easycom_homePost = () => "../../components/homePost/homePost.js";
if (!Math) {
  (_easycom_JobPost + _easycom_homePost)();
}
const _sfc_main = {
  __name: "personHome",
  setup(__props) {
    const currentUrl = store_environment.environmentStore().currentUrl;
    const options = common_vendor.ref({});
    const userId = common_vendor.ref(1);
    common_vendor.onLoad((e) => {
      common_vendor.index.__f__("log", "at pages/personHome/personHome.vue:16", e);
      options.value = e;
      userId.value = Number(e.userId);
    });
    const myPublishList1 = common_vendor.ref([]);
    async function getMyPublishList1(pageIndex) {
      let res = await common_vendor.index.request({
        // url:'http://localhost:8080/post/query',
        url: currentUrl + "/post/query",
        // header: { 'content-type': 'application/x-www-form-urlencoded' },
        method: "post",
        data: {
          "isDeleted": 0,
          "pageIndex": pageIndex,
          "pageSize": 5,
          "userId": userId.value
        }
      });
      res.data.data.forEach(
        store_post.postStore().handleTime
      );
      myPublishList1.value = [...myPublishList1.value, ...res.data.data];
      common_vendor.index.__f__("log", "at pages/personHome/personHome.vue:44", myPublishList1);
    }
    const myPublishList2 = common_vendor.ref([]);
    async function getMyPublishList2(pageIndex) {
      let res = await common_vendor.index.request({
        // url:'http://localhost:8080/job/query',
        url: currentUrl + "/job/query",
        // header: { 'content-type': 'application/x-www-form-urlencoded' },
        method: "post",
        data: {
          "isDeleted": 0,
          "pageIndex": pageIndex,
          "pageSize": 5,
          "userId": userId.value
        }
      });
      res.data.data.forEach(
        store_post.postStore().handleTime
      );
      myPublishList2.value = [...myPublishList2.value, ...res.data.data];
      common_vendor.index.__f__("log", "at pages/personHome/personHome.vue:69", myPublishList2);
    }
    common_vendor.onMounted(() => {
      getMyPublishList1(1);
      getMyPublishList2(1);
    });
    const activeTab = common_vendor.ref("position");
    common_vendor.ref(1);
    common_vendor.ref([
      {
        id: 1,
        title: "C++大数据开发工程师",
        location: "杭州",
        education: "本科",
        experience: "3-5年",
        salary: "12-15k·14"
      },
      {
        id: 2,
        title: "数仓开发工程师（基础数据...）",
        location: "杭州·深圳·成都",
        education: "本科",
        experience: "3-5年",
        salary: "12-15k·14"
      }
    ]);
    const switchTab = (tab) => {
      activeTab.value = tab;
    };
    function navigator() {
      common_vendor.index.navigateTo({
        url: `/pages/messageContent/messageContent?id=1&userId=${options.userId}&jobName=量化金融开发工程师&jobDetail=负责金融市场产品的估值定价模型研发，并落地为可用于系统开发的文档和案例&position=杭州&academicAcquired=本科&experienceAcquired=不限&jobBelonging=互联网&nature=国企&nickname=${options.value.username}&publishTime=2025-03-19&salaryStart=20000&salaryEnd=30000&salaryNums=14&campus=哈尔滨工业大学&flag=false`,
        // 目标页面路径及参数
        success: function() {
          common_vendor.index.__f__("log", "at pages/personHome/personHome.vue:123", "跳转成功");
        },
        fail: function(err) {
          common_vendor.index.__f__("error", "at pages/personHome/personHome.vue:126", "跳转失败", err);
        }
      });
    }
    const guanzhuText = common_vendor.ref("关 注");
    function guanzhu() {
      common_vendor.index.showToast({
        title: "关注成功",
        // 提示内容
        icon: "success",
        // 图标类型（success、loading、none）
        duration: 2e3,
        // 显示时长（毫秒）
        mask: true,
        // 是否显示透明蒙层，防止触摸穿透
        success: () => {
          common_vendor.index.__f__("log", "at pages/personHome/personHome.vue:139", "Toast 显示成功");
        }
      });
      guanzhuText.value = "已关注";
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0$4,
        b: common_assets._imports_0$2,
        c: common_vendor.t(options.value.username),
        d: common_assets._imports_1$3,
        e: activeTab.value === "position"
      }, activeTab.value === "position" ? {} : {}, {
        f: activeTab.value === "position" ? 1 : "",
        g: common_vendor.o(($event) => switchTab("position")),
        h: activeTab.value === "post"
      }, activeTab.value === "post" ? {} : {}, {
        i: activeTab.value === "post" ? 1 : "",
        j: common_vendor.o(($event) => switchTab("post")),
        k: activeTab.value === "position"
      }, activeTab.value === "position" ? {
        l: common_vendor.f(myPublishList2.value, (item, index, i0) => {
          return {
            a: item.id,
            b: item.id,
            c: "12d85066-0-" + i0,
            d: common_vendor.p({
              id: item.id,
              userId: item.userId,
              jobName: item.jobName,
              jobDetail: item.jobDetail,
              position: item.position,
              academicAcquired: item.academicAcquired,
              experienceAcquired: item.experienceAcquired,
              jobBelonging: item.jobBelonging,
              nature: item.nature,
              nickname: item.nickname,
              publishTime: item.publishTime,
              salaryStart: item.salaryStart,
              salaryEnd: item.salaryEnd,
              salaryNums: item.salaryNums,
              campus: item.campus
            })
          };
        })
      } : {}, {
        m: activeTab.value === "post"
      }, activeTab.value === "post" ? {
        n: common_vendor.f(myPublishList1.value, (item, index, i0) => {
          return {
            a: item.id,
            b: item.id,
            c: "12d85066-1-" + i0,
            d: common_vendor.p({
              id: item.id,
              username: item.nickname,
              content: item.content,
              goodNums: item.goodNums,
              commentNums: item.commentNums,
              viewNums: item.viewNums,
              time: item.publishTime,
              retweet: item.retweet,
              signature: item.signature,
              profilePicture: item.profilePicture
            })
          };
        })
      } : {}, {
        o: common_vendor.t(guanzhuText.value),
        p: common_vendor.o(guanzhu),
        q: common_vendor.o(navigator)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-12d85066"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/personHome/personHome.js.map
