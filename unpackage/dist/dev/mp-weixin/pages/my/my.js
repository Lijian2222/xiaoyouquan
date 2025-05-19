"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_user = require("../../store/user.js");
const _sfc_main = {
  __name: "my",
  setup(__props) {
    const urlParameter = common_vendor.ref("");
    return (_ctx, _cache) => {
      return {
        a: !common_vendor.unref(store_user.userStore)().logInFlag,
        b: common_vendor.unref(store_user.userStore)().userHeadPicture,
        c: common_vendor.t(common_vendor.unref(store_user.userStore)().username),
        d: "/pages/editInfo/editInfo?" + urlParameter.value,
        e: common_assets._imports_1$1,
        f: common_assets._imports_1$2,
        g: common_assets._imports_2,
        h: common_assets._imports_3,
        i: common_assets._imports_4,
        j: common_assets._imports_1$3,
        k: common_vendor.unref(store_user.userStore)().logInFlag
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2f1ef635"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map
