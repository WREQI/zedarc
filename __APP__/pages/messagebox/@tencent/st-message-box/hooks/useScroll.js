var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = function (e, r, n) {
    return new Promise(function (t, u) {
      var o = function (e) {
          try {
            i(n.next(e));
          } catch (e) {
            u(e);
          }
        },
        a = function (e) {
          try {
            i(n.throw(e));
          } catch (e) {
            u(e);
          }
        },
        i = function (e) {
          return e.done ? t(e.value) : Promise.resolve(e.value).then(o, a);
        };
      i((n = n.apply(e, r)).next());
    });
  },
  n = require("../../../../../common/vendor.js"),
  t = n.ref(!0),
  u = n.ref(!1),
  o = n.ref(null),
  a = n.ref([]),
  i = n.ref(""),
  s = n.ref({ status: !1, reason: "暂无新消息" });
function c() {
  var c = n.inject("TradeFunc");
  function v(e) {
    return c.isMaintain({ biz: "trade", broker: e });
  }
  return {
    tradeEnable: t,
    isAccountBind: u,
    highestPriorityDealer: o,
    brokerList: a,
    curBrokerCode: i,
    curBrokerCanUse: s,
    initData: function () {
      return r(
        this,
        null,
        e().mark(function r() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), c.fetchBrokerInfo();
                case 2:
                  (o.value = c.getCurrentBroker()),
                    n.StockBridge.ENV === n.EnvTypeEnum.MP &&
                      (t.value = c.getIsXcxTradeEnable()),
                    (u.value = c.isBind()),
                    (a.value = c.getBindList());
                case 6:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      );
    },
    navigateToTrade: function (n) {
      return r(
        this,
        null,
        e().mark(function r() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  c.navToBrokerPage(n);
                case 1:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      );
    },
    isMaintain: v,
    setCurBrokerCode: function (e) {
      i.value = e;
    },
    setBrokerInfo: function (e) {
      v(e.code)
        ? ((s.value.status = !1),
          (s.value.reason = "券商系统维护，服务暂停使用"))
        : e.unsupported
        ? ((s.value.status = !1), (s.value.reason = "暂无新消息"))
        : ((s.value.status = !0), (s.value.reason = ""));
    },
  };
}
var v = n.ref(!1),
  f = n.ref(!1),
  l = n.ref(!1),
  d = n.ref(!1),
  h = {};
(exports.useScroll = function () {
  var e = c().curBrokerCode;
  return {
    hoverPlat: f,
    hoverRemind: l,
    hoverTrade: v,
    hoverInterAction: d,
    setTradeHover: function (r, n) {
      n && (h[n] = r), (v.value = h[e.value]);
    },
    setCustomHover: function (e) {
      f.value = e;
    },
    setRemindHover: function (e) {
      l.value = e;
    },
    setInterActionHover: function (e) {
      d.value = e;
    },
  };
}),
  (exports.useTradeFunc = c);
