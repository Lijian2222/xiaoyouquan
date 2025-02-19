"use strict";
const common_vendor = require("../../common/vendor.js");
const store_job = require("../../store/job.js");
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
    const campusValue = common_vendor.ref("");
    const campusList = common_vendor.ref([]);
    const jobList = common_vendor.ref([]);
    const list = common_vendor.ref([1, 2, 3]);
    common_vendor.onMounted(async () => {
      campusList.value = await store_job.jobStore().queryCampus();
      console.log(campusList.value);
    });
    function selectCampus() {
      common_vendor.index.request({
        url: "http://localhost:8080/job/query",
        method: "post",
        data: {
          id: "4",
          campus: campusValue.value
        },
        success: (res) => {
          jobList.value = res.data.data;
        },
        fail: (err) => {
          reject(err);
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(selectCampus),
        b: common_vendor.o(($event) => campusValue.value = $event),
        c: common_vendor.p({
          localdata: campusList.value,
          placeholder: "请选择您的学校",
          modelValue: campusValue.value
        }),
        d: common_vendor.o(($event) => campusValue.value = $event),
        e: common_vendor.p({
          localdata: list.value,
          ["text-key"]: "text",
          ["value-key"]: "value",
          placeholder: "行业筛选",
          modelValue: campusValue.value
        }),
        f: common_vendor.o(($event) => campusValue.value = $event),
        g: common_vendor.p({
          localdata: list.value,
          ["text-key"]: "text",
          ["value-key"]: "value",
          placeholder: "职位筛选",
          modelValue: campusValue.value
        }),
        h: common_vendor.o(($event) => campusValue.value = $event),
        i: common_vendor.p({
          localdata: list.value,
          ["text-key"]: "text",
          ["value-key"]: "value",
          placeholder: "薪资范围",
          modelValue: campusValue.value
        }),
        j: common_vendor.o(($event) => campusValue.value = $event),
        k: common_vendor.p({
          localdata: list.value,
          ["text-key"]: "text",
          ["value-key"]: "value",
          placeholder: "经验要求",
          modelValue: campusValue.value
        }),
        l: common_vendor.f(jobList.value, (item, index, i0) => {
          return {
            a: item.id,
            b: item.id,
            c: "824eb1e6-5-" + i0,
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
