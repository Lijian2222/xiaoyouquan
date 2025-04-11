"use strict";
const common_vendor = require("../common/vendor.js");
const environmentStore = common_vendor.defineStore("environment", () => {
  const prodUrl = "https://39.107.221.247:8443";
  const currentUrl = prodUrl;
  return {
    currentUrl
  };
});
exports.environmentStore = environmentStore;
//# sourceMappingURL=../../.sourcemap/mp-weixin/store/environment.js.map
