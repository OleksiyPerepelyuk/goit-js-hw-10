import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as s}from"./assets/vendor-CZ4EWmTT.js";const a=document.getElementById("datetime-picker");document.querySelector("[data-start]");s(a,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){console.log(o[0])}});function t(o){const e=Math.floor(o/864e5),n=Math.floor(o%864e5/36e5),r=Math.floor(o%864e5%36e5/6e4),c=Math.floor(o%864e5%36e5%6e4/1e3);return{days:e,hours:n,minutes:r,seconds:c}}console.log(t(2e3));console.log(t(14e4));console.log(t(2414e4));
//# sourceMappingURL=1-timer.js.map
