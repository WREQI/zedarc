require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../@babel/runtime/helpers/createClass"),
  n = require("../../@babel/runtime/helpers/typeof");
require("../../app.js");
var o = Object.defineProperty,
  t = function (e, i, t) {
    return (
      (function (e, i, n) {
        i in e
          ? o(e, i, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[i] = n);
      })(e, "symbol" != n(i) ? i + "" : i, t),
      t
    );
  },
  r = require("../aegis/platform/not-wujie.js"),
  a = require("../../utils/getPlatform.js");
require("../broker.js");
var l = require("../../config/broker/11100/index.js"),
  s = require("../../common/vendor.js"),
  c = (function () {
    function n() {
      e(this, n),
        t(this, "componentCallbacks", []),
        t(this, "inited", !1),
        this.init();
    }
    return (
      i(n, [
        {
          key: "addComponentCallback",
          value: function (e) {
            this.componentCallbacks.push(e);
          },
        },
        {
          key: "removeComponentCallback",
          value: function (e) {
            this.componentCallbacks = this.componentCallbacks.filter(function (
              i
            ) {
              return i !== e;
            });
          },
        },
        {
          key: "init",
          value: function () {
            var e = this;
            if (!this.inited) {
              this.inited = !0;
              var i = Component;
              Component = function (n) {
                return (
                  e.componentCallbacks.length > 0 &&
                    e.componentCallbacks.forEach(function (e) {
                      e(n);
                    }),
                  i(n)
                );
              };
            }
          },
        },
      ]),
      n
    );
  })(),
  u = "";
function m() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
  u = e;
}
function f() {
  return u;
}
function d() {
  return "hide" === u;
}
function h() {
  return "show" === u;
}
function p(e) {
  var i;
  if (null == (i = e.methods) ? void 0 : i.onHide) {
    var n = e.methods.onHide;
    e.methods.onHide = function () {
      "hide" !== u && n.call(this);
    };
  }
}
function v(e) {
  var i;
  if (null == (i = e.methods) ? void 0 : i.onShow) {
    var n = e.methods.onShow;
    e.methods.onShow = function () {
      "show" !== u ? n.call(this) : m();
    };
  }
}
function b(e) {
  var i;
  if (null == (i = e.pageLifetimes) ? void 0 : i.hide) {
    var n = e.pageLifetimes.hide;
    e.pageLifetimes.hide = function () {
      "hide" !== u && n.call(this);
    };
  }
}
function g(e) {
  var i;
  if (null == (i = e.pageLifetimes) ? void 0 : i.show) {
    var n = e.pageLifetimes.show;
    e.pageLifetimes.show = function () {
      "show" !== u && n.call(this);
    };
  }
}
var C = !1;
function k(e) {
  var i, n, o, t;
  try {
    if (C) return;
    null ==
      (t =
        null ==
        (o =
          null ==
          (n =
            null ==
            (i = null == requireMiniProgram ? void 0 : requireMiniProgram())
              ? void 0
              : i.main2Plugin)
            ? void 0
            : n.call(i))
          ? void 0
          : o.setBiometricsLifeTimeFlagMethods) ||
      t.call(o, {
        brokerCode: l.brokerConfig.base.code,
        setBiometricsLifeTimeFlag: m,
        isInterceptHideForBiometrics: d,
        isInterceptShowForBiometrics: h,
      }),
      (C = !0);
  } catch (i) {
    (C = !1),
      e &&
        r.aegisReporter.reportEvent("BIO_HACK_INJECTFN_FAIL", {
          ext4: JSON.stringify(i || {}),
        });
  }
}
function L() {
  var e = new c();
  e.addComponentCallback(p),
    e.addComponentCallback(b),
    e.addComponentCallback(v),
    e.addComponentCallback(g),
    k();
}
exports.getLifeTimeMethods = function () {
  var e = a.getPlatform(),
    i = e.platform,
    n = e.isMpPlugin;
  return l.brokerConfig.common.enableBiometrics &&
    n &&
    ["android", "devtools"].includes(i)
    ? {
        setBiometricsLifeTimeFlag: m,
        getBiometricsLifeTimeFlag: f,
        proxyWxComponent: L,
        injectMethodsToMain: k,
      }
    : {
        setBiometricsLifeTimeFlag: s.noop,
        getBiometricsLifeTimeFlag: function () {
          return "";
        },
        proxyWxComponent: s.noop,
        injectMethodsToMain: s.noop,
      };
};
