var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  a = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  i = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  l = function (e, t) {
    for (var n in t || (t = {})) s.call(t, n) && i(e, n, t[n]);
    if (u) {
      var a,
        o = r(u(t));
      try {
        for (o.s(); !(a = o.n()).done; ) {
          n = a.value;
          c.call(t, n) && i(e, n, t[n]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    return e;
  },
  p = function (e, t, r) {
    return new Promise(function (n, a) {
      var o = function (e) {
          try {
            s(r.next(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          try {
            s(r.throw(e));
          } catch (e) {
            a(e);
          }
        },
        s = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, u);
        };
      s((r = r.apply(e, t)).next());
    });
  },
  f = require("../../../../../../common/vendor.js"),
  v = require("../../../stock-news-core/utils/loginHelper.js"),
  d = require("../../../stock-search-ai/hooks/usePrivacyGrantHooks.js"),
  g = require("../../../st-status/mp/config.js"),
  b = require("../../../stock-crypto-modules-hq/src/config.js"),
  m = {
    components: {
      ContactList: function () {
        return "../ContactList/ContactList.js";
      },
      Status: function () {
        return "../../../../../../node-modules/@tencent/st-status/mp/index.js";
      },
      PermissionAgreeDialog: function () {
        return "../../../../../searchAi/@tencent/stock-search-ai/components/PermissionAgreeDialog.js";
      },
    },
    props: {
      yb_scene: { type: String, default: "" },
      theme: { type: String, default: "light" },
    },
    setup: function (r, n) {
      var u = this;
      n.emit;
      f.StockBridge.setTitle("提醒他看");
      var s = "mp" === f.StockBridge.ENV,
        c = f.ref(0),
        i = f.ref([]),
        m = f.ref([]),
        y = f.ref(!1),
        h = f.ref(!0),
        k = f.ref(g.COMMON_PAGE_STATUS.LOADING),
        S = !1,
        _ = f.computed(function () {
          return i.value.length > 0 || m.value.length > 0;
        }),
        x = function () {
          return p(
            u,
            null,
            e().mark(function r() {
              return e().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      k.value = g.COMMON_PAGE_STATUS.LOADING;
                    case 1:
                      if (!h.value || y.value || S) {
                        r.next = 8;
                        break;
                      }
                      return (
                        (r.next = 4),
                        p(
                          u,
                          null,
                          e().mark(function r() {
                            var n, a, o, u, s, p, d, b, _;
                            return e().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (!y.value && h.value && !S) {
                                        e.next = 2;
                                        break;
                                      }
                                      return e.abrupt("return", !1);
                                    case 2:
                                      return (
                                        (e.prev = 2),
                                        (y.value = !0),
                                        (c.value = c.value + 1),
                                        (n = { p: c.value }),
                                        (e.next = 7),
                                        (function (e) {
                                          var t =
                                              "https://proxy.finance.qq.com/group/newstockgroup/rssService/getStockFriend",
                                            r = l(
                                              l({ l: 20, yuanbao_show: 1 }, e),
                                              v.getLoginParamsObject(t)
                                            );
                                          return f.StockBridge.request(
                                            t,
                                            "GET",
                                            r
                                          );
                                        })(n)
                                      );
                                    case 7:
                                      if (((a = e.sent), !S)) {
                                        e.next = 10;
                                        break;
                                      }
                                      return e.abrupt("return", !1);
                                    case 10:
                                      if (!(null == a ? void 0 : a.data)) {
                                        e.next = 13;
                                        break;
                                      }
                                      return (
                                        (o = a.data),
                                        (u = o.data),
                                        (s = void 0 === u ? [] : u),
                                        (p = o.top_list),
                                        (d = void 0 === p ? [] : p),
                                        (b = o.more_flag),
                                        (_ = void 0 !== b && b),
                                        e.abrupt(
                                          "return",
                                          (1 === c.value &&
                                            d.length > 0 &&
                                            ((m.value = d),
                                            f.StockBridge.report(
                                              "shequ.choosefriend.yuanbao_brow",
                                              w()
                                            )),
                                          (i.value = [].concat(
                                            t(i.value),
                                            t(s)
                                          )),
                                          (h.value = _),
                                          _ ||
                                            f.StockBridge.report(
                                              "tp_detail_load_more_no_more"
                                            ),
                                          !0)
                                        )
                                      );
                                    case 13:
                                      return e.abrupt(
                                        "return",
                                        ((k.value = g.COMMON_PAGE_STATUS.ERROR),
                                        !1)
                                      );
                                    case 16:
                                      return (
                                        (e.prev = 16),
                                        (e.t0 = e.catch(2)),
                                        e.abrupt(
                                          "return",
                                          (S ||
                                            (k.value =
                                              g.COMMON_PAGE_STATUS.ERROR),
                                          !1)
                                        )
                                      );
                                    case 19:
                                      return (
                                        (e.prev = 19),
                                        (y.value = !1),
                                        e.finish(19)
                                      );
                                    case 22:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              r,
                              null,
                              [[2, 16, 19, 22]]
                            );
                          })
                        )
                      );
                    case 4:
                      if (r.sent) {
                        r.next = 6;
                        break;
                      }
                      return r.abrupt("break", 8);
                    case 6:
                      r.next = 1;
                      break;
                    case 8:
                      k.value !== g.COMMON_PAGE_STATUS.ERROR &&
                        (k.value = null);
                    case 9:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          );
        },
        w = function () {
          return { yb_scene: r.yb_scene };
        },
        P = null,
        O = function () {
          f.StockBridge.report("shequ.choosefriend.yuanbao_click", w());
          var e,
            t = "community-stockfriendsPicked";
          f.StockBridge.ENV === f.EnvTypeEnum.SHY_NATIVE
            ? (shy.notify(t, ((e = l({}, P)), a(e, o({ module: !1 })))),
              shy.exit(!0))
            : (f.StockBridge.busEmit(t, P), f.StockRouter.routeBack(1));
        },
        T = d.usePrivacyGrantHooks().getTargetProtocal,
        q = "yuanbao_privacy_needpopup",
        A = f.ref(!1),
        R = f.ref(null),
        E = function () {
          return p(
            u,
            null,
            e().mark(function t() {
              var r, n, a, o, u, s;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), T("wenyuanbao");
                    case 2:
                      return (
                        (r = e.sent),
                        (R.value = r),
                        (n = r.consented_user_need_popup),
                        (a = r.not_consented_user_need_popup),
                        (o = r.consented_any_version),
                        (u = !(1 == r.status) && ((o && n) || (!o && a))),
                        e.abrupt(
                          "return",
                          ((s = u), f.StockBridge.setStorage(q, s), u)
                        )
                      );
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          );
        };
      return (
        f.onMounted(function () {
          x();
        }),
        f.onUnmounted(function () {
          S = !0;
        }),
        {
          isMP: s,
          pageStatus: k,
          stockfriendsList: i,
          topList: m,
          hasData: _,
          bindTapItem: function (t) {
            return p(
              u,
              null,
              e().mark(function r() {
                return e().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          if (
                            ((P = t),
                            1 != +(null == t ? void 0 : t.is_yb_account))
                          ) {
                            r.next = 11;
                            break;
                          }
                          return (
                            (r.prev = 1),
                            (r.next = 4),
                            p(
                              u,
                              null,
                              e().mark(function t() {
                                return e().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          !(function () {
                                            var e = f.StockBridge.getStorage(q);
                                            return "boolean" != typeof e || e;
                                          })()
                                        ) {
                                          e.next = 9;
                                          break;
                                        }
                                        return (e.next = 4), E();
                                      case 4:
                                        if (!e.sent) {
                                          e.next = 7;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          ((A.value = !0), !1)
                                        );
                                      case 7:
                                        e.next = 10;
                                        break;
                                      case 9:
                                        E();
                                      case 10:
                                        return e.abrupt("return", !0);
                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                }, t);
                              })
                            )
                          );
                        case 4:
                          if (r.sent) {
                            r.next = 6;
                            break;
                          }
                          return r.abrupt("return", void (A.value = !0));
                        case 6:
                          r.next = 11;
                          break;
                        case 8:
                          return (
                            (r.prev = 8),
                            (r.t0 = r.catch(1)),
                            r.abrupt(
                              "return",
                              void f.StockBridge.toast("网络异常")
                            )
                          );
                        case 11:
                          O();
                        case 12:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[1, 8]]
                );
              })
            );
          },
          onErrorRetry: function () {
            (c.value = 0), (i.value = []), (h.value = !0), (y.value = !1), x();
          },
          showFullScreenPermissionDialog: A,
          onAgreeProtocal: function () {
            return p(
              u,
              null,
              e().mark(function t() {
                return e().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (A.value = !1),
                          p(
                            u,
                            null,
                            e().mark(function t() {
                              var r, n, a, o, u, s, c;
                              return e().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        f.StockBridge.getLoginInfoUnion()
                                      );
                                    case 2:
                                      for (
                                        r = e.sent,
                                          n = {
                                            app: b.ORIGIN.mpweapp,
                                            openid: r.qluin,
                                            fskey: r.qlskey,
                                            access_token: r.qlskey,
                                            check: "11",
                                            appid: "wx4ffb369b6881ee5e",
                                          },
                                          a =
                                            "https://proxy.finance.qq.com/cgi/cgi-bin/zxgapi/usersettings/batchset",
                                          o = Object.keys(n),
                                          u = 0;
                                        u < o.length;
                                        u++
                                      )
                                        (s = o[u]),
                                          (a += ""
                                            .concat(0 === u ? "?" : "&")
                                            .concat(s, "=")
                                            .concat(n[s]));
                                      return (
                                        (c = {
                                          subIndex: "GLOBAL",
                                          settings: {
                                            authorizeUserDataToYuanBao:
                                              JSON.stringify({ switch: "YES" }),
                                          },
                                          interflow: !0,
                                        }),
                                        (e.next = 10),
                                        f.StockBridge.request(a, "POST", c, {
                                          headers: {
                                            "Content-Type": "application/json",
                                          },
                                          forceCallback: !0,
                                        })
                                      );
                                    case 10:
                                    case "end":
                                      return e.stop();
                                  }
                              }, t);
                            })
                          ),
                          O();
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
          },
          onDenyProtocal: function () {
            A.value = !1;
          },
          privacyType: "community_yuanbao",
          privacyResult: R,
          getReportParams: w,
        }
      );
    },
  };
Array ||
  (
    f.resolveComponent("ContactList") +
    f.resolveComponent("Status") +
    f.resolveComponent("permission-agree-dialog")
  )();
var y = f._export_sfc(m, [
  [
    "render",
    function (e, t, r, n, a, o) {
      return f.e(
        { a: !n.pageStatus && n.hasData },
        !n.pageStatus && n.hasData
          ? {
              b: f.o(n.bindTapItem, 2353),
              c: f.p({ contacts: n.stockfriendsList, "top-list": n.topList }),
            }
          : {},
        { d: n.pageStatus },
        n.pageStatus
          ? {
              e: f.o(n.onErrorRetry, 2354),
              f: f.p({ type: n.pageStatus, "is-simple-mode": !0 }),
            }
          : {},
        { g: !n.pageStatus && !n.hasData },
        (n.pageStatus || n.hasData, {}),
        { h: n.showFullScreenPermissionDialog },
        n.showFullScreenPermissionDialog
          ? {
              i: f.o(n.onAgreeProtocal, 2355),
              j: f.o(n.onDenyProtocal, 2356),
              k: f.p({
                theme: r.theme,
                isMP: n.isMP,
                reportPrefix: "shequ.choosefriend",
                reportInfo: n.getReportParams(),
                showFullScreenPermissionDialog:
                  n.showFullScreenPermissionDialog,
                protocalId: n.privacyResult.id,
                privacyResult: n.privacyResult,
                privacyType: n.privacyType,
              }),
            }
          : {},
        { l: r.theme }
      );
    },
  ],
  ["__scopeId", "data-v-e3c6805b"],
]);
wx.createComponent(y);
