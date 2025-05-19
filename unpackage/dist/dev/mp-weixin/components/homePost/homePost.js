"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_post = require("../../store/post.js");
const store_environment = require("../../store/environment.js");
const utils_throttle = require("../../utils/throttle.js");
const defaultImage = "../../static/good.png";
const alternateImage = "../../static/good2.png";
const _sfc_main = {
  __name: "homePost",
  props: {
    id: Number,
    userId: Number,
    username: String,
    time: String,
    content: String,
    goodNums: Number,
    commentNums: Number,
    viewNums: Number,
    retweet: Number,
    signature: String,
    profilePicture: String
  },
  setup(__props) {
    const currentUrl = store_environment.environmentStore().currentUrl;
    const moreVisbility = common_vendor.ref(true);
    const props = __props;
    common_vendor.index.__f__("log", "at components/homePost/homePost.vue:27", props.profilePicture);
    const imageSrc = common_vendor.ref("../../static/good.png");
    store_post.postStore().requestGood(props.id).then((result) => {
      if (result) {
        imageSrc.value = alternateImage;
      }
    });
    const throttledAddGood = utils_throttle.throttle(addGood, 300);
    function addGood() {
      if (imageSrc.value == defaultImage) {
        common_vendor.index.request({
          // url:'http://localhost:8080/postGood/insert',
          url: currentUrl + "/postGood/insert",
          //生产环境
          method: "POST",
          data: {
            "postId": props.id,
            "isDeleted": 0,
            "userId": 1
            //暂时写死
          }
        });
        imageSrc.value = alternateImage;
        store_post.postStore().addGoodNums(props.id);
      } else {
        common_vendor.index.request({
          // url:'http://localhost:8080/postGood/delete',
          url: currentUrl + "/postGood/delete",
          //生产环境
          method: "POST",
          data: {
            "postId": props.id,
            "isDeleted": 1,
            "userId": 1
            //暂时写死
          }
        });
        imageSrc.value = defaultImage;
        store_post.postStore().subGoodNums(props.id);
      }
    }
    common_vendor.onMounted(() => {
      common_vendor.index.$on("goodImageSrc", (goodImageSrc, postId) => {
        if (props.id == postId) {
          imageSrc.value = goodImageSrc;
        }
      });
    });
    const urlParameter = common_vendor.computed(() => {
      return `id=${props.id}&username=${props.username}&time=${props.time}&content=${props.content}&goodNums=${props.goodNums}&commentNums=${props.commentNums}&viewNums=${props.viewNums}&retweet=${props.retweet}&signature=${props.signature}&imageSrc=${imageSrc.value}`;
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$2,
        b: `/pages/personHome/personHome?username=${props.username}&userId=${props.userId}`,
        c: common_vendor.t(__props.username),
        d: common_vendor.t(__props.time),
        e: common_assets._imports_1$6,
        f: moreVisbility.value,
        g: common_vendor.o(($event) => moreVisbility.value = false),
        h: common_assets._imports_2$3,
        i: common_vendor.o(($event) => common_vendor.unref(store_post.postStore)().notInteresting(props.id)),
        j: common_assets._imports_3$1,
        k: common_vendor.o(($event) => moreVisbility.value = true),
        l: !moreVisbility.value,
        m: common_vendor.t(__props.content),
        n: "/pages/postContent/postContent?" + urlParameter.value,
        o: common_vendor.o(($event) => common_vendor.unref(store_post.postStore)().addView(props.id)),
        p: imageSrc.value,
        q: common_vendor.o((...args) => common_vendor.unref(throttledAddGood) && common_vendor.unref(throttledAddGood)(...args)),
        r: common_vendor.t(common_vendor.unref(store_post.postStore)().formatNumber(__props.goodNums)),
        s: common_assets._imports_4$1,
        t: common_vendor.t(common_vendor.unref(store_post.postStore)().formatNumber(__props.commentNums)),
        v: common_assets._imports_5,
        w: common_vendor.t(common_vendor.unref(store_post.postStore)().formatNumber(__props.viewNums))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-91423e98"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/homePost/homePost.js.map
