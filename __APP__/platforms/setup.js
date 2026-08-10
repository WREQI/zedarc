require("../app.js");
var e = require("../common/vendor.js"),
  i = require("./mp-weixin/setup.js"),
  o = require("../service/abt/mp-weixin.js");
require("../service/sdk/lib/api.js");
var n = require("../service/sdk/platform/mp-weixin.js"),
  t = require("../service/login/mp.js"),
  r = require("../service/stat/mp-weixin.js"),
  s = require("../service/log/index.js"),
  a = require("../service/navToQuote.js"),
  l = require("../stores/app/context.js");
(exports.setup = function (n) {
  o.ABT.proxy({ stat: r.stat }),
    (global.getVm = function () {
      var e;
      return (
        (null == (e = null == n ? void 0 : n.$options) ? void 0 : e.globalData)
          ? (n.globalData = n.$options.globalData)
          : (n.globalData = {}),
        n
      );
    }),
    (e.index.navToQuote = a.navToQuote);
  var t = e.index.showLoading,
    s = e.index.hideLoading;
  (e.index.showLoading = function (i) {
    (e.index.showLoadingInstance = i), t(i);
  }),
    (e.index.hideLoading = function () {
      var i =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (e.index.showLoadingInstance = void 0),
        (i.complete = function (e) {}),
        s(i);
    });
  var l = e.index.hideToast;
  (e.index.hideToast = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (e.complete = function (e) {}), l(e);
  }),
    i.setup(n);
}),
  (exports.setupGlobalProperties = function (e) {
    (e.config.globalProperties.$log = new s.Log()),
      (e.config.globalProperties.$sdk = n.sdk),
      (e.config.globalProperties.$stat = r.stat),
      (e.config.globalProperties.$login = t.login),
      (e.config.globalProperties.selectComponent = function (e) {
        var i,
          o,
          n =
            (null == (o = null == (i = this.$el) ? void 0 : i.querySelector)
              ? void 0
              : o.call(i, e)) || this.$el.nextElementSibling;
        return n && n.__vueParentComponent.parent.ctx;
      }),
      (l.useAppContext().login = t.login),
      (l.useAppContext().stat = r.stat);
  });
