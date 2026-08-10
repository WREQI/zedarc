var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../../common/vendor.js"),
  r = {
    mockrank: "rank/index",
    mockdeal: "deal/index",
    mockrule: "rule/index",
    mockruleXK: "rule/index",
    mockruleYS: "rule/index",
    mockhot: "hot/index",
    mockresult: "result/index",
  },
  t = function (e) {
    return e
      ? Object.keys(e)
          .map(function (n) {
            return "".concat(n, "=").concat(e[n]);
          })
          .join("&")
      : "";
  },
  o = function (n) {
    return (
      (r = this),
      null,
      (t = e().mark(function r() {
        var t, o;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  new Promise(function (e) {
                    setTimeout(function () {
                      e(getCurrentPages().pop());
                    });
                  })
                );
              case 2:
                return (
                  (t = e.sent), (o = t.options), e.abrupt("return", o[n] || "")
                );
              case 5:
              case "end":
                return e.stop();
            }
        }, r);
      })),
      new Promise(function (e, n) {
        var o = function (e) {
            try {
              a(t.next(e));
            } catch (e) {
              n(e);
            }
          },
          u = function (e) {
            try {
              a(t.throw(e));
            } catch (e) {
              n(e);
            }
          },
          a = function (n) {
            return n.done ? e(n.value) : Promise.resolve(n.value).then(o, u);
          };
        a((t = t.apply(r, null)).next());
      })
    );
    var r, t;
  },
  u = function (e, o, u) {
    "GotoTradeTab" !== e
      ? n.wx$1.navigateTo({
          url: "/pages/mockTradeNew/".concat(r[e], "?").concat(t(u)),
        })
      : 3 == u.index
      ? n.wx$1.navigateTo({ url: "/pages/mockTradeNew/home/index" })
      : n.wx$1.switchTab({ url: "/pages/index/trade" });
  },
  a = o;
(exports.getUrlParam = a), (exports.push = u);
