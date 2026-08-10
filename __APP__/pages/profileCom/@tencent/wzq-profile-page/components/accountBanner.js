var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../common/vendor.js"),
  r = require("../Index.js"),
  o = require("../hooks/useJumpDetail.js"),
  n = {
    props: {
      mode: { type: String, default: "normal" },
      message: { type: String, default: "" },
      mockTradeStr: { type: String, default: "" },
      isDataFetch: { type: Boolean, default: !1 },
      hasBind: { type: Boolean, default: !1 },
      hideBrokerAccount: { type: Boolean, default: !1 },
      showGuide: { type: Boolean, default: !1 },
      isPc: { type: Boolean, default: !1 },
    },
    setup: function (n, c) {
      var i = c.emit,
        u = o.useJumpDetail().jumpDetail,
        a = r.useTradeFunc(),
        l = a.isAccountBind,
        p = a.highestPriorityDealer,
        d = a.applyingList,
        s = a.verifyingList,
        g = a.failedList,
        f = t.computed(function () {
          return ["mpwzq", "wzqlight"].includes("mpweapp");
        }),
        m = t.computed(function () {
          var e;
          return (
            "agree" ===
            (null == (e = t.StockBridge.store) ? void 0 : e.protocolStatus)
          );
        }),
        h = t.computed(function () {
          if (!("mp" === t.StockBridge.ENV ? l.value : n.hasBind))
            return "当前暂无可用交易账户";
          var e = p.value.name || "";
          return '当前交易账户：<span class="account-banner-broker-logo-'
            .concat(p.value.code)
            .concat("mp" === t.StockBridge.ENV ? " mp" : "", '"></span>')
            .concat(e);
        }),
        k = t.computed(function () {
          return d.value.length > 0 || s.value.length > 0 || g.value.length > 0
            ? "有账户开户中"
            : l.value
            ? "查看全部"
            : "";
        });
      return (
        t.watch(
          function () {
            return n.showGuide;
          },
          function (e) {
            e && t.StockBridge.report("base.new_profile.simulate_guide_brow");
          }
        ),
        t.onMounted(function () {
          t.StockBridge.report("base.new_profile.asset_module_brow");
        }),
        {
          highestPriorityDealer: p,
          isAccountBind: l,
          accountMessage: h,
          accountStatus: k,
          handleMtClick: function () {
            return (
              (o = this),
              null,
              (c = e().mark(function o() {
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            t.StockBridge.privacyAgreement.check()
                          );
                        case 3:
                          e.next = 8;
                          break;
                        case 5:
                          return (
                            (e.prev = 5),
                            (e.t0 = e.catch(0)),
                            e.abrupt("return")
                          );
                        case 8:
                          t.StockBridge.report(
                            "profile.accountbanner-mocktrade.click"
                          ),
                            n.showGuide &&
                              t.StockBridge.report(
                                "base.new_profile.simulate_guide_click"
                              ),
                            u(r.commonFuncConfig.MOCKTRADE_CONFIG);
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  },
                  o,
                  null,
                  [[0, 5]]
                );
              })),
              new Promise(function (e, t) {
                var r = function (e) {
                    try {
                      i(c.next(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  n = function (e) {
                    try {
                      i(c.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  i = function (t) {
                    return t.done
                      ? e(t.value)
                      : Promise.resolve(t.value).then(r, n);
                  };
                i((c = c.apply(o, null)).next());
              })
            );
            var o, c;
          },
          goBrokerAccount: function () {
            k.value &&
              (t.StockRouter.routeTo({ name: "brokerAccount" }),
              t.StockBridge.report("profile.accountbanner-broker.click"));
          },
          goApplyIndex: function () {
            n.isPc
              ? i("goApplyWithPc")
              : (t.StockRouter.routeTo({ name: "ApplyIndex" }),
                t.StockBridge.report("profile.accountbanner-apply.click"));
          },
          goLogin: function () {
            i("goLogin"),
              t.StockBridge.report("profile.accountbanner-login.click");
          },
          isSimpleMode: f,
          didAgreeAgreement: m,
        }
      );
    },
  },
  c = t._export_sfc(n, [
    [
      "render",
      function (e, r, o, n, c, i) {
        return t.e(
          { a: n.isSimpleMode },
          n.isSimpleMode
            ? t.e(
                { b: !o.hideBrokerAccount },
                o.hideBrokerAccount
                  ? {}
                  : t.e(
                      { c: !n.accountStatus },
                      n.accountStatus
                        ? { f: t.t(n.accountStatus) }
                        : {
                            d: t.o(function () {
                              return n.goLogin && n.goLogin.apply(n, arguments);
                            }, 2366),
                            e: t.o(function () {
                              return (
                                n.goApplyIndex &&
                                n.goApplyIndex.apply(n, arguments)
                              );
                            }, 2367),
                          },
                      {
                        g: n.accountMessage,
                        h: t.n(
                          n.isAccountBind
                            ? "account-broker-bg-".concat(
                                n.highestPriorityDealer.code
                              )
                            : ""
                        ),
                        i: t.o(function () {
                          return (
                            n.goBrokerAccount &&
                            n.goBrokerAccount.apply(n, arguments)
                          );
                        }, 2368),
                      }
                    )
              )
            : t.e({ j: !o.hideBrokerAccount }, (o.hideBrokerAccount, {})),
          { k: o.isDataFetch },
          o.isDataFetch
            ? t.e(
                { l: o.showGuide },
                o.showGuide
                  ? {}
                  : n.didAgreeAgreement
                  ? { n: t.t(o.mockTradeStr) }
                  : {},
                { m: n.didAgreeAgreement }
              )
            : {},
          {
            o: t.o(function () {
              return n.handleMtClick && n.handleMtClick.apply(n, arguments);
            }, 2369),
          }
        );
      },
    ],
    ["__scopeId", "data-v-ad14338a"],
  ]);
wx.createComponent(c);
