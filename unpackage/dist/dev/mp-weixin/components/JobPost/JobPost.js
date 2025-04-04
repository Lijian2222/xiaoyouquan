"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_job = require("../../store/job.js");
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
    const props = __props;
    const urlParameter = common_vendor.computed(() => {
      return `id=${props.id}&userId=${props.userId}&jobName=${props.jobName}&jobDetail=${props.jobDetail}&position=${props.position}&academicAcquired=${props.academicAcquired}&experienceAcquired=${props.experienceAcquired}&jobBelonging=${props.jobBelonging}&nature=${props.nature}&nickname=${props.nickname}&publishTime=${props.publishTime}&salaryStart=${props.salaryStart}&salaryEnd=${props.salaryEnd}&salaryNums=${props.salaryNums}&campus=${props.campus}`;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(props.jobName),
        b: common_vendor.t(common_vendor.unref(store_job.jobStore)().formatSalary(props.salaryStart)),
        c: common_vendor.t(common_vendor.unref(store_job.jobStore)().formatSalary(props.salaryEnd)),
        d: common_vendor.t(props.salaryNums),
        e: common_assets._imports_0$2,
        f: common_vendor.t(props.position),
        g: common_vendor.t(props.nature),
        h: common_vendor.t(props.academicAcquired),
        i: common_vendor.t(props.experienceAcquired),
        j: common_vendor.t(props.jobBelonging),
        k: "/pages/jobContent/jobContent?" + urlParameter.value,
        l: common_assets._imports_1$3,
        m: common_vendor.t(props.nickname),
        n: common_assets._imports_2$2
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1a3dc4be"]]);
wx.createComponent(Component);
