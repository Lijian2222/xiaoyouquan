"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_post = require("../../store/post.js");
const store_environment = require("../../store/environment.js");
const defaultImage = "../../static/good.png";
const alternateImage = "../../static/good2.png";
const _sfc_main = {
  __name: "homePost",
  props: {
    id: Number,
    username: String,
    time: String,
    content: String,
    goodNums: Number,
    commentNums: Number,
    viewNums: Number,
    retweet: Number,
    signature: String
  },
  setup(__props) {
    const currentUrl = store_environment.environmentStore().currentUrl;
    const moreVisbility = common_vendor.ref(true);
    const props = __props;
    let imageSrc = common_vendor.ref("../../static/good.png");
    store_post.postStore().requestGood(props.id).then((result) => {
      if (result) {
        imageSrc.value = alternateImage;
      }
    });
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
    function addView() {
      common_vendor.index.request({
        // url:'http://localhost:8080/post/addViewNums',
        url: currentUrl + "/post/addViewNums",
        //生产环境
        method: "GET",
        data: {
          "postId": props.id
        }
      });
      store_post.postStore().addView(props.id);
    }
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_1$3,
        b: common_vendor.t(__props.username),
        c: common_vendor.t(__props.time),
        d: common_assets._imports_1$5,
        e: moreVisbility.value,
        f: common_vendor.o(($event) => moreVisbility.value = false),
        g: common_assets._imports_2$4,
        h: common_vendor.o(($event) => common_vendor.unref(store_post.postStore)().notInteresting(props.id)),
        i: common_assets._imports_3$2,
        j: common_vendor.o(($event) => moreVisbility.value = true),
        k: !moreVisbility.value,
        l: common_vendor.t(__props.content),
        m: "/pages/postContent/postContent?" + urlParameter.value,
        n: common_vendor.o(addView),
        o: common_vendor.unref(imageSrc),
        p: common_vendor.o(addGood),
        q: common_vendor.t(common_vendor.unref(store_post.postStore)().formatNumber(__props.goodNums)),
        r: common_assets._imports_4$1,
        s: common_vendor.t(common_vendor.unref(store_post.postStore)().formatNumber(__props.commentNums)),
        t: common_assets._imports_5,
        v: common_vendor.t(common_vendor.unref(store_post.postStore)().formatNumber(__props.viewNums))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-91423e98"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/homePost/homePost.js.map
