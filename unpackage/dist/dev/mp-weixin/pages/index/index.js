"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_post = require("../../store/post.js");
const store_user = require("../../store/user.js");
const store_environment = require("../../store/environment.js");
if (!Array) {
  const _easycom_homePost2 = common_vendor.resolveComponent("homePost");
  _easycom_homePost2();
}
const _easycom_homePost = () => "../../components/homePost/homePost.js";
if (!Math) {
  _easycom_homePost();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    store_environment.environmentStore().currentUrl;
    const headTabNum = common_vendor.ref(1);
    const getList1 = store_post.postStore().getList1;
    getList1();
    const getList2 = store_post.postStore().getList2;
    getList2();
    const getList3 = store_post.postStore().getList3;
    getList3();
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_2,
        b: headTabNum.value == 1,
        c: common_vendor.o(($event) => headTabNum.value = 1),
        d: common_assets._imports_2,
        e: headTabNum.value == 2,
        f: common_vendor.o(($event) => headTabNum.value = 2),
        g: common_assets._imports_2,
        h: headTabNum.value == 3,
        i: common_vendor.o(($event) => headTabNum.value = 3),
        j: !common_vendor.unref(store_user.userStore)().logInFlag && headTabNum.value !== 1,
        k: common_vendor.f(common_vendor.unref(store_post.postStore)().list1, (item, index, i0) => {
          return {
            a: item.id,
            b: item.id,
            c: "1cf27b2a-0-" + i0,
            d: common_vendor.p({
              id: item.id,
              username: item.nickname,
              content: item.content,
              goodNums: item.goodNums,
              commentNums: item.commentNums,
              viewNums: item.viewNums,
              time: item.publishTime,
              retweet: item.retweet,
              signature: item.signature
            })
          };
        }),
        l: headTabNum.value == 1,
        m: common_vendor.f(common_vendor.unref(store_post.postStore)().list2, (item, index, i0) => {
          return {
            a: item.id,
            b: item.id,
            c: "1cf27b2a-1-" + i0,
            d: common_vendor.p({
              id: item.id,
              username: item.nickname,
              content: item.content,
              goodNums: item.goodNums,
              commentNums: item.commentNums,
              viewNums: item.viewNums,
              time: item.publishTime,
              retweet: item.retweet,
              signature: item.signature
            })
          };
        }),
        n: headTabNum.value == 2 && common_vendor.unref(store_user.userStore)().logInFlag,
        o: common_vendor.f(common_vendor.unref(store_post.postStore)().list3, (item, index, i0) => {
          return {
            a: item.id,
            b: item.id,
            c: "1cf27b2a-2-" + i0,
            d: common_vendor.p({
              id: item.id,
              username: item.nickname,
              content: item.content,
              goodNums: item.goodNums,
              commentNums: item.commentNums,
              viewNums: item.viewNums,
              time: item.publishTime,
              retweet: item.retweet,
              signature: item.signature
            })
          };
        }),
        p: headTabNum.value == 3 && common_vendor.unref(store_user.userStore)().logInFlag,
        q: common_assets._imports_1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
