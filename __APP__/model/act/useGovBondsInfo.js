var e = require("../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var t = require("../../common/vendor.js");
require("../../service/broker.js");
var o = require("../../stores/actconfig/useGovBondsStore.js"),
  i = require("../../config/key.js"),
  n = require("../index/useEntryChannel.js"),
  a = require("../../service/stat/mp-weixin.js"),
  u = require("../../service/aegis/platform/not-wujie.js"),
  s = require("../../stores/red-point/useEntryTips.js"),
  d = require("../../config/broker/11100/index.js"),
  c = { ASSET: "ASSET", ALL: "ALL" },
  l = ["SA", "HA"];
(exports.RP_CACHE_TYPE = c),
  (exports.useGovBondsInfo = function () {
    var v = t.storeToRefs(o.useGovBondsStore()),
      f = v.isLoaded,
      y = v.isShowGovBondsAdv,
      E = v.isRedPointType,
      b = v.govBondsInfo,
      S = n.useEntryChannel().getEntryChannelId,
      m = t.ref(!1),
      _ = t.ref(!1),
      T = t.ref(!1),
      A = t.ref(n.EntryTypeEnum.INIT),
      N = s.useEntryTips(),
      g = N.addRedPoint,
      C = N.addBubbleTip,
      p = N.deleteRedPoint,
      k = N.deleteBubbleTip;
    function h(e) {
      var r =
        e === c.ASSET
          ? i.ASSET_ENTRY_GOV_RP_TYPE_ADV
          : i.All_ENTRY_GOV_RP_TYPE_ADV;
      try {
        var o = t.index.getStorageSync(r) || {},
          n = o.browDate,
          a = void 0 === n ? "" : n,
          u = o.hasClick,
          s = void 0 !== u && u,
          d = t.dayjs().format("YYYYMMDD");
        return a && t.dayjs(d).diff(t.dayjs(a), "days") >= 1
          ? (t.index.setStorageSync(r, {}), !0)
          : !s;
      } catch (e) {
        return !1;
      }
    }
    function R(e) {
      var o =
        e === c.ASSET
          ? i.ASSET_ENTRY_GOV_RP_TYPE_ADV
          : i.All_ENTRY_GOV_RP_TYPE_ADV;
      try {
        var n = t.index.getStorageSync(o) || {},
          a = n.browDate,
          u = void 0 === a ? "" : a,
          s = t.dayjs().format("YYYYMMDD");
        if (u && t.dayjs(s).diff(t.dayjs(u), "days") < 1) return;
        t.index.setStorageSync(
          o,
          r(r({}, n), {}, { browDate: s, hasClick: !0 })
        ),
          e === c.ASSET &&
            t.index.setStorageSync(i.ASSET_ENTRY_HAS_GOV, _.value);
      } catch (e) {}
    }
    return (
      t.watch(
        function () {
          return [f.value, y.value, E.value, _.value, T.value];
        },
        function (r) {
          var o,
            u = e(r, 5),
            s = u[0],
            l = u[1],
            v = u[2],
            f = u[3],
            y = u[4];
          if (
            (f &&
              s &&
              a.stat.click(
                "trade.".concat(
                  (A.value || "").toLocaleLowerCase(),
                  ".govincome.brow"
                ),
                void 0,
                void 0,
                {
                  type: b.value.cssType,
                  fchannel_id_fm_i:
                    null == (o = n.GOV_CHANNEL_MAP[A.value])
                      ? void 0
                      : o[l ? "info" : "normal"],
                }
              ),
            p(d.brokerConfig.dictionary.Enties.all.routeName),
            p(d.brokerConfig.dictionary.Enties.debt.routeName),
            k(d.brokerConfig.dictionary.Enties.debt.routeName),
            !(!l || (y && v)))
          )
            if (f || y) {
              var E = t.index.getStorageSync(i.ASSET_ENTRY_HAS_GOV);
              !h(c.ALL) || (!h(c.ASSET) && E)
                ? k(d.brokerConfig.dictionary.Enties.debt.routeName)
                : C(d.brokerConfig.dictionary.Enties.debt.routeName, {
                    contentText: b.value.incomeRate,
                    isFirstShow: !0,
                  });
            } else g(d.brokerConfig.dictionary.Enties.all.routeName);
        }
      ),
      {
        setEntryAdvClass: function (e, r) {
          try {
            if (!e) return;
            (m.value = Boolean(
              e.find(function (e) {
                return (
                  e.routeName === d.brokerConfig.dictionary.Enties.all.routeName
                );
              })
            )),
              (_.value = (function (e) {
                return (
                  !!e &&
                  Boolean(
                    e.find(function (e) {
                      return (
                        e.routeName ===
                        d.brokerConfig.dictionary.Enties.debt.routeName
                      );
                    })
                  )
                );
              })(e)),
              (T.value = !h(r)),
              (A.value = r);
          } catch (e) {
            return {};
          }
        },
        handleEntryAdvClick: function (e, t) {
          var o;
          try {
            (e.routeName === d.brokerConfig.dictionary.Enties.all.routeName ||
              (e.routeName ===
                d.brokerConfig.dictionary.Enties.debt.routeName &&
                E.value)) &&
              p(e.routeName),
              ((_.value &&
                e.routeName ===
                  d.brokerConfig.dictionary.Enties.debt.routeName) ||
                (!_.value &&
                  e.routeName ===
                    d.brokerConfig.dictionary.Enties.all.routeName)) &&
                (k(d.brokerConfig.dictionary.Enties.debt.routeName), R(t));
            var i = S(A.value, e.routeName),
              n = {};
            return (
              e.routeName === d.brokerConfig.dictionary.Enties.debt.routeName &&
                ((n = { stat_data: i }),
                (null == (o = b.value) ? void 0 : o.market) &&
                  (n = r(
                    r({}, n),
                    {},
                    { tab: l[Number(b.value.market) || 0] || l[0] }
                  ))),
              n
            );
          } catch (e) {}
        },
        isShowRpTypeAdv: h,
        setRpTypeAdvCache: R,
        handleDeleteBubbleTip: function () {
          try {
            (h(c.ALL) && h(c.ASSET)) ||
              k(d.brokerConfig.dictionary.Enties.debt.routeName);
          } catch (e) {
            u.aegisReporter.reportEvent(
              "gov_bonds_info_delete_bubble_tip_error",
              { ext2: e }
            );
          }
        },
      }
    );
  });
