var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var o = require("../../../common/vendor.js"),
  s = require("../../../stores/app/useMode.js"),
  n = require("../../../utils/index.js"),
  i = require("../../../config/key.js"),
  a = require("../../../cgi/userproperty.js"),
  l = require("../../../service/stat/mp-weixin.js"),
  r = {
    components: {
      PositionsListStock: function () {
        return "./PositionsListStock.js";
      },
      PositionsAllocateDebt: function () {
        return "./PositionsAllocateDebt.js";
      },
      PositionsListDelisted: function () {
        return "./PositionsListDelisted.js";
      },
      PositionsListFinancial: function () {
        return "./PositionsListFinancial.js";
      },
      PositionsListCash: function () {
        return "./PositionsListCash.js";
      },
      PreloadDrawer: function () {
        return "./PreloadDrawer.js";
      },
      BubbleTip: function () {
        return "../../../components/BubbleTip/BubbleTip.js";
      },
    },
    props: {
      data: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isActive: { type: Boolean, default: !0 },
      isAssetIndex: { type: Boolean, default: !1 },
    },
    setup: function (r) {
      var d = o.getCurrentInstance().proxy,
        c = s.useModeStore(),
        u = o.storeToRefs(c).simpleMode,
        p = o.inject("canRenderDelayAssetInfo"),
        f = o.ref("0px"),
        m = o.ref(!1);
      o.provide("showGgtBullTips", m);
      var h = o.computed(function () {
          var e, t, o;
          return !(
            ((null == (e = null == r ? void 0 : r.data) ? void 0 : e.stock) &&
              r.data.stock.length > 0) ||
            ((null == (t = null == r ? void 0 : r.data) ? void 0 : t.pzstock) &&
              r.data.pzstock.length > 0) ||
            ((null == (o = null == r ? void 0 : r.data)
              ? void 0
              : o.holdDelisted) &&
              r.data.holdDelisted.length > 0)
          );
        }),
        v = o.computed(function () {
          var e, t;
          return !(
            ((null == (e = null == r ? void 0 : r.data) ? void 0 : e.debt) &&
              r.data.debt.length > 0) ||
            ((null == (t = null == r ? void 0 : r.data)
              ? void 0
              : t.holdbalance) &&
              r.data.holdbalance.length > 0)
          );
        }),
        b = o.computed(function () {
          return (
            n.isZeroVal(r.data.fundsinfo.can_trade) &&
            n.isZeroVal(r.data.fundsinfo.can_draw)
          );
        }),
        y = o.computed(function () {
          var e = [];
          return (
            h.value && e.push({ name: "未持有股票", cls: ["color-stock"] }),
            v.value && e.push({ name: "未持有理财", cls: ["color-financial"] }),
            b.value && e.push({ name: "未持有现金", cls: ["color-cash"] }),
            e
          );
        });
      function g() {
        o.index.setStorageSync(i.ASSET_GGT_BUBBLE_TIPS, "1"),
          t(
            e().mark(function t() {
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((e.prev = 0), (e.t0 = k), e.t0)) {
                          e.next = 5;
                          break;
                        }
                        return (
                          (e.next = 5),
                          a.UserPropertyCgi.setUserProperty({
                            scene: a.SCENE.GUIDE,
                            biz: a.ENUM_BIZ.ASSET_GGT_BUBBLETIP,
                            val: "1",
                          })
                        );
                      case 5:
                        (k = !0), (e.next = 11);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t1 = e.catch(0)),
                          aegisReporter.reportEvent(
                            "ASSET-GGT-SETPROPERTY-ERR",
                            { ext2: JSON.stringify(e.t1) }
                          );
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                null,
                [[0, 8]]
              );
            })
          )();
      }
      var k = !1;
      return {
        simpleMode: u,
        isHoldStockEmpty: h,
        isFinancialEmpty: v,
        isCashEmpty: b,
        emptyList: y,
        showDelistedInfo: function (e) {
          d.$emit("showDelistedInfo", e);
        },
        displayDelistedInfo: function (e) {
          d.$emit("displayDelistedInfo", e);
        },
        onJumpQuote: function (e) {
          d.$emit("jumpQuote", e);
        },
        canRenderDelayAssetInfo: p,
        ggtBubbleTipTop: f,
        showGgtBullTips: m,
        handleBubbleTips: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          void 0 !== e.isShow && ((m.value = e.isShow), g()),
            e.offsetTop && (f.value = e.offsetTop);
        },
        closeGgtBubble: function () {
          (m.value = !1),
            g(),
            l.stat.click("trade.asset.ggt_bubble_tips_close");
        },
      };
    },
  };
Array ||
  (
    o.resolveComponent("PositionsListStock") +
    o.resolveComponent("PositionsAllocateDebt") +
    o.resolveComponent("PositionsListDelisted") +
    o.resolveComponent("BubbleTip") +
    o.resolveComponent("PositionsListFinancial") +
    o.resolveComponent("PositionsListCash") +
    o.resolveComponent("PreloadDrawer")
  )(),
  Math;
var d = o._export_sfc(r, [
  [
    "render",
    function (e, t, s, n, i, a) {
      return o.e(
        { a: !n.isHoldStockEmpty },
        n.isHoldStockEmpty
          ? {}
          : o.e(
              { b: s.data.stock && s.data.stock.length > 0 },
              s.data.stock && s.data.stock.length > 0
                ? {
                    c: o.o(n.onJumpQuote),
                    d: o.o(n.handleBubbleTips),
                    e: o.p({ lists: s.data.stock, "is-active": s.isActive }),
                  }
                : {},
              { f: s.data.pzstock && s.data.pzstock.length > 0 },
              s.data.pzstock && s.data.pzstock.length > 0
                ? { g: o.p({ lists: s.data.pzstock }) }
                : {},
              { h: s.data.holdDelisted && s.data.holdDelisted.length > 0 },
              s.data.holdDelisted && s.data.holdDelisted.length > 0
                ? {
                    i: o.o(n.showDelistedInfo),
                    j: o.o(n.displayDelistedInfo),
                    k: o.p({
                      lists: s.data.holdDelisted,
                      "header-marker": !n.simpleMode,
                    }),
                  }
                : {},
              { l: n.showGgtBullTips && n.canRenderDelayAssetInfo },
              n.showGgtBullTips && n.canRenderDelayAssetInfo
                ? {
                    m: n.ggtBubbleTipTop,
                    n: o.o(n.closeGgtBubble),
                    o: o.p({
                      "is-show": n.showGgtBullTips && n.canRenderDelayAssetInfo,
                      duration: "2000",
                      content: "$指港币计价，无符号指人民币计价",
                      "arrow-position": "top-center",
                      "show-close-btn": !0,
                    }),
                  }
                : {}
            ),
        { p: !n.isFinancialEmpty },
        n.isFinancialEmpty
          ? {}
          : { q: o.p({ debt: s.data.debt, holdbalance: s.data.holdbalance }) },
        { r: !n.isCashEmpty },
        n.isCashEmpty
          ? {}
          : {
              s: o.p({
                fundsinfo: s.data.fundsinfo,
                last: !n.isHoldStockEmpty && !n.isFinancialEmpty,
              }),
            },
        {
          t: o.f(n.emptyList, function (e, t, s) {
            return {
              a: o.t(e.name),
              b: o.n(e.cls),
              c: e.name,
              d: t === n.emptyList.length - 1 ? 1 : "",
            };
          }),
          v: n.simpleMode ? 1 : "",
          w:
            n.canRenderDelayAssetInfo &&
            (!n.isHoldStockEmpty || !n.isFinancialEmpty),
        },
        (!n.canRenderDelayAssetInfo ||
          (n.isHoldStockEmpty && n.isFinancialEmpty),
        {}),
        { x: o.n(n.simpleMode ? "positions-list-container__simple-mode" : "") }
      );
    },
  ],
]);
wx.createComponent(d);
