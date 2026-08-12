Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var e = require("./common/vendor.js"),
  r = require("./stores/index.js"),
  i = require("./filters/index.js");
require("./adapter/wx_api.js");
var p = require("./platforms/setup.js"),
  t = require("./adapter/getApp.js"),
  s = require("./platforms/mp-weixin/setup.js");
Math;
var __sharedGlobalData =
  (typeof global !== "undefined" && global.__SAFE_GLOBAL_DATA__) || {};
var a = {
  globalData: Object.assign(__sharedGlobalData, {
    from: "",
    login: {
      qluin: "",
      qlskey: "",
      wzq_qlskey: "",
      wzq_qluin: "",
      qlappid: "wx9cf8c670ebd68ce4",
      wzq_qlappid: "wx9cf8c670ebd68ce4",
    },
    qluin: "",
    theme: "light",
    loginCode: "",
    skeySign: "",
    isSupportPlugin: !1,
    buildH5Ver: "",
  }),
};
function u() {
  var t = e.createSSRApp(a);
  return (
    p.setup(t),
    r.pinia.use(function (r) {
      var i = r.store,
        p = e.cloneDeep(i.$state);
      i.$reset = function () {
        i.$patch(p);
      };
    }),
    t.use(r.pinia),
    i.setupFilters(t),
    p.setupGlobalProperties(t),
    { app: t, pinia: r.pinia }
  );
}
module.exports = s.__uniPluginExports;
var n = u().app.mount("#app");
t.setAppVm(n), (exports.createApp = u);
