"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_post = require("../../store/post.js");
const store_user = require("../../store/user.js");
const store_environment = require("../../store/environment.js");
if (!Array) {
  const _easycom_homePost2 = common_vendor.resolveComponent("homePost");
  const _easycom_JobPost2 = common_vendor.resolveComponent("JobPost");
  (_easycom_homePost2 + _easycom_JobPost2)();
}
const _easycom_homePost = () => "../../components/homePost/homePost.js";
const _easycom_JobPost = () => "../../components/JobPost/JobPost.js";
if (!Math) {
  (_easycom_homePost + _easycom_JobPost)();
}
const _sfc_main = {
  __name: "myPublish",
  setup(__props) {
    const currentUrl = store_environment.environmentStore().currentUrl;
    const active = common_vendor.ref(1);
    const myPublishList1 = common_vendor.ref([]);
    const myPublishList2 = common_vendor.ref([]);
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
          "userId": store_user.userStore().userId
        }
      });
      res.data.data.forEach(
        store_post.postStore().handleTime
      );
      myPublishList1.value = [...myPublishList1.value, ...res.data.data];
    }
    getMyPublishList1(1);
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
          "userId": store_user.userStore().userId
        }
      });
      res.data.data.forEach(
        store_post.postStore().handleTime
      );
      myPublishList2.value = [...myPublishList2.value, ...res.data.data];
    }
    getMyPublishList2(1);
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: active.value == 1,
        c: common_vendor.o(($event) => active.value = 1),
        d: common_assets._imports_0,
        e: active.value == 2,
        f: common_vendor.o(($event) => active.value = 2),
        g: common_vendor.f(myPublishList1.value, (item, index, i0) => {
          return {
            a: item.id,
            b: item.id,
            c: "319894f8-0-" + i0,
            d: common_vendor.p({
              id: item.id,
              username: item.nickname,
              content: item.content,
              goodNums: item.goodNums,
              commentNums: item.commentNums,
              viewNums: item.viewNums,
              time: item.publishTime,
              retweet: item.retweet,
              signature: item.signature
            })
          };
        }),
        h: active.value == 1,
        i: common_vendor.f(myPublishList2.value, (item, index, i0) => {
          return {
            a: item.id,
            b: item.id,
            c: "319894f8-1-" + i0,
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
        }),
        j: active.value == 2
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-319894f8"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/myPublish/myPublish.js.map
