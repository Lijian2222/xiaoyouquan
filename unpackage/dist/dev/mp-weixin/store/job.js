"use strict";
const common_vendor = require("../common/vendor.js");
const jobStore = common_vendor.defineStore("job", () => {
  function formatSalary(salary) {
    if (typeof salary !== "number" || isNaN(salary)) {
      throw new Error("输入的工资必须是一个有效的数字");
    }
    if (salary < 1e3) {
      return salary.toString();
    } else {
      let result = salary / 1e3;
      if (result % 1 === 0) {
        return result + "k";
      } else {
        return result.toFixed(1) + "k";
      }
    }
  }
  function queryCampus() {
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        url: "http://localhost:8080/user/query",
        method: "post",
        data: {
          "id": 4
          //暂时写死
        },
        success: (res) => {
          const user = res.data.data;
          const campus = [];
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
          resolve(campus);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }
  return {
    formatSalary,
    queryCampus
  };
});
exports.jobStore = jobStore;
