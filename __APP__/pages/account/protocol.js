var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, n) {
    return new Promise(function (r, o) {
      var a = function (t) {
          try {
            i(n.next(t));
          } catch (t) {
            o(t);
          }
        },
        c = function (t) {
          try {
            i(n.throw(t));
          } catch (t) {
            o(t);
          }
        },
        i = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(a, c);
        };
      i((n = n.apply(t, e)).next());
    });
  },
  n = require("../../common/vendor.js");
getApp().globalData;
var r = {
  data: function () {
    return { protocalList: [], showDate: "" };
  },
  created: function () {
    this.querySetting();
  },
  methods: {
    onCancel: function () {
      n.StockBridge.store.publishProtocolStatus("reject"),
        this.updateUserArgreementStatus("refuse1"),
        n.wx$1.showToast({
          title: "您已进入浏览模式",
          icon: "none",
          duration: 3e3,
        });
    },
    onConfirm: function () {
      n.Request.reportMTAData({
        eventName: "base.account.protocolbanner.btnclick",
      }),
        n.StockBridge.store.publishProtocolStatus("agree"),
        this.updateUserArgreementStatus("agree");
    },
    updateUserArgreementStatus: function (r) {
      return e(
        this,
        null,
        t().mark(function e() {
          var o;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (o = this.protocalList.map(function (t) {
                        return t.id;
                      })),
                      (t.prev = 1),
                      (t.next = 4),
                      n.AccountAPI.updateUserArgreementStatus({
                        action: r,
                        agreement_ids: o,
                      })
                    );
                  case 4:
                    t.next = 8;
                    break;
                  case 6:
                    (t.prev = 6), (t.t0 = t.catch(1));
                  case 8:
                    n.StockBridge.store.getProtocolStatus(),
                      setTimeout(function () {
                        n.wx$1.switchTab({ url: "/pages/index/account/main" });
                      }, 300);
                  case 9:
                  case "end":
                    return t.stop();
                }
            },
            e,
            this,
            [[1, 6]]
          );
        })
      );
    },
    formatDate: function (t) {
      var e = new Date(t);
      return ""
        .concat(e.getFullYear(), " 年 ")
        .concat(e.getMonth() + 1, " 月 ")
        .concat(e.getDate(), " 日");
    },
    goProtocol: function (t) {
      n.Request.reportMTAData({
        eventName: "base.account.protocolbanner.read_btn_click",
      });
      var e = "/pages/additional/webview/index?url=".concat(
        encodeURIComponent(t)
      );
      n.wx$1.navigateTo({ url: e });
    },
    in7Day: function (t, e) {
      var n = (t - e) / 86400;
      return n >= 0 && n < 7;
    },
    querySetting: function () {
      return e(
        this,
        null,
        t().mark(function e() {
          var r,
            o,
            a,
            c = this;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    (r = n.StockBridge.store),
                      (o = r.protocolServerTime),
                      (a = r.allProtocolList) &&
                        a.length &&
                        a.some(function (t) {
                          return t.consented_any_version;
                        }) &&
                        ((this.protocalList = a.filter(function (t) {
                          return (
                            "0" === t.status && c.in7Day(+o, +t.publish_time)
                          );
                        })),
                        (this.showDate =
                          1e3 *
                          a.sort(function (t, e) {
                            return e.publish_time - t.publish_time;
                          })[0].publish_time));
                  case 2:
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
  },
};
Array ||
  (
    n.resolveComponent("mp-privacy-dialog") +
    n.resolveComponent("stock-privacy-dialog")
  )();
var o = n._export_sfc(r, [
  [
    "render",
    function (t, e, r, o, a, c) {
      return {
        a: t.rootFontSize,
        b: n.p({ "no-auto": !0 }),
        c: n.f(a.protocalList, function (t, e, r) {
          return { a: n.t(t.title), b: e };
        }),
        d: n.t(c.formatDate(a.showDate)),
        e: n.f(a.protocalList, function (t, e, r) {
          return {
            a: n.t(t.title),
            b: e,
            c: n.o(
              function (e) {
                return c.goProtocol(t.url);
              },
              241,
              e
            ),
          };
        }),
        f: n.t(c.formatDate(a.showDate)),
        g: n.o(function () {
          return c.onCancel && c.onCancel.apply(c, arguments);
        }, 242),
        h: n.o(function () {
          return c.onConfirm && c.onConfirm.apply(c, arguments);
        }, 243),
      };
    },
  ],
  ["__scopeId", "data-v-3fc6d9f8"],
]);
wx.createPage(o);
