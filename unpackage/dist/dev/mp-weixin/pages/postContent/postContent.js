"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_post = require("../../store/post.js");
if (!Math) {
  commentItem();
}
const commentItem = () => "../../components/commentItem/commentItem.js";
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
    const commentList = common_vendor.ref([
      { id: 1, username: "米高扬", commentContent: "我不用努力，学校会努力的", publishTime: "2025-05-15 09:30" },
      { id: 2, username: "帅奥特曼", commentContent: "秋招过去了，春招也过去了", publishTime: "2025-05-15 10:28" },
      { id: 3, username: "鸭子给给", commentContent: "三天学完大数据开发", publishTime: "2025-05-15 11:02" },
      { id: 4, username: "冲冲冲", commentContent: "丸辣，鼠鼠毕不了业啦", publishTime: "2025-05-15 15:46" }
    ]);
    function handleNotInteresting(id) {
      commentList.value = commentList.value.filter((item) => item.id != id);
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
        h: common_vendor.f(commentList.value, (item, index, i0) => {
          return {
            a: item.id,
            b: item.id,
            c: common_vendor.o(handleNotInteresting, item.id),
            d: "ea039cdc-0-" + i0,
            e: common_vendor.p({
              id: item.id,
              username: item.username,
              commentContent: item.commentContent,
              publishTime: item.publishTime
            })
          };
        }),
        i: common_assets._imports_3$1,
        j: common_vendor.t(common_vendor.unref(store_post.postStore)().formatNumber(options.value.retweet)),
        k: options.value.imageSrc,
        l: common_vendor.t(common_vendor.unref(store_post.postStore)().formatNumber(options.value.goodNums)),
        m: common_vendor.o(addGood),
        n: common_assets._imports_5,
        o: common_vendor.t(common_vendor.unref(store_post.postStore)().formatNumber(options.value.viewNums))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ea039cdc"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/postContent/postContent.js.map
