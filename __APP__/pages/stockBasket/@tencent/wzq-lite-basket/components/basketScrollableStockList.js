require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  t = require("../../stock-hq-core/utils/market.js"),
  n = require("basketListCore.js"),
  o = require("../api/CheckIntersectionObserver.js"),
  r = require("../const/index.js"),
  i = require("../../stock-hq-data/index.js"),
  a = {},
  s = e.defineComponent({
    components: {
      sortToggle: function () {
        return "./sortToggle.js";
      },
    },
    props: {
      rootClass: { type: String, default: "" },
      rankingData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      columnNum: { type: [Number, String], default: 2 },
      rowNum: { type: Number, default: 2 },
      isShowAddChoose: { type: Boolean, default: !0 },
      positionTop: { type: Number, default: 0 },
      showFakeTitle: { type: Boolean, default: !1 },
      reportPrefix: { type: String, default: "" },
      gdId: { type: String, required: !0 },
    },
    emits: ["goToStockDetail"],
    setup: function (a, s) {
      var l = s.emit,
        c = n.getBasketComputedData(a, l),
        d = c.cFields,
        u = c.cTableData,
        g = c.cFooterDesc,
        p = c.curFoldStatusStr,
        f = c.onTableToggleClick,
        m = c.onToggleFoldClick,
        h = c.goToStockDetail,
        b = c.getStockNameFontType,
        k = c.reportLog,
        T = c.movingDistance,
        D = c.transitionTime,
        F = c.curOrderBy,
        y = c.curOrder,
        x = c.isMultiMarket,
        C = c.onSortHandle,
        S = e.getCurrentInstance().proxy || e.getCurrentInstance(),
        N = [],
        _ = [],
        O = [],
        w = [],
        I = function () {
          a.reportPrefix &&
            ((N.length = 0),
            (_.length = 0),
            (O.length = 0),
            o.checkIntersectionObserver(S, ""));
        },
        v = function () {
          a.reportPrefix &&
            o.checkIntersectionObserver(
              S,
              ".stock-wrapper",
              function (e) {
                var t, n;
                if (S.rowNum < 10 && S.rowNum === N.length) I();
                else {
                  var o =
                      null == (t = null == e ? void 0 : e.dataset)
                        ? void 0
                        : t.index,
                    r = (null == (n = S.cTableData) ? void 0 : n[o]) || {},
                    i = r.watched,
                    a = r.symbol;
                  if (-1 === N.indexOf(a))
                    if (S.rowNum < 10)
                      k("zixuan_brow", o, {
                        stocklist: a,
                        hasaddlist: i ? 1 : 0,
                        foperation_purpose: "zixuan",
                      }),
                        N.push(a);
                    else {
                      if (w.includes(a)) return;
                      w.push(a),
                        N.push(a),
                        _.push(i ? 1 : 0),
                        O.push(o),
                        N.length >= 10 &&
                          (k("zixuan_brow", O.join(","), {
                            stocklist: N.join(","),
                            hasaddlist: _.join(","),
                            foperation_purpose: "zixuan",
                          }),
                          (N = N.slice(10, N.length)),
                          (_ = _.slice(10, _.length)),
                          (O = O.slice(10, O.length)));
                    }
                }
              },
              0,
              !0
            );
        },
        j = e.inject("hqBridge");
      return (
        "mp" === j.ENV && v(),
        e.onUnmounted(function () {
          "mp" === j.ENV &&
            (N.length &&
              k("zixuan_brow", O.join(","), {
                stocklist: N.join(","),
                hasaddlist: _.join(","),
                foperation_purpose: "zixuan",
              }),
            (w = []),
            I());
        }),
        {
          cFields: d,
          cTableData: u,
          cFooterDesc: g,
          curFoldStatusStr: p,
          findImage: function (e, n, o) {
            return [
              "FJ",
              "FJ-CX",
              "KJ",
              "LOF",
              "ETF",
              "QDII-LOF",
              "QDII-ETF",
            ].includes(n)
              ? "https://wzq.tenpay.com/resources/mp-files/portfolio/icon/cnjj.svg"
              : i.utils.isIndex(n) || i.utils.isCSIndex(n)
              ? 2 == +e
                ? "https://st.gtimg.com/design/1f1f39518ac98d1b1e0b2568b3bb34f3.png"
                : 3 == +e
                ? "https://st.gtimg.com/design/ea7e53a2fe55a3a38b61a7ab8d68ed4d.png"
                : "https://st.gtimg.com/design/46376ba579d819af0330e16450a2ce49.png"
              : i.utils.isDebt(n) ||
                i.utils.isNationalDebt(n) ||
                i.utils.isTransferableDebt(n)
              ? "https://st.gtimg.com/design/9f6cb82efd2fa09e584ddb8ac69bdc05.png"
              : t.transMarketIcon(e, n, o);
          },
          onTableToggleClick: f,
          onToggleFoldClickWrapper: function () {
            setTimeout(function () {
              v();
            }, 500),
              m();
          },
          goToStockDetail: h,
          getStockNameFontType: b,
          reportLog: k,
          getColumnContentFontSize: n.getColumnContentFontSize,
          ADDED_ICON_URL: r.ADDED_ICON_URL,
          NOT_ADDED_ICON_URL: r.NOT_ADDED_ICON_URL,
          movingDistance: T,
          transitionTime: D,
          curOrderBy: F,
          curOrder: y,
          isMultiMarket: x,
          onSortHandle: C,
        }
      );
    },
  });
Array || e.resolveComponent("sortToggle")(), "function" == typeof a && a(s);
var l = e._export_sfc(s, [
  [
    "render",
    function (t, n, o, r, i, a) {
      return e.e(
        { a: t.cTableData.length },
        t.cTableData.length
          ? e.e(
              { b: t.cFields.length > 3 },
              (t.cFields.length, {}),
              {
                c: e.f(t.cFields, function (n, o, r) {
                  return {
                    a: e.o(t.onSortHandle, 2989, n.key + o),
                    b: "06e6acd7-0-" + r,
                    c: e.p({
                      "order-by": t.curOrderBy,
                      order: t.curOrder,
                      "field-data": n,
                      "is-multi-market": t.isMultiMarket,
                    }),
                    d: n.key + o,
                    e: n.maxTextLen,
                    f: n.width + "px",
                    g: n.paddingRight + "px",
                  };
                }),
                d: t.cFields.length,
                e: t.cFields.length > 3,
              },
              (t.cFields.length, {}),
              {
                f: t.showFakeTitle,
                g: "".concat(t.positionTop, "px"),
                h: t.cFields.length > 3,
              },
              (t.cFields.length, {}),
              {
                i: e.f(t.cFields, function (n, o, r) {
                  return {
                    a: e.o(t.onSortHandle, 2990, n.key + o),
                    b: "06e6acd7-1-" + r,
                    c: e.p({
                      "order-by": t.curOrderBy,
                      order: t.curOrder,
                      "field-data": n,
                      "is-multi-market": t.isMultiMarket,
                    }),
                    d: n.key + o,
                    e: n.maxTextLen,
                    f: n.width + "px",
                    g: n.paddingRight + "px",
                  };
                }),
                j: "translateX(".concat(t.movingDistance, "px)"),
                k: "transform ".concat(t.transitionTime, "s linear"),
                l: t.cFields.length > 3,
              },
              (t.cFields.length, {}),
              {
                m: e.f(t.cTableData, function (n, o, r) {
                  return e.e(
                    {
                      a: e.t(n.cnName),
                      b: e.n(t.getStockNameFontType(n.cnName)),
                      c: n.cnName.length,
                      d: t.findImage(n.market, n.stockType, n.symbol),
                      e: e.t(n.scode),
                    },
                    (t.cFields.length, {}),
                    {
                      f: n.symbol + o,
                      g: e.o(
                        function (e) {
                          return t.goToStockDetail(n);
                        },
                        2991,
                        n.symbol + o
                      ),
                    }
                  );
                }),
                n: t.cFields.length > 3,
                o: e.f(t.cTableData, function (n, o, r) {
                  return {
                    a: e.f(t.cFields, function (o, r, i) {
                      return {
                        a: e.t(n[o.key]),
                        b: o.key + r,
                        c: e.n(
                          o.describe && "up_down" === o.describe.color
                            ? parseFloat(n[o.key]) >= 0
                              ? parseFloat(n[o.key])
                                ? "rise"
                                : "flat"
                              : "drop"
                            : ""
                        ),
                        d: o.maxTextLen,
                        e: o.width + "px",
                        f: o.paddingRight + "px",
                        g: t.getColumnContentFontSize(n[o.key]) + "px",
                      };
                    }),
                    b: n.symbol + o,
                    c: e.o(
                      function (e) {
                        return t.goToStockDetail(n);
                      },
                      2992,
                      n.symbol + o
                    ),
                  };
                }),
                p: "translateX(".concat(t.movingDistance, "px)"),
                q: "transform ".concat(t.transitionTime, "s linear"),
                r: t.cFields.length,
                s: t.isShowAddChoose,
              },
              t.isShowAddChoose
                ? {
                    t: e.f(t.cTableData, function (n, o, r) {
                      return e.e(
                        (t.cFields.length, {}),
                        { a: n.watched },
                        n.watched
                          ? { b: t.ADDED_ICON_URL }
                          : { c: t.NOT_ADDED_ICON_URL },
                        {
                          d: n.symbol + o,
                          e: e.o(
                            function (e) {
                              return t.onTableToggleClick(o);
                            },
                            2993,
                            n.symbol + o
                          ),
                        }
                      );
                    }),
                    v: t.cFields.length > 3,
                  }
                : {},
              { w: t.rankingData.total > 10 },
              t.rankingData.total > 10
                ? {
                    x: e.t(t.cFooterDesc),
                    y: e.n(t.curFoldStatusStr),
                    z: e.o(function () {
                      return (
                        t.onToggleFoldClickWrapper &&
                        t.onToggleFoldClickWrapper.apply(t, arguments)
                      );
                    }, 2994),
                  }
                : {}
            )
          : {},
        {
          A: e.n(t.rootClass),
          B: e.n(t.cFields.length > 3 ? "more-than-three" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-06e6acd7"],
]);
wx.createComponent(l);
