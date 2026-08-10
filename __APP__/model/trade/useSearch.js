var e = require("../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var a = require("../../common/vendor.js"),
  n = require("../../cgi/trade.js"),
  c = require("../../config/key.js");
require("../../service/broker.js");
var o = require("../../service/aegis/utils.js"),
  s = (require("../../config/broker/11100/index.js").brokerConfig.trade || {})
    .canTradeMarket,
  u = void 0 === s ? [] : s,
  i = a.ref(""),
  l = a.ref([]),
  v = a.ref([]),
  d = a.ref(!1);
exports.useSearch = function () {
  var s,
    f,
    h = a.ref([]),
    k = a.ref(!1),
    p = a.ref(!1),
    S = a.ref(!1);
  return {
    requestingSearch: p,
    searchCode: i,
    searchData: l,
    localSearchData: v,
    holdStockData: h,
    holdStockCache: k,
    holdStockRequestDone: S,
    searchRequestDone: d,
    fetchHoldStock:
      ((f = t(
        r().mark(function e() {
          var t,
            a,
            c,
            o,
            s,
            i,
            l = arguments;
          return r().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = l.length > 0 && void 0 !== l[0] ? l[0] : {}),
                      (e.prev = 1),
                      Object.assign(t, { action: "tradable" }),
                      (e.next = 5),
                      n.tradeCgi.queryHoldStock(t)
                    );
                  case 5:
                    if (((a = e.sent), (c = []), a.holdstock))
                      for (o = 0, s = a.holdstock.length; o < s; o++)
                        ((i = a.holdstock[o]).market = i.type),
                          u.indexOf(i.market) > -1 && c.push(i);
                    (h.value = c), (S.value = !0), (e.next = 14);
                    break;
                  case 11:
                    (e.prev = 11), (e.t0 = e.catch(1)), (h.value = []);
                  case 14:
                    k.value = !0;
                  case 15:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[1, 11]]
          );
        })
      )),
      function () {
        return f.apply(this, arguments);
      }),
    search:
      ((s = t(
        r().mark(function e(t) {
          var a, c, s, v, f, h;
          return r().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((i.value = t.keyword), t.keyword)) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      ((l.value = []), void (d.value = !1))
                    );
                  case 2:
                    return (
                      (e.prev = 2),
                      (a = Object.assign({}, t, { limit: 10 })),
                      (p.value = !0),
                      (e.next = 7),
                      n.tradeCgi.search(a)
                    );
                  case 7:
                    if (((c = e.sent), (p.value = !1), (s = []), c.stock_list))
                      for (v = 0, f = c.stock_list.length; v < f; v++)
                        (h = c.stock_list[v]),
                          u.indexOf(h.market) > -1 && s.push(h);
                    (l.value = s), (d.value = !0), (e.next = 17);
                    break;
                  case 14:
                    (e.prev = 14),
                      (e.t0 = e.catch(2)),
                      (p.value = !1),
                      (d.value = !0),
                      (null == e.t0 ? void 0 : e.t0.retcode) ||
                        o.reportEventSafely(
                          "mon_trade_searchresult_handlefail",
                          { ext3: e.t0, ext4: t.keyword }
                        );
                  case 17:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[2, 14]]
          );
        })
      )),
      function (e) {
        return s.apply(this, arguments);
      }),
    getLocalSearchData: function () {
      var e = a.index.getStorageSync(c.TRADE_SEARCH_LOCAL_DATA) || [];
      v.value = e;
    },
    updateLocalSearchData: function (r) {
      var t = v.value.slice(),
        n = t.findIndex(function (e) {
          return e.code === r.code;
        });
      n >= 0 && t.splice(n, 1);
      var o = [r].concat(e(t.slice(0, 3)));
      (v.value = o), a.index.setStorageSync(c.TRADE_SEARCH_LOCAL_DATA, o);
    },
    removeAllSearchData: function () {
      (v.value = []), a.index.setStorageSync(c.TRADE_SEARCH_LOCAL_DATA, []);
    },
  };
};
