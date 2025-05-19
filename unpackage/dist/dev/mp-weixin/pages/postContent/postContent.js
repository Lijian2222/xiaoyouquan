"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_post = require("../../store/post.js");
if (!Math) {
  commentItem();
}
const commentItem = () => "../../components/commentItem/commentItem.js";
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
    const inputText = common_vendor.ref("");
    const commentList = common_vendor.ref([
      { username: "米高扬", commentContent: "我不用努力，学校会努力的", publishTime: "2025-05-15 09:30", dog: true },
      { username: "帅奥特曼", commentContent: "秋招过去了，春招也过去了", publishTime: "2025-05-15 10:28", dog: false },
      { username: "鸭子给给", commentContent: "三天学完大数据开发", publishTime: "2025-05-15 11:02", dog: false },
      { username: "冲冲冲", commentContent: "丸辣，鼠鼠毕不了业啦", publishTime: "2025-05-15 15:46", dog: false }
    ]);
    function push() {
      commentList.value.push({ username: "熊大爱睡觉", commentContent: `${inputText.value}`, publishTime: formatTimestamp(Date.now()), dog: false });
    }
    function handleNotInteresting(id) {
      commentList.value = commentList.value.filter((item) => item.id != id);
    }
    function formatTimestamp(timestamp) {
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    }
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$2,
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
              publishTime: item.publishTime,
              dog: item.dog
            })
          };
        }),
        i: inputText.value,
        j: common_vendor.o(($event) => inputText.value = $event.detail.value),
        k: common_vendor.o(push)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ea039cdc"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/postContent/postContent.js.map
