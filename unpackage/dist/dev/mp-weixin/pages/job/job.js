"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_JobPost2 = common_vendor.resolveComponent("JobPost");
  (_easycom_uni_data_select2 + _easycom_JobPost2)();
}
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_JobPost = () => "../../components/JobPost/JobPost.js";
if (!Math) {
  (_easycom_uni_data_select + _easycom_JobPost)();
}
const _sfc_main = {
  __name: "job",
  setup(__props) {
    const compusValue = common_vendor.ref("");
    const list = common_vendor.ref([
      { value: 1, text: "哈尔滨工业大学" },
      { value: 2, text: "郑州大学" }
    ]);
    common_vendor.watch(compusValue, (newValue, oldValue) => {
      console.log(newValue);
    });
    const jobList = common_vendor.ref([1, 2, 3, 4, 5, 6, 7]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => compusValue.value = $event),
        b: common_vendor.p({
          localdata: list.value,
          ["text-key"]: "text",
          ["value-key"]: "value",
          placeholder: "暂无学校相关资料",
          modelValue: compusValue.value
        }),
        c: common_vendor.o(($event) => compusValue.value = $event),
        d: common_vendor.p({
          localdata: list.value,
          ["text-key"]: "text",
          ["value-key"]: "value",
          placeholder: "行业筛选",
          modelValue: compusValue.value
        }),
        e: common_vendor.o(($event) => compusValue.value = $event),
        f: common_vendor.p({
          localdata: list.value,
          ["text-key"]: "text",
          ["value-key"]: "value",
          placeholder: "职位筛选",
          modelValue: compusValue.value
        }),
        g: common_vendor.o(($event) => compusValue.value = $event),
        h: common_vendor.p({
          localdata: list.value,
          ["text-key"]: "text",
          ["value-key"]: "value",
          placeholder: "薪资范围",
          modelValue: compusValue.value
        }),
        i: common_vendor.o(($event) => compusValue.value = $event),
        j: common_vendor.p({
          localdata: list.value,
          ["text-key"]: "text",
          ["value-key"]: "value",
          placeholder: "经验要求",
          modelValue: compusValue.value
        }),
        k: common_vendor.f(jobList.value, (item, index, i0) => {
          return {
            a: item,
            b: "824eb1e6-5-" + i0
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-824eb1e6"]]);
wx.createPage(MiniProgramPage);
