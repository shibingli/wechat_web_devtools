"use strict";!function(require,directRequire){const a=require('./015fdda1d1aad2fb64ce9f97d3c60553.js');var b=[];setInterval(()=>{let a=Date.now(),c=[];b.forEach((b)=>{a-b.ts<300000||b.attached?c.push(b):b.distroy()}),b=c},600000),module.exports={get:function(c,d){let e;for(let a=0,f=b.length;a<f;a++)if(b[a].type==c&&!b[a].attached){e=b[a],e.deviceInfo=d;break}return e||(e=new a(c,d),b.push(e)),e},getAnyAttached(a){let c;for(let d=0,e=b.length;d<e;d++)if(b[d].type==a&&b[d].attached){c=b[d];break}return c||null}}}(require("lazyload"),require);