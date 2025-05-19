"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
require("../../store/post.js");
require("../../store/user.js");
const store_environment = require("../../store/environment.js");
const _sfc_main = {
  __name: "mySkill",
  setup(__props) {
    store_environment.environmentStore().currentUrl;
    const tipFlag = common_vendor.ref(false);
    const deleteFlag = common_vendor.ref(false);
    const skillText = common_vendor.ref("");
    const skillList = common_vendor.ref([
      "掌握java语言和python语言，熟悉alibaba编程规范和restful接口规范",
      "掌握linux、docker、nacos、git、apifox、xshell、pandas以及charles工具的使用",
      "掌握spring、springMVC、springboot、mybatis-plus-join、shiro、xxl-job开发框架",
      "掌握mysql、postgres、redis数据库，熟悉mysql锁，索引以及底层存储结构",
      "掌握html、css、javascript、vue、element-ui前端技术，掌握cookie、session原理"
    ]);
    function addSkill() {
      tipFlag.value = true;
    }
    function enter() {
      tipFlag.value = false;
      skillList.value.push(skillText.value);
      skillText.value = "";
    }
    function yes(index) {
      deleteFlag.value = false;
      skillList.value.splice(index, 1);
    }
    function no() {
      deleteFlag.value = false;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(skillList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index,
            c: common_vendor.o(($event) => deleteFlag.value = true, index)
          };
        }),
        b: common_assets._imports_0$5,
        c: common_assets._imports_1,
        d: common_vendor.o(addSkill),
        e: skillText.value,
        f: common_vendor.o(($event) => skillText.value = $event.detail.value),
        g: common_vendor.o(enter),
        h: tipFlag.value,
        i: common_vendor.o(no),
        j: common_vendor.o(($event) => yes(_ctx.index)),
        k: deleteFlag.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-772b0d51"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mySkill/mySkill.js.map
