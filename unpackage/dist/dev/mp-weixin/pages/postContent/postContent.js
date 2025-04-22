"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_post = require("../../store/post.js");
const defaultImage = "../../static/good.png";
const alternateImage = "../../static/good2.png";
const _sfc_main = {
  __name: "postContent",
  setup(__props) {
    const options = common_vendor.ref({});
    common_vendor.onLoad((e) => {
      options.value = e;
    });
    let imageSrc = common_vendor.ref("../../static/good.png");
    store_post.postStore().requestGood(options.id).then((result) => {
      if (result) {
        imageSrc.value = alternateImage;
      }
    });
    function addGood() {
      if (options.value.imageSrc == defaultImage) {
        common_vendor.index.request({
          url: "http://localhost:8080/postGood/insert",
          method: "POST",
          data: {
            "postId": options.value.id,
            "isDeleted": 0,
            "userId": 1
            //暂时写死
          }
        });
        options.value.imageSrc = alternateImage;
        common_vendor.index.$emit("goodImageSrc", alternateImage, options.value.id);
        store_post.postStore().addGoodNums(options.value.id);
        options.value.goodNums++;
      } else {
        common_vendor.index.request({
          url: "http://localhost:8080/postGood/delete",
          method: "POST",
          data: {
            "postId": options.value.id,
            "isDeleted": 1,
            "userId": 1
            //暂时写死
          }
        });
        options.value.imageSrc = defaultImage;
        common_vendor.index.$emit("goodImageSrc", defaultImage, options.value.id);
        store_post.postStore().subGoodNums(options.value.id);
        options.value.goodNums--;
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.t(options.value.username),
        c: common_assets._imports_1$1,
        d: common_vendor.t(options.value.signature),
        e: common_vendor.t(options.value.content),
        f: common_vendor.t(options.value.time),
        g: common_assets._imports_0,
        h: common_assets._imports_3$1,
        i: common_vendor.t(common_vendor.unref(store_post.postStore)().formatNumber(options.value.retweet)),
        j: options.value.imageSrc,
        k: common_vendor.t(common_vendor.unref(store_post.postStore)().formatNumber(options.value.goodNums)),
        l: common_vendor.o(addGood),
        m: common_assets._imports_5,
        n: common_vendor.t(common_vendor.unref(store_post.postStore)().formatNumber(options.value.viewNums))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ea039cdc"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/postContent/postContent.js.map
