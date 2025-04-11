"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
const _sfc_main = {
  __name: "register",
  setup(__props) {
    const userHeadPicture = common_vendor.ref("../../static/user.png");
    const getAvatar = (e) => {
      userHeadPicture.value = e.detail.avatarUrl;
      store_user.userStore().userHeadPicture = e.detail.avatarUrl;
    };
    const phoneNumber = common_vendor.ref("");
    const password = common_vendor.ref("");
    return (_ctx, _cache) => {
      return {
        a: phoneNumber.value,
        b: common_vendor.o(($event) => phoneNumber.value = $event.detail.value),
        c: password.value,
        d: common_vendor.o(($event) => password.value = $event.detail.value),
        e: common_vendor.o(($event) => common_vendor.unref(store_user.userStore)().logIn(phoneNumber.value, password.value)),
        f: common_vendor.o(getAvatar)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bac4a35d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/register/register.js.map
