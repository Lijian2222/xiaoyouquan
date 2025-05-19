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
    let pageIndex1 = 1;
    let pageIndex2 = 1;
    let pageIndex3 = 1;
    common_vendor.onMounted(() => {
      store_post.postStore().getList1(pageIndex1);
    });
    common_vendor.watch(headTabNum, (newValue) => {
      if (newValue === 2 && store_post.postStore().list2.length === 0) {
        store_post.postStore().getList2(pageIndex2);
      } else if (newValue === 3 && store_post.postStore().list3.length === 0) {
        store_post.postStore().getList3(pageIndex3);
      }
    });
    common_vendor.onReachBottom(() => {
      if (headTabNum.value == 1) {
        pageIndex1 = pageIndex1 + 1;
        store_post.postStore().getList1(pageIndex1);
      } else if (headTabNum.value == 2) {
        pageIndex2 = pageIndex2 + 1;
        store_post.postStore().getList2(pageIndex2);
      } else {
        pageIndex3 = pageIndex3 + 1;
        store_post.postStore().getList3(pageIndex3);
      }
    });
    function checkPublish() {
      if (store_user.userStore().logInFlag) {
        common_vendor.index.navigateTo({
          url: "/pages/publish/publish"
        });
      } else {
        common_vendor.index.showToast({
          title: "请先登录",
          // 提示的内容，必填
          icon: "error"
        });
      }
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0,
        b: headTabNum.value == 1,
        c: common_vendor.o(($event) => headTabNum.value = 1),
        d: common_assets._imports_0,
        e: headTabNum.value == 2,
        f: common_vendor.o(($event) => headTabNum.value = 2),
        g: common_assets._imports_0,
        h: headTabNum.value == 3,
        i: common_vendor.o(($event) => headTabNum.value = 3),
        j: !common_vendor.unref(store_user.userStore)().logInFlag && headTabNum.value !== 1,
        k: headTabNum.value == 1
      }, headTabNum.value == 1 ? {
        l: common_vendor.f(common_vendor.unref(store_post.postStore)().list1, (item, index, i0) => {
          return {
            a: item.id,
            b: item.id,
            c: "1cf27b2a-0-" + i0,
            d: common_vendor.p({
              id: item.id,
              userId: item.userId,
              username: item.nickname,
              content: item.content,
              goodNums: item.goodNums,
              commentNums: item.commentNums,
              viewNums: item.viewNums,
              time: item.publishTime,
              retweet: item.retweet,
              signature: item.signature,
              profilePicture: item.profilePicture
            })
          };
        })
      } : headTabNum.value == 2 && common_vendor.unref(store_user.userStore)().logInFlag ? {
        n: common_vendor.f(common_vendor.unref(store_post.postStore)().list2, (item, index, i0) => {
          return {
            a: item.id,
            b: item.id,
            c: "1cf27b2a-1-" + i0,
            d: common_vendor.p({
              id: item.id,
              userId: item.userId,
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
        })
      } : headTabNum.value == 3 && common_vendor.unref(store_user.userStore)().logInFlag ? {
        p: common_vendor.f(common_vendor.unref(store_post.postStore)().list3, (item, index, i0) => {
          return {
            a: item.id,
            b: item.id,
            c: "1cf27b2a-2-" + i0,
            d: common_vendor.p({
              id: item.id,
              userId: item.userId,
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
        })
      } : {}, {
        m: headTabNum.value == 2 && common_vendor.unref(store_user.userStore)().logInFlag,
        o: headTabNum.value == 3 && common_vendor.unref(store_user.userStore)().logInFlag,
        q: common_assets._imports_1,
        r: common_vendor.o(checkPublish)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
