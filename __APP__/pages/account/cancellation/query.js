var t = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  r = function (t, e, a) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[e] = a);
  },
  i = function (t, e, n) {
    return new Promise(function (a, s) {
      var u = function (t) {
          try {
            i(n.next(t));
          } catch (t) {
            s(t);
          }
        },
        r = function (t) {
          try {
            i(n.throw(t));
          } catch (t) {
            s(t);
          }
        },
        i = function (t) {
          return t.done ? a(t.value) : Promise.resolve(t.value).then(u, r);
        };
      i((n = n.apply(t, e)).next());
    });
  },
  o = require("../../../common/vendor.js"),
  c = {
    data: function () {
      return {
        isRequesting: !0,
        queryStatus: {
          step1: { msg: "", status: 1 },
          step2: { msg: "", status: 1 },
          step3: { msg: "", status: 1 },
          step4: { msg: "", status: 1 },
        },
      };
    },
    computed: {
      isQualified: function () {
        var t = this;
        return Object.keys(this.queryStatus)
          .filter(function (t) {
            return "step2" !== t;
          })
          .every(function (e) {
            return 0 === t.queryStatus[e].status;
          });
      },
    },
    onShow: function () {
      return i(
        this,
        null,
        e().mark(function t() {
          var n,
            a = this;
          return e().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), this.queryCancellation();
                  case 2:
                    return (
                      (this.isRequesting = !1),
                      (t.next = 5),
                      this.updateUnityUserInfo()
                    );
                  case 5:
                    (n = o.wx$1.getStorageSync(
                      "account_cancellation/confirmed_step"
                    )) &&
                      n.forEach(function (t) {
                        a.queryStatus[t] && (a.queryStatus[t].status = 0);
                      });
                  case 7:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    methods: {
      updateUnityUserInfo: function () {
        return i(
          this,
          null,
          e().mark(function t() {
            return e().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    o.useBrokerInfo()
                      .fetchData()
                      .catch(function () {});
                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
      },
      queryCancellation: function () {
        return i(
          this,
          null,
          e().mark(function t() {
            var n,
              a,
              s = this;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2), o.AccountAPI.accountCancellationQuery()
                      );
                    case 2:
                      0 == +(n = t.sent).code
                        ? ((this.queryStatus = n.data),
                          (a = o.wx$1.getStorageSync(
                            "account_cancellation/confirmed_step"
                          )) &&
                            a.forEach(function (t) {
                              s.queryStatus[t] && (s.queryStatus[t].status = 0);
                            }))
                        : o.wx$1.showToast({
                            title: "查询账号状态失败",
                            icon: "none",
                            duration: 3e3,
                          });
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      giveUp: function () {
        o.Request.reportMTAData({
          eventName: "base.accountcancellation_apply.abandon_click",
        }),
          o.wx$1.navigateBack();
      },
      goConfirm: function () {
        o.Request.reportMTAData({
          eventName: "base.accountcancellation_apply.next_btn_click",
        }),
          o.wx$1.navigateTo({ url: "/pages/account/cancellation/confirm" });
      },
      handleQueryClick: function (e) {
        if (
          (o.Request.reportMTAData({
            eventName: "base.accountcancellation_apply.".concat(
              e,
              "_btn_click"
            ),
          }),
          0 !== this.queryStatus[e].status)
        ) {
          var n = this;
          "step2" === e
            ? o.wx$1.navigateTo({
                url: "/pages/account/cancellation/detailZhuxiao",
              })
            : o.wx$1.navigateTo({
                url: "/pages/account/cancellation/detail",
                success: function (i) {
                  i.eventChannel.emit(
                    "toDetailData",
                    (function (e, n) {
                      for (var i in n || (n = {}))
                        s.call(n, i) && r(e, i, n[i]);
                      if (a) {
                        var o,
                          c = t(a(n));
                        try {
                          for (c.s(); !(o = c.n()).done; ) {
                            i = o.value;
                            u.call(n, i) && r(e, i, n[i]);
                          }
                        } catch (t) {
                          c.e(t);
                        } finally {
                          c.f();
                        }
                      }
                      return e;
                    })({ step: e }, n.queryStatus[e])
                  );
                },
              });
        }
      },
    },
  };
Array ||
  (
    o.resolveComponent("mp-privacy-dialog") +
    o.resolveComponent("stock-privacy-dialog")
  )();
var l = o._export_sfc(c, [
  [
    "render",
    function (t, e, n, a, s, u) {
      return o.e(
        { a: t.rootFontSize, b: !s.isRequesting },
        s.isRequesting
          ? {}
          : o.e(
              {
                c: o.p({ "no-auto": !0 }),
                d: o.n(u.isQualified ? "ok-logo" : "warnning-logo"),
                e: o.t(u.isQualified ? "允许注销账号" : "账号注销待确认"),
                f: o.n({ qualified: u.isQualified }),
                g: !u.isQualified,
              },
              (u.isQualified, {}),
              {
                h: o.t(s.queryStatus.step1.msg),
                i: o.t(0 == s.queryStatus.step1.status ? "已通过" : "未通过"),
                j: o.n({ yes: 0 !== s.queryStatus.step1.status }),
                k: 0 == !s.queryStatus.step1.status,
              },
              (s.queryStatus.step1.status, {}),
              {
                l: o.o(function (t) {
                  return u.handleQueryClick("step1");
                }, 245),
                m: o.t(s.queryStatus.step2.msg),
                n: o.t(0 == s.queryStatus.step2.status ? "已通过" : "未通过"),
                o: o.n({ yes: 0 !== s.queryStatus.step2.status }),
                p: 0 == !s.queryStatus.step2.status,
              },
              (s.queryStatus.step2.status, {}),
              {
                q: o.o(function (t) {
                  return u.handleQueryClick("step2");
                }, 246),
                r: o.t(s.queryStatus.step3.msg),
                s: o.t(0 == s.queryStatus.step3.status ? "已通过" : "未通过"),
                t: o.n({ yes: 0 !== s.queryStatus.step3.status }),
                v: 0 == !s.queryStatus.step3.status,
              },
              (s.queryStatus.step3.status, {}),
              {
                w: o.o(function (t) {
                  return u.handleQueryClick("step3");
                }, 247),
                x: o.t(s.queryStatus.step4.msg),
                y: o.t(0 == s.queryStatus.step4.status ? "已通过" : "未通过"),
                z: o.n({ yes: 0 !== s.queryStatus.step4.status }),
                A: 0 == !s.queryStatus.step4.status,
              },
              (s.queryStatus.step4.status, {}),
              {
                B: o.o(function (t) {
                  return u.handleQueryClick("step4");
                }, 248),
                C: o.o(function () {
                  return u.giveUp && u.giveUp.apply(u, arguments);
                }, 249),
                D: !u.isQualified,
                E: o.o(function () {
                  return u.goConfirm && u.goConfirm.apply(u, arguments);
                }, 250),
              }
            )
      );
    },
  ],
  ["__scopeId", "data-v-1f8ab1a4"],
]);
wx.createPage(l);
