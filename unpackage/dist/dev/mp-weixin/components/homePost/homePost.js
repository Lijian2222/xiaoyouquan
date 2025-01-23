"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_post = require("../../store/post.js");
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
    viewNums: Number
  },
  setup(__props) {
    const moreVisbility = common_vendor.ref(true);
    const props = __props;
    let imageSrc = common_vendor.ref("../../static/good.png");
    common_vendor.index.request({
      //请求该用户是否点赞过这个帖子，每个帖子都会请求一次后端
      url: "http://localhost:8080/postGood/query",
      method: "POST",
      data: {
        "postId": props.id,
        "isDeleted": 0,
        //如果点赞过且isDeleted=0
        "userId": 1
        //暂时写死
      },
      success: (res) => {
        if (res.data.data == 1) {
          imageSrc.value = alternateImage;
        }
      }
    });
    function addGood() {
      if (imageSrc.value == defaultImage) {
        common_vendor.index.request({
          url: "http://localhost:8080/postGood/insert",
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
          url: "http://localhost:8080/postGood/delete",
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
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.t(__props.username),
        c: common_vendor.t(__props.time),
        d: common_assets._imports_1$1,
        e: moreVisbility.value,
        f: common_vendor.o(($event) => moreVisbility.value = false),
        g: common_assets._imports_2,
        h: common_assets._imports_3,
        i: common_vendor.o(($event) => moreVisbility.value = true),
        j: !moreVisbility.value,
        k: common_vendor.t(__props.content),
        l: common_vendor.unref(imageSrc),
        m: common_vendor.o(addGood),
        n: common_vendor.t(__props.goodNums),
        o: common_assets._imports_4,
        p: common_vendor.t(__props.commentNums),
        q: common_assets._imports_5,
        r: common_vendor.t(__props.viewNums)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-91423e98"]]);
wx.createComponent(Component);
