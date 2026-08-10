var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js"), require("../../index.js");
var n = require("../../model/debt/useDebt.js"),
  r = require("../../service/connect/index.js"),
  o = require("../../common/vendor.js"),
  s = require("../../model/debt/useDebtAutoOrderEntry.js"),
  i = require("../../stores/app/useMode.js"),
  u = {
    name: "Debt",
    behaviors: ["wx://component-export"],
    export: function () {
      return {};
    },
    mixins: [require("../../mixin/platforms/index.js").pluginMixins],
    components: {
      StSegment: function () {
        return "../../node-modules/@tencent/stock-ui/mp/lib/segment/index.js";
      },
      DebtList: function () {
        return "./components/List.js";
      },
      DebtOrderList: function () {
        return "./components/OrderList.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      AutoOrderEntry: function () {
        return "./components/AutoOrderEntry.js";
      },
      ActionSheet: function () {
        return "../../common/components/ActionSheet/index.js";
      },
      debtTipsSheet: function () {
        return "../../components/Activity/debtTipsSheet.js";
      },
    },
    setup: function () {
      var r = o.getCurrentInstance().proxy,
        u = i.useModeStore(),
        d = o.storeToRefs(u).simpleMode;
      o.provide("simpleMode", d);
      var c,
        a = n.useDebt(),
        l = a.queryFundsInfo,
        p = a.fundsInfo,
        m = a.queryHistoryRecord,
        v = a.connect,
        b = a.alldebt,
        f = a.orderList,
        A = a.revoking,
        T = a.onRevoke,
        g = o.ref(!0),
        h = o.ref(!1),
        E = s.useDebtAutoOrderEntry(),
        x = E.isDebtAutoOrderEntry,
        y = E.isDebtAutoOrderSetted,
        O = o.ref(!1),
        D = o.ref(!1);
      return {
        queryFundsInfo: l,
        fundsInfo: p,
        queryHistoryRecord: m,
        connect: v,
        alldebt: b,
        orderList: f,
        revoking: A,
        onRevoke: T,
        updateTab: function () {
          var e, t, s, i;
          if (!g.value) {
            var u =
              n.TAB_TYPE[
                o.upperCase(
                  null == (t = null == (e = r.$route) ? void 0 : e.query)
                    ? void 0
                    : t.tab
                )
              ];
            if (u && r.segmentsActiveIndex !== u) {
              r.segmentsActiveIndex = u;
              var d = getCurrentPages();
              (null ==
              (i =
                null == (s = null == d ? void 0 : d[d.length - 1])
                  ? void 0
                  : s.options)
                ? void 0
                : i.tab) && (d[d.length - 1].options.tab = "");
            } else
              r.segmentsActiveIndex === n.TAB_TYPE.HISTORY && m(),
                v(r.segmentsActiveIndex);
          }
        },
        firstInit: g,
        simpleMode: d,
        isDebtAutoOrderEntry: x,
        updateDebtAutoOrderEntry:
          ((c = t(
            e().mark(function t() {
              var n;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!g.value && x.value) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (e.next = 4), y();
                    case 4:
                      (n = e.sent), (O.value = n);
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          )),
          function () {
            return c.apply(this, arguments);
          }),
        tipsActionsheet: D,
        showDebtTipsAction: function () {
          (D.value = !0),
            r.$stat.click("trade.debt.tips_click"),
            x.value &&
              !O.value &&
              r.$stat.click("trade.debt.tips_sheet.entry_setted_brow");
        },
        closeDebtTipsSheet: function () {
          D.value = !1;
        },
        isOrderSetted: O,
        isDebtAutoOrderSetted: y,
        autoOrderEntryFlag: h,
      };
    },
    data: function () {
      return {
        segmentsActiveIndex:
          n.TAB_TYPE[o.upperCase(this.$route.query.tab)] || n.TAB_TYPE.ALLDEBT,
        segments: ["产品(1千起)", "交易记录"],
        TAB_TYPE: n.TAB_TYPE,
        PLACEHOLDER: n.PLACEHOLDER,
      };
    },
    watch: {
      segmentsActiveIndex: function (r) {
        var s = this;
        return t(
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (e.t0 = r),
                      (e.next =
                        e.t0 === n.TAB_TYPE.ALLDEBT
                          ? 3
                          : e.t0 === n.TAB_TYPE.HISTORY
                          ? 5
                          : 8);
                    break;
                  case 3:
                    return (s.revoking = {}), e.abrupt("break", 8);
                  case 5:
                    return (
                      s.queryFundsInfo(), (e.next = 8), s.queryHistoryRecord()
                    );
                  case 8:
                    s.connect(r),
                      s.$stat.click(
                        "trade.debt.".concat(o.lowerCase(n.TAB_TYPE[r]))
                      );
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )();
      },
      isDebtAutoOrderEntry: {
        immediate: !0,
        handler: function (n) {
          var r = this;
          return t(
            e().mark(function t() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.t0 = n), !e.t0)) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 4), r.isDebtAutoOrderSetted();
                    case 4:
                      (r.isOrderSetted = e.sent), (r.autoOrderEntryFlag = !0);
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          )();
        },
      },
    },
    mounted: function () {
      var e,
        t,
        r =
          n.TAB_TYPE[
            o.upperCase(
              null == (t = null == (e = this.$route) ? void 0 : e.query)
                ? void 0
                : t.tab
            )
          ];
      r && this.segmentsActiveIndex !== r
        ? (this.segmentsActiveIndex = r)
        : this.segmentsActiveIndex === n.TAB_TYPE.HISTORY &&
          this.queryHistoryRecord(),
        this.connect(this.segmentsActiveIndex),
        (this.firstInit = !1);
    },
    onShow: function () {
      this.queryFundsInfo(), this.updateTab(), this.updateDebtAutoOrderEntry();
    },
    onHide: function () {
      r.disconnect();
    },
    unmounted: function () {
      r.disconnect();
    },
  };
Array ||
  (
    o.resolveComponent("AutoOrderEntry") +
    o.resolveComponent("st-segment") +
    o.resolveComponent("DebtList") +
    o.resolveComponent("DebtOrderList") +
    o.resolveComponent("debtTipsSheet") +
    o.resolveComponent("action-sheet") +
    o.resolveComponent("mp-dialog") +
    o.resolveComponent("GlobalWrap")
  )(),
  Math;
var d = o._export_sfc(u, [
  [
    "render",
    function (e, t, n, r, s, i) {
      return o.e(
        { a: e.rootFontSize, b: r.simpleMode },
        (r.simpleMode, {}),
        {
          c: o.t(r.fundsInfo.holdIncome || s.PLACEHOLDER.DOT),
          d: o.t(r.fundsInfo.holdVal || s.PLACEHOLDER.DOT),
          e: o.t(r.fundsInfo.canTrade || s.PLACEHOLDER.DOT),
          f: r.autoOrderEntryFlag,
        },
        r.autoOrderEntryFlag
          ? {
              g: o.sr("autoOrderEntry", "28b494a9-1,28b494a9-0"),
              h: o.p({ "is-order-setted": r.isOrderSetted }),
            }
          : {},
        {
          i: o.o(function (e) {
            return (s.segmentsActiveIndex = e);
          }),
          j: o.p({ value: s.segmentsActiveIndex, segments: s.segments }),
          k: o.o(function () {
            return (
              r.showDebtTipsAction && r.showDebtTipsAction.apply(r, arguments)
            );
          }),
          l: o.n(r.simpleMode ? "" : "border--bottom"),
          m: s.segmentsActiveIndex === s.TAB_TYPE.ALLDEBT,
        },
        s.segmentsActiveIndex === s.TAB_TYPE.ALLDEBT
          ? { n: o.p({ lists: r.alldebt }) }
          : s.segmentsActiveIndex === s.TAB_TYPE.HISTORY
          ? {
              p: o.o(r.onRevoke),
              q: o.p({ lists: r.orderList, revoking: r.revoking }),
            }
          : {},
        {
          o: s.segmentsActiveIndex === s.TAB_TYPE.HISTORY,
          r: o.o(r.closeDebtTipsSheet),
          s: o.p({
            "is-debt-auto-order-entry": r.isDebtAutoOrderEntry,
            "is-order-setted": r.isOrderSetted,
          }),
          t: o.o(function (e) {
            return (r.tipsActionsheet = e);
          }),
          v: o.p({
            value: r.tipsActionsheet,
            title: "交易技巧",
            "confirm-txt": " ",
            "picker-style": !0,
            "close-button": !0,
          }),
          w: o.p({ id: "mp-dialog" }),
          x: o.n(r.simpleMode ? "simple" : ""),
          y: o.sr("#global-wrap", "28b494a9-0"),
          z: o.p({
            id: "global-wrap",
            filePath: "/debt/index",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
]);
wx.createPage(d);
