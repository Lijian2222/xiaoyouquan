"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
const _sfc_main = {
  __name: "editInfo",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(store_user.userStore)().userHeadPicture
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4130e2dc"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/editInfo/editInfo.js.map
