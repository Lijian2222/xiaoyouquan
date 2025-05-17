"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
require("../../store/user.js");
const _sfc_main = {
  __name: "personHome",
  setup(__props) {
    const options = common_vendor.ref({});
    common_vendor.onLoad((e) => {
      options.value = e;
    });
    const activeTab = common_vendor.ref("position");
    const jobList = common_vendor.ref([
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
    const applyJob = (jobId) => {
      common_vendor.index.showToast({
        title: "投递成功",
        icon: "success",
        duration: 2e3
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0$1,
        b: common_vendor.t(options.value.username),
        c: common_assets._imports_1$3,
        d: activeTab.value === "position"
      }, activeTab.value === "position" ? {} : {}, {
        e: activeTab.value === "position" ? 1 : "",
        f: common_vendor.o(($event) => switchTab("position")),
        g: activeTab.value === "post"
      }, activeTab.value === "post" ? {} : {}, {
        h: activeTab.value === "post" ? 1 : "",
        i: common_vendor.o(($event) => switchTab("post")),
        j: activeTab.value === "skill"
      }, activeTab.value === "skill" ? {} : {}, {
        k: activeTab.value === "skill" ? 1 : "",
        l: common_vendor.o(($event) => switchTab("skill")),
        m: activeTab.value === "position"
      }, activeTab.value === "position" ? {
        n: common_vendor.f(jobList.value, (job, index, i0) => {
          return {
            a: common_vendor.t(job.title),
            b: common_vendor.t(job.location),
            c: common_vendor.t(job.education),
            d: common_vendor.t(job.experience),
            e: common_vendor.t(job.salary),
            f: common_vendor.o(($event) => applyJob(job.id), index),
            g: index
          };
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-12d85066"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/personHome/personHome.js.map
