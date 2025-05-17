"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_job = require("../../store/job.js");
const store_environment = require("../../store/environment.js");
const store_user = require("../../store/user.js");
const defaultStar = "../../static/star2.png";
const alredyStar = "../../static/star3.png";
const _sfc_main = {
  __name: "JobPost",
  props: {
    id: Number,
    userId: Number,
    jobName: String,
    jobDetail: String,
    position: String,
    academicAcquired: String,
    experienceAcquired: String,
    jobBelonging: String,
    nature: String,
    nickname: String,
    publishTime: String,
    salaryStart: Number,
    salaryEnd: Number,
    salaryNums: Number,
    campus: String
  },
  setup(__props) {
    const currentUrl = store_environment.environmentStore().currentUrl;
    const starUrl = common_vendor.ref("../../static/star2.png");
    const props = __props;
    function queryFavorite() {
      return new Promise((resolve, reject2) => {
        common_vendor.index.request({
          url: currentUrl + "/favorite/query",
          //生产环境
          method: "POST",
          data: {
            "isDeleted": 0,
            "concerned": props.id,
            "status": 1,
            //1是收藏岗位，0是关注用户
            "userId": store_user.userStore().userId
          },
          success: (res) => {
            if (res.data.data.length == 0) {
              starUrl.value = defaultStar;
              resolve(true);
            } else {
              starUrl.value = alredyStar;
              resolve(false);
            }
          },
          fail: (err) => {
            reject2(err);
          }
        });
      });
    }
    queryFavorite();
    const urlParameter = common_vendor.computed(() => {
      return `id=${props.id}&userId=${props.userId}&jobName=${props.jobName}&jobDetail=${props.jobDetail}&position=${props.position}&academicAcquired=${props.academicAcquired}&experienceAcquired=${props.experienceAcquired}&jobBelonging=${props.jobBelonging}&nature=${props.nature}&nickname=${props.nickname}&publishTime=${props.publishTime}&salaryStart=${props.salaryStart}&salaryEnd=${props.salaryEnd}&salaryNums=${props.salaryNums}&campus=${props.campus}`;
    });
    function addStar() {
      if (starUrl.value == defaultStar) {
        starUrl.value = alredyStar;
        common_vendor.index.request({
          url: currentUrl + "/favorite/query",
          method: "post",
          data: {
            "concerned": props.id,
            "status": 1,
            //1是收藏岗位，0是关注用户
            "userId": store_user.userStore().userId
          },
          success: (res) => {
            if (res.data.data.length == 0) {
              common_vendor.index.request({
                // url:'http://localhost:8080/job/query',
                url: currentUrl + "/favorite/insert",
                // header: { 'content-type': 'application/x-www-form-urlencoded' },
                method: "post",
                data: {
                  "isDeleted": 0,
                  "concerned": props.id,
                  "status": 1,
                  //1是收藏岗位，0是关注用户
                  "userId": store_user.userStore().userId
                }
              });
            } else {
              common_vendor.index.request({
                // url:'http://localhost:8080/job/query',
                url: currentUrl + "/favorite/update",
                // header: { 'content-type': 'application/x-www-form-urlencoded' },
                method: "post",
                data: {
                  "isDeleted": 0,
                  "concerned": props.id,
                  "status": 1,
                  //1是收藏岗位，0是关注用户
                  "userId": store_user.userStore().userId
                }
              });
            }
          },
          fail: (err) => {
            reject(err);
          }
        });
      } else {
        starUrl.value = defaultStar;
        common_vendor.index.request({
          // url:'http://localhost:8080/job/query',
          url: currentUrl + "/favorite/update",
          // header: { 'content-type': 'application/x-www-form-urlencoded' },
          method: "post",
          data: {
            "isDeleted": 1,
            "concerned": props.id,
            "status": 1,
            //1是收藏岗位，0是关注用户
            "userId": store_user.userStore().userId
          }
        });
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(props.jobName),
        b: common_vendor.t(common_vendor.unref(store_job.jobStore)().formatSalary(props.salaryStart)),
        c: common_vendor.t(common_vendor.unref(store_job.jobStore)().formatSalary(props.salaryEnd)),
        d: common_vendor.t(props.salaryNums),
        e: starUrl.value,
        f: common_vendor.o(addStar),
        g: common_vendor.t(props.position),
        h: common_vendor.t(props.nature),
        i: common_vendor.t(props.academicAcquired),
        j: common_vendor.t(props.experienceAcquired),
        k: common_vendor.t(props.jobBelonging),
        l: "/pages/jobContent/jobContent?" + urlParameter.value,
        m: common_assets._imports_0$1,
        n: `/pages/personHome/personHome?username=${props.nickname}`,
        o: common_vendor.t(props.nickname),
        p: common_assets._imports_1$3
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1a3dc4be"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/JobPost/JobPost.js.map
