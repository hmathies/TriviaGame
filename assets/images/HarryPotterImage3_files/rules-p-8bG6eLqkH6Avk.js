/*
 Quantcast measurement tag
 Copyright (c) 2008-2017, Quantcast Corp.
*/
(function(e,l,k){var m="twitter:title og:title title author authors article:author article:authors bt:author bt:authors sailthru.author sailthru.authors sailthru.title lv:author lv:authors lv:title".split(" "),n=function(a){return a.replace(/^[\s\ufeff\xA0]+|[\s\ufeff\xA0]+$/g,"")},p=function(a){return{}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()},t=function(a,c){var b,d;a:{for(b=0;b<m.length;b++)if(m[b]===a){b=!1;break a}b=!0}if(!c)return c;if(b){d=c.split(",");for(b=0;b<d.length;b++)d[b]=
n(d[b]);return d}return n(c.replace(/,+/g," "))},u=function(a,c,b){return a?"nc"===a?!c||!b||0>c.indexOf(b):"eq"===a?c===b:"sw"===a?0===c.indexOf(b):"ew"===a?(a=c.length-b.length,c=c.lastIndexOf(b,a),-1!==c&&c===a):"c"===a?0<=c.indexOf(b):!1:!1},f=function(a,c,b){var d;if(l.top===l.self)d=k.location.href;else{d=k.referrer;var g=k.createElement("a");g.href=d;d=g.href}u(c,d,b)?a(d):a(!1)},q=function(a,c,b){c=document.getElementsByTagName("meta");for(var d,g,e=[],f=0;f<c.length;f++)d=c[f],g=d.getAttribute("name")||
d.getAttribute("property"),g==b&&e.push(t(b,d.getAttribute("content")));0<e.length?a(e):a(!1)},h=function(a){return{labels:a}},r=function(a){return"array"===p(a)?h(a.join(",")):h(""+a)},s=function(a,c){var b=[],d;if("array"===p(c)){for(d=0;d<c.length;d++)b.push(a+"."+c[d]);return h(b.join(","))}return h(a+"."+c)};__qc.apply(null,["rules",[e,null,[[s,"Fandom.Article"]],[[q,"exactmatch","og:title"],[f,"c","fandom"]]],[e,null,[[r,"Wiki Page.Game of Thrones.Daenerys Targaryen"]],[[f,"c","gameofthrones.wikia.com/wiki/Daenerys_Targaryen"]]],
[e,null,[[r,"Wiki Page.Game of Thrones.Jon Snow"]],[[f,"c","gameofthrones.wikia.com/wiki/Jon_Snow"]]],[e,null,[[s,"Fandom.Tags"]],[[q,"exactmatch","article:tag"],[f,"c","fandom"]]]])})("p-8bG6eLqkH6Avk",window,document);