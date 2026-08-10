var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, n) {
    return new Promise(function (o, r) {
      var u = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        i = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        a = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(u, i);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  n = require("../../../../../common/vendor.js"),
  o = 6e4,
  r = {
    components: {
      dealerList: function () {
        return "../components/dealerList.js";
      },
      highestBroker: function () {
        return "../components/highestBroker.js";
      },
      bottomButton: function () {
        return "../components/bottomButton.js";
      },
      semiMask: function () {
        return "../node-modules/@tencent/st-semi-modal/index.js";
      },
    },
    options: { styleIsolation: "shared" },
    props: {
      showMiniApply: { type: Boolean, default: !1 },
      premoteAccount: {
        type: Object,
        default: function () {
          return {};
        },
      },
      premotePartner: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isIndex: { type: Boolean, default: !1 },
      symbol: { type: String, default: "" },
      relatedStockid: { type: Object, default: null },
      from: { type: String, default: "" },
      wujiConfig: {
        type: Object,
        default: function () {
          return { accounted_title: "", noaccount_title: "" };
        },
      },
      accountStat: {
        type: Object,
        default: function () {
          return { trade_stat: "", accountbtn_stat: "", accountlist_stat: "" };
        },
      },
    },
    setup: function (r, u) {
      var i,
        a = u.emit,
        c = n.inject("stockBridge"),
        l = ("mp" !== c.ENV ? n.dist.detect().env : { IS_LCT_XCX: !1 })
          .IS_LCT_XCX,
        s =
          (null == (i = n.getCurrentInstance()) ? void 0 : i.proxy) ||
          n.getCurrentInstance(),
        p = n.inject("TradeFunc"),
        d = n.inject("UserstatePid", {}),
        v = n.ref(""),
        f = n.ref(""),
        m = n.ref(""),
        g = n.ref(""),
        _ = n.ref(!1),
        h = n.ref([]),
        y = n.ref([]),
        b = n.ref([]),
        k = n.ref({}),
        A = n.ref(!1),
        w = n.ref(!1),
        S = n.ref(""),
        x = n.ref("极速开户"),
        C = n.ref(""),
        T = n.ref(""),
        G = n.ref(0),
        B = n.ref(!1),
        M = n.ref(!1),
        j = n.ref(null),
        E = n.ref(!1),
        L = c.getCurRouteInfo(),
        I = L ? L.query : {},
        P = n.computed(function () {
          return "right" === f.value
            ? "left-to-right"
            : "left" === f.value
            ? "right-to-left"
            : "";
        }),
        O = !1,
        q = !1;
      function F(n) {
        return t(
          this,
          null,
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      new Promise(function (e, t) {
                        n.boundingClientRect().exec(function (t) {
                          e(t[0].height);
                        });
                      })
                    );
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        );
      }
      function R() {
        return t(
          this,
          null,
          e().mark(function t() {
            var n;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    X(),
                      g.value > m.value
                        ? (v.value = "translateY(0)")
                        : ((n = ((m.value - g.value) / m.value) * 100),
                          (v.value = "translateY(".concat(n, "%)"))),
                      (f.value = "right");
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        );
      }
      function X() {
        return t(
          this,
          null,
          e().mark(function t() {
            var o, r, u;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((o = Math.min(h.value.length, 4)),
                      B.value
                        ? (g.value = 146 + 60 * o)
                        : M.value
                        ? (g.value = 0)
                        : (g.value = 146 + 90 * o),
                      A.value || "mp" !== c.ENV)
                    ) {
                      e.next = 14;
                      break;
                    }
                    if (
                      ((r = n.index
                        .createSelectorQuery()
                        .in(s)
                        .select(".transition-left")),
                      !B.value)
                    ) {
                      e.next = 10;
                      break;
                    }
                    return (e.next = 6), F(r);
                  case 6:
                    (e.t0 = e.sent), (m.value = e.t0 + 12), (e.next = 14);
                    break;
                  case 10:
                    return (e.next = 12), F(r);
                  case 12:
                    (e.t1 = e.sent), (m.value = e.t1 + 6);
                  case 14:
                    (G.value = Math.max(g.value, m.value)),
                      g.value > m.value
                        ? ((u = ((g.value - m.value) / g.value) * 100),
                          (v.value = "translateY(".concat(u, "%)")))
                        : (v.value = "translateY(0)"),
                      (A.value = !0);
                  case 16:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        );
      }
      function D() {
        var e, t;
        l
          ? p.navToApplyIndex({
              stat: null == (e = r.accountStat) ? void 0 : e.accountbtn_stat,
            })
          : p
              .navToApplyStep({
                broker: k.value.code,
                stat: null == (t = r.accountStat) ? void 0 : t.accountbtn_stat,
              })
              .catch(function () {}),
          N();
      }
      function N() {
        var e;
        null == (e = null == s ? void 0 : s.$refs) ||
          e.semimask.closeSemimask(),
          setTimeout(function () {
            (f.value = ""), (v.value = ""), (A.value = !1), (G.value = 0);
          }, 500);
      }
      function U(e) {
        e &&
          !O &&
          ((O = !0),
          c.busOff("market-FundLen", U),
          Y(r.premotePartner),
          n.watch(
            function () {
              return r.premotePartner;
            },
            function (e) {
              Y(e);
            }
          ));
      }
      function Y(e) {
        var t, n, o, u, i, a, c, l;
        if (!e) return "";
        "Bottom_guide_open_account" ===
        (null ==
        (o =
          null == (n = null == (t = e.premote) ? void 0 : t.component_param)
            ? void 0
            : n.component_info)
          ? void 0
          : o.position_name)
          ? "tmpl" === I.linkscene &&
            ((null == (u = I.__msg_name__)
              ? void 0
              : u.endsWith("remind_up")) ||
              (null == (i = I.__msg_name__)
                ? void 0
                : i.endsWith("remind_down")) ||
              "smartnotice_price_change" == I.__msg_name__) &&
            W("tmpl")
          : "Bottom_guide_partner_etf" ===
              (null ==
              (l =
                null ==
                (c = null == (a = e.premote) ? void 0 : a.component_param)
                  ? void 0
                  : c.component_info)
                ? void 0
                : l.position_name) &&
            r.isIndex &&
            "sys" === I.channel &&
            W("sys");
      }
      function W(e) {
        var t, n, o;
        j.value && clearTimeout(j.value);
        var u = {};
        if (
          ("tmpl" === e
            ? (u =
                null == (t = r.premoteAccount.premote.ad_list[0])
                  ? void 0
                  : t.component_param)
            : "sys" === e &&
              (u =
                null == (n = r.premotePartner.premote.ad_list[0])
                  ? void 0
                  : n.component_param),
          u)
        ) {
          var i;
          if (
            "string" == typeof u &&
            u.trim().startsWith("{") &&
            u.trim().endsWith("}")
          )
            try {
              i = JSON.parse(u);
            } catch (e) {
              return;
            }
          if (
            i &&
            void 0 !==
              (null == (o = i.component_content) ? void 0 : o.pre_wait_second)
          ) {
            var l = i.component_content.pre_wait_second;
            j.value = setTimeout(function () {
              var t, n, o, u, i, l, s, p, d, v, f, m;
              "tmpl" === e
                ? ((B.value = !0),
                  (x.value =
                    (null == (t = r.wujiConfig)
                      ? void 0
                      : t.noaccount_guiding_title) || "开通股票账户"),
                  (C.value =
                    (null == (n = r.wujiConfig)
                      ? void 0
                      : n.noaccount_guiding_pic) ||
                    "https://st.gtimg.com/design/3b78d9d93fc1f7a1294e700a69827a86.png"),
                  null == (l = null == c ? void 0 : c.deliverySdk) ||
                    l.deliveryMtaAndRport(
                      null ==
                        (i =
                          null ==
                          (u =
                            null == (o = r.premoteAccount) ? void 0 : o.premote)
                            ? void 0
                            : u.ad_list)
                        ? void 0
                        : i[0],
                      "brow"
                    ))
                : "sys" === e &&
                  ((M.value = !0),
                  (x.value =
                    (null == (s = r.wujiConfig)
                      ? void 0
                      : s.partner_etf_guiding_title) ||
                    "关注 ETF 跟踪指数收益"),
                  (C.value =
                    (null == (p = r.wujiConfig)
                      ? void 0
                      : p.partner_etf_guiding_pic) ||
                    "https://st.gtimg.com/design/f0a6fcb2d0edd239a4e63600f098989c.png"),
                  null == (m = null == c ? void 0 : c.deliverySdk) ||
                    m.deliveryMtaAndRport(
                      null ==
                        (f =
                          null ==
                          (v =
                            null == (d = r.premotePartner) ? void 0 : d.premote)
                            ? void 0
                            : v.ad_list)
                        ? void 0
                        : f[0],
                      "brow"
                    )),
                a("timeToShow");
            }, 1e3 * l);
          }
        }
      }
      return (
        (function () {
          t(
            this,
            null,
            e().mark(function u() {
              var i,
                a,
                l = this;
              return e().wrap(function (u) {
                for (;;)
                  switch ((u.prev = u.next)) {
                    case 0:
                      (a = function () {
                        var e,
                          t =
                            null == (e = r.relatedStockid)
                              ? void 0
                              : e.fullCode;
                        r.showMiniApply &&
                          t &&
                          !i &&
                          ((i = !0),
                          c.mtaReport({
                            busi: "hq",
                            eventName: "hk_us_stock_buy_related_brow",
                            params: { related_stockid: t },
                          }));
                      }),
                        (i = !1),
                        n.watch(
                          function () {
                            return r.showMiniApply;
                          },
                          function (e) {
                            var t, n, o, u, l, s, p, d;
                            e
                              ? (a(),
                                setTimeout(function () {
                                  X();
                                }, 0),
                                j.value && clearTimeout(j.value))
                              : ((i = !1),
                                B.value
                                  ? ((B.value = !1),
                                    null ==
                                      (u =
                                        null == c ? void 0 : c.deliverySdk) ||
                                      u.deliveryMtaAndRport(
                                        null ==
                                          (o =
                                            null ==
                                            (n =
                                              null == (t = r.premoteAccount)
                                                ? void 0
                                                : t.premote)
                                              ? void 0
                                              : n.ad_list)
                                          ? void 0
                                          : o[0],
                                        "close"
                                      ))
                                  : M.value &&
                                    ((M.value = !1),
                                    q ||
                                      null ==
                                        (d =
                                          null == c ? void 0 : c.deliverySdk) ||
                                      d.deliveryMtaAndRport(
                                        null ==
                                          (p =
                                            null ==
                                            (s =
                                              null == (l = r.premotePartner)
                                                ? void 0
                                                : l.premote)
                                              ? void 0
                                              : s.ad_list)
                                          ? void 0
                                          : p[0],
                                        "close"
                                      ),
                                    (q = !1)));
                          }
                        ),
                        n.watch(
                          function () {
                            var e;
                            return null == (e = r.relatedStockid)
                              ? void 0
                              : e.fullCode;
                          },
                          function () {
                            a();
                          }
                        ),
                        n.watch(
                          function () {
                            return r.wujiConfig;
                          },
                          function (u) {
                            return t(
                              l,
                              null,
                              e().mark(function i() {
                                var a, c, l, s, d, v, f;
                                return e().wrap(function (i) {
                                  for (;;)
                                    switch ((i.prev = i.next)) {
                                      case 0:
                                        if (n.isEmpty(u)) {
                                          i.next = 9;
                                          break;
                                        }
                                        return (
                                          (i.next = 3),
                                          (function (n) {
                                            return t(
                                              this,
                                              arguments,
                                              function (t) {
                                                var n =
                                                  arguments.length > 1 &&
                                                  void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : {};
                                                return e().mark(function r() {
                                                  var u, i, a, c, l, s, p, d;
                                                  return e().wrap(function (e) {
                                                    for (;;)
                                                      switch (
                                                        (e.prev = e.next)
                                                      ) {
                                                        case 0:
                                                          return (
                                                            (i = n.cacheTime),
                                                            (a =
                                                              void 0 === i
                                                                ? o
                                                                : i),
                                                            (e.next = 3),
                                                            t.fetchBrokerInfo({
                                                              cacheTime: a,
                                                              forceUpdate: !1,
                                                            })
                                                          );
                                                        case 3:
                                                          return (
                                                            (c = t.isBind()),
                                                            ((l =
                                                              t.getCurrentBroker()).icon =
                                                              "https://st.gtimg.com/image/mp-broker/trade/broker-logo/".concat(
                                                                l.code,
                                                                ".svg"
                                                              )),
                                                            (s =
                                                              t.getApplyList()).forEach(
                                                              function (e) {
                                                                e.icon =
                                                                  "https://st.gtimg.com/image/mp-broker/trade/broker-logo/".concat(
                                                                    e.code,
                                                                    ".svg"
                                                                  );
                                                              }
                                                            ),
                                                            !l.desc &&
                                                              s.length &&
                                                              ((p = s.filter(
                                                                function (e) {
                                                                  return (
                                                                    e.code ===
                                                                    l.code
                                                                  );
                                                                }
                                                              )),
                                                              (l.desc =
                                                                (null ==
                                                                (u =
                                                                  null == p
                                                                    ? void 0
                                                                    : p[0])
                                                                  ? void 0
                                                                  : u.desc) ||
                                                                "")),
                                                            (d =
                                                              t.getBindList()),
                                                            e.abrupt(
                                                              "return",
                                                              (d.forEach(
                                                                function (e) {
                                                                  e.icon =
                                                                    "https://st.gtimg.com/image/mp-broker/trade/broker-logo/".concat(
                                                                      e.code,
                                                                      ".svg"
                                                                    );
                                                                }
                                                              ),
                                                              {
                                                                hasBind: c,
                                                                higherBroker: l,
                                                                applyList: s,
                                                                bindList: d,
                                                              })
                                                            )
                                                          );
                                                        case 9:
                                                        case "end":
                                                          return e.stop();
                                                      }
                                                  }, r);
                                                })();
                                              }
                                            );
                                          })(p)
                                        );
                                      case 3:
                                        (l = i.sent),
                                          (s = l.hasBind),
                                          (d = l.applyList),
                                          (v = l.higherBroker),
                                          (f = l.bindList),
                                          (_.value = s),
                                          (b.value = d),
                                          (y.value = f),
                                          (k.value = v),
                                          (h.value = d),
                                          (x.value =
                                            (_.value
                                              ? null == (a = r.wujiConfig)
                                                ? void 0
                                                : a.accounted_title
                                              : null == (c = r.wujiConfig)
                                              ? void 0
                                              : c.noaccount_title) ||
                                            "极速开户");
                                      case 9:
                                      case "end":
                                        return i.stop();
                                    }
                                }, i);
                              })
                            );
                          },
                          { immediate: !0, deep: !0 }
                        ),
                        (T.value = "blue-theme"),
                        (w.value = !0),
                        Y(r.premoteAccount),
                        n.watch(
                          function () {
                            return r.premoteAccount;
                          },
                          function (e) {
                            Y(e);
                          }
                        ),
                        c.busOn("market-FundLen", U);
                    case 3:
                    case "end":
                      return u.stop();
                  }
              }, u);
            })
          );
        })(),
        n.onBeforeUnmount(function () {
          j.value && clearTimeout(j.value), c.busOff("market-FundLen", U);
        }),
        {
          currentShow: f,
          animateClass: P,
          currentTransform: v,
          accountStatus: _,
          currentList: h,
          currentBroker: k,
          bindAccount: function () {
            B.value
              ? (E.value = !1)
              : c.report("hq.mini_apply.bindaccount_click"),
              (h.value = y.value),
              (S.value = "登录"),
              R();
          },
          showMoreDealer: function () {
            B.value ? (E.value = !0) : c.report("hq.mini_apply.switch_broker"),
              (h.value = b.value),
              (S.value = "去开户"),
              R();
          },
          showRightpart: R,
          showLeftpart: function () {
            return t(
              this,
              null,
              e().mark(function t() {
                var n;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        g.value > m.value
                          ? ((n = ((g.value - m.value) / g.value) * 100),
                            (v.value = "translateY(".concat(n, "%)")))
                          : (v.value = "translateY(0)"),
                          (f.value = "left");
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
          },
          currentBtnText: S,
          dealerAction: function (e) {
            var t, n;
            "登录" === S.value
              ? p.navToBind({ broker: e }).catch(function () {})
              : (c.report("hq.mini_apply.applylist_toaccount_click", {
                  fchannel_id_fm_i:
                    null == (t = r.accountStat) ? void 0 : t.accountlist_stat,
                }),
                p
                  .navToApplyStep({
                    broker: e,
                    stat:
                      null == (n = r.accountStat) ? void 0 : n.accountlist_stat,
                  })
                  .catch(function () {})),
              N();
          },
          beforeOpenAccount: function () {
            var e, t, n, o, u;
            B.value
              ? ((B.value = !1),
                null == (o = null == c ? void 0 : c.deliverySdk) ||
                  o.deliveryMtaAndRport(
                    null ==
                      (n =
                        null ==
                        (t =
                          null == (e = r.premoteAccount) ? void 0 : e.premote)
                          ? void 0
                          : t.ad_list)
                      ? void 0
                      : n[0],
                    "click"
                  ))
              : c.report("hq.mini_apply.openaccount_click", {
                  fchannel_id_fm_i:
                    null == (u = r.accountStat) ? void 0 : u.accountbtn_stat,
                }),
              "wzq_light" === c.ENV &&
              Boolean(k.value.userstateFront & d.UNBIND)
                ? (c.modal({
                    content: "您可绑定激活账户后直接进行交易",
                    confirmText: "立即前往",
                    onConfirm: function () {
                      D();
                    },
                  }),
                  N())
                : D();
          },
          openAccount: D,
          toTrade: function () {
            var e;
            a(
              "miniapplyTotrade",
              null == (e = r.accountStat) ? void 0 : e.trade_stat
            ),
              N();
          },
          inited: w,
          closeMiniApply: N,
          closeSemimask: function () {
            c.report("hq.mini_apply.close_click"),
              a("close", !1),
              setTimeout(function () {
                (f.value = ""), (v.value = ""), (A.value = !1), (G.value = 0);
              }, 0);
          },
          guidingPicUrl: C,
          miniApplyTitle: x,
          theme: T,
          setTransitionHeight: X,
          currentHeight: G,
          IS_LCT_XCX: l,
          openAccountGuiding: B,
          partnerEtfGuiding: M,
          openAccountGuidingDealer: E,
          goMoreFund: function () {
            var e, t, n, o;
            M.value &&
              ((q = !0),
              N(),
              null == (o = null == c ? void 0 : c.deliverySdk) ||
                o.deliveryMtaAndRport(
                  null ==
                    (n =
                      null ==
                      (t = null == (e = r.premotePartner) ? void 0 : e.premote)
                        ? void 0
                        : t.ad_list)
                    ? void 0
                    : n[0],
                  "click"
                ));
            var u =
              "https://wzq.tenpay.com/mp/v2/index.html#/chy/fundList?fundType=inner&fromPage="
                .concat(r.from, "&boardType=")
                .concat(r.symbol, "&pageType=zs&jumpFrom=lite");
            c.openExtraWebview(u, {});
          },
        }
      );
    },
  };
Array ||
  (
    n.resolveComponent("highestBroker") +
    n.resolveComponent("bottom-button") +
    n.resolveComponent("dealer-list") +
    n.resolveComponent("semi-mask")
  )();
var u = n._export_sfc(r, [
  [
    "render",
    function (e, t, o, r, u, i) {
      return n.e(
        { a: o.showMiniApply },
        o.showMiniApply
          ? n.e(
              {
                b: n.t(r.miniApplyTitle),
                c: r.openAccountGuiding || r.partnerEtfGuiding ? 1 : "",
                d: n.o(function () {
                  return (
                    r.closeMiniApply && r.closeMiniApply.apply(r, arguments)
                  );
                }, 2023),
                e: !r.openAccountGuiding && !r.partnerEtfGuiding,
              },
              r.openAccountGuiding || r.partnerEtfGuiding
                ? {}
                : {
                    f: n.r("mini-apply-slot", {
                      accountStatus: r.accountStatus,
                    }),
                  },
              { g: !r.accountStatus && !r.IS_LCT_XCX && !r.partnerEtfGuiding },
              r.accountStatus || r.IS_LCT_XCX || r.partnerEtfGuiding
                ? {}
                : {
                    h: n.o(r.showMoreDealer, 2024),
                    i: n.p({
                      "current-broker": r.currentBroker,
                      "open-account-guiding": r.openAccountGuiding,
                    }),
                  },
              { j: r.partnerEtfGuiding },
              (r.partnerEtfGuiding, {}),
              { k: r.openAccountGuiding || r.partnerEtfGuiding },
              r.openAccountGuiding || r.partnerEtfGuiding
                ? {
                    l: r.guidingPicUrl,
                    m: n.n(r.partnerEtfGuiding ? "div-guide-partner-etf" : ""),
                  }
                : {},
              { n: r.openAccountGuiding },
              r.openAccountGuiding
                ? {
                    o: n.o(function () {
                      return (
                        r.beforeOpenAccount &&
                        r.beforeOpenAccount.apply(r, arguments)
                      );
                    }, 2025),
                  }
                : r.partnerEtfGuiding
                ? {
                    q: n.o(function () {
                      return r.goMoreFund && r.goMoreFund.apply(r, arguments);
                    }, 2026),
                  }
                : {
                    r: n.o(r.bindAccount, 2027),
                    s: n.o(r.beforeOpenAccount, 2028),
                    t: n.o(r.toTrade, 2029),
                    v: n.p({
                      "account-status": r.accountStatus,
                      theme: r.theme,
                    }),
                  },
              { p: r.partnerEtfGuiding, w: r.openAccountGuiding },
              r.openAccountGuiding
                ? {
                    x: n.o(function () {
                      return r.bindAccount && r.bindAccount.apply(r, arguments);
                    }, 2030),
                  }
                : {},
              {
                y: n.n(r.animateClass),
                z: n.o(function () {
                  return r.showLeftpart && r.showLeftpart.apply(r, arguments);
                }, 2031),
                A: !r.openAccountGuidingDealer,
                B: r.openAccountGuidingDealer,
                C: n.o(function () {
                  return (
                    r.closeMiniApply && r.closeMiniApply.apply(r, arguments)
                  );
                }, 2032),
                D: n.o(r.dealerAction, 2033),
                E: n.p({
                  "current-list": r.currentList,
                  "current-btn-text": r.currentBtnText,
                  theme: r.theme,
                  "open-account-guiding": r.openAccountGuiding,
                }),
                F: n.n(r.animateClass),
                G: r.currentTransform,
                H: r.currentHeight + "px",
                I: n.sr("semimask", "6a152eb6-0"),
                J: n.o(r.closeSemimask, 2034),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-6a152eb6"],
]);
wx.createComponent(u);
