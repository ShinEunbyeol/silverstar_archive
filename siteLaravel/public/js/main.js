(()=>{"use strict";function t(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){l=!0,u=t},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw u}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var n="activeMenu",r=location.href.split("/"),o=r.length;function i(e){var r,o;-1!=e.indexOf("-")?(r=e.split("-")[0],o=e):r=e;var i=document.querySelectorAll("."+n),u=document.getElementById(r),a=document.getElementById(r+"-side");void 0===o&&(o=function(t){for(var e=t.firstChild;null!=e&&3==e.nodeType;)e=e.nextSibling;return e}(a).getAttribute("id"));var l,c=document.getElementById(o),d=t(i);try{for(d.s();!(l=d.n()).done;){l.value.classList.remove(n)}}catch(t){d.e(t)}finally{d.f()}u.classList.add(n),a.classList.add(n),c.classList.add(n)}document.addEventListener("DOMContentLoaded",(function(){i(r[o-1]),document.querySelector("body").addEventListener("mousewheel",(function(){var e,n=this.scrollTop,r=document.querySelector("#header").querySelector(".activeMenu").getAttribute("id"),o=t(document.querySelectorAll(".contentContainer"));try{for(o.s();!(e=o.n()).done;){var u=e.value;if(n>=u.getBoundingClientRect().top+n)i(r+"-"+u.getAttribute("id"))}}catch(t){o.e(t)}finally{o.f()}})),document.querySelectorAll(".eachMenu").forEach((function(t){return t.addEventListener("click",(function(){var e=t.getAttribute("id");if("api"==e||"htmlcss"==e)return swal({text:"준비 중입니다 :)",icon:"warning"}),!1;i(e),function(t){if(-1!=t.indexOf("-")){var e=t.split("-")[1];document.querySelector("#"+e).scrollIntoView({behavior:"smooth"})}else location.href="/"+t}(e)}))}))}))})();