"use strict";
const common_vendor = require("../common/vendor.js");
const postStore = common_vendor.defineStore("counter", () => {
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
  async function getList1() {
    let res = await common_vendor.index.request({
      url: "http://localhost:8080/post/query",
      method: "post",
      data: {
        "isDitemted": 0
      }
    });
    res.data.forEach(
      handleTime
    );
    list1.value = res.data;
  }
  async function getList2() {
    let res = await common_vendor.index.request({
      url: "http://localhost:8080/post/query",
      method: "post",
      data: {
        "isDitemted": 0,
        "campus": "哈尔滨工业大学"
        //暂时写死
      }
    });
    res.data.forEach(
      handleTime
    );
    list2.value = res.data;
  }
  async function getList3() {
    let res = await common_vendor.index.request({
      url: "http://localhost:8080/post/query",
      method: "post",
      data: {
        "isDitemted": 0,
        "currentUserId": 1
        //暂时写死
      }
    });
    res.data.forEach(
      handleTime
    );
    list3.value = res.data;
  }
  function addGoodNums(postId) {
    console.log("111");
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
    console.log("111");
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
    addGoodNums,
    subGoodNums
  };
});
exports.postStore = postStore;
