"use strict";
const common_vendor = require("../../common/vendor.js");
const store_post = require("../../store/post.js");
const store_user = require("../../store/user.js");
const store_environment = require("../../store/environment.js");
if (!Array) {
  const _easycom_JobPost2 = common_vendor.resolveComponent("JobPost");
  _easycom_JobPost2();
}
const _easycom_JobPost = () => "../../components/JobPost/JobPost.js";
if (!Math) {
  _easycom_JobPost();
}
const _sfc_main = {
  __name: "myFavorite",
  setup(__props) {
    const currentUrl = store_environment.environmentStore().currentUrl;
    const pageIndex = common_vendor.ref(1);
    const myFavoriteList = common_vendor.ref([]);
    async function getMyFavoriteList(pageIndex2) {
      let res = await common_vendor.index.request({
        // url:'http://localhost:8080/job/query',
        url: currentUrl + "/job/queryMyFavorite",
        // header: { 'content-type': 'application/x-www-form-urlencoded' },
        method: "post",
        data: {
          "userId": store_user.userStore().userId,
          "pageIndex": pageIndex2,
          "pageSize": 10,
          "isDeleted": 0
        }
      });
      res.data.data.forEach(
        store_post.postStore().handleTime
      );
      myFavoriteList.value = [...myFavoriteList.value, ...res.data.data];
    }
    getMyFavoriteList(pageIndex.value);
    common_vendor.onReachBottom(() => {
      pageIndex.value = pageIndex.value + 1;
      getMyFavoriteList(pageIndex.value);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(myFavoriteList.value, (item, index, i0) => {
          return {
            a: item.id,
            b: item.id,
            c: "aa6e481c-0-" + i0,
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
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aa6e481c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/myFavorite/myFavorite.js.map
