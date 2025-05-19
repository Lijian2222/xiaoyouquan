"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
require("../../store/job.js");
const store_environment = require("../../store/environment.js");
const store_user = require("../../store/user.js");
const _sfc_main = {
  __name: "message",
  setup(__props) {
    store_environment.environmentStore().currentUrl;
    const urlParameter = common_vendor.computed(() => {
      return "id=1&userId=1&jobName=量化金融开发工程师&jobDetail=负责金融市场产品的估值定价模型研发，并落地为可用于系统开发的文档和案例&position=杭州&academicAcquired=本科&experienceAcquired=不限&jobBelonging=互联网&nature=国企&nickname=张先生&publishTime=2025-03-19&salaryStart=20000&salaryEnd=30000&salaryNums=14&campus=哈尔滨工业大学&flag=true";
    });
    return (_ctx, _cache) => {
      return {
        a: !common_vendor.unref(store_user.userStore)().logInFlag,
        b: common_assets._imports_0$1,
        c: common_vendor.unref(store_user.userStore)().logInFlag,
        d: common_assets._imports_0$2,
        e: common_vendor.unref(store_user.userStore)().logInFlag,
        f: "/pages/messageContent/messageContent?" + urlParameter.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4c1b26cf"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/message/message.js.map
