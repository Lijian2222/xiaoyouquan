"use strict";
const common_vendor = require("../common/vendor.js");
const environmentStore = common_vendor.defineStore("environment", () => {
  const prodUrl = "https://www.xiaoyouquan.xyz:8443";
  const currentUrl = prodUrl;
  return {
    currentUrl
  };
});
exports.environmentStore = environmentStore;
//# sourceMappingURL=../../.sourcemap/mp-weixin/store/environment.js.map
