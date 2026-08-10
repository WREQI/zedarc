var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../common/vendor.js"),
  n = require("../../cgi/trade.js"),
  u = require("../../utils/getPlatform.js").getPlatform().isEscapeMode;
exports.useMinChart = function (i) {
  var s = a.ref([]),
    o = a.ref(!1),
    l = a.ref(!1),
    c = i.stock;
  function f() {
    return m.apply(this, arguments);
  }
  function m() {
    return (m = t(
      e().mark(function t() {
        var a, o, l, c;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (!u) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                return (
                  (e.next = 4),
                  n.tradeCgi.queryMinusChartData({
                    code: i.code.value,
                    market: i.market.value,
                  })
                );
              case 4:
                if ((a = e.sent) && !(a.length <= 0)) {
                  if (!i.isKCB.value) {
                    o = r(a);
                    try {
                      for (o.s(); !(l = o.n()).done; )
                        (c = l.value).volume = c.volume / 100;
                    } catch (e) {
                      o.e(e);
                    } finally {
                      o.f();
                    }
                  }
                  s.value = a;
                }
              case 6:
              case "end":
                return e.stop();
            }
        }, t);
      })
    )).apply(this, arguments);
  }
  return {
    minChartData: s,
    beforeShowInputMinChartState: o,
    showMinChart: l,
    queryMinsChartData: f,
    updateMinChartLatestData: function (e) {
      if (!u && l.value && c.value.isTradingHour) {
        var r = a.dayjs().format("HHmm"),
          t = s.value[s.value.length - 1];
        if (t) {
          var n = t.time;
          Number(r) + 1 === Number(n) || r === n
            ? (s.value[s.value.length - 1].price = e)
            : r > n && f();
        }
      }
    },
  };
};
