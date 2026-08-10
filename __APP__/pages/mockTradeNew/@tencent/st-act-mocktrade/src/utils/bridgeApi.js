var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  u = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  i = function (e, t) {
    for (var i in t || (t = {})) o.call(t, i) && u(e, i, t[i]);
    if (n) {
      var a,
        s = r(n(t));
      try {
        for (s.s(); !(a = s.n()).done; ) {
          i = a.value;
          c.call(t, i) && u(e, i, t[i]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  a = require("../../../../../../common/vendor.js"),
  s = require("../services/BaseController.js");
require("../../../../js-cookie/src/js.cookie.js");
var p = { headers: { "Content-Type": "application/json" } };
"mp" === a.StockBridge.ENV || location.host,
  (exports.getChooseList = function () {
    var r = { appid: "wx9cf8c670ebd68ce4", check: 11 };
    return (
      (r = i(
        {
          app: "zxg_xcx",
          openid: a.StockBridge.getStorage("_qluin"),
          fskey: a.StockBridge.getStorage("_qlskey"),
        },
        r
      )),
      a.StockBridge.request(
        s.STOCK_CHOOSE_LIST,
        a.RequestTypeEnum.GET,
        i({}, r)
      ).then(function (r) {
        return (
          (t = exports),
          null,
          (n = e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt("return", r);
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, t);
          })),
          new Promise(function (e, r) {
            var o = function (e) {
                try {
                  u(n.next(e));
                } catch (e) {
                  r(e);
                }
              },
              c = function (e) {
                try {
                  u(n.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              u = function (r) {
                return r.done
                  ? e(r.value)
                  : Promise.resolve(r.value).then(o, c);
              };
            u((n = n.apply(t, null)).next());
          })
        );
        var t, n;
      })
    );
  }),
  (exports.getChooseStatus = function (e) {
    var r = { appid: "wx9cf8c670ebd68ce4", check: 11, stocks: e };
    return (
      (r = i(
        {
          app: "zxg_xcx",
          openid: a.StockBridge.getStorage("_qluin"),
          fskey: a.StockBridge.getStorage("_qlskey"),
        },
        r
      )),
      a.StockBridge.request(
        s.STOCK_ADD_STATUS,
        a.RequestTypeEnum.GET,
        i({}, r)
      ).then(function (e) {
        return e;
      })
    );
  }),
  (exports.getH5Userinfo = function () {
    return a.StockBridge.request(
      s.USERINFO_CGI,
      a.RequestTypeEnum.GET,
      { dealer: 1, detail: 1 },
      p
    ).then(function (e) {
      return e;
    });
  }),
  (exports.getStockRank = function (e) {
    return a.StockBridge.request(s.API_STOCK_RANK, a.RequestTypeEnum.GET, {
      rank_type: e,
    }).then(function (e) {
      return e;
    });
  });
