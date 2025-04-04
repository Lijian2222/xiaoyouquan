"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_job = require("../../store/job.js");
const _sfc_main = {
  __name: "jobContent",
  setup(__props) {
    const options = common_vendor.ref({});
    options.value.salaryStart = 0;
    options.value.salaryEnd = 0;
    common_vendor.onMounted(() => {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      options.value = currentPage.options;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(options.value.jobName),
        b: common_vendor.t(common_vendor.unref(store_job.jobStore)().formatSalary(Number(options.value.salaryStart))),
        c: common_vendor.t(common_vendor.unref(store_job.jobStore)().formatSalary(Number(options.value.salaryEnd))),
        d: common_vendor.t(options.value.salaryNums),
        e: common_assets._imports_0,
        f: common_vendor.t(options.value.position),
        g: common_assets._imports_1$4,
        h: common_vendor.t(options.value.academicAcquired),
        i: common_assets._imports_2$3,
        j: common_vendor.t(options.value.experienceAcquired),
        k: common_assets._imports_1$3,
        l: common_vendor.t(options.value.nickname),
        m: common_vendor.t(options.value.campus),
        n: common_vendor.t(options.value.jobDetail)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-80d4a50a"]]);
wx.createPage(MiniProgramPage);
