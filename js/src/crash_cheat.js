// build time:Wed Feb 05 2020 17:41:00 GMT+0800 (GMT+08:00)
var OriginTitle=document.title;var titleTime;document.addEventListener("visibilitychange",function(){if(document.hidden){document.title="😫 页面崩溃啦 ~";clearTimeout(titleTime)}else{document.title="😆 噫又好了~"+OriginTitle;titleTime=setTimeout(function(){document.title=OriginTitle},2e3)}});
//rebuild by neat 