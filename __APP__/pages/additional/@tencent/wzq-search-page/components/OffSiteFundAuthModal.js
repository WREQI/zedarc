var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = function (t, e, n) {
    return new Promise(function (r, o) {
      var a = function (t) {
          try {
            c(n.next(t));
          } catch (t) {
            o(t);
          }
        },
        s = function (t) {
          try {
            c(n.throw(t));
          } catch (t) {
            o(t);
          }
        },
        c = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(a, s);
        };
      c((n = n.apply(t, e)).next());
    });
  },
  n = require("../../../../../common/vendor.js"),
  r = require("../../stock-crypto-modules-hq/src/config.js"),
  o = require("../utils/batch/NewChooseAPI.js"),
  a = {
    name: "OffSiteFundAuthModal",
    components: {
      LayerModal: function () {
        return "./layerModal.js";
      },
    },
    model: { prop: "value", event: "input" },
    props: {
      value: { type: Boolean, default: !1 },
      hasBottomBar: { type: Boolean, default: !0 },
      lastAddedStock: { type: Object, default: null },
    },
    data: function () {
      return {
        isLite: !1,
        title: "场外基金行情自选列表授权",
        content:
          "当您在使用搜索、添加或删除场外基金行情自选列表时，您授权我们收集您添加或删除的场外基金名称、场外基金代码，并向上海腾富信息技术有限公司（联系方式：95017转1转6）的腾讯理财通提供，用于在腾讯理财通中同步添加或删除您的自选列表。",
        contentTail:
          "如您不同意提供上述信息，则在腾讯理财通的自选列表无法同步添加或删除上述信息。",
        cancelText: "不同意",
        confirmText: "同意",
        rootClass: ["mpwzq", "mpweapp"].includes("mpweapp")
          ? ""
          : "safe-bottom",
        submitting: !1,
      };
    },
    mounted: function () {
      n.StockBridge.mtaReport({
        busi: "base",
        eventName: "otc_fund_market_watchlist_auth_brow",
      });
    },
    methods: {
      updateAuthStatus: function (o) {
        return e(
          this,
          null,
          t().mark(function e() {
            var a, s, c, i, u, l, p;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), n.StockBridge.getLoginInfoUnion();
                  case 2:
                    for (
                      a = t.sent,
                        s = {
                          app: r.ORIGIN.mpweapp,
                          openid: a.qluin,
                          fskey: a.qlskey,
                          access_token: a.qlskey,
                          check: "11",
                          appid: "wx4ffb369b6881ee5e",
                        },
                        c =
                          "https://proxy.finance.qq.com/cgi/cgi-bin/zxgapi/usersettings/batchset",
                        i = Object.keys(s),
                        u = 0;
                      u < i.length;
                      u++
                    )
                      (l = i[u]),
                        (c += ""
                          .concat(0 === u ? "?" : "&")
                          .concat(l, "=")
                          .concat(s[l]));
                    return (
                      (p = {
                        subIndex: "GLOBAL",
                        settings: { lct_auth_status: o },
                        interflow: !0,
                      }),
                      t.abrupt(
                        "return",
                        n.StockBridge.request(c, "POST", p, {
                          headers: { "Content-Type": "application/json" },
                          forceCallback: !0,
                        })
                      )
                    );
                  case 9:
                  case "end":
                    return t.stop();
                }
            }, e);
          })
        );
      },
      syncLastAddedStock: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n, r, a, s;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if ((n = this.lastAddedStock) && n.scode && n.type) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return");
                    case 3:
                      return (
                        (r = ["".concat(n.type, ":").concat(n.scode)]),
                        (a = ["1"]),
                        (t.next = 7),
                        o.followBatchStock(r, a)
                      );
                    case 7:
                      if ((s = t.sent) && 0 === s.code) {
                        t.next = 10;
                        break;
                      }
                      throw new Error(s && s.msg ? s.msg : "加自选失败");
                    case 10:
                      return t.abrupt("return", s);
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      onConfirm: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (this.submitting) {
                        t.next = 20;
                        break;
                      }
                      return (
                        n.StockBridge.mtaReport({
                          busi: "base",
                          eventName: "otc_fund_market_custom_list_click",
                        }),
                        (this.submitting = !0),
                        (t.prev = 2),
                        (t.next = 5),
                        this.updateAuthStatus("1")
                      );
                    case 5:
                      return (
                        (t.prev = 5), (t.next = 8), this.syncLastAddedStock()
                      );
                    case 8:
                      t.next = 12;
                      break;
                    case 10:
                      (t.prev = 10), (t.t0 = t.catch(5));
                    case 12:
                      t.next = 16;
                      break;
                    case 14:
                      (t.prev = 14), (t.t1 = t.catch(2));
                    case 16:
                      return (
                        (t.prev = 16), (this.submitting = !1), t.finish(16)
                      );
                    case 19:
                      this.$emit("close"), this.$emit("confirm");
                    case 20:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [
                [2, 14, 16, 19],
                [5, 10],
              ]
            );
          })
        );
      },
      onCancel: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (this.submitting) {
                        t.next = 13;
                        break;
                      }
                      return (
                        n.StockBridge.mtaReport({
                          busi: "base",
                          eventName: "off_market_fund_quote_auth_click",
                        }),
                        (this.submitting = !0),
                        (t.prev = 2),
                        (t.next = 5),
                        this.updateAuthStatus("0")
                      );
                    case 5:
                      t.next = 9;
                      break;
                    case 7:
                      (t.prev = 7), (t.t0 = t.catch(2));
                    case 9:
                      return (t.prev = 9), (this.submitting = !1), t.finish(9);
                    case 12:
                      this.$emit("close"), this.$emit("cancel");
                    case 13:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[2, 7, 9, 12]]
            );
          })
        );
      },
      onClose: function () {
        n.StockBridge.mtaReport({
          busi: "base",
          eventName: "off_market_fund_quote_list_click",
        }),
          this.onCancel();
      },
    },
  };
Array || n.resolveComponent("layer-modal")();
var s = n._export_sfc(a, [
  [
    "render",
    function (t, e, r, o, a, s) {
      return {
        a: n.t(a.content),
        b: n.t(a.contentTail),
        c: n.n({ "text-box--lite": a.isLite }),
        d: n.o(s.onConfirm, 4151),
        e: n.o(s.onCancel, 4152),
        f: n.o(s.onClose, 4153),
        g: n.p({
          title: a.title,
          "cancel-button-text": a.cancelText,
          "confirm-button-text": a.confirmText,
          visible: !0,
          "has-bottom-bar": r.hasBottomBar,
          "root-class": a.rootClass,
          "show-close-btn": !0,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-2f798da4"],
]);
wx.createComponent(s);
