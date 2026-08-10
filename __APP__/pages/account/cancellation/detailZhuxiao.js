var n = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../common/vendor.js"),
  o = {
    data: function () {
      return {
        isRequesting: !0,
        canUnbindList: [],
        cannotUnbindToApp: [],
        cannotUnbindToWzq: [],
        cannotUnbindToLiangrong: [],
        cannotUnbindToApplying: [],
        bindPlatform: {
          wzq_h5: "1",
          light_h5: "2",
          zxg_xcx: "3",
          wzq_xcx: "4",
          zxg_app: "5",
        },
      };
    },
    mounted: function () {
      return (
        (o = this),
        null,
        (e = n().mark(function o() {
          var e, i, a, r, c, l, u, d, s;
          return n().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (n.prev = 0),
                      t.Request.reportMTAData({
                        eventName:
                          "base.accountcancellation_apply_detail.zhuxiao_brow",
                      }),
                      (n.next = 4),
                      t.AccountAPI.accountCancellationQuery()
                    );
                  case 4:
                    (a = n.sent),
                      (this.isRequesting = !1),
                      0 == +a.code &&
                        (null == (e = null == a ? void 0 : a.data)
                          ? void 0
                          : e.step2) &&
                        ((r = this.bindPlatform.wzq_xcx),
                        (c =
                          (null == (i = null == a ? void 0 : a.data)
                            ? void 0
                            : i.step2) || {}),
                        (l = (
                          (null == c ? void 0 : c.wzq_bind_list) || []
                        ).concat((null == c ? void 0 : c.zxg_bind_list) || [])),
                        (u = Array.from(new Set(l.map(JSON.stringify))).map(
                          JSON.parse
                        )),
                        (d = (
                          (null == c ? void 0 : c.wzq_apply_list) || []
                        ).concat(
                          (null == c ? void 0 : c.zxg_apply_list) || []
                        )),
                        (s = Array.from(new Set(d.map(JSON.stringify))).map(
                          JSON.parse
                        )),
                        (this.canUnbindList = l.filter(function (n) {
                          var t;
                          return (
                            0 == +(null == n ? void 0 : n.account_mode) &&
                            -1 !==
                              (null ==
                              (t = null == n ? void 0 : n.unbind_support_item)
                                ? void 0
                                : t.indexOf(r))
                          );
                        })),
                        (this.cannotUnbindToApp = u.filter(function (n) {
                          var t, o;
                          return (
                            0 == +(null == n ? void 0 : n.account_mode) &&
                            -1 ===
                              (null ==
                              (t = null == n ? void 0 : n.unbind_support_item)
                                ? void 0
                                : t.indexOf(r)) &&
                            0 ===
                              (null ==
                              (o = null == n ? void 0 : n.unbind_support_item)
                                ? void 0
                                : o.indexOf("5"))
                          );
                        })),
                        (this.cannotUnbindToWzq = u.filter(function (n) {
                          var t, o;
                          return (
                            0 == +(null == n ? void 0 : n.account_mode) &&
                            -1 ===
                              (null ==
                              (t = null == n ? void 0 : n.unbind_support_item)
                                ? void 0
                                : t.indexOf(r)) &&
                            0 ===
                              (null ==
                              (o = null == n ? void 0 : n.unbind_support_item)
                                ? void 0
                                : o.indexOf("1"))
                          );
                        })),
                        (this.cannotUnbindToLiangrong = u.filter(function (n) {
                          return 1 == +(null == n ? void 0 : n.account_mode);
                        })),
                        (this.cannotUnbindToApplying = s)),
                      (n.next = 11);
                    break;
                  case 8:
                    throw (
                      ((n.prev = 8),
                      (n.t0 = n.catch(0)),
                      (this.isRequesting = !1),
                      n.t0)
                    );
                  case 11:
                  case "end":
                    return n.stop();
                }
            },
            o,
            this,
            [[0, 8]]
          );
        })),
        new Promise(function (n, t) {
          var i = function (n) {
              try {
                r(e.next(n));
              } catch (n) {
                t(n);
              }
            },
            a = function (n) {
              try {
                r(e.throw(n));
              } catch (n) {
                t(n);
              }
            },
            r = function (t) {
              return t.done ? n(t.value) : Promise.resolve(t.value).then(i, a);
            };
          r((e = e.apply(o, null)).next());
        })
      );
      var o, e;
    },
    methods: {
      applyCancellation: function (n) {
        n.qs_id &&
          (t.Request.reportMTAData({
            eventName:
              "base.accountcancellation_apply_detail.zhuxiao_broker_btn_click",
          }),
          t.sdkBridge.navToBrokerPage({
            broker: n.qs_id,
            replace: !0,
            name: "AccountPersonal",
            data: { action: "unbind" },
          }));
      },
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog")
  )();
var e = t._export_sfc(o, [
  [
    "render",
    function (n, o, e, i, a, r) {
      return t.e(
        { a: n.rootFontSize, b: !a.isRequesting },
        a.isRequesting
          ? {}
          : t.e(
              { c: t.p({ "no-auto": !0 }), d: a.canUnbindList.length > 0 },
              a.canUnbindList.length > 0
                ? {
                    e: t.f(a.canUnbindList, function (n, o, e) {
                      return {
                        a: "url(https://st.gtimg.com/image/mp-broker/trade/asset-logo-".concat(
                          n.qs_id,
                          ".png)"
                        ),
                        b: t.t(n.qs_name),
                        c: t.o(
                          function (t) {
                            return r.applyCancellation(n);
                          },
                          251,
                          o
                        ),
                        d: o,
                      };
                    }),
                  }
                : {},
              { f: a.cannotUnbindToApp.length > 0 },
              a.cannotUnbindToApp.length > 0
                ? {
                    g: t.f(a.cannotUnbindToApp, function (n, o, e) {
                      return {
                        a: "url(https://st.gtimg.com/image/mp-broker/trade/asset-logo-".concat(
                          n.qs_id,
                          ".png)"
                        ),
                        b: t.t(n.qs_name),
                        c: o,
                      };
                    }),
                  }
                : {},
              { h: a.cannotUnbindToWzq.length > 0 },
              a.cannotUnbindToWzq.length > 0
                ? {
                    i: t.f(a.cannotUnbindToWzq, function (n, o, e) {
                      return {
                        a: "url(https://st.gtimg.com/image/mp-broker/trade/asset-logo-".concat(
                          n.qs_id,
                          ".png)"
                        ),
                        b: t.t(n.qs_name),
                        c: o,
                      };
                    }),
                  }
                : {},
              { j: a.cannotUnbindToLiangrong.length > 0 },
              a.cannotUnbindToLiangrong.length > 0
                ? {
                    k: t.f(a.cannotUnbindToLiangrong, function (n, o, e) {
                      return {
                        a: "url(https://st.gtimg.com/image/mp-broker/trade/asset-logo-".concat(
                          n.qs_id,
                          ".png)"
                        ),
                        b: t.t(n.qs_name),
                        c: o,
                      };
                    }),
                  }
                : {},
              { l: a.cannotUnbindToApplying.length > 0 },
              a.cannotUnbindToApplying.length > 0
                ? {
                    m: t.f(a.cannotUnbindToApplying, function (n, o, e) {
                      return {
                        a: "url(https://st.gtimg.com/image/mp-broker/trade/asset-logo-".concat(
                          n.qs_id,
                          ".png)"
                        ),
                        b: t.t(n.qs_name),
                        c: o,
                      };
                    }),
                  }
                : {}
            )
      );
    },
  ],
  ["__scopeId", "data-v-f673e9b8"],
]);
wx.createPage(e);
