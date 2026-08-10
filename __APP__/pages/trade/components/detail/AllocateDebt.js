require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  t = require("../../../../model/trade/useDetai.js"),
  r = require("../../../../config/enum.js"),
  a = require("../../../../filters/date.js"),
  o = require("../../../../model/trade/utils.js"),
  n = r.TRADE_STATE[r.TARGET.ALLOCATE_DEBT],
  s = {
    components: {
      StSteps: function () {
        return "../../../../common/components/Steps/index.js";
      },
    },
    setup: function () {
      var r = e.getCurrentInstance().proxy,
        s = t.useDetail(),
        i = s.fetchWebsocket,
        u = s.data,
        l = s.unit,
        d = s.buildStep,
        c = s.shouldDisplayMatchDetail,
        p = s.shouldDisplayOrderTotalMoney,
        m = e.ref(0),
        f = e.computed(function () {
          var e = u.value,
            t = e.trade_time,
            r = void 0 === t ? "" : t,
            s = e.end_time,
            i = void 0 === s ? "" : s,
            l = e.cancel_time,
            c = void 0 === l ? "" : l,
            p = a.format(r, "YYYY-MM-DD HH:mm:ss"),
            f = a.format(i, "YYYY-MM-DD HH:mm:ss"),
            D = a.format(c, "YYYY-MM-DD HH:mm:ss"),
            v = [];
          switch (o.getFinalTradeState(u.value)) {
            case n.COMMIT:
              (v = d(
                ["配债", "券商确认", "申购成功"],
                [p, "", ""],
                ["pen", "more", "tick"]
              )),
                (m.value = 0);
              break;
            case n.COMMITED:
              (v = d(
                ["配债", "券商确认", "申购成功"],
                [p, "", ""],
                ["pen", "more", "tick"]
              )),
                (m.value = 1);
              break;
            case n.COMFIRMED:
              (v = d(
                ["配债", "券商确认", "申购成功"],
                [p, "", f],
                ["pen", "more", "tick"]
              )),
                (m.value = 2);
              break;
            case n.COMMITED_NOT_DRAWN:
              (v = d(
                ["配债", "券商确认", "申购成功"],
                [p, "", ""],
                ["pen", "more", "tick"]
              )),
                (m.value = 1);
              break;
            case n.WITHDRAW_COMMITTING:
              (v = d(
                ["配债", "撤单中", "全部撤单"],
                [p, D, ""],
                ["pen", "more", "revoke"]
              )),
                (m.value = 1);
              break;
            case n.WITHDRAW_FINISHED:
              (v = d(
                ["配债", "撤单中", "全部撤单"],
                [p, D, f],
                ["pen", "more", "revoke"]
              )),
                (m.value = 2);
              break;
            case n.FAILED:
              (v = d(
                ["配债", "委托无效"],
                [p, ""],
                ["pen", "exclamation"]
              )).pop(),
                (m.value = 1);
              break;
            default:
              (v = d(["配债", "", ""], [p, "", ""], ["pen", "more", "tick"])),
                (m.value = 0);
          }
          return v;
        }),
        D = e.computed(function () {
          return (
            (u.value.order_price &&
              u.value.order_num &&
              e
                .__CJS__export_mul__(u.value.order_price, u.value.order_num)
                .toFixed(2)) ||
            ""
          );
        });
      function v() {
        var e = r.$route.query,
          t = e.id,
          a = e.no,
          o = e.time;
        setTimeout(function () {
          i({ id: t, no: a, time: o });
        }, 100);
      }
      return (
        e.onMounted(function () {
          v();
        }),
        {
          STATE: n,
          data: u,
          unit: l,
          stepFlowData: f,
          stepCurrent: m,
          shouldDisplayMatchDetail: c,
          shouldDisplayOrderTotalMoney: p,
          orderTotalMoney: D,
          fetchWebsocket: i,
          fetchData: v,
        }
      );
    },
  };
Array || e.resolveComponent("st-steps")();
var i = e._export_sfc(s, [
  [
    "render",
    function (t, r, a, o, n, s) {
      return e.e(
        {
          a: e.t(o.data.name || ""),
          b: e.t(o.data.code || ""),
          c: e.t(t.$filters.marketId(o.data.market, ".")),
          d: e.p({ current: o.stepCurrent, steps: o.stepFlowData }),
          e: e.t(
            t.$filters.postfix(
              t.$filters.defaults(o.data.order_price),
              "元/" + o.unit
            )
          ),
          f: e.t(
            t.$filters.postfix(t.$filters.defaults(o.data.order_num), o.unit)
          ),
          g: e.n(o.shouldDisplayMatchDetail ? "border-right" : ""),
          h: o.shouldDisplayOrderTotalMoney,
        },
        o.shouldDisplayOrderTotalMoney
          ? {
              i: e.t(
                t.$filters.prefix(
                  t.$filters.format.toCurrency(
                    t.$filters.defaults(o.orderTotalMoney)
                  ),
                  "￥"
                )
              ),
            }
          : {}
      );
    },
  ],
]);
wx.createComponent(i);
