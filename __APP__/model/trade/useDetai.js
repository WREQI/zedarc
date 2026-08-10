require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../@babel/runtime/helpers/defineProperty"),
  t = require("../../common/vendor.js"),
  o = require("../../config/enum.js"),
  i = require("../../service/log/index.js"),
  a = require("../../service/connect/index.js"),
  u = require("../../config/cgi.js"),
  c = require("./Order.js"),
  s = require("../../common/components/Dialog/index.js"),
  d = require("./utils.js"),
  l = require("./useCancelOrder.js"),
  p = require("../common/useServerTime.js"),
  v = require("../../cgi/trade.js"),
  m = require("../../stores/user/useUserinfo.js"),
  f = require("./useConditionEntry.js"),
  T = require("../../service/connect/maps.js"),
  g = new i.Log();
exports.useDetail = function () {
  var i = t.getCurrentInstance().proxy,
    E = t.inject("curPageContext"),
    R = t.ref(
      !(!window || !window.__embedded__mode) && window.__embedded__mode
    );
  t.provide("embeddedMode", R);
  var A = l.useCancelOrder().cancelOrder,
    h = m.useUserinfoStore().getUserInfo,
    C = t.ref({}),
    _ = t.ref(!1),
    b = t.computed(function () {
      return o.TARGET_UNIT[C.value.stock_type] || "股";
    }),
    x = t.computed(function () {
      return C.value.isRevokable;
    }),
    S = t.computed(function () {
      return C.value.isRevoking;
    }),
    D = t.ref(""),
    k = t.computed(function () {
      var e = d.getFinalTradeState(C.value),
        r = [],
        n = {};
      switch (C.value.stock_type) {
        case o.TARGET.STOCK:
        case o.TARGET.BOND:
        case o.TARGET.DEBT:
          r = [
            (n = o.TRADE_STATE[o.TARGET.STOCK]).PARTLY,
            n.PROCESSED,
            n.REVOKINGPARTLY,
            n.REVOKEDPARTLY,
          ];
          break;
        case o.TARGET.ALLOT:
          r = [(n = o.TRADE_STATE[o.TARGET.ALLOT]).COMFIRMED];
      }
      return -1 < r.indexOf(e);
    }),
    O = t.computed(function () {
      return k.value;
    }),
    q = t.computed(function () {
      return !O.value;
    }),
    y = t.computed(function () {
      return C.value.stock_type !== o.TARGET.STOCK;
    });
  function w(t) {
    var o = t.id,
      i = t.no,
      s = t.time,
      d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      l = a.SOURCE.WEBSOCKET;
    l = a.SOURCE.AJAX;
    var p = !0;
    a.connector({
      reportScene: "tradedetail",
      source: d || l,
      scheme: T.SCHEME.TRANSDETAIL,
      beforeRequest: n({}, u.API_TRADE_QUERY, function (e) {
        var r = decodeURIComponent(s);
        return {
          id: o,
          contract_no: i,
          trade_time: r.includes("%") ? decodeURIComponent(r) : r,
          istiming: +!p,
        };
      }),
      beforeSend: n({}, T.SCHEME.TRANSDETAIL, function () {
        return this.params.beforeRequest[u.API_TRADE_QUERY]();
      }),
      upgrade: n({}, a.SOURCE.AJAX, function () {
        p = !0;
      }),
      data: n({}, u.API_TRADE_QUERY, function (e) {
        var r = e.info;
        (C.value = c.genOrder(r)), (p = !1), x.value || (_.value = !1);
      }),
      error: function (n, t) {
        return r(
          e().mark(function r() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )();
      },
    });
  }
  var U,
    I,
    j,
    L = null;
  return (
    t.onBeforeUnmount(function () {
      L && clearTimeout(L);
    }),
    {
      data: C,
      unit: b,
      revokable: x,
      revoking: S,
      hasRevokingFlag: _,
      shouldDisplayMatchDetail: k,
      shouldDisplayFees: O,
      shouldDisplayOrderTotalMoney: q,
      shouldShowPriceUnit: y,
      fetchWebsocket: w,
      onCancel:
        ((j = r(
          e().mark(function r() {
            var n, t, o, a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = p.useServerTime()),
                        (t = n.getServerTime),
                        !_.value)
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        g.warn(
                          "handle revoke action, ignored[has revoking flag]"
                        )
                      );
                    case 3:
                      return (
                        g.info("handle revoking action..."),
                        (e.prev = 4),
                        (_.value = !0),
                        (e.next = 8),
                        t()
                      );
                    case 8:
                      return (
                        (o = e.sent),
                        (a = o.marketState),
                        (e.next = 12),
                        A(C.value, a, E || i)
                      );
                    case 12:
                      (L = setTimeout(function () {
                        var e = i.$route.query;
                        w({ id: e.id, no: e.no, time: e.time });
                      }, 1e3)),
                        (e.next = 18);
                      break;
                    case 15:
                      (e.prev = 15),
                        (e.t0 = e.catch(4)),
                        (_.value = !1),
                        "PASSWORD_CANCEL" !== e.t0.retcode &&
                          "DIALOG_CANCEL" !== e.t0.retcode &&
                          s.Dialog({ context: E || i, message: e.t0.retmsg });
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[4, 15]]
            );
          })
        )),
        function () {
          return j.apply(this, arguments);
        }),
      handleToQuote: function () {
        t.index.navToQuote(C.value);
      },
      buildStep: function () {
        for (
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            t = [],
            o = 0;
          o < 3;
          o++
        )
          (t[o] = {}),
            (t[o].text = e[o]),
            (t[o].desc = r[o]),
            (t[o].icon = n[o]);
        return t;
      },
      fetchDetail:
        ((I = r(
          e().mark(function r(n) {
            var t, o, i, a, u, s, d, l;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = n.id),
                        (o = n.no),
                        (i = n.time),
                        (e.prev = 1),
                        (a = !0),
                        (u = decodeURIComponent(i)),
                        (s = {
                          id: t,
                          contract_no: o,
                          trade_time: u.includes("%")
                            ? decodeURIComponent(u)
                            : u,
                          istiming: +!a,
                        }),
                        (e.next = 7),
                        v.tradeCgi.query(s)
                      );
                    case 7:
                      (d = e.sent),
                        (l = d.info),
                        (C.value = c.genOrder(l)),
                        (a = !1),
                        x.value || (_.value = !1),
                        (e.next = 14);
                      break;
                    case 12:
                      (e.prev = 12), (e.t0 = e.catch(1));
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[1, 12]]
            );
          })
        )),
        function (e) {
          return I.apply(this, arguments);
        }),
      typeDesc: D,
      fetchDetailTag:
        ((U = r(
          e().mark(function r(n) {
            var t, o, i, a, u, c;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = n.no),
                        (o = n.time),
                        (e.prev = 1),
                        (e.next = 4),
                        h()
                      );
                    case 4:
                      if (((i = e.sent), f.hasConditionEntry(i))) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return");
                    case 7:
                      return (
                        (a = decodeURIComponent(o)),
                        (e.next = 10),
                        v.tradeCgi.queryTag({
                          contract_no: t,
                          trade_time: a.includes("%")
                            ? decodeURIComponent(a)
                            : a,
                        })
                      );
                    case 10:
                      (u = e.sent),
                        (c = u.type_desc),
                        (D.value = c || ""),
                        (e.next = 17);
                      break;
                    case 15:
                      (e.prev = 15), (e.t0 = e.catch(1));
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[1, 15]]
            );
          })
        )),
        function (e) {
          return U.apply(this, arguments);
        }),
      handleExplainAvgPrice: function () {
        var e = "";
        C.value.market === o.MARKET.HK &&
          (e =
            '<br /><p class="avg-price-tip-1">成交均价通过成交金额/成交数量计算并折算汇率，当成交金额很小时可能存在精度偏差，仅供参考。</p>'),
          s.Dialog({
            context: E || i,
            title: "成交均价的说明",
            messageType: "html",
            message:
              '<p class="avg-price-tip-1">成交均价是成交的净交易价格，不包含费用。</p>'.concat(
                e,
                '<br /><p class="avg-price-tip-2">注：“成交均价”与“成本价”是不同的概念，成本价包含了交易费用，因此成本价往往会高于成交价。</p>'
              ),
            messageAlign: "justify",
            confirmButtonText: "确定",
          });
      },
    }
  );
};
