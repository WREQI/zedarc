require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  l = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  c = function (e, n) {
    for (var r in n || (n = {})) a.call(n, r) && l(e, r, n[r]);
    if (i) {
      var o,
        c = t(i(n));
      try {
        for (c.s(); !(o = c.n()).done; ) {
          r = o.value;
          u.call(n, r) && l(e, r, n[r]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return e;
  },
  s = function (e, t) {
    return r(e, o(t));
  },
  p = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (e) {
          try {
            u(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          try {
            u(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  f = require("../../../common/vendor.js");
function v() {
  var t = f.useBrokerInfo(),
    n = t.fetchData,
    r = t.dealerList,
    o = t.highestPriorityDealer,
    i = t.applyingList,
    a = t.getBrokerMaintain,
    u = f.ref([]),
    l = f.ref([]),
    v = f.ref([]),
    d = f.ref("");
  return {
    updateBrokerList: function () {
      return p(this, arguments, function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e().mark(function p() {
          var h;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (h = (function (e) {
                      var t = [];
                      return (
                        e &&
                          ("[object String]" ===
                          Object.prototype.toString.call(e)
                            ? (t = e.split(","))
                            : "[object Array]" ===
                                Object.prototype.toString.call(e) && (t = e)),
                        t
                      );
                    })(t.activityBroker)),
                    (e.next = 3),
                    n(t)
                  );
                case 3:
                  !(function (e) {
                    var t = [],
                      n = [],
                      o = e.filter(function (e) {
                        var t = r.value.find(function (t) {
                          return t.code === e;
                        });
                        return t && "1" === t.can_apply;
                      });
                    r.value.forEach(function (e) {
                      var r,
                        i,
                        u = e.code,
                        l = e.can_apply,
                        p = e.can_bind,
                        v = e.userstateFront & f.USERSTATE_PID.HASACCOUNT;
                      "1" !== l ||
                        (o.length && !o.includes(u)) ||
                        t.push(
                          s(c({}, e), {
                            maintain:
                              null ==
                              (r = a({
                                bulletinType: v
                                  ? f.BULLETIN_TYPE.TRADE
                                  : f.BULLETIN_TYPE.APPLY,
                                brokerCode: u,
                              }))
                                ? void 0
                                : r.isMaintain,
                          })
                        ),
                        "1" === p &&
                          n.push(
                            s(c({}, e), {
                              maintain:
                                null ==
                                (i = a({
                                  bulletinType: f.BULLETIN_TYPE.TRADE,
                                  brokerCode: u,
                                }))
                                  ? void 0
                                  : i.isMaintain,
                            })
                          );
                    }),
                      (u.value = t),
                      (l.value = n);
                    var p = new Set(
                      r.value
                        .filter(function (e) {
                          return "1" === e.can_apply;
                        })
                        .map(function (e) {
                          return e.code;
                        })
                    );
                    v.value = i.value.filter(function (e) {
                      return p.has(e.code);
                    });
                  })(h),
                    (function () {
                      var e,
                        t = o.value.code,
                        n = "";
                      t &&
                        u.value.findIndex(function (e) {
                          return e.code === t;
                        }) > -1 &&
                        (n = t),
                        n || (n = null == (e = u.value[0]) ? void 0 : e.code);
                      var r = u.value.find(function (e) {
                        return e.code === n;
                      });
                      if (null == r ? void 0 : r.maintain) {
                        var i = u.value.filter(function (e) {
                          return !e.maintain;
                        });
                        if (0 !== i.length) {
                          var a = Math.floor(Math.random() * i.length);
                          n = i[a].code;
                        }
                      }
                      d.value = n;
                    })();
                case 5:
                case "end":
                  return e.stop();
              }
          }, p);
        })();
      });
    },
    applyList: u,
    bindList: l,
    defaultBroker: d,
    applyingList: v,
  };
}
var d = getApp().globalData,
  h = f.useApplyEntry,
  m = h.toApply,
  y = h.toBind,
  b = h.navigateToTrade,
  g = {
    components: {
      CustomModal: function () {
        return "../../apply/components/CustomModal.js";
      },
      NoAccount: function () {
        return "../@tencent/st-openaccount-home/src/pages/pro.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LW9wZW5hY2NvdW50LWhvbWUvc3JjL3BhZ2VzL3Byby52dWU;
          }
        );
      },
      ApplySurvey: function () {
        return "./ApplySurvey.js";
      },
    },
    onShow: function () {
      var e = this;
      (this.isPageVisible = !0),
        this.$nextTick(function () {
          var t, n;
          null ==
            (n = null == (t = e.$refs.applySurvey) ? void 0 : t.onPageShow) ||
            n.call(t);
        });
    },
    onHide: function () {
      this.isPageVisible = !1;
    },
    onPageShow: function () {
      var e = this;
      (this.isPageVisible = !0),
        f.querySubscribedByuserinfo(),
        this.$nextTick(function () {
          var t, n;
          null ==
            (n = null == (t = e.$refs.applySurvey) ? void 0 : t.onPageShow) ||
            n.call(t);
        });
    },
    onPageHide: function () {
      this.isPageVisible = !1;
    },
    setup: function (t, n) {
      var r,
        o,
        i = this,
        a = n.emit,
        u = f.ref({ IS_MP: !0 }),
        l = v(),
        s = l.updateBrokerList,
        h = l.applyList,
        g = l.bindList,
        k = l.defaultBroker,
        w = l.applyingList,
        P = f.useBrokerInfo().isEmbeddedMpEnable,
        S =
          (null ==
          (o = null == (r = null == d ? void 0 : d.detect) ? void 0 : r.env)
            ? void 0
            : o.IS_PCWEIXIN) || !1,
        E = f.ref(!1);
      f.querySubscribedByuserinfo();
      var O = f.ref({}),
        B = h,
        T = g,
        L = f.ref(""),
        A = f.ref(!1),
        C = f.ref("white"),
        N = f.ref(!1),
        I = f.ref({
          isShow: !1,
          title: "",
          content: "",
          showCancelButton: !1,
          onCancel: function () {},
          onConfirm: function () {},
        }),
        M = f.ref(!1),
        R = f.computed(function () {
          return A.value
            ? M.value
              ? f.COMMON_PAGE_STATUS.ERROR
              : ""
            : f.COMMON_PAGE_STATUS.LOADING;
        }),
        x = f.computed(function () {
          var e;
          return (
            (
              (null == (e = w.value)
                ? void 0
                : e.find(function (e) {
                    return e.code === L.value;
                  })) || {}
            ).apply_step || ""
          );
        });
      f.watch(
        function () {
          return A.value;
        },
        function (e) {
          e && (j(), D());
        },
        { immediate: !0 }
      ),
        f.watch(
          function () {
            return E.value;
          },
          function (e, t) {
            e &&
              !t &&
              (d.setSkin(function (e) {
                C.value = "black" === e ? "black" : "white";
              }),
              Y()
                .then(j)
                .catch(function () {}),
              D());
          }
        ),
        f.onMounted(function () {
          var e,
            t =
              null == (e = null == __wxConfig ? void 0 : __wxConfig.tabBar)
                ? void 0
                : e.custom;
          (N.value = t && f.isTabbarPage(f.getCurrentRoute().path)),
            (d.isGetFreshSkin = !1),
            d.setSkin(function (e) {
              C.value = "black" === e ? "black" : "white";
            });
        }),
        f.provide("curBrokerCode", L),
        f.provide("skin", C),
        f.provide("stockBridge", f.StockBridge),
        Y().catch(function () {});
      var _ = !1;
      function D() {
        if (A.value) {
          d.stat.page("/apply/index"),
            d.mpReporter.reportEvent("MONITOR-PAGE-APPLY-INDEX");
          try {
            if (!_ && getApp().globalData.__tradeTabTime) {
              var e = Date.now() - getApp().globalData.__tradeTabTime;
              d.mpReporter.reportTime("PAGE-APPLY-INDEX-OPEN-TIME", e),
                (_ = !0);
            }
          } catch (e) {}
        }
      }
      function j() {
        f.isTabbarPage(f.getCurrentRoute().path) ||
          f.wx$1.setNavigationBarTitle({ title: "开通股票账户" });
      }
      function Y() {
        return p(
          this,
          null,
          e().mark(function t() {
            var n, r;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (M.value = !1),
                        (r =
                          (null == (n = f.getCurrentRoute().query)
                            ? void 0
                            : n.broker) || ""),
                        (e.next = 5),
                        s(r ? { activityBroker: r } : {})
                      );
                    case 5:
                      L.value || (L.value = k.value), (e.next = 11);
                      break;
                    case 8:
                      throw (
                        ((e.prev = 8),
                        (e.t0 = e.catch(0)),
                        (M.value = !0),
                        e.t0)
                      );
                    case 11:
                      return (e.prev = 11), (A.value = !0), e.finish(11);
                    case 14:
                      !(function () {
                        try {
                          var e = f.useBrokerInfo(),
                            t = e.multiBrokerRes,
                            n = e.isTradeEnable,
                            r = JSON.stringify({
                              info: t.value,
                              trade_enable: n.value,
                            }),
                            o = encodeURIComponent(r);
                          B.value.length ||
                            d.mpReporter.reportEvent(
                              "MONITOR-APPLY-INDEX-DEALERLIST-EMPTY",
                              { ext1: L.value, ext2: o }
                            ),
                            T.value.length ||
                              d.mpReporter.reportEvent(
                                "MONITOR-APPLY-INDEX-BINDLIST-EMPTY",
                                { ext1: L.value, ext2: o }
                              ),
                            L.value
                              ? d.mpReporter.reportEvent(
                                  "MONITOR-APPLY-INDEX-DEALER-BROW",
                                  { ext1: L.value }
                                )
                              : d.mpReporter.reportEvent(
                                  "MONITOR-APPLY-INDEX-BROKER-EMPTY",
                                  { ext1: o }
                                );
                        } catch (e) {}
                      })();
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[0, 8, 11, 14]]
            );
          })
        );
      }
      function U(e) {
        var t = P(e);
        return (
          t ||
            f.wx$1.showModal({
              content: "小程序暂不支持该券商交易",
              showCancel: !1,
            }),
          t
        );
      }
      function W(e, t) {
        b({ name: e, dealercode: t }).catch(function (e) {
          var t = e.retmsg;
          f.wx$1.showModal({
            content: t || "系统繁忙 请稍后再试",
            showCancel: !1,
          });
        });
      }
      return (
        f.onBeforeMount(function () {
          return p(
            i,
            null,
            e().mark(function t() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (C.value = f.wx$1.getStorageSync("user/skin") || "white"),
                        a("init");
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          );
        }),
        f.onBeforeUnmount(function () {
          f.wx$1.offAppHide();
        }),
        {
          isPageVisible: E,
          userinfo: O,
          isFetch: A,
          applyBrokerList: B,
          bindBrokerList: T,
          curBrokerCode: L,
          skin: C,
          toSelect: function (e) {
            e && (L.value = e);
          },
          toApply: function (e) {
            e && (L.value = e), U(e) && m({ dealerCode: e });
          },
          toBind: function (e) {
            U(e) && y(e);
          },
          toManage: function (e) {
            U(e) && W("AccountDetail", e);
          },
          toEnter: function (e) {
            U(e) && W("AssetIndex", e);
          },
          toSwitch: function (e) {
            U(e) && W("AccountSwitching", e);
          },
          judgeOpenMp: U,
          modalOption: I,
          showModal: function (e) {
            I.value = c(
              {
                isShow: !0,
                onCancel: function () {},
                onConfirm: function () {},
              },
              e
            );
          },
          platForm: u,
          showCustomNavbar: N,
          pageStatus: R,
          onErrorRetry: function () {
            (A.value = !1), Y().catch(function () {});
          },
          applyBreakPointStep: x,
          applyingList: w,
          isPc: S,
        }
      );
    },
  };
Array ||
  (
    f.resolveComponent("st-status") +
    f.resolveComponent("no-account") +
    f.resolveComponent("apply-survey") +
    f.resolveComponent("custom-modal")
  )();
var k = f._export_sfc(g, [
  [
    "render",
    function (e, t, n, r, o, i) {
      return f.e(
        { a: r.pageStatus },
        r.pageStatus
          ? { b: f.o(r.onErrorRetry, 454), c: f.p({ type: r.pageStatus }) }
          : {},
        { d: r.isFetch && r.curBrokerCode },
        r.isFetch && r.curBrokerCode
          ? {
              e: f.o(r.toApply, 455),
              f: f.o(r.toBind, 456),
              g: f.p({
                "apply-broker-list": r.applyBrokerList,
                "bind-broker-list": r.bindBrokerList,
                "default-broker-code": r.curBrokerCode,
                "plat-form": r.platForm,
                userinfo: r.userinfo,
                "page-show": r.isPageVisible,
                applyBreakPointStep: r.applyBreakPointStep,
                "apply-list": r.applyingList,
                "is-pc": r.isPc,
              }),
            }
          : {},
        { h: r.isFetch },
        r.isFetch ? { i: f.sr("applySurvey", "f18a6d2a-2") } : {},
        { j: r.modalOption.isShow },
        r.modalOption.isShow
          ? f.e(
              {
                k: f.t(r.modalOption.title),
                l: f.t(r.modalOption.content),
                m: r.modalOption.showCancelButton,
              },
              r.modalOption.showCancelButton
                ? {
                    n: f.o(function (e) {
                      (r.modalOption.isShow = !1), r.modalOption.onCancel();
                    }, 457),
                  }
                : {},
              {
                o: f.o(function (e) {
                  (r.modalOption.isShow = !1), r.modalOption.onConfirm();
                }, 458),
              }
            )
          : {},
        {
          p: f.n("skin-".concat(r.skin)),
          q: f.n(r.showCustomNavbar ? "custom-navbar" : ""),
          r: "black" == r.skin ? "dark" : "light",
        }
      );
    },
  ],
  ["__scopeId", "data-v-f18a6d2a"],
]);
wx.createComponent(k);
