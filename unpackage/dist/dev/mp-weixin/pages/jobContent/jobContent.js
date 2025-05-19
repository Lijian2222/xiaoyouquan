"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_job = require("../../store/job.js");
const store_user = require("../../store/user.js");
const store_environment = require("../../store/environment.js");
const _sfc_main = {
  __name: "jobContent",
  setup(__props) {
    const currentUrl = store_environment.environmentStore().currentUrl;
    const options = common_vendor.ref({});
    options.value.salaryStart = 0;
    options.value.salaryEnd = 0;
    common_vendor.onLoad((e) => {
      options.value = e;
      if (options.value.campus == "null") {
        options.value.campus = "哈尔滨工业大学";
      }
    });
    const favorite = common_vendor.ref("收 藏");
    function addFavorite() {
      if (favorite.value == "收 藏") {
        common_vendor.index.showToast({
          title: "收藏成功",
          // 提示内容
          icon: "success",
          // 图标类型（success、loading、none）
          duration: 2e3,
          // 显示时长（毫秒）
          mask: true,
          // 是否显示透明蒙层，防止触摸穿透
          success: () => {
            common_vendor.index.__f__("log", "at pages/jobContent/jobContent.vue:32", "Toast 显示成功");
          }
        });
        common_vendor.index.request({
          url: currentUrl + "/favorite/insert",
          method: "POST",
          data: {
            "userId": store_user.userStore().userId,
            "concerned": options.value.id,
            "status": 1,
            "isDeleted": 0
          }
        });
        favorite.value = "已收藏";
      } else {
        common_vendor.index.showToast({
          title: "取消收藏成功",
          // 提示内容
          icon: "success",
          // 图标类型（success、loading、none）
          duration: 2e3,
          // 显示时长（毫秒）
          mask: true,
          // 是否显示透明蒙层，防止触摸穿透
          success: () => {
            common_vendor.index.__f__("log", "at pages/jobContent/jobContent.vue:54", "Toast 显示成功");
          }
        });
        favorite.value = "收 藏";
      }
    }
    const deliverText = common_vendor.ref("立即投递");
    common_vendor.onMounted(() => {
      common_vendor.index.request({
        url: currentUrl + "/deliver/query",
        method: "POST",
        data: {
          "userId": store_user.userStore().userId,
          "jobId": options.value.id,
          "isDeleted": 0
        },
        success: (res) => {
          if (res.data.data.length == 0) {
            deliverText.value = "立即投递";
          } else {
            deliverText.value = "已投递";
          }
        },
        fail: (err) => {
          reject(err);
        }
      });
      common_vendor.index.request({
        url: currentUrl + "/favorite/query",
        method: "POST",
        data: {
          "userId": store_user.userStore().userId,
          "concerned": options.value.id,
          "isDeleted": 0
        },
        success: (res) => {
          if (res.data.data.length == 0) {
            favorite.value = "收 藏";
          } else {
            favorite.value = "已收藏";
          }
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
    function deliver() {
      if (deliverText.value == "立即投递") {
        common_vendor.index.showToast({
          title: "投递成功",
          // 提示内容
          icon: "success",
          // 图标类型（success、loading、none）
          duration: 2e3,
          // 显示时长（毫秒）
          mask: true,
          // 是否显示透明蒙层，防止触摸穿透
          success: () => {
            common_vendor.index.__f__("log", "at pages/jobContent/jobContent.vue:123", "Toast 显示成功");
          }
        });
        deliverText.value = "已投递";
      } else {
        common_vendor.index.showToast({
          title: "请不要重复投递",
          // 提示内容
          icon: "error",
          // 图标类型（success、loading、none）
          duration: 2e3,
          // 显示时长（毫秒）
          mask: true,
          // 是否显示透明蒙层，防止触摸穿透
          success: () => {
            common_vendor.index.__f__("log", "at pages/jobContent/jobContent.vue:134", "Toast 显示成功");
          }
        });
        deliverText.value = "立即投递";
      }
      common_vendor.index.__f__("log", "at pages/jobContent/jobContent.vue:140", "正在查询是否投递过");
      common_vendor.index.__f__("log", "at pages/jobContent/jobContent.vue:141", options.value.id);
      common_vendor.index.request({
        url: currentUrl + "/deliver/query",
        method: "POST",
        data: {
          "userId": store_user.userStore().userId,
          "jobId": options.value.id,
          "isDeleted": 0
        },
        success: (res) => {
          if (res.data.data.length == 0) {
            common_vendor.index.request({
              // url:'http://localhost:8080/job/query',
              url: currentUrl + "/deliver/insert",
              // header: { 'content-type': 'application/x-www-form-urlencoded' },
              method: "post",
              data: {
                "isDeleted": 0,
                "jobId": options.value.id,
                "userId": store_user.userStore().userId
              }
            });
          } else {
            common_vendor.index.request({
              // url:'http://localhost:8080/job/query',
              url: currentUrl + "/deliver/update",
              // header: { 'content-type': 'application/x-www-form-urlencoded' },
              method: "post",
              data: {
                "isDeleted": 0,
                "jobId": options.value.id,
                "userId": store_user.userStore().userId
              }
            });
          }
        },
        fail: (err) => {
          reject(err);
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(options.value.jobName),
        b: common_vendor.t(common_vendor.unref(store_job.jobStore)().formatSalary(Number(options.value.salaryStart))),
        c: common_vendor.t(common_vendor.unref(store_job.jobStore)().formatSalary(Number(options.value.salaryEnd))),
        d: common_vendor.t(options.value.salaryNums),
        e: common_assets._imports_0$3,
        f: common_vendor.t(options.value.position),
        g: common_assets._imports_1$4,
        h: common_vendor.t(options.value.academicAcquired),
        i: common_assets._imports_2$1,
        j: common_vendor.t(options.value.experienceAcquired),
        k: common_assets._imports_0$2,
        l: common_vendor.t(options.value.nickname),
        m: common_vendor.t(options.value.campus),
        n: common_vendor.t(options.value.jobDetail),
        o: common_vendor.t(favorite.value),
        p: common_vendor.o(addFavorite),
        q: common_vendor.t(deliverText.value),
        r: common_vendor.o(deliver)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-80d4a50a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/jobContent/jobContent.js.map
