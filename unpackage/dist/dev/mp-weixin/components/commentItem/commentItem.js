"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const defaultImage = "../../static/good.png";
const alternateImage = "../../static/good2.png";
const _sfc_main = {
  __name: "commentItem",
  props: {
    id: Number,
    username: String,
    commentContent: String,
    publishTime: String
  },
  emits: ["changeMoney"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const imageSrc = common_vendor.ref("../../static/good.png");
    function addGood() {
      if (imageSrc.value == defaultImage) {
        imageSrc.value = alternateImage;
      } else {
        imageSrc.value = defaultImage;
      }
    }
    const moreVisbility = common_vendor.ref(true);
    const emit = __emit;
    function notInteresting() {
      emit("notInteresting", props.id);
    }
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.t(props.username),
        c: imageSrc.value,
        d: common_vendor.o(addGood),
        e: common_assets._imports_1$5,
        f: moreVisbility.value,
        g: common_vendor.o(($event) => moreVisbility.value = false),
        h: common_assets._imports_2$2,
        i: common_vendor.o(notInteresting),
        j: common_assets._imports_3$2,
        k: common_vendor.o(($event) => moreVisbility.value = true),
        l: !moreVisbility.value,
        m: common_vendor.t(props.commentContent),
        n: common_assets._imports_4$2,
        o: common_vendor.t(props.publishTime)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ebf35af5"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/commentItem/commentItem.js.map
