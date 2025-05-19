"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_job = require("../../store/job.js");
require("../../store/user.js");
const store_environment = require("../../store/environment.js");
const _sfc_main = {
  __name: "messageContent",
  setup(__props) {
    store_environment.environmentStore().currentUrl;
    const options = common_vendor.ref({});
    options.value.salaryStart = 0;
    options.value.salaryEnd = 0;
    common_vendor.onLoad((e) => {
      options.value = e;
      if (options.value.campus == "null") {
        options.value.campus = "哈尔滨工业大学";
      }
      if (options.value.flag == "false") {
        messageList.value = [];
        jobFlag.value = false;
        common_vendor.index.__f__("log", "at pages/messageContent/messageContent.vue:23", "jobFlag.value=false");
      }
    });
    const messageList = common_vendor.ref([
      "你好，学长",
      "这个岗位的内推还有吗"
    ]);
    const inputText = common_vendor.ref("");
    function push() {
      messageList.value.push(inputText.value);
      inputText.value = "";
    }
    const jobFlag = common_vendor.ref(true);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(options.value.nickname),
        b: jobFlag.value
      }, jobFlag.value ? {
        c: common_vendor.t(options.value.jobName),
        d: common_vendor.t(common_vendor.unref(store_job.jobStore)().formatSalary(Number(options.value.salaryStart))),
        e: common_vendor.t(common_vendor.unref(store_job.jobStore)().formatSalary(Number(options.value.salaryEnd))),
        f: common_vendor.t(options.value.salaryNums),
        g: common_assets._imports_0$3,
        h: common_vendor.t(options.value.position),
        i: common_assets._imports_1$4,
        j: common_vendor.t(options.value.academicAcquired),
        k: common_assets._imports_2$1,
        l: common_vendor.t(options.value.experienceAcquired),
        m: common_vendor.t(options.value.jobDetail)
      } : {}, {
        n: common_vendor.f(messageList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        o: common_assets._imports_0$2,
        p: inputText.value,
        q: common_vendor.o(($event) => inputText.value = $event.detail.value),
        r: common_vendor.o(push)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-20721cfe"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/messageContent/messageContent.js.map
