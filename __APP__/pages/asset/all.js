require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var o = require("../../common/vendor.js");
require("../../service/broker.js");
var a = require("../../model/trade/useBstMark.js"),
  u = require("../../model/trade/useConditionEntry.js"),
  s = require("../../utils/getPlatform.js"),
  l = require("../../config/key.js"),
  c = require("../../model/trade/useAutoAddChoose.js"),
  d = require("../../stores/user/useUserinfo.js"),
  v = require("../../config/enum.js"),
  p = require("../../model/act/useGovBondsInfo.js"),
  f = require("../../model/index/useEntryChannel.js");
require("../../utils/index.js");
var h = require("../../utils/navigator.js"),
  y = require("../../service/stat/mp-weixin.js"),
  m = require("../../stores/red-point/useEntryTips.js"),
  b = require("../../stores/new-stock/useNewStockEntryTip.js"),
  g = require("../../model/product/useDuotianqi.js"),
  k = require("../../stores/app/useMode.js");
require("../../service/sdk/lib/api.js");
var _ = require("../../service/sdk/platform/mp-weixin.js"),
  C = require("../../service/cookie/mp-weixin.js"),
  E = require("../../service/mpIntercept.js"),
  q = require("../../mixin/platforms/index.js"),
  N = require("../../config/broker/11100/index.js"),
  A = {
    components: {
      EntryAdv: function () {
        return "../../bizs/asset/EntryIconAdv.js";
      },
    },
    mixins: [q.pluginMixins],
    setup: function () {
      var q = o.getCurrentInstance().proxy,
        A = a.useBstMark(),
        w = A.bstOpen,
        T = A.getBstStatus,
        x = A.bstHiddenConfig,
        j = c.useAutoAddChoose(),
        S = j.open,
        R = j.getStatus,
        M = j.hiddenConfig,
        B = j.hidden,
        H = u.useConditionEntry().isConditionEntry,
        P = m.useEntryTips(),
        O = P.isHasBubbleTipByRouteName,
        z = P.deleteBubbleTip,
        I = o.storeToRefs(P).redPoints,
        U = d.useUserinfoStore(),
        L = o.storeToRefs(U).userinfo,
        D = U.forceGetUserInfo,
        F = p.useGovBondsInfo(),
        G = F.setEntryAdvClass,
        K = F.handleEntryAdvClick,
        Y = g.useDuotianqi().getEntryName,
        W = f.useEntryChannel().getEntryChannelId,
        $ = o.ref([]),
        Z = o.ref({}),
        Q = o.computed(function () {
          var e,
            r = i({}, Z.value),
            t = n(I.value);
          try {
            for (t.s(); !(e = t.n()).done; ) {
              r[e.value] = !0;
            }
          } catch (e) {
            t.e(e);
          } finally {
            t.f();
          }
          return r;
        });
      o.onMounted(
        t(
          e().mark(function n() {
            var a, u;
            return e().wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      z(N.brokerConfig.dictionary.Enties.fund.routeName),
                      (n.next = 3),
                      D()
                    );
                  case 3:
                    return (n.next = 5), Promise.all([re(), T(!1)]);
                  case 5:
                    ($.value = (function () {
                      var e,
                        t,
                        n,
                        a,
                        u,
                        l,
                        c,
                        d,
                        p,
                        f,
                        h,
                        y,
                        m,
                        b,
                        g,
                        k,
                        _,
                        E,
                        q,
                        A,
                        w,
                        T,
                        x,
                        j = s.getPlatform(),
                        S = j.isZxg,
                        R = (j.isLightWeb, j.bizPlatformVer),
                        M = j.isOEM,
                        P =
                          (j.isMpPlugin,
                          o.cloneDeep(N.brokerConfig.trade.all.entry)),
                        O = N.brokerConfig.dictionary.Enties,
                        z = new C.AdapterCookie(),
                        I = P;
                      I.forEach(function (e) {
                        e.entry = e.entry
                          .map(function (e) {
                            var r = O[e] ? i({}, O[e]) : { hidden: !0 };
                            return (
                              "BstMark" === r.routeName &&
                                !r.hidden &&
                                S &&
                                o.lt(R, "9.1") &&
                                (r.hidden = !0),
                              "ConditionList" !== r.routeName ||
                                H.value ||
                                (r.hidden = !0),
                              "charge" === e &&
                                L.value.userstate !== v.USERSTATE.HASACCOUNT &&
                                (r.hidden = !0),
                              "fundrecord" === e &&
                                "1" !== L.value.in_out_control &&
                                (r.hidden = !0),
                              "permission" !== e ||
                                (!M &&
                                  "1" ===
                                    L.value.permission_overview_control) ||
                                (r.hidden = !0),
                              r
                            );
                          })
                          .filter(function (e) {
                            return !e.hidden;
                          });
                      }),
                        "1" === L.value.income_ver2024 &&
                          I[2].entry.unshift(O.analysis);
                      var U = L.value || {},
                        D = U.activityinfo,
                        F = void 0 === D ? {} : D,
                        G = U.balanceinfo,
                        K = void 0 === G ? {} : G,
                        W = U.activity_show,
                        $ = F.activity_id,
                        Z = F.activity_type,
                        Q = K.show_balance,
                        V = K.show_special;
                      if (
                        ("1" === Q && I[3].entry.push(O.jxb),
                        "1" === V || $ || "1" === W)
                      ) {
                        var J = Y({ activityId: $, activityType: Z });
                        I[3].entry.push(
                          i(
                            i({}, O.duotianqi),
                            {},
                            { name: J, type: "jxbActivity" }
                          )
                        );
                      }
                      if (
                        (O.etfSubscribe &&
                          !(null == (e = O.etfSubscribe) ? void 0 : e.hidden) &&
                          "1" === L.value.etf_sub_control &&
                          I[3].entry.push(O.etfSubscribe),
                        O.shortTerm &&
                          !(null == (t = O.shortTerm) ? void 0 : t.hidden) &&
                          "1" ===
                            (null == (n = L.value) ? void 0 : n.tools_entrance))
                      ) {
                        var X = I.find(function (e) {
                          return "wealth" === e.name;
                        });
                        X && X.entry.push(O.shortTerm);
                      }
                      ((null ==
                      (u =
                        null == (a = N.brokerConfig.trade)
                          ? void 0
                          : a.newMarketFullRelease)
                        ? void 0
                        : u.bj) ||
                        "1" ===
                          (null == (l = L.value)
                            ? void 0
                            : l.bj_market_entry)) &&
                        O.bj &&
                        !O.bj.hidden &&
                        (null == (d = null == (c = I[4]) ? void 0 : c.entry) ||
                          d.push(O.bj)),
                        ((null ==
                        (f =
                          null == (p = N.brokerConfig.trade)
                            ? void 0
                            : p.newMarketFullRelease)
                          ? void 0
                          : f.nq) ||
                          "1" ===
                            (null == (h = L.value)
                              ? void 0
                              : h.nq_market_entry)) &&
                          (O.stocktransfer &&
                            !O.stocktransfer.hidden &&
                            (null ==
                              (m = null == (y = I[4]) ? void 0 : y.entry) ||
                              m.push(O.stocktransfer)),
                          O.stocktransferAuth &&
                            !O.stocktransferAuth.hidden &&
                            (null ==
                              (g = null == (b = I[4]) ? void 0 : b.entry) ||
                              g.push(O.stocktransferAuth))),
                        ((null ==
                        (_ =
                          null == (k = N.brokerConfig.trade)
                            ? void 0
                            : k.newMarketFullRelease)
                          ? void 0
                          : _.ggt) ||
                          "1" ===
                            (null == (E = L.value)
                              ? void 0
                              : E.ggt_market_entry) ||
                          "1" ===
                            (null == (q = L.value)
                              ? void 0
                              : q.ggt_permission_gray)) &&
                          O.ggt &&
                          !O.ggt.hidden &&
                          (null ==
                            (w = null == (A = I[4]) ? void 0 : A.entry) ||
                            w.push(O.ggt)),
                        B.value || I[2].entry.push(O.autoAddChoose),
                        (I = I.filter(function (e) {
                          return e.entry.length > 0;
                        }));
                      var ee =
                        null == (T = N.brokerConfig.dictionary.Enties)
                          ? void 0
                          : T.shareholderRights;
                      return (
                        !ee ||
                          (null == ee ? void 0 : ee.hidden) ||
                          ["k", "M"].includes(
                            (null == (x = z.get("wzq_qluin"))
                              ? void 0
                              : x.slice(-1)) || ""
                          ) ||
                          I[2].entry.push(
                            N.brokerConfig.dictionary.Enties.shareholderRights
                          ),
                        I.forEach(function (e) {
                          e.computeEntries = [];
                          for (
                            var t = 1;
                            t <= Math.ceil(e.entry.length / 4);
                            t++
                          ) {
                            e.computeEntries[t - 1] = [];
                            for (
                              var n = e.entry.slice(4 * (t - 1), 4 * t), i = 0;
                              i < n.length;
                              i++
                            )
                              e.computeEntries[t - 1].push(n[i]);
                            if (n.length < 4) {
                              var o,
                                a = 4 - n.length;
                              (o = e.computeEntries[t - 1]).push.apply(
                                o,
                                r(new Array(a).fill({ placeHolder: !0 }))
                              );
                            }
                          }
                        }),
                        I
                      );
                    })()),
                      t(
                        e().mark(function r() {
                          var n, i, a, u, s, c, d, v;
                          return e().wrap(function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  return (
                                    (d = {}),
                                    (v =
                                      !x.value &&
                                      !w.value &&
                                      !o.index.getStorageSync(
                                        l.BST_MARK_ENTRY
                                      )),
                                    (d[
                                      null ==
                                      (i =
                                        null ==
                                        (n = N.brokerConfig.dictionary.Enties)
                                          ? void 0
                                          : n.bstmark)
                                        ? void 0
                                        : i.routeName
                                    ] = v),
                                    (r.next = 4),
                                    t(
                                      e().mark(function r() {
                                        return e().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (e.next = 2), R();
                                              case 2:
                                                return (e.next = 4), M();
                                              case 4:
                                                return e.abrupt(
                                                  "return",
                                                  !B.value &&
                                                    !S.value &&
                                                    !o.index.getStorageSync(
                                                      l.AUTO_ADDCHOOSE_MARK_ENTRY
                                                    )
                                                );
                                              case 5:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, r);
                                      })
                                    )()
                                  );
                                case 4:
                                  return (
                                    (d[
                                      null ==
                                      (u =
                                        null ==
                                        (a = N.brokerConfig.dictionary.Enties)
                                          ? void 0
                                          : a.autoAddChoose)
                                        ? void 0
                                        : u.routeName
                                    ] = r.sent),
                                    (d[
                                      null ==
                                      (c =
                                        null ==
                                        (s = N.brokerConfig.dictionary.Enties)
                                          ? void 0
                                          : s.updateid)
                                        ? void 0
                                        : c.routeName
                                    ] = "1" === L.value.cred_update_notify),
                                    r.abrupt("return", d)
                                  );
                                case 7:
                                case "end":
                                  return r.stop();
                              }
                          }, r);
                        })
                      )().then(function (e) {
                        return (Z.value = e);
                      }),
                      "1" === L.value.newer_shareholder_notify &&
                        P.addBubbleTip(
                          N.brokerConfig.dictionary.Enties.account.routeName,
                          { contentText: "股东卡", isFirstShow: !0 }
                        ),
                      (null == (u = null == (a = $.value) ? void 0 : a[3])
                        ? void 0
                        : u.entry) &&
                        (null == G ||
                          G($.value[3].entry || [], p.RP_CACHE_TYPE.ALL));
                  case 9:
                  case "end":
                    return n.stop();
                }
            }, n);
          })
        )
      );
      var V = b.useNewStockEntryTip(),
        J = V.isClickedNewStock,
        X = V.newStockOnClick,
        ee = o.storeToRefs(V).isHasNew;
      function re() {
        return te.apply(this, arguments);
      }
      function te() {
        return (te = t(
          e().mark(function r() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    try {
                      !L.value.rzrq_account && "1" === L.value.is_zy_rzrq_gray;
                    } catch (e) {}
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )).apply(this, arguments);
      }
      return {
        isHasBubbleTipByRouteName: O,
        entries: $,
        redpoints: Q,
        handleRedirect: function (e, r) {
          var t,
            n,
            a,
            u,
            c,
            d = s.getPlatform().isZxg,
            m = (null == (t = L.value) ? void 0 : t.activityinfo) || {},
            b = m.activity_id,
            g = void 0 === b ? "" : b,
            C = m.activity_acct,
            A = void 0 === C ? "" : C,
            w = m.activity_type,
            T = void 0 === w ? "" : w,
            x = {},
            j = W(f.EntryTypeEnum.ALL, e.routeName);
          if (
            (j && (x = i(i({}, x), {}, { fchannel_id_fm_i: j })),
            y.stat.click(
              "trade.all.".concat(e.routeName.toLowerCase()),
              void 0,
              void 0,
              x
            ),
            e.routeName === N.brokerConfig.dictionary.Enties.account.routeName)
          ) {
            var S = P.bubbleTips[e.routeName];
            "股东卡" === (null == S ? void 0 : S.contentText) &&
              y.stat.click("trade.all.newer_shareholder_bubble_click");
          }
          if (
            ("BizKeChuangOpen" === e.routeName &&
              o.index.setStorageSync(
                l.BIZ_KECHUANG_COME_FROM,
                q.$route.fullPath
              ),
            "BstMark" === e.routeName)
          ) {
            o.index.setStorageSync(l.BST_MARK_ENTRY, !0);
            var R =
              null ==
              (a =
                null == (n = N.brokerConfig.dictionary.Enties)
                  ? void 0
                  : n.bstmark)
                ? void 0
                : a.routeName;
            R && delete Q.value[R];
          }
          if ("AutoAddChoose" === e.routeName) {
            o.index.setStorageSync(l.AUTO_ADDCHOOSE_MARK_ENTRY, !0);
            var M =
              null ==
              (c =
                null == (u = N.brokerConfig.dictionary.Enties)
                  ? void 0
                  : u.autoAddChoose)
                ? void 0
                : c.routeName;
            M && delete Q.value[M];
          }
          if (
            ("ConditionList" === e.routeName &&
              y.stat.click("assetall.cond.enter_click"),
            e.routeName === N.brokerConfig.dictionary.Enties.ipo.routeName &&
              !J() &&
              ee.value)
          )
            return (
              X(),
              void q.$router.push({
                name: "NewStockRecords",
                query: { purchase_type: "2" },
              })
            );
          if ("etfRace" !== e.routeName)
            if ("HqShareholderRights" !== e.routeName) {
              var B = K(e, p.RP_CACHE_TYPE.ALL),
                H = { jump_by: "inner" };
              q.$router.push({
                name: e.routeName,
                query: i(
                  i(
                    i(
                      i(
                        i(
                          i(
                            i(
                              {},
                              ["business", "authority"].includes(r)
                                ? { returl: "/pages/asset/all" }
                                : {}
                            ),
                            "AboutProtocol" === e.routeName
                              ? { key: "gjzq_ysxys" }
                              : {}
                          ),
                          "ProductDuoTianQi" === e.routeName &&
                            "jxbActivity" === e.type
                            ? i(
                                i({}, H),
                                {},
                                {
                                  activity_id: g,
                                  activity_acct: A,
                                  activity_type: T,
                                }
                              )
                            : H
                        ),
                        B
                      ),
                      "AccountBind" === e.routeName
                        ? { mode: v.E_ACCOUNT_MODE.MARGIN }
                        : {}
                    ),
                    "BizRiskUpdateResult" === e.routeName
                      ? { from: "assetAll" }
                      : {}
                  ),
                  "BizBrokerService" === e.routeName ? { key: e.key } : {}
                ),
              });
            } else {
              y.stat.click("trade.assetall.shareholder_equity_click");
              try {
                E.getTheme();
                var O = k.useModeStore().simpleMode;
                _.sdk.openUrlWithExtraWebview({
                  url: "https://wzq.tenpay.com/mp/"
                    .concat(O ? "lite" : "v2", "/index.html?")
                    .concat(O ? "" : "srcshell=h5", "#/hq/shareholder-rights"),
                });
              } catch (e) {}
            }
          else
            setTimeout(function () {
              var e =
                "https://zqact03.tenpay.com/activity/page/etfEnrollMatchFourthPhase/#/index?target=rank&frombroker=".concat(
                  N.brokerConfig.base.code
                );
              d ? q.$sdk.redirect("WebBrowser", { p_url: e }) : h.uniHref(e);
            }, 100);
        },
      };
    },
  };
Array || (o.resolveComponent("entry-Adv") + o.resolveComponent("GlobalWrap"))(),
  Math;
var w = o._export_sfc(A, [
  [
    "render",
    function (e, r, t, n, i, a) {
      return {
        a: e.rootFontSize,
        b: o.f(n.entries, function (e, r, t) {
          return {
            a: o.t(e.title),
            b: o.f(e.computeEntries, function (r, i, a) {
              return {
                a: o.f(r, function (r, i, u) {
                  return o.e(
                    { a: r.placeHolder },
                    r.placeHolder
                      ? {}
                      : {
                          b: o.n("".concat(r.icon)),
                          c:
                            "5288c902-1-" +
                            t +
                            "-" +
                            a +
                            "-" +
                            u +
                            ",5288c902-0",
                          d: o.p({ "route-name": r.routeName }),
                          e: o.n(
                            n.isHasBubbleTipByRouteName(r.routeName)
                              ? "rp-type"
                              : ""
                          ),
                          f: o.t(r.name),
                          g: o.n(n.redpoints[r.routeName] ? "redpoint" : ""),
                          h: o.o(function (t) {
                            return n.handleRedirect(r, e.name);
                          }, i),
                        },
                    { i: i }
                  );
                }),
                b: i,
              };
            }),
            c: r,
            d: o.n("item-group-" + e.name),
            e: o.n(r !== n.entries.length - 1 ? "border--bottom" : ""),
          };
        }),
        c: o.sr("#global-wrap", "5288c902-0"),
        d: o.p({ id: "global-wrap", filePath: "/asset/all", defaultTheme: "" }),
      };
    },
  ],
]);
wx.createPage(w);
