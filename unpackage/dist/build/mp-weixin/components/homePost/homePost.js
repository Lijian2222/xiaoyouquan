"use strict";const e=require("../../common/vendor.js"),t=require("../../common/assets.js"),o=require("../../store/post.js"),r=require("../../store/environment.js"),s={__name:"homePost",props:{id:Number,username:String,time:String,content:String,goodNums:Number,commentNums:Number,viewNums:Number,retweet:Number,signature:String},setup(s){const n=r.environmentStore().currentUrl,u=e.ref(!0),m=s;let i=e.ref("../../static/good.png");function d(){"../../static/good.png"==i.value?(e.index.request({url:n+"/postGood/insert",method:"POST",data:{postId:m.id,isDeleted:0,userId:1}}),i.value="../../static/good2.png",o.postStore().addGoodNums(m.id)):(e.index.request({url:n+"/postGood/delete",method:"POST",data:{postId:m.id,isDeleted:1,userId:1}}),i.value="../../static/good.png",o.postStore().subGoodNums(m.id))}o.postStore().requestGood(m.id).then((e=>{e&&(i.value="../../static/good2.png")})),e.onMounted((()=>{e.index.$on("goodImageSrc",((e,t)=>{m.id==t&&(i.value=e)}))}));const a=e.computed((()=>`id=${m.id}&username=${m.username}&time=${m.time}&content=${m.content}&goodNums=${m.goodNums}&commentNums=${m.commentNums}&viewNums=${m.viewNums}&retweet=${m.retweet}&signature=${m.signature}&imageSrc=${i.value}`));function p(){e.index.request({url:n+"/post/addViewNums",method:"GET",data:{postId:m.id}}),o.postStore().addView(m.id)}return(r,n)=>({a:t._imports_1$3,b:e.t(s.username),c:e.t(s.time),d:t._imports_1$5,e:u.value,f:e.o((e=>u.value=!1)),g:t._imports_2$4,h:e.o((t=>e.unref(o.postStore)().notInteresting(m.id))),i:t._imports_3$2,j:e.o((e=>u.value=!0)),k:!u.value,l:e.t(s.content),m:"/pages/postContent/postContent?"+a.value,n:e.o(p),o:e.unref(i),p:e.o(d),q:e.t(e.unref(o.postStore)().formatNumber(s.goodNums)),r:t._imports_4$1,s:e.t(e.unref(o.postStore)().formatNumber(s.commentNums)),t:t._imports_5,v:e.t(e.unref(o.postStore)().formatNumber(s.viewNums))})}},n=e._export_sfc(s,[["__scopeId","data-v-58ffb844"]]);wx.createComponent(n);
