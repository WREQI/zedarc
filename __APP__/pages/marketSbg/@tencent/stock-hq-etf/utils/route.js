var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../stock-hq-data/index.js"),
  r = require("../../../../../common/vendor.js"),
  n = require("../node-modules/@tencent/st-tools/dist/index.js"),
  o =
    !["mpwzq", "mpweapp"].includes("mpweapp") &&
    "undefined" != typeof navigator &&
    n.dist.detect(navigator.userAgent).env.IS_ZXG;
function a() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
  if (
    o &&
    (function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      if ("undefined" == typeof navigator) return !1;
      var t = n.dist.detect(navigator.userAgent),
        r = t.os;
      if (!r.android || !r.version) return !1;
      var o = parseInt(r.version.split(".")[0], 10);
      return Number.isFinite(o) && o <= e;
    })(10)
  ) {
    var t = { report_channel: e, index: 0 },
      a = "qqstock://GotoTradeTab?info=".concat(
        encodeURIComponent(JSON.stringify(t))
      );
    location.href = a;
  } else {
    var i = r.StockBridge.tradeFunc;
    i.navToApplyIndex({ stat: e });
  }
}
(exports.navigateToAiEntry = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = e.title,
    r = e.prompt,
    n = e.scene,
    a = void 0 === n ? "global_invest" : n,
    i = e.serverObj;
  if (!o) return !1;
  var c = i ? JSON.stringify(i) : "{}",
    u = {
      url: "qqstock://SHY?info=".concat(
        encodeURIComponent(
          JSON.stringify({
            p_key: "com.tencent.shy.search_ai",
            p_url: "semiAi?sourceFrom="
              .concat(a, "&aiDialogQuestion=")
              .concat(encodeURIComponent(t || ""), "&aiQuestionQuery=")
              .concat(encodeURIComponent(r || ""), "&serverObj=")
              .concat(encodeURIComponent(c)),
            showNav: !1,
          })
        )
      ),
      height: 0.8 * ("undefined" != typeof window ? window.screen.height : 812),
      coverColor: "#66000000",
      cornerRadius: 8,
    };
  return (
    (location.href = "qqstock://SDModal?info=".concat(
      encodeURIComponent(JSON.stringify(u))
    )),
    !0
  );
}),
  (exports.navigateToApplyIndex = a),
  (exports.navigateToBuy = function (t, n) {
    var o,
      i,
      c,
      u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return (
      (o = exports),
      (i = null),
      (c = e().mark(function o() {
        var i, c, s, d;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (t && n) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 2:
                  if ((c = r.StockBridge.tradeFunc)) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 5:
                  return (e.prev = 5), (e.next = 8), c.fetchBrokerInfo();
                case 8:
                  if (c.isBind()) {
                    e.next = 10;
                    break;
                  }
                  return e.abrupt("return", (a(u), !0));
                case 10:
                  return (
                    (s =
                      (null == (i = c.getCurrentBroker) ? void 0 : i.call(c)) ||
                      {}),
                    (d = s.code),
                    (e.next = 13),
                    c.navToBrokerPage({
                      broker: d,
                      name: "TradeStock",
                      data: { market: t, code: n, entrust_type: "buy" },
                    })
                  );
                case 13:
                  e.next = 18;
                  break;
                case 15:
                  return (
                    (e.prev = 15), (e.t0 = e.catch(5)), e.abrupt("return", !1)
                  );
                case 18:
                  return e.abrupt("return", !0);
                case 19:
                case "end":
                  return e.stop();
              }
          },
          o,
          null,
          [[5, 15]]
        );
      })),
      new Promise(function (e, t) {
        var r = function e(r) {
            try {
              a(c.next(r));
            } catch (e) {
              t(e);
            }
          },
          n = function (e) {
            try {
              a(c.throw(e));
            } catch (e) {
              t(e);
            }
          },
          a = function (t) {
            return t.done ? e(t.value) : Promise.resolve(t.value).then(r, n);
          };
        a((c = c.apply(o, i)).next());
      })
    );
  }),
  (exports.navigateToQuote = function (e, n, o) {
    var a = { market: n, scode: o };
    n &&
      o &&
      ("mpweapp" !== r.ShellTypeEnum.SHY
        ? ("wzq" === e.ENV &&
            e.routeTo({ name: "HqStock", params: { market: n, code: o } }),
          "wzq_light" === e.ENV &&
            e.routeTo({ path: "/quote/detail", query: a }),
          "mp" === e.ENV && e.routeTo({ path: "/pages/quote/quote", query: a }))
        : shy.navigateTo({
            url: "qqstock://StockDetail?info=".concat(
              encodeURIComponent(
                JSON.stringify({ code: t.utils.getSymbol(n, o), showNav: !0 })
              )
            ),
          }));
  });
