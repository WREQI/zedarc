var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, n) {
    return new Promise(function (r, a) {
      var o = function (e) {
          try {
            p(n.next(e));
          } catch (e) {
            a(e);
          }
        },
        c = function (e) {
          try {
            p(n.throw(e));
          } catch (e) {
            a(e);
          }
        },
        p = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(o, c);
        };
      p((n = n.apply(e, t)).next());
    });
  },
  n = require("../../../../../../../common/vendor.js");
require("../../../../stock-utils/lib/appInfo/index.js");
var r = require("../../cp-util/navigator/index.js"),
  a = {
    mpweapp: "微证券",
    mpwzq: "微证券",
    stock: "微证券",
    wzqlight: "微证券",
    hippy: "微证券",
  };
n.wx$1.getAccountInfoSync();
var o = {
    setup: function (o, c) {
      var p = this,
        u = (c.emit, n.ref("")),
        i = n.ref(""),
        m = n.ref(""),
        l = n.ref(a),
        s = function (r) {
          return t(
            p,
            null,
            e().mark(function t() {
              var a, o, c, p, u, i;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((e.prev = 0),
                          (a = {
                            mock_trade_rules: 50,
                            mock_trade_wzq_permit: 51,
                            mock_trade_wzq_privacy: 52,
                          })[r])
                        ) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt("return", void (m.value = ""));
                      case 4:
                        return (
                          (e.next = 6),
                          n.Wuji.get({
                            appid: "base",
                            schemaid: "protocol",
                            filter: encodeURIComponent("id = ".concat(a[r])),
                          })
                        );
                      case 6:
                        (o = e.sent),
                          (c = (o.data && o.data[0]) || {}),
                          (p = c.content),
                          (u = void 0 === p ? "{}" : p),
                          (i = JSON.parse(u) || {}),
                          (m.value = i.content || ""),
                          (e.next = 17);
                        break;
                      case 14:
                        (e.prev = 14), (e.t0 = e.catch(0)), (m.value = "");
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                null,
                [[0, 14]]
              );
            })
          );
        },
        d = function () {
          return t(
            p,
            null,
            e().mark(function t() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = decodeURIComponent),
                        (e.next = 3),
                        r.getUrlParam("ruleName")
                      );
                    case 3:
                      if (((e.t1 = e.sent), e.t1)) {
                        e.next = 6;
                        break;
                      }
                      e.t1 = "腾讯".concat(l.value.mpweapp, "模拟炒股规则");
                    case 6:
                      return (
                        (e.t2 = e.t1),
                        (u.value = (0, e.t0)(e.t2)),
                        (e.t3 = decodeURIComponent),
                        (e.next = 11),
                        r.getUrlParam("ruleid")
                      );
                    case 11:
                      if (((e.t4 = e.sent), e.t4)) {
                        e.next = 14;
                        break;
                      }
                      e.t4 = "mock_trade_rules";
                    case 14:
                      (e.t5 = e.t4), (i.value = (0, e.t3)(e.t5)), s(i.value);
                    case 17:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          );
        };
      return (
        d(),
        n.onActivated(function () {
          d();
        }),
        {
          name: u,
          id: i,
          ruleContent: m,
          platformMap: l,
          onShareAppMessage: function () {
            return {
              title: "我在腾讯模拟炒股周赛赚大了",
              path: "/pages/mockTrade/src/pages/home/index",
              imageUrl:
                "https://wzq.gtimg.com/image/mp-weapp/index/share-big.jpg",
            };
          },
          init: d,
          goXK: function () {
            var e = encodeURIComponent(
                "腾讯".concat(l.value.mpweapp, "软件许可协议")
              ),
              t = encodeURIComponent("mock_trade_wzq_permit");
            "mpweapp" === n.ShellTypeEnum.SHY
              ? r.push(
                  "qqstock://com.tencent.shy.mock_trade/mockruleXK?ruleName="
                    .concat(e, "&ruleid=")
                    .concat(t),
                  "shy",
                  { title: "模拟炒股", showNav: !0 }
                )
              : r.push("mockruleXK", "hippy", {
                  title: "模拟炒股",
                  showNav: !0,
                  ruleName: e,
                  ruleid: t,
                });
          },
          goYS: function () {
            var e = encodeURIComponent(
                "腾讯".concat(l.value.mpweapp, "隐私条款")
              ),
              t = encodeURIComponent("mock_trade_wzq_privacy");
            "mpweapp" === n.ShellTypeEnum.SHY
              ? r.push(
                  "qqstock://com.tencent.shy.mock_trade/mockruleYS?ruleName="
                    .concat(e, "&ruleid=")
                    .concat(t),
                  "shy",
                  { title: "模拟炒股", showNav: !0 }
                )
              : r.push("mockruleYS", "hippy", {
                  title: "模拟炒股",
                  showNav: !0,
                  ruleName: e,
                  ruleid: t,
                });
          },
          StockBridge: n.StockBridge,
        }
      );
    },
  },
  c = n._export_sfc(o, [
    [
      "render",
      function (e, t, r, a, o, c) {
        return n.e(
          { a: n.t(a.name), b: a.ruleContent, c: "mock_trade_rules" === a.id },
          "mock_trade_rules" === a.id
            ? {
                d: n.t(
                  "《腾讯".concat(a.platformMap.mpweapp, "软件许可协议》")
                ),
                e: n.o(function () {
                  return a.goXK && a.goXK.apply(a, arguments);
                }, 1217),
                f: n.t("《腾讯".concat(a.platformMap.mpweapp, "隐私条款》")),
                g: n.o(function () {
                  return a.goYS && a.goYS.apply(a, arguments);
                }, 1218),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-83b144b8"],
  ]);
wx.createComponent(c);
