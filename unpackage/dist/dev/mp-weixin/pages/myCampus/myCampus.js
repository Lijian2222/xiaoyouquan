"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      activeTab: "bachelor"
    };
  },
  methods: {
    goBack() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    },
    switchTab(tab) {
      this.activeTab = tab;
    },
    viewDetails() {
      common_vendor.index.showToast({
        title: "正在开发中",
        icon: "none"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.activeTab === "bachelor" ? "/static/academic4.png" : "/static/academic3.png",
    b: $data.activeTab === "bachelor" ? 1 : "",
    c: $data.activeTab === "bachelor" ? 1 : "",
    d: common_vendor.o(($event) => $options.switchTab("bachelor")),
    e: $data.activeTab === "master" ? "/static/academic4.png" : "/static/academic3.png",
    f: $data.activeTab === "master" ? 1 : "",
    g: $data.activeTab === "master" ? 1 : "",
    h: common_vendor.o(($event) => $options.switchTab("master")),
    i: $data.activeTab === "doctor" ? "/static/academic4.png" : "/static/academic3.png",
    j: $data.activeTab === "doctor" ? 1 : "",
    k: $data.activeTab === "doctor" ? 1 : "",
    l: common_vendor.o(($event) => $options.switchTab("doctor")),
    m: common_assets._imports_0$6,
    n: common_assets._imports_1$5,
    o: $data.activeTab === "bachelor",
    p: common_assets._imports_2$2,
    q: $data.activeTab === "master"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/myCampus/myCampus.js.map
