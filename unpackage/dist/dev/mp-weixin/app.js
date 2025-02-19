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
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
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
