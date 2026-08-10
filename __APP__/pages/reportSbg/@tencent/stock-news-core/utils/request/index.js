var e = require("../../../../../../@babel/runtime/helpers/typeof"),
  r = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  o = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  c = function (e, r, o) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[r] = o);
  },
  u = function (e, t) {
    for (var o in t || (t = {})) l.call(t, o) && c(e, o, t[o]);
    if (i) {
      var n,
        u = r(i(t));
      try {
        for (u.s(); !(n = u.n()).done; ) {
          o = n.value;
          a.call(t, o) && c(e, o, t[o]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  s = require("../../../../../../common/vendor.js"),
  p = require("../knife.js"),
  d = function (r, t) {
    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      l = i.method,
      a = void 0 === l ? "post" : l,
      c = i.isShowToast,
      d = void 0 === c || c,
      b = i.headers,
      f = void 0 === b ? {} : b,
      m = a.toUpperCase(),
      v = u({}, t),
      O = r;
    return (
      "GET" === m &&
        "object" == e(v) &&
        (O = r + (r.indexOf("?") > -1 ? "&" : "?") + p.serializeObject(v)),
      new Promise(function (e, r) {
        var t,
          l,
          a,
          c =
            ((a = u(
              {
                url: O,
                header: { "Content-Type": "application/x-www-form-urlencoded" },
                method: m,
                data: v,
                disableAddLogin: !0,
                reportFrom: "news",
                forceCallback: null == i ? void 0 : i.forceCallback,
              },
              (null == i ? void 0 : i.timeout) ? { timeout: i.timeout } : {}
            )),
            o(
              a,
              n({
                success: function (r) {
                  e(r);
                },
                fail: function (e) {
                  var t = "系统繁忙，请稍后重试";
                  d && s.wx$1.showToast({ title: t, icon: "error" }),
                    r({ code: e.errno || -1003, msg: t });
                },
                complete: function () {},
              })
            ));
        f &&
          "[object Object]" === Object.prototype.toString.call(f) &&
          (c.header = u(u({}, c.header), f)),
          null == (l = null == (t = s.index) ? void 0 : t.__UNION_BRIDGE__) ||
            l.request(c);
      })
    );
  };
exports.request = d;
