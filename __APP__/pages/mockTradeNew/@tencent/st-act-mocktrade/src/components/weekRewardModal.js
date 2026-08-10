var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = function (e, r, a) {
    return new Promise(function (t, o) {
      var n = function (e) {
          try {
            d(a.next(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          try {
            d(a.throw(e));
          } catch (e) {
            o(e);
          }
        },
        d = function (e) {
          return e.done ? t(e.value) : Promise.resolve(e.value).then(n, s);
        };
      d((a = a.apply(e, r)).next());
    });
  },
  a = require("../../../../../../common/vendor.js"),
  t = require("../utils/tool.js"),
  o = require("../../../st-reward-core/utils/rewardTypeUtils.js"),
  n = {
    components: {
      redbag: function () {
        return "./redbag.js";
      },
      reward: function () {
        return "../cp-component/Reward/mp.js";
      },
      rewardGuide: function () {
        return "./rewardGuide.js";
      },
    },
    props: {
      rewardData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      platform: { type: String, default: "zxg" },
      srcsite: { type: String, default: "" },
      h5userinfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      rankHome: {
        type: Object,
        default: function () {
          return {};
        },
      },
      assetInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (n, s) {
      var d = this,
        u = s.emit,
        i = a.inject("hasBind"),
        c = a.inject("navigateToTrade"),
        l = a.ref(!1),
        f = a.ref(!1),
        p = a.ref(!1),
        w = a.ref(!1),
        m = a.computed(function () {
          return n.rankHome
            ? (n.rankHome.last_week_score / 1e4).toFixed(2)
            : "";
        }),
        h = a.computed(function () {
          return m.value > 0;
        }),
        v = a.computed(function () {
          return p.value && h.value;
        }),
        y = function () {
          return r(
            d,
            null,
            e().mark(function r() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      try {
                        p.value = !i.value;
                      } catch (e) {
                        (p.value = !1),
                          a.StockBridge.aegisReportEvent(
                            "MOCKTRADE-REDBAG-ACCOUNT-STATUS-FAIL"
                          );
                      }
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, r);
            })
          );
        };
      return (
        a.onMounted(function () {
          r(
            d,
            null,
            e().mark(function r() {
              var t;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((t = n.rewardData.reward_desc) &&
                          (o.isCash(t)
                            ? (l.value = !0)
                            : o.isGoldCoin(t) && (f.value = !0)),
                        (e.t0 = h.value),
                        !e.t0)
                      ) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 6), y();
                    case 6:
                      a.StockBridge.report(
                        "trade.mocktrade.asset.rewardmodal.brow"
                      ),
                        (w.value = !0);
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, r);
            })
          );
        }),
        {
          lastWeekRatio: m,
          ready: w,
          goTrade: function () {
            a.StockBridge.report("trade.mocktrade.asset.reward.gotrade.click"),
              "mp" === n.platform
                ? c({
                    name: "ApplyIndex",
                    query: { stat_data: "Ijd00p000a039" },
                  })
                : setTimeout(function () {
                    t.judgeGoAsset(n.h5userinfo, {
                      srcsite: n.srcsite,
                      stat_data: "Ijd00p000a039",
                    });
                  }, 300);
          },
          isRewardCash: l,
          isRewardCoin: f,
          showGuideApplyModal: v,
          onShowShare: function () {
            a.StockBridge.report("trade.mocktrade.asset.reward.share.click"),
              u("share");
          },
          closeRewardModal: function () {
            return u("close");
          },
        }
      );
    },
  };
Array ||
  (
    a.resolveComponent("rewardGuide") +
    a.resolveComponent("reward") +
    a.resolveComponent("redbag")
  )();
var s = a._export_sfc(n, [
  [
    "render",
    function (e, r, t, o, n, s) {
      return a.e(
        { a: o.ready && o.showGuideApplyModal },
        o.ready && o.showGuideApplyModal
          ? {
              b: a.o(o.goTrade, 4549),
              c: a.o(o.closeRewardModal, 4550),
              d: a.p({
                isRewardCash: o.isRewardCash,
                isRewardCoin: o.isRewardCoin,
                h5userinfo: t.h5userinfo,
                rewardData: t.rewardData,
                platform: t.platform,
                rankHome: t.rankHome,
                assetInfo: t.assetInfo,
              }),
            }
          : o.ready && o.isRewardCoin && t.rewardData
          ? {
              f: a.o(o.goTrade, 4551),
              g: a.o(o.closeRewardModal, 4552),
              h: a.p({
                rewardData: t.rewardData,
                h5userinfo: t.h5userinfo,
                srcsite: t.srcsite,
              }),
            }
          : o.ready && o.isRewardCash
          ? {
              j: a.o(o.onShowShare, 4553),
              k: a.o(o.closeRewardModal, 4554),
              l: a.p({ rewardData: t.rewardData, platform: t.platform }),
            }
          : {},
        {
          e: o.ready && o.isRewardCoin && t.rewardData,
          i: o.ready && o.isRewardCash,
        }
      );
    },
  ],
]);
wx.createComponent(s);
