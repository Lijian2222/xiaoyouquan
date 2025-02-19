"use strict";
const common_vendor = require("../common/vendor.js");
const postStore = common_vendor.defineStore("post", () => {
  const list1 = common_vendor.ref([]);
  const list2 = common_vendor.ref([]);
  const list3 = common_vendor.ref([]);
  function handleTime(itemment) {
    const date = new Date(itemment.publishTime);
    const month = (date.getMonth() + 1).toString().padStart(2, 0);
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const formattedTime = `${month}-${day} ${hours}:${minutes}:${seconds}`;
    itemment.publishTime = formattedTime;
  }
  function formatNumber(num) {
    if (num >= 0 && num < 1e3) {
      return num.toString();
    } else if (num >= 1e3 && num < 1e4) {
      return (num / 1e3).toFixed(1) + "k";
    } else if (num >= 1e4) {
      return (num / 1e4).toFixed(1) + "w";
    } else {
      return "Number out of range";
    }
  }
  async function getList1() {
    let res = await common_vendor.index.request({
      url: "http://localhost:8080/post/query",
      method: "post",
      data: {
        "isDeleted": 0
      }
    });
    res.data.data.forEach(
      handleTime
    );
    list1.value = res.data.data;
  }
  async function getList2() {
    let res = await common_vendor.index.request({
      url: "http://localhost:8080/post/query",
      method: "post",
      data: {
        "isDeleted": 0,
        "campus": "哈尔滨工业大学"
        //暂时写死
      }
    });
    res.data.data.forEach(
      handleTime
    );
    list2.value = res.data.data;
  }
  async function getList3() {
    let res = await common_vendor.index.request({
      url: "http://localhost:8080/post/query",
      method: "post",
      data: {
        "isDeleted": 0,
        "currentUserId": 1
        //暂时写死
      }
    });
    res.data.data.forEach(
      handleTime
    );
    list3.value = res.data.data;
  }
  function notInteresting(postId) {
    list1.value = list1.value.filter((item) => item.id != postId);
    list2.value = list2.value.filter((item) => item.id != postId);
    list3.value = list3.value.filter((item) => item.id != postId);
  }
  function requestGood(postId) {
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        url: "http://localhost:8080/postGood/query",
        method: "POST",
        data: {
          "postId": postId,
          "isDeleted": 0,
          //如果点赞过且isDeleted=0
          "userId": 1
          //暂时写死
        },
        success: (res) => {
          if (res.data.data == 1) {
            resolve(true);
          } else {
            resolve(false);
          }
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }
  function addGoodNums(postId) {
    list1.value.map((item, index) => {
      if (item.id == postId) {
        item.goodNums++;
      }
      return item;
    });
    list2.value.map((item, index) => {
      if (item.id == postId) {
        item.goodNums++;
      }
      return item;
    });
    list3.value.map((item, index) => {
      if (item.id == postId) {
        item.goodNums++;
      }
      return item;
    });
  }
  function subGoodNums(postId) {
    list1.value.map((item, index) => {
      if (item.id == postId) {
        item.goodNums--;
      }
      return item;
    });
    list2.value.map((item, index) => {
      if (item.id == postId) {
        item.goodNums--;
      }
      return item;
    });
    list3.value.map((item, index) => {
      if (item.id == postId) {
        item.goodNums--;
      }
      return item;
    });
  }
  return {
    list1,
    list2,
    list3,
    getList1,
    getList2,
    getList3,
    notInteresting,
    formatNumber,
    requestGood,
    addGoodNums,
    subGoodNums
  };
});
exports.postStore = postStore;
