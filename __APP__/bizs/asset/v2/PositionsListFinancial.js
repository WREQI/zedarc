var e = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var t = require("../../../common/vendor.js"),
  n = require("../../../model/index/useHideFund.js"),
  o = require("../../../components/ValueColor/utils.js"),
  a = require("../../../stores/app/useMode.js"),
  r = require("../usePositionsListDebt.js"),
  i = require("../usePositionsListBalance.js"),
  c = require("../../../stores/position/usePositionDrawer.js"),
  s = require("../../../config/key.js"),
  l = require("../../../stores/user/useUserinfo.js"),
  u = require("../../../common/components/Dialog/index.js"),
  d = require("./useLongPress.js"),
  h = require("../../../common/utils/colorHelper.js"),
  p = {
    options: { styleIsolation: "shared" },
    components: {
      ListHeader: function () {
        return "../ListHeader.js";
      },
      PositionDrawer: function () {
        return "../../../components/PositionDrawer/Index.js";
      },
    },
    props: {
      debt: {
        type: Array,
        default: function () {
          return [];
        },
      },
      holdbalance: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function (p) {
      var _ = t.getCurrentInstance().proxy,
        f = t.inject("isAssetIndex"),
        m = n.useHideFund().hidefund,
        v = a.useModeStore(),
        y = t.storeToRefs(v).simpleMode,
        g = r.usePositionsListDebt(),
        T = i.usePositionsListBalance(),
        S = c.usePositionDrawerStore(),
        x = S.switchDrawer,
        b = S.curDrawerIsShow,
        A = t.storeToRefs(S).curUniKey,
        D = l.useUserinfoStore(),
        I = t.storeToRefs(D).userinfo,
        C = { 0: "RESET", 1: "DES", 2: "ASC" },
        P = t.index.getStorageSync(s.FINANCIAL_SORT_TYPE) || {},
        k = t.ref(P.key || ""),
        w = t.ref(P.type || 0),
        $ = t.computed(function () {
          var e;
          return [
            {
              text:
                "理财" +
                ((null == (e = null == M ? void 0 : M.value)
                  ? void 0
                  : e.length) > 0
                  ? "(".concat(M.value.length, ")")
                  : ""),
            },
            {
              text: "持有金额",
              sort: 1,
              key: "holdVal",
              align: "right",
              highlight: !0,
            },
            { text: "到期/状态", align: "right" },
            {
              text: "",
              sort: 1,
              key: "tradeIncome",
              align: "right",
              expectedIncomeAndAnnualized: !0,
              highlight: !0,
            },
            {
              text: "提现日期",
              align: "right",
              key: "avl_date",
              explain: !0,
              explainClickAll: !0,
            },
            {
              text: "仓位",
              sort: 1,
              key: "position",
              align: "right",
              highlight: !0,
            },
          ];
        }),
        j = d.useLongPress(50),
        E = j.longPressActiveKey,
        L = j.onTouchstart,
        q = j.onTouchmove,
        F = j.onTouchcancel,
        K = j.clearLongPressActiveStatus,
        N = d.useLongPress(50),
        z = N.longPressActiveKey,
        B = N.onTouchstart,
        H = N.onTouchmove,
        V = N.onTouchcancel,
        J = N.clearLongPressActiveStatus,
        M = t.computed(function () {
          var n = [];
          return (
            p.debt.length > 0 &&
              p.debt.forEach(function (o) {
                n.push(
                  e(
                    e({}, o),
                    {},
                    {
                      type: c.EPositionType.DEBT,
                      subName: "通用回购",
                      holdVal: o.total_agree,
                      cashinDate: o.cashin_date
                        ? o.cashin_date.replace(
                            /(\d{4})(\d{2})(\d{2}).*/,
                            "$1/$2/$3"
                          )
                        : "",
                      balanceStatus: o.balance_status
                        ? g.stateText(o.balance_status)
                        : "",
                      tradeIncome: o.trade_income || "",
                      rateText: "".concat(
                        t.__CJS__export_toText__(o.order_rate, 3),
                        "%"
                      ),
                      avlDate: o.avl_date
                        ? o.avl_date.replace(
                            /(\d{4})(\d{2})(\d{2}).*/,
                            "$1/$2/$3"
                          )
                        : "",
                    }
                  )
                );
              }),
            p.holdbalance.length > 0 &&
              p.holdbalance.forEach(function (o) {
                n.push(
                  e(
                    e({}, o),
                    {},
                    {
                      type:
                        "0" === o.balance_time_limit
                          ? c.EPositionType.JIAXINBAO
                          : c.EPositionType.XINKE,
                      subName: "券商理财",
                      holdVal: t.__CJS__export_fen2yuan__(o.purchase_amt || 0),
                      cashinDate: o.end_date
                        ? o.end_date.replace(
                            /(\d{4})(\d{2})(\d{2}).*/,
                            "$1/$2/$3"
                          )
                        : "",
                      balanceStatus: o.balance_status
                        ? T.stateText(o.balance_status)
                        : "",
                      tradeIncome: t.__CJS__export_fen2yuan__(o.income || 0),
                      rateText: "".concat(
                        t.__CJS__export_toText__(o.purchase_rate, 3),
                        "%"
                      ),
                      avlDate: o.avl_date
                        ? o.avl_date.replace(
                            /(\d{4})(\d{2})(\d{2}).*/,
                            "$1/$2/$3"
                          )
                        : "",
                    }
                  )
                );
              }),
            w.value && 0 !== w.value && k.value
              ? n.sort(function (e, t) {
                  return 1 === w.value
                    ? t[k.value] - e[k.value]
                    : e[k.value] - t[k.value];
                })
              : n
          );
        }),
        O = t.debounce(function () {
          _.$stat.click("trade.asset.financial_scroll");
        }, 1e3);
      return {
        hidefund: m,
        fields: $,
        simpleMode: y,
        isAssetIndex: f,
        positionsListDebt: g,
        positionsListBalance: T,
        EPositionType: c.EPositionType,
        lists: M,
        sortKey: k,
        sortType: w,
        onScrollStat: O,
        curUniKey: A,
        onSort: function (e, n) {
          (k.value = e),
            (w.value = n),
            t.index.setStorageSync(s.FINANCIAL_SORT_TYPE, { key: e, type: n }),
            _.$stat.click("trade.asset.financial_".concat(e, "_").concat(C[n]));
        },
        redOrGreen: h.redOrGreen,
        adaptFontSize: o.adaptFontSize,
        onItemClick: function (e) {
          var t = e.item,
            n = e.type;
          K(),
            J(),
            x({ type: n, target: t }),
            _.$stat.click(
              "trade.asset.financial_drawer_"
                .concat(n, "_")
                .concat(A.value ? "show" : "hide")
            );
        },
        getDrawerStyle: function (e) {
          return b({ type: e.type, target: e })
            ? { "--drawer-h": (y.value ? 120 : 124) / 75 + "rem" }
            : {};
        },
        curDrawerIsShow: b,
        toDeatil: function (e) {
          var t, n, o, a;
          if ((K(), J(), "0" !== e.balance_time_limit)) {
            var r =
                (null == (n = null == (t = I.value) ? void 0 : t.activityinfo)
                  ? void 0
                  : n.activity_id) || "",
              i =
                (null == (a = null == (o = I.value) ? void 0 : o.activityinfo)
                  ? void 0
                  : a.activity_acct) || "";
            _.$router.push({
              name: "ProductDuoTianQi",
              query: { activity_id: r, activity_acct: i },
            });
          } else T.onStockClick(e);
        },
        onExplain: function (e) {
          "avl_date" === (null == e ? void 0 : e.key) &&
            (_.$stat.click("trade.asset.avl_date_expain_click"),
            u.Dialog({
              title: "日期说明",
              message:
                '<div class="text-color-2 align-l">到期日代表理财金额在到期当天自动到账转为可用资金，可以用于交易。<br>\n\r<br>提现日期代表理财产品到期后，理财金额未再次用于交易，在提现日支持当天提现，取出到银行卡。</div>',
              messageType: "html",
              messageAlign: "left",
              confirmButtonText: "我知道了",
              onConfirm: function () {
                _.$stat.click("trade.asset.avl_date_expain_confirm_click");
              },
            }));
        },
        longPressActiveKey: E,
        onTouchstart: L,
        onTouchmove: q,
        onTouchcancel: F,
        longPressActiveKey4ColA: z,
        onTouchstart4ColA: B,
        onTouchmove4ColA: H,
        onTouchcancel4ColA: V,
      };
    },
  };
Array ||
  (t.resolveComponent("ListHeader") + t.resolveComponent("position-drawer"))();
var _ = t._export_sfc(p, [
  [
    "render",
    function (e, n, o, a, r, i) {
      return t.e(
        {
          a: t.o(a.onSort),
          b: t.o(a.onExplain),
          c: t.p({
            fields: a.fields,
            "header-marker": !0,
            border: !1,
            "sort-field": a.sortKey,
            "sort-order": a.sortType,
          }),
          d: t.f(a.lists, function (n, o, r) {
            return t.e(
              {
                a: n.contract_no === a.longPressActiveKey ? 1 : "",
                b: t.o(function (e) {
                  return a.onTouchstart(e, n.contract_no);
                }, n.contract_no),
                c: t.o(function (e) {
                  return a.onTouchmove(e, n.contract_no);
                }, n.contract_no),
                d: t.o(function (e) {
                  return a.onTouchcancel(e, n.contract_no);
                }, n.contract_no),
                e: t.o(function (e) {
                  return a.onTouchcancel(e, n.contract_no);
                }, n.contract_no),
                f: t.n(a.simpleMode || 0 == o ? "" : "border--top-c1"),
                g: n.contract_no === a.longPressActiveKey4ColA ? 1 : "",
                h: t.o(function (e) {
                  return a.onTouchstart4ColA(e, n.contract_no);
                }, n.contract_no),
                i: t.o(function (e) {
                  return a.onTouchmove4ColA(e, n.contract_no);
                }, n.contract_no),
                j: t.o(function (e) {
                  return a.onTouchcancel4ColA(e, n.contract_no);
                }, n.contract_no),
                k: t.o(function (e) {
                  return a.onTouchcancel4ColA(e, n.contract_no);
                }, n.contract_no),
                l: t.t(a.hidefund ? "***" : n.name),
                m: t.n(
                  a.adaptFontSize(n.name.length, a.hidefund ? 100 : 5, "28")
                ),
                n: t.n(
                  a.adaptFontSize(n.name.length, a.hidefund ? 100 : 6, "24")
                ),
                o: t.n(
                  !a.hidefund && n.name.length >= 6 ? "no-line-height" : ""
                ),
              },
              a.hidefund ? {} : { p: t.t(n.subName) },
              { q: a.curDrawerIsShow({ type: n.type, target: n }) },
              a.curDrawerIsShow({ type: n.type, target: n })
                ? {
                    r: "41cc1364-1-" + r,
                    s: t.p({
                      "position-target": n,
                      "border-bottom": o !== a.lists.length - 1,
                    }),
                  }
                : {},
              {
                t: t.o(function (e) {
                  return n.type === a.EPositionType.DEBT
                    ? a.positionsListDebt.onStockClick(n)
                    : a.toDeatil(n);
                }, n.contract_no),
              },
              a.hidefund
                ? {}
                : {
                    v: t.t(
                      e.$filters.money.formatNoUnit(
                        e.$filters.defaults(n.holdVal, "--"),
                        !1,
                        2
                      )
                    ),
                    w: t.n(a.adaptFontSize(n.holdVal, 1e5, "28")),
                    x: t.n(a.adaptFontSize(n.holdVal, 1e6, "24")),
                  },
              a.hidefund
                ? {}
                : { y: t.t(n.cashinDate), z: t.t(n.balanceStatus) },
              a.hidefund
                ? {}
                : {
                    A: t.t(
                      e.$filters.money.formatNoUnit(
                        e.$filters.defaults(n.tradeIncome, "--"),
                        !0
                      )
                    ),
                    B: t.n(a.redOrGreen(n.tradeIncome)),
                    C: t.n(a.adaptFontSize(n.tradeIncome, 1e5, "28")),
                    D: t.n(a.adaptFontSize(n.tradeIncome, 1e6, "24")),
                    E: t.t(n.rateText),
                  },
              a.hidefund ? {} : { F: t.t(n.avlDate) },
              a.hidefund
                ? {}
                : {
                    G: t.t(
                      e.$filters.postfix(
                        e.$filters.defaults(n.position, "--"),
                        "%"
                      )
                    ),
                  },
              {
                H: n.contract_no,
                I: t.n(
                  a.curDrawerIsShow({ type: n.type, target: n })
                    ? "stock-list-item--extra"
                    : ""
                ),
                J: t.s(a.getDrawerStyle(n)),
                K: t.o(function (e) {
                  return a.onItemClick({ type: n.type, item: n });
                }, n.contract_no),
              }
            );
          }),
          e: !a.hidefund,
          f: !a.hidefund,
          g: !a.hidefund,
          h: !a.hidefund,
          i: !a.hidefund,
          j: !a.hidefund,
          k: t.o(function () {
            return a.onScrollStat && a.onScrollStat.apply(a, arguments);
          }),
          l: a.isAssetIndex,
        },
        (a.isAssetIndex, {}),
        {
          m:
            (o.debt && o.debt.length > 0) ||
            (o.holdbalance && o.holdbalance.length > 0),
          n: a.simpleMode ? 1 : "",
        }
      );
    },
  ],
]);
wx.createComponent(_);
