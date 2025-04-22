"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_environment = require("../../store/environment.js");
const store_user = require("../../store/user.js");
const _sfc_main = {
  __name: "publish",
  setup(__props) {
    const currentUrl = store_environment.environmentStore().currentUrl;
    const active = common_vendor.ref(1);
    const postTextAreaValue = common_vendor.ref("");
    const jobTitle = common_vendor.ref("");
    const jobTextAreaValue = common_vendor.ref("");
    const position = common_vendor.ref("");
    const jobBelonging = common_vendor.ref("");
    const jobNature = common_vendor.ref("");
    const jobAcademic = common_vendor.ref("");
    const jobExperience = common_vendor.ref("");
    const jobSalaryStart = common_vendor.ref(1e3);
    const jobSalaryEnd = common_vendor.ref(5e3);
    const jobSalaryNums = common_vendor.ref(12);
    function insertPost() {
      if (active.value == 1) {
        common_vendor.index.request({
          url: currentUrl + "/post/insert",
          method: "POST",
          data: {
            content: postTextareaValue.value,
            userId: store_user.userStore().userId,
            publishTime: Date.now()
          }
        });
      } else {
        common_vendor.index.request({
          url: currentUrl + "/job/insert",
          method: "POST",
          data: {
            "userId": store_user.userStore().userId,
            "jobName": jobTitle.value,
            "jobDetail": jobTextAreaValue.value,
            "position": position.value,
            "nature": jobNature.value,
            "academicAcquired": jobAcademic.value,
            "experienceAcquired": jobExperience.value,
            "jobBelonging": jobBelonging.value,
            "publishTime": Date().now,
            "salaryStart": jobSalaryStart.value,
            "salaryEnd": jobSalaryEnd.value,
            "salaryNums": jobSalaryNums.value
          }
        });
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: active.value == 1,
        c: common_vendor.o(($event) => active.value = 1),
        d: common_assets._imports_0,
        e: active.value == 2,
        f: common_vendor.o(($event) => active.value = 2),
        g: postTextAreaValue.value,
        h: common_vendor.o(($event) => postTextAreaValue.value = $event.detail.value),
        i: active.value == 1,
        j: jobTitle.value,
        k: common_vendor.o(($event) => jobTitle.value = $event.detail.value),
        l: jobTextAreaValue.value,
        m: common_vendor.o(($event) => jobTextAreaValue.value = $event.detail.value),
        n: jobBelonging.value,
        o: common_vendor.o(($event) => jobBelonging.value = $event.detail.value),
        p: position.value,
        q: common_vendor.o(($event) => position.value = $event.detail.value),
        r: jobNature.value,
        s: common_vendor.o(($event) => jobNature.value = $event.detail.value),
        t: jobAcademic.value,
        v: common_vendor.o(($event) => jobAcademic.value = $event.detail.value),
        w: jobExperience.value,
        x: common_vendor.o(($event) => jobExperience.value = $event.detail.value),
        y: jobSalaryStart.value,
        z: common_vendor.o(($event) => jobSalaryStart.value = $event.detail.value),
        A: jobSalaryEnd.value,
        B: common_vendor.o(($event) => jobSalaryEnd.value = $event.detail.value),
        C: jobSalaryNums.value,
        D: common_vendor.o(($event) => jobSalaryNums.value = $event.detail.value),
        E: active.value == 2,
        F: common_vendor.o(insertPost)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bfce3555"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/publish/publish.js.map
