(this.webpackJsonpcreate=this.webpackJsonpcreate||[]).push([[0],{106:function(t,n,e){},158:function(t,n,e){},179:function(t,n,e){"use strict";e.r(n);var o=e(0),i=e.n(o),s=e(23),a=e.n(s),c=(e(105),e(106),e(183)),r=(e(178),e(158),e(39));c.a.Panel;var l=function(){return Object(r.jsx)("div",{className:"main"})},d=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,184)).then((function(n){var e=n.getCLS,o=n.getFID,i=n.getFCP,s=n.getLCP,a=n.getTTFB;e(t),o(t),i(t),s(t),a(t)}))},u=e(69),g=e.n(u),p=function(){var t=new window.BMapGL.Map("usermap"),n=new window.BMapGL.Point(116.331398,39.897445);t.centerAndZoom(n,12),t.enableScrollWheelZoom(!0),f(),h(),w()},f=function(){(new window.BMapGL.Geolocation).getCurrentPosition((function(t){0===this.getStatus()?(console.log("\u6d4f\u89c8\u5668\u5b9a\u4f4d\uff1a\u60a8\u7684\u4f4d\u7f6e\uff1a"+t.point.lng+","+t.point.lat),console.log("\u6d4f\u89c8\u5668\u5b9a\u4f4d\uff1a\u60a8\u7684\u4f4d\u7f6e\uff1a"+t.address.province+t.address.city+t.address.district+t.address.street+t.address.street_number)):alert("failed"+this.getStatus())}))},h=function(){(new window.BMapGL.LocalCity).get((function(t){console.log("IP\u5b9a\u4f4d\uff1a\u60a8\u7684\u4f4d\u7f6e\uff1a",t),console.log("IP\u5b9a\u4f4d\uff1a\u60a8\u7684\u4f4d\u7f6e\uff1a",t.name)}))},w=function(){var t=new window.BMapGL.Geolocation;t.enableSDKLocation(),t.getCurrentPosition((function(t){0===this.getStatus()?(console.log("\u5b9a\u4f4dSDK\u8f85\u52a9\u5b9a\u4f4d\uff1a\u60a8\u7684\u4f4d\u7f6e\uff1a"+t.point.lng+","+t.point.lat),console.log("\u5b9a\u4f4dSDK\u8f85\u52a9\u5b9a\u4f4d\uff1a\u60a8\u7684\u4f4d\u7f6e\uff1a"+t.address.province+t.address.city+t.address.district+t.address.street+t.address.street_number)):alert("failed"+this.getStatus())}))};(function(){g.a.get("https://api.ip.sb/geoip").then((function(t){var n=t.data,e=n.latitude,o=n.longitude;console.log(o,e,"https://api.ip.sb/geoip")})).catch((function(t){console.log(t)})),g.a.get("https://forge.speedtest.cn/api/location/info").then((function(t){var n=t.data,e=n.lat,o=n.lon;console.log(o,e,"https://forge.speedtest.cn/api/location/info")})).catch((function(t){console.log(t)})),p()})(),a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root")),d()}},[[179,1,2]]]);
//# sourceMappingURL=main.ebb12199.chunk.js.map