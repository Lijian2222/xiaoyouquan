"use strict";
const common_vendor = require("../common/vendor.js");
const store_environment = require("./environment.js");
const currentUrl = store_environment.environmentStore().currentUrl;
const userStore = common_vendor.defineStore("user", () => {
  const campus = [];
  function logInSuccess() {
    common_vendor.index.showToast({
      title: "登录成功",
      // 提示内容
      icon: "success",
      // 图标类型（success、loading、none）
      duration: 2e3,
      // 显示时长（毫秒）
      mask: true,
      // 是否显示透明蒙层，防止触摸穿透
      success: () => {
        common_vendor.index.__f__("log", "at store/user.js:61", "Toast 显示成功");
      }
    });
    common_vendor.index.switchTab({
      url: "/pages/index/index",
      // 替换为你的 TabBar 页面路径
      success: () => {
        common_vendor.index.__f__("log", "at store/user.js:76", "跳转成功");
      },
      fail: (err) => {
        common_vendor.index.__f__("error", "at store/user.js:79", "跳转失败", err);
      }
    });
  }
  function logIn(phoneNumber, password) {
    common_vendor.index.request({
      // url:'http://localhost:8080/user/logIn',
      url: currentUrl + "/user/logIn",
      //生产环境
      method: "post",
      data: {
        "phoneNumber": phoneNumber,
        "password": password
      },
      success: (res) => {
        const user = res.data.data;
        if (user != null) {
          common_vendor.index.__f__("log", "at store/user.js:100", "登录注册成功");
          userId.value = user.id;
          setTimeout(logInSuccess, 5e3);
          if (user.campus1 != null) {
            campus.push({
              "text": user.campus1,
              "value": user.campus1
            });
          }
          if (user.campus2 != null) {
            campus.push({
              "text": user.campus2,
              "value": user.campus2
            });
          }
          if (user.campus3 != null) {
            campus.push({
              "text": user.campus3,
              "value": user.campus3
            });
          }
          if (user.nickname != null) {
            username.value = user.nickname;
          }
          if (user.profilePicture != null) {
            userHeadPicture.value = user.profilePicture;
          }
          logInFlag.value = true;
        } else {
          common_vendor.index.__f__("log", "at store/user.js:132", "密码错误");
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  }
  const logInFlag = common_vendor.ref(false);
  const userId = common_vendor.ref(-1);
  const username = common_vendor.ref("点此建立昵称");
  const userHeadPicture = common_vendor.ref("../../static/user4.png");
  return {
    logIn,
    campus,
    logInFlag,
    userId,
    username,
    userHeadPicture
  };
});
exports.userStore = userStore;
//# sourceMappingURL=../../.sourcemap/mp-weixin/store/user.js.map
