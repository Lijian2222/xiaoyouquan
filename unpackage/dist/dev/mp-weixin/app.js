"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/job/job.js";
  "./pages/message/message.js";
  "./pages/my/my.js";
  "./pages/postContent/postContent.js";
  "./pages/jobContent/jobContent.js";
  "./pages/editInfo/editInfo.js";
  "./pages/register/register.js";
  "./pages/publish/publish.js";
  "./pages/myPublish/myPublish.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:5", "App Launch");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:8", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:11", "App Hide");
  }
};
const pinia = common_vendor.createPinia();
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(pinia);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
