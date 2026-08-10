var e = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../common/vendor.js"),
  o = require("../../../stores/user/useUserinfo.js"),
  s = require("../../../model/index/usePluginNeedPwd.js"),
  a = require("../../../model/index/usePluginAsset.js"),
  i = require("../../../model/index/useAsset.js"),
  u = require("./PluginBridge.js"),
  d = require("../../../service/connect/maps.js"),
  c = require("../../../model/index/useHideFund.js");
require("../../../config/enum.js");
var f = require("../../../stores/app/useMode.js"),
  l = {
    components: {
      BaseCard: function () {
        return "./BaseCardNew.js";
      },
      AssetTitle: function () {
        return "./AssetTitle.js";
      },
      AssetContentPlaceHolder: function () {
        return "./AssetContentPlaceHolder.js";
      },
    },
    props: {
      skin: { type: String, default: "simple" },
      isCurrentBroker: { type: Boolean, default: !1 },
      showMore: { type: Boolean, default: !1 },
      showBrokerBg: { type: Boolean, default: !1 },
      from: { type: String, default: "" },
    },
    setup: function (l) {
      var p = n.getCurrentInstance().proxy,
        h = n.storeToRefs(f.useModeStore()).simpleMode,
        k = !0,
        m = s.usePluginNeedPwd().needPwd,
        w = o.useUserinfoStore();
      n.storeToRefs(w);
      var g,
        b = "init";
      g = i.useAsset();
      var y = !1,
        v = !1;
      function C() {
        if ("" !== g.data.fundsinfo.total_money && !y) {
          var e =
            g.data.fundsinfo.total_money <= 0
              ? "guide_transfer"
              : "not_guide_transfer";
          p.$stat.click("trade.asset.".concat(e)), (y = !0);
        }
      }
      p.isAutoToAssetAfterPwdSuc = !1;
      var _ = a.usePluginAsset(g).fetchAssetInfo,
        A = n.ref(!1),
        B = (function () {
          var e = r(
            t().mark(function e(r) {
              return t().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((b = "req-asset-start"), !A.value)) {
                        e.next = 5;
                        break;
                      }
                      (b = "req-asset-loading-skip"), (e.next = 10);
                      break;
                    case 5:
                      return (
                        (A.value = !0),
                        (b = "fetch-asset-pending"),
                        (e.next = 9),
                        _(r).finally(function () {
                          (A.value = !1),
                            (b = "fetch-asset-resolved"),
                            k &&
                              ((k = !1),
                              p.$emit("firstRequestFinish"),
                              (b = "emit-done"));
                        })
                      );
                    case 9:
                      $();
                    case 10:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      function q() {
        return P.apply(this, arguments);
      }
      function P() {
        return (P = r(
          t().mark(function e() {
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (b = "handle-show-start"),
                      d.handleMapsBeforeConnect("PluginAssetData"),
                      (b = "handle-show-pre-req"),
                      (e.next = 5),
                      B({
                        reqWebsocket: u.bridge.isWebsocket,
                        requestConfig: { checkTradeSession: !1 },
                      })
                    );
                  case 5:
                    C();
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function S() {
        return F.apply(this, arguments);
      }
      function F() {
        return (F = r(
          t().mark(function e() {
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    u.bridge.clickAsset(p, {
                      isCurrentBroker: l.isCurrentBroker,
                    }),
                      p.$stat.click("trade.asset.to_asset"),
                      p.$emit("btnClick");
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var T = c.useHideFund(),
        j = T.hidefund,
        x = T.toggleHideFund,
        $ = T.restoreHideFund,
        H = n.computed(function () {
          if (!g.data.fundsinfo.total_money || !g.data.fundsinfo.earn_val_today)
            return 0;
          var e =
            Number(g.data.fundsinfo.total_money) -
            Number(g.data.fundsinfo.earn_val_today);
          if (0 === e) return 0;
          var t = (Number(g.data.fundsinfo.earn_val_today) / e) * 100;
          return Math.abs(t) < 0.01 ? 0 : t;
        });
      n.watch(
        function () {
          return m.value;
        },
        (function () {
          var e = r(
            t().mark(function e(r) {
              return t().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.t0 = r), e.t0)) {
                        e.next = 6;
                        break;
                      }
                      return (
                        (e.next = 4),
                        B({
                          reqWebscoket: v && u.bridge.isWebsocket,
                          requestConfig: { checkTradeSession: !1 },
                        })
                      );
                    case 4:
                      C(),
                        p.isAutoToAssetAfterPwdSuc &&
                          (S(), (p.isAutoToAssetAfterPwdSuc = !1));
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })()
      );
      var W = n.computed(function () {
          return !(
            "" !== g.data.fundsinfo.total_money &&
            g.data.fundsinfo.total_money <= 0
          );
        }),
        M = n.computed(function () {
          return "".concat(l.skin, "-skin");
        });
      return e(
        e(
          {
            loading: A,
            refreshAsset: function () {
              p.$stat.click("trade.asset.refresh_asset"),
                B({
                  reqWebsocket: u.bridge.isWebsocket,
                  requestConfig: { checkTradeSession: !1 },
                });
            },
            skinCls: M,
            emptyFn: function () {},
            cardClick: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return m.value || "" === g.data.fundsinfo.total_money
                ? (u.bridge.clickPwd(p, { isCurrentBroker: l.isCurrentBroker }),
                  void p.$stat.click("trade.asset.to_check_pwd"))
                : "transfer" === (null == t ? void 0 : t.scene)
                ? (u.bridge.clickTransfer(
                    p,
                    e(e({}, t), {}, { isCurrentBroker: l.isCurrentBroker })
                  ),
                  p.$stat.click("trade.asset.to_transfer_fund"),
                  void p.$emit("btnClick", "transfer"))
                : void S();
            },
            visibleChange: function (e) {
              e.active &&
                (m.value ||
                  B({
                    reqWebscoket: u.bridge.isWebsocket,
                    requestConfig: { checkTradeSession: !1 },
                  }));
            },
          },
          g
        ),
        {},
        {
          checkPwd: function () {
            (p.isAutoToAssetAfterPwdSuc = !1),
              u.bridge.showPWD(p, { from: l.from }),
              p.$stat.click("trade.asset.to_check_pwd");
          },
          needPwd: m,
          hidefund: j,
          toggleHideFund: x,
          earnRateToday: H,
          isShowAssetDetail: W,
          handleAssetInfo: S,
          pageShow: function () {
            (v = !0), (b = "page-show-called"), q();
          },
          pageHide: function () {
            u.bridge.hidePWD({ from: l.from }),
              (v = !1),
              (p.isAutoToAssetAfterPwdSuc = !1);
          },
          handleShow: q,
          isWebsocket: u.bridge.isWebsocket,
          isShowRate: !h.value,
          getReqStage: function () {
            return b;
          },
        }
      );
    },
  };
Array ||
  (
    n.resolveComponent("BaseCard") +
    n.resolveComponent("AssetTitle") +
    n.resolveComponent("AssetContentPlaceHolder") +
    n.resolveComponent("AdaptFontSize") +
    n.resolveComponent("ValueColor")
  )(),
  Math ||
    (
      function () {
        return "../../../components/AdaptFontSize/AdaptFontSize.js";
      } +
      function () {
        return "../../../components/ValueColor/ValueColor.js";
      }
    )();
var p = n._export_sfc(l, [
  [
    "render",
    function (e, t, r, o, s, a) {
      return n.e(
        { a: o.needPwd },
        o.needPwd
          ? {
              b: n.o(function () {
                return o.checkPwd && o.checkPwd.apply(o, arguments);
              }),
              c: n.o(function () {
                return o.emptyFn && o.emptyFn.apply(o, arguments);
              }),
              d: n.o(function (e) {
                return o.checkPwd();
              }),
              e: n.p({
                "is-current-broker": r.isCurrentBroker,
                "hide-fund-account": !0,
                "show-more": r.showMore,
                "show-broker-bg": r.showBrokerBg,
              }),
            }
          : "" === e.data.fundsinfo.total_money
          ? {
              g: n.o(function (e) {
                return o.cardClick();
              }),
              h: n.p({
                "is-current-broker": r.isCurrentBroker,
                "hide-fund-account": o.hidefund,
                "show-more": r.showMore,
                "show-broker-bg": r.showBrokerBg,
              }),
            }
          : o.isShowAssetDetail
          ? n.e(
              {
                j: n.n(o.hidefund ? "eye-close" : "eye-open"),
                k: n.o(function () {
                  return (
                    o.toggleHideFund && o.toggleHideFund.apply(o, arguments)
                  );
                }),
                l: !o.isWebsocket && !o.hidefund,
              },
              o.isWebsocket || o.hidefund
                ? {}
                : {
                    m: n.n(o.loading ? "asset-refresh-rotate" : ""),
                    n: n.o(function () {
                      return (
                        o.refreshAsset && o.refreshAsset.apply(o, arguments)
                      );
                    }),
                  },
              { o: o.hidefund },
              o.hidefund
                ? {}
                : n.e(
                    {
                      p: n.t(
                        e.$filters.money.formatNoUnit(
                          e.$filters.defaults(
                            e.data.fundsinfo.total_money,
                            "--"
                          )
                        )
                      ),
                      q: n.p({
                        value: e.data.fundsinfo.total_money,
                        breakpoint: 1e8,
                      }),
                      r: o.isShowRate,
                    },
                    o.isShowRate
                      ? {
                          s: n.t(
                            e.$filters.money.formatNoUnit(
                              e.$filters.defaults(o.earnRateToday, "--"),
                              !0
                            )
                          ),
                          t: n.p({ value: o.earnRateToday, breakpoint: 100 }),
                          v: n.p({ value: e.data.fundsinfo.earn_val_today }),
                        }
                      : {},
                    {
                      w: n.t(
                        e.$filters.money.formatNoUnit(
                          e.$filters.defaults(
                            e.data.fundsinfo.earn_val_today,
                            "--"
                          ),
                          !0
                        )
                      ),
                      x: n.p({
                        value: e.data.fundsinfo.earn_val_today,
                        breakpoint: 1e5,
                      }),
                      y: n.p({ value: e.data.fundsinfo.earn_val_today }),
                    }
                  ),
              {
                z: n.o(function (e) {
                  return o.cardClick();
                }),
                A: n.p({
                  "hide-fund-account": o.hidefund,
                  "is-current-broker": r.isCurrentBroker,
                  "show-more": r.showMore,
                  "show-broker-bg": r.showBrokerBg,
                }),
              }
            )
          : e.data.fundsinfo.total_money <= 0
          ? {
              C: n.n(o.hidefund ? "eye-close" : "eye-open"),
              D: n.o(function () {
                return o.toggleHideFund && o.toggleHideFund.apply(o, arguments);
              }),
              E: n.o(function (e) {
                return o.cardClick({ scene: "transfer" });
              }),
              F: n.o(function () {
                return o.emptyFn && o.emptyFn.apply(o, arguments);
              }),
              G: n.o(function (e) {
                return o.cardClick();
              }),
              H: n.p({
                "hide-fund-account": o.hidefund,
                "is-current-broker": r.isCurrentBroker,
                "show-more": r.showMore,
                "show-broker-bg": r.showBrokerBg,
              }),
            }
          : {
              I: n.p({
                "is-current-broker": r.isCurrentBroker,
                "hide-fund-account": o.hidefund,
                "show-more": r.showMore,
                "show-broker-bg": r.showBrokerBg,
              }),
            },
        {
          f: "" === e.data.fundsinfo.total_money,
          i: o.isShowAssetDetail,
          B: e.data.fundsinfo.total_money <= 0,
          J: n.n(o.skinCls),
        }
      );
    },
  ],
  ["__scopeId", "data-v-578a0b1c"],
]);
wx.createComponent(p);
