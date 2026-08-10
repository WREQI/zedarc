require("../../../app.js");
var e = require("../../../common/vendor.js"),
  n = require("../../../model/index/useHideFund.js"),
  t = require("../../../stores/app/useMode.js"),
  o = require("../../../stores/user/useUserinfo.js");
require("../../../service/broker.js");
var a = require("../../../common/components/Dialog/index.js"),
  i = require("../../../model/common/useZxgSupport.js"),
  r = require("../../../config/enum.js"),
  s = require("../../../utils/getPlatform.js");
require("../../../service/stat/mp-weixin.js");
var u = require("../../../components/ValueColor/utils.js"),
  d = require("../../../config/broker/11100/index.js"),
  l = {
    props: {
      fundsinfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (l) {
      var c = s.getPlatform(),
        f = c.isZxg,
        p = c.isMiniProgram,
        m =
          (c.isLctXcx,
          c.bizPlatformVer,
          c.isLightWeb,
          e.getCurrentInstance().proxy),
        g = e.inject("assetIndexComp"),
        h = e.inject("assetCompositionPopupTop"),
        v = e.inject("showAssetComposition");
      e.inject("compositionScrollHeight");
      var y = e.inject("showAnalysisEntry", !1),
        _ = e.inject("holdValWithBalance", 0),
        x = o.useUserinfoStore(),
        w = e.storeToRefs(x),
        A = w.userinfo,
        S = w.accountMode,
        b = t.useModeStore(),
        C = e.storeToRefs(b).simpleMode,
        j = n.useHideFund(),
        k = j.hidefund,
        $ = j.toggleHideFund,
        M = e.computed(function () {
          return "".concat(
            d.brokerConfig.bind.accountCalled || "资金账号",
            "："
          );
        }),
        F = i.useZxgSupport(),
        T = e.computed(function () {
          var e;
          if (k.value) {
            var n = "";
            return (
              (null == (e = A.value.fundaccount) ? void 0 : e.length) >= 4
                ? ((n = A.value.fundaccount),
                  (n = ""
                    .concat(n.substring(0, 1), "**")
                    .concat(n.substring(n.length - 3))))
                : (n = "****"),
              "".concat(n)
            );
          }
          return "".concat(A.value.fundaccount || "--");
        }),
        q = e.computed(function () {
          return !!A.value.rzrq_account;
        }),
        z = e.computed(function () {
          return S.value === r.E_ACCOUNT_MODE.MARGIN;
        }),
        N = e.computed(function () {
          var e, n;
          return !!(null ==
          (n = null == (e = d.brokerConfig.trade) ? void 0 : e.index)
            ? void 0
            : n.showLiteAssetTriangle);
        }),
        V = e.computed(function () {
          if (!l.fundsinfo.total_money || !l.fundsinfo.earn_val_today) return 0;
          var e =
            Number(l.fundsinfo.total_money) -
            Number(l.fundsinfo.earn_val_today);
          if (0 === e) return 0;
          var n = (Number(l.fundsinfo.earn_val_today) / e) * 100;
          return Math.abs(n) < 0.01 ? 0 : n;
        });
      function H() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        e && m.$stat.click("trade.asset.asset_wrap_".concat(e));
      }
      return {
        showAnalysisEntry: y,
        hidefund: k,
        toggleHideFund: $,
        simpleMode: C,
        userinfo: A,
        broker: d.brokerConfig,
        accountName: M,
        fundAccount: T,
        holdValWithBalance: _,
        onClickPostionValue: function () {
          H("postion_tips_exposed"),
            a.Dialog({
              message:
                "5" === l.fundsinfo.asset_status
                  ? "理财资产暂无数据，请稍候查看"
                  : "理财资产清算中，请稍后查看",
              context: g,
              confirmButtonText: "确定",
            });
        },
        reportStat: H,
        handleToggleHideFund: function () {
          $(),
            e.nextTick$1(function () {
              var e;
              null == (e = null == m ? void 0 : m.$forceUpdate) || e.call(m);
            });
        },
        toAnalysisIndex: function () {
          m.$stat.click("trade.asset.asset_wrap_total_money"),
            N.value
              ? (function (n) {
                  try {
                    e.index
                      .createSelectorQuery()
                      .in(m)
                      .select(".asset-data-container .total-money-wrap")
                      .boundingClientRect(function (e) {
                        if (e) {
                          var n = +e.top + 48;
                          h.value = "".concat(n, "px");
                        }
                        v.value = !0;
                      })
                      .exec();
                  } catch (e) {
                    v.value = !0;
                  }
                  m.$stat.click("trade.asset.total_money_overlay_show");
                })()
              : y.value &&
                m.$router.push({ name: "AnalysisIndex", query: { tab: "0" } });
        },
        showAccountSwitcher: q,
        isMarginMode: z,
        toggleAccount: function () {
          null == m || m.$emit("toggleAccount");
        },
        earnRateToday: V,
        onShareClick: function () {
          if (!k.value) {
            var e = [+V.value, +l.fundsinfo.earn_val_today];
            g.$refs.shareDialog.open(0, e, "");
          }
        },
        isMiniProgram: p,
        isZxg: f,
        zxgSupport: F,
        adaptFontSize: u.adaptFontSize,
        getTopHideInfoRect: function () {
          return new Promise(function (n) {
            e.index
              .createSelectorQuery()
              .in(m)
              .select(".top-wrap")
              .boundingClientRect(function (e) {
                n(e);
              })
              .exec();
          });
        },
        showLiteAssetTriangle: N,
      };
    },
  };
Array ||
  (e.resolveComponent("BrokerLogo") + e.resolveComponent("ValueColor"))(),
  Math ||
    (
      function () {
        return "../../../components/BrokerLogo/BrokerLogo.js";
      } +
      function () {
        return "../../../components/ValueColor/ValueColor.js";
      }
    )();
var c = e._export_sfc(l, [
  [
    "render",
    function (n, t, o, a, i, r) {
      return e.e(
        {
          a: e.t(a.broker.base.name),
          b: a.showAccountSwitcher && a.isMarginMode,
        },
        (a.showAccountSwitcher && a.isMarginMode, {}),
        {
          c: e.t(a.accountName),
          d: e.t(a.fundAccount),
          e: a.showAccountSwitcher,
        },
        a.showAccountSwitcher
          ? {
              f: e.o(function () {
                return a.toggleAccount && a.toggleAccount.apply(a, arguments);
              }),
            }
          : {},
        { g: e.n(a.hidefund ? "eye-link" : "eye-open"), h: a.hidefund },
        (a.hidefund, {}),
        {
          i: e.n(a.hidefund ? ["eye-switch", "flex-center"] : []),
          j: e.o(function () {
            return (
              a.handleToggleHideFund &&
              a.handleToggleHideFund.apply(a, arguments)
            );
          }),
          k: a.hidefund,
        },
        a.hidefund
          ? {}
          : {
              l: e.t(
                n.$filters.money.formatNoUnit(
                  n.$filters.defaults(o.fundsinfo.earn_val_today, "--"),
                  !0
                )
              ),
              m: e.n(a.adaptFontSize(o.fundsinfo.earn_val_today, 1e5, "40")),
              n: e.n(
                a.adaptFontSize(o.fundsinfo.earn_val_today, 9999999, "32")
              ),
              o: e.t(
                n.$filters.money.formatNoUnit(
                  n.$filters.defaults(a.earnRateToday, "--"),
                  !0
                )
              ),
              p: e.n(a.adaptFontSize(a.earnRateToday, 100, "30")),
              q: e.p({ value: o.fundsinfo.earn_val_today }),
            },
        { r: a.hidefund },
        a.hidefund
          ? {}
          : {
              s: e.t(
                n.$filters.money.formatNoUnit(
                  n.$filters.defaults(o.fundsinfo.earn_val, "--"),
                  !0
                )
              ),
              t: e.n(a.adaptFontSize(o.fundsinfo.earn_val, 1e5, "28")),
              v: e.n(a.adaptFontSize(o.fundsinfo.earn_val, 9999999, "24")),
              w: e.p({ value: o.fundsinfo.earn_val }),
            },
        { x: a.showLiteAssetTriangle },
        (a.showLiteAssetTriangle || a.showAnalysisEntry, {}),
        {
          y: a.showAnalysisEntry,
          z: e.o(function () {
            return a.toAnalysisIndex && a.toAnalysisIndex.apply(a, arguments);
          }),
          A: a.hidefund,
        },
        a.hidefund
          ? {}
          : {
              B: e.t(
                n.$filters.money.formatNoUnit(
                  n.$filters.defaults(o.fundsinfo.total_money, "--")
                )
              ),
              C: e.n(a.adaptFontSize(o.fundsinfo.total_money, 9999999, "28")),
            },
        {
          D:
            "2" === o.fundsinfo.asset_status ||
            "5" === o.fundsinfo.asset_status,
        },
        "2" === o.fundsinfo.asset_status || "5" === o.fundsinfo.asset_status
          ? {
              E: e.o(function () {
                return (
                  a.onClickPostionValue &&
                  a.onClickPostionValue.apply(a, arguments)
                );
              }),
            }
          : {},
        { F: a.hidefund },
        a.hidefund
          ? {}
          : {
              G: e.t(
                n.$filters.money.formatNoUnit(
                  n.$filters.defaults(a.holdValWithBalance, "--")
                )
              ),
              H: e.n(a.adaptFontSize(a.holdValWithBalance, 9999999, "28")),
            },
        { I: a.hidefund },
        a.hidefund
          ? {}
          : {
              J: e.t(
                n.$filters.money.formatNoUnit(
                  n.$filters.defaults(o.fundsinfo.can_trade, "--")
                )
              ),
              K: e.n(a.adaptFontSize(o.fundsinfo.can_trade, 9999999, "28")),
            },
        {
          L: e.n(
            a.simpleMode
              ? "asset-data-container__simple-mode"
              : "border--bottom-c1"
          ),
          M: e.n(a.isZxg ? "asset-data-container--zxg" : ""),
        }
      );
    },
  ],
]);
wx.createComponent(c);
