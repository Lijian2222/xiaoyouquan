"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../store/job.js");
const store_user = require("../../store/user.js");
const store_environment = require("../../store/environment.js");
if (!Array) {
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_JobPost2 = common_vendor.resolveComponent("JobPost");
  (_easycom_uni_data_select2 + _easycom_JobPost2)();
}
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_JobPost = () => "../../components/JobPost/JobPost.js";
if (!Math) {
  (_easycom_uni_data_select + _easycom_JobPost)();
}
const _sfc_main = {
  __name: "job",
  setup(__props) {
    const currentUrl = store_environment.environmentStore().currentUrl;
    const campusValue = common_vendor.ref("");
    const campusList = common_vendor.ref([]);
    const jobList = common_vendor.ref([]);
    common_vendor.ref([1, 2, 3]);
    const PageIndex = common_vendor.ref(1);
    campusList.value = store_user.userStore().campus;
    function selectCampus(pageIndex) {
      common_vendor.index.request({
        // url:"http://localhost:8080/job/query",
        url: currentUrl + "/job/query",
        //生产环境
        method: "post",
        data: {
          // id:'4',
          "campus": campusValue.value,
          "pageIndex": pageIndex,
          "pageSize": 10
        },
        success: (res) => {
          jobList.value = [...jobList.value, ...res.data.data];
        },
        fail: (err) => {
          reject(err);
        }
      });
    }
    common_vendor.onReachBottom(() => {
      PageIndex.value = PageIndex.value + 1;
      selectCampus(PageIndex.value);
    });
    common_vendor.watch(campusValue, (newValue, oldValue) => {
      common_vendor.index.__f__("log", "at pages/job/job.vue:60", "watch触发");
      PageIndex.value = 1;
      jobList.value = [];
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => selectCampus(1)),
        b: common_vendor.o(($event) => campusValue.value = $event),
        c: common_vendor.p({
          localdata: campusList.value,
          placeholder: "请选择您的学校",
          modelValue: campusValue.value
        }),
        d: !common_vendor.unref(store_user.userStore)().logInFlag,
        e: common_vendor.f(jobList.value, (item, index, i0) => {
          return {
            a: item.id,
            b: item.id,
            c: "824eb1e6-1-" + i0,
            d: common_vendor.p({
              id: item.id,
              userId: item.userId,
              jobName: item.jobName,
              jobDetail: item.jobDetail,
              position: item.position,
              academicAcquired: item.academicAcquired,
              experienceAcquired: item.experienceAcquired,
              jobBelonging: item.jobBelonging,
              nature: item.nature,
              nickname: item.nickname,
              publishTime: item.publishTime,
              salaryStart: item.salaryStart,
              salaryEnd: item.salaryEnd,
              salaryNums: item.salaryNums,
              campus: item.campus
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-824eb1e6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/job/job.js.map
