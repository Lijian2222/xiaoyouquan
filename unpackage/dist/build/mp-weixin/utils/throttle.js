"use strict";exports.throttle=function(t,e=300){let l=null;return function(...n){l||(l=setTimeout((()=>{t.apply(this,n),l=null}),e))}};
