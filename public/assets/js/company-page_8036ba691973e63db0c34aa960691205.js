!function a(i,s,d){function c(e,t){if(!s[e]){if(!i[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(u)return u(e,!0);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}var r=s[e]={exports:{}};i[e][0].call(r.exports,function(t){return c(i[e][1][t]||t)},r,r.exports,a,i,s,d)}return s[e].exports}for(var u="function"==typeof require&&require,t=0;t<d.length;t++)c(d[t]);return c}({1:[function(t,e,n){"use strict";var o,r=t("../components/functions/querySelector"),a=(o=t("../pages/company/about-toggle"))&&o.__esModule?o:{default:o};var i=(0,r.qS)(".js-company-about");document.addEventListener("DOMContentLoaded",function(){null!=i&&(0,a.default)(".js-truncated-text")})},{"../components/functions/querySelector":2,"../pages/company/about-toggle":3}],2:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.qSA=n.qS=void 0;var o=document.querySelector.bind(document);n.qS=o;var r=document.querySelectorAll.bind(document);n.qSA=r},{}],3:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,r=(o=t("Cuttr"))&&o.__esModule?o:{default:o};n.default=function(t){new r.default(t,{truncate:"characters",length:273,readMore:!0,readMoreText:window.devSpaceSettings.textMore,readLessText:window.devSpaceSettings.textLess,readMoreBtnPosition:"inside",readMoreBtnSelectorClass:"company-extended__button"})}},{Cuttr:4}],4:[function(t,e,n){var o,r;o=this,r=function(){return function t(e,n){"use strict";var f=Object.create(t.prototype);f.options={elementsToTruncate:"string"==typeof e?document.querySelectorAll(e):e,originalContent:[],contentVisibilityState:[],contentTruncationState:[],truncate:"characters",length:100,ending:"...",loadedClass:"cuttr--loaded",title:!1,readMore:!1,readMoreText:"read more",readLessText:"read less",readMoreBtnPosition:"after",readMoreBtnTag:"button",readMoreBtnSelectorClass:"cuttr-readmore",readMoreBtnAdditionalClasses:"",dataIndex:"data-cuttr-index"},n&&Object.keys(n).forEach(function(t){f.options[t]=n[t]});function u(t,e,n,o){var r=t.dataset.cuttrIndex;switch(null==n&&(n=100),null==o&&(o="..."),t.dataset.cuttrMethod?t.dataset.cuttrMethod:f.options.truncate){case"characters":return e.length>n?(f.options.contentTruncationState[r]=!0,f.options.contentVisibilityState[r]=!1,e.substring(0,n-o.length)+o+" "):e;case"words":var a=e.split(/ (?=[^>]*(?:<|$))/);return a.length>n?(f.options.contentTruncationState[r]=!0,f.options.contentVisibilityState[r]=!1,a.splice(0,n).join(" ")+" "+o+" "):e;case"sentences":var i=e.match(/[^\.!\?]+[\.!\?]+/g);return i.length>n?(f.options.contentTruncationState[r]=!0,f.options.contentVisibilityState[r]=!1,i.splice(0,n).join(" ")+" "+o+" "):e;default:return e.length>n?(f.options.contentTruncationState[r]=!0,f.options.contentVisibilityState[r]=!1,e.substring(0,n-o.length)+o):e}}function l(t,e){var n,o=t,r=o.dataset.cuttrIndex,a=o.dataset.cuttrReadmore?o.dataset.cuttrReadmore:f.options.readMoreText,i=o.dataset.cuttrReadmore?o.dataset.cuttrReadless:f.options.readLessText,s=o.dataset.cuttrReadmorePosition?o.dataset.cuttrReadmorePosition:f.options.readMoreBtnPosition,d=o.dataset.cuttrReadmoreTag?o.dataset.cuttrReadmoreTag:f.options.readMoreBtnTag,c="."+f.options.readMoreBtnSelectorClass,u=o.dataset.cuttrReadmoreAdditionalClasses?o.dataset.cuttrReadmoreAdditionalClasses:f.options.readMoreBtnAdditionalClasses,l=f.options.contentVisibilityState[r]?i:a,p=" <"+d+' aria-expanded="'+(f.options.contentVisibilityState[r]?"true":"false")+'" class="'+f.options.readMoreBtnSelectorClass+" "+u+'">'+l.replace(/<[^>]*>/g,"")+"</"+d+">";if("after"==s&&o.nextElementSibling?n=o.nextElementSibling.matches(c):"inside"==s&&(n=o.querySelector(c)),!n){switch(s){case"after":o.insertAdjacentHTML("afterend",p);break;case"inside":o.insertAdjacentHTML("beforeend",p);break;default:console.log("no matching read-more button position defined")}e||("after"==s?o.nextElementSibling.addEventListener("click",function(t){t.target&&t.target.classList.contains(f.options.readMoreBtnSelectorClass)&&g(t,s)}):"inside"==s&&o.addEventListener("click",function(t){t.target&&t.target.classList.contains(f.options.readMoreBtnSelectorClass)&&g(t,s)}))}}function g(t,e){var n,o="after"==e?t.target.previousElementSibling:t.target.parentNode,r=o.innerHTML,a=o.dataset.cuttrIndex,i=o.dataset.cuttrReadmore?o.dataset.cuttrReadmore:f.options.readMoreText,s=o.dataset.cuttrReadmore?o.dataset.cuttrReadless:f.options.readLessText,d=o.dataset.cuttrLength?o.dataset.cuttrLength:f.options.length,c=o.dataset.cuttrEnding?o.dataset.cuttrEnding:f.options.ending;f.options.contentVisibilityState[a]?(n=u(o,r.trim(),d,c),o.innerHTML=n,f.options.contentVisibilityState[a]=!1,"inside"==e&&f.options.readMore&&l(o,!0),t.target.innerHTML=i.replace(/<[^>]*>/g,"")):(o.innerHTML=f.options.originalContent[a],f.options.contentVisibilityState[a]=!0,"inside"==e&&f.options.readMore&&l(o,!0),t.target.innerHTML=s.replace(/<[^>]*>/g,""))}return function(){(function(){if(!f.options.elementsToTruncate)return;"length"in f.options.elementsToTruncate||(f.options.elementsToTruncate=[f.options.elementsToTruncate]);for(var t=0;t<f.options.elementsToTruncate.length;t++){var e,n=f.options.elementsToTruncate[t],o=n.innerHTML,r=n.dataset.cuttrLength?n.dataset.cuttrLength:f.options.length,a=n.dataset.cuttrEnding?n.dataset.cuttrEnding:f.options.ending,i=n.dataset.cuttrTitle?n.dataset.cuttrTitle:f.options.title;n.setAttribute(f.options.dataIndex,t),f.options.originalContent.push(o),e=u(n,o.trim(),r,a),i&&(n.title=n.textContent.trim()),n.innerHTML=e,f.options.contentTruncationState[t]&&(f.options.readMore&&l(n),n.classList+=" "+f.options.loadedClass)}}).call(this)}(),f}},"function"==typeof define&&define.amd?define([],r):"object"==typeof e&&e.exports?e.exports=r():o.Cuttr=r(),window.jQuery&&window.Cuttr&&function(e,n){"use strict";e&&n?e.fn.Cuttr=function(t){t=e.extend({},t,{$:e});new n(this,t)}:window.fp_utils.showError("error","jQuery is required to use the jQuery Cuttr adapter!")}(window.jQuery,window.Cuttr)},{}]},{},[1]);