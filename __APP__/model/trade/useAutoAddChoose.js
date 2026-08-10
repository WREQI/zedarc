var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../common/vendor.js"),
  n = require("../../cgi/account.js"),
  s = require("../../stores/user/useUserinfo.js"),
  a = require("../../utils/getPlatform.js"),
  u = require("../../utils/market.js"),
  i = require("./utils.js");
require("../../service/sdk/lib/api.js");
var o = require("../../service/sdk/platform/mp-weixin.js"),
  c = require("../../service/stat/mp-weixin.js"),
  f = function (e) {
    return e && "1" === e.open_self_select;
  },
  p = function (e) {
    var r = a.getPlatform(),
      n = r.isZxg,
      s = r.bizPlatformVer;
    return !(!n || !t.lt(s, "9.2")) || "1" !== e.show_self_select;
  };
(exports.useAutoAddChoose = function () {
  var a,
    u,
    i,
    o = t.ref(!1),
    l = t.ref(!1),
    v = t.ref(!0),
    x = s.useUserinfoStore(),
    d = x.getUserInfo,
    k = x.forceGetUserInfo;
  return {
    hidden: v,
    hiddenConfig:
      ((i = r(
        e().mark(function r() {
          var t, n;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), d();
                case 2:
                  (t = e.sent), (n = p(t)), (v.value = n);
                case 5:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      )),
      function () {
        return i.apply(this, arguments);
      }),
    open: o,
    submiting: l,
    getStatus:
      ((u = r(
        e().mark(function r(n) {
          var s;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.prev = 0), (e.next = 3), d();
                  case 3:
                    if (((s = e.sent), !p(s))) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("return");
                  case 6:
                    (o.value = f(s)), (e.next = 12);
                    break;
                  case 9:
                    (e.prev = 9),
                      (e.t0 = e.catch(0)),
                      n &&
                        t.index.showToast({
                          title: e.t0.retmsg || "服务器繁忙,请稍后再试",
                          icon: "none",
                        });
                  case 12:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[0, 9]]
          );
        })
      )),
      function (e) {
        return u.apply(this, arguments);
      }),
    statusSubmit:
      ((a = r(
        e().mark(function r() {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (l.value = !0),
                      (e.prev = 1),
                      (e.next = 4),
                      n.accountCgi.setUserSetting({
                        selfselectsetting: o.value ? "0" : "1",
                      })
                    );
                  case 4:
                    return (
                      (o.value = !o.value),
                      o.value
                        ? (t.index.showToast({ title: "已开启", icon: "none" }),
                          c.stat.click("trade.account.autochoose.open"))
                        : (t.index.showToast({ title: "已关闭", icon: "none" }),
                          c.stat.click("trade.account.autochoose.close")),
                      (e.next = 8),
                      k()
                    );
                  case 8:
                    e.next = 13;
                    break;
                  case 10:
                    (e.prev = 10),
                      (e.t0 = e.catch(1)),
                      t.index.showToast({
                        title: e.t0.retmsg || "服务器繁忙,请稍后再试",
                        icon: "none",
                      });
                  case 13:
                    return (e.prev = 13), (l.value = !1), e.finish(13);
                  case 16:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[1, 10, 13, 16]]
          );
        })
      )),
      function () {
        return a.apply(this, arguments);
      }),
  };
}),
  (exports.zxgAddStock = (function () {
    var t = r(
      e().mark(function r(t) {
        var n, c, l, v, x, d, k, h;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((n = t.market),
                  (c = t.action),
                  (l = t.stockCode),
                  (v = s.useUserinfoStore()),
                  (x = v.getUserInfo),
                  (d = a.getPlatform()),
                  d.isZxg)
                ) {
                  e.next = 4;
                  break;
                }
                return e.abrupt("return");
              case 4:
                return (e.next = 6), x();
              case 6:
                if (((k = e.sent), !p(k))) {
                  e.next = 9;
                  break;
                }
                return e.abrupt("return");
              case 9:
                if (f(k)) {
                  e.next = 11;
                  break;
                }
                return e.abrupt("return");
              case 11:
                if (u.isHSMarket(n)) {
                  e.next = 13;
                  break;
                }
                return e.abrupt("return");
              case 13:
                if (i.isBuyAction(c)) {
                  e.next = 15;
                  break;
                }
                return e.abrupt("return");
              case 15:
                (h = (u.getMarketPYName(n) || "") + l),
                  o.sdk.addStockToGroup({ stockCode: h, silent: !0 });
              case 17:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
    return function (e) {
      return t.apply(this, arguments);
    };
  })());
