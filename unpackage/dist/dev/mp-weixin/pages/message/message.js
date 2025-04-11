"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
const _sfc_main = {
  __name: "message",
  setup(__props) {
    const messageList = [
      { userPictureUrl: "../../static/notice.png", username: "系统通知", messageDetail: "人才直聘新版本即将上线" },
      { userPictureUrl: "../../static/userHeader1.png", username: "张先生", messageDetail: "你好学长，我对此岗位。。。" }
    ];
    return (_ctx, _cache) => {
      return {
        a: !common_vendor.unref(store_user.userStore)().logInFlag,
        b: common_vendor.f(messageList, (item, index, i0) => {
          return {
            a: item.userPictureUrl,
            b: common_vendor.t(item.username),
            c: common_vendor.t(item.messageDetail),
            d: item.userId
          };
        }),
        c: common_vendor.unref(store_user.userStore)().logInFlag
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4c1b26cf"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/message/message.js.map
