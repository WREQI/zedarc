var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  u = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  i = function (e, r) {
    for (var i in r || (r = {})) o.call(r, i) && u(e, i, r[i]);
    if (n) {
      var c,
        s = t(n(r));
      try {
        for (s.s(); !(c = s.n()).done; ) {
          i = c.value;
          a.call(r, i) && u(e, i, r[i]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  c = function (e, t, r) {
    return new Promise(function (n, o) {
      var a = function (e) {
          try {
            i(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          try {
            i(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, u);
        };
      i((r = r.apply(e, t)).next());
    });
  },
  s = require("../../../../../../common/vendor.js"),
  m = require("../../util/helperUtil.js"),
  l = require("../../../stock-community-base/utils/privacyCheck.js"),
  p = {
    name: "HotEventBar",
    props: {
      reportPrefix: { type: String, default: "" },
      reportParams: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isSharePage: { type: Boolean, default: !1 },
      forbidComment: { type: Boolean, default: !1 },
      shareCount: { type: Number, default: 0 },
      commentCount: { type: Number, default: 0 },
    },
    setup: function (t, r) {
      var n = this,
        o = s.inject("stockBridge"),
        a = s.inject("onCheckUserAgreementStatus", function () {}),
        u = s.inject("didAgreeUserAgreement", { value: !0 }),
        p = s.computed(function () {
          var e = Math.max(t.shareCount, 0);
          return e > 99 ? "99+" : e || "分享";
        }),
        f = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          o.report(e, t);
        },
        b = function () {
          return t.reportParams;
        },
        d = function (e) {
          return "".concat(t.reportPrefix, ".").concat(e);
        };
      return (
        s.onMounted(function () {
          f(d("bottomadd_brow"), i({}, b()));
        }),
        {
          shareTitle: p,
          numberFormat: m.numberFormat,
          reportData: f,
          getReportCommonData: b,
          getReportFullName: d,
          onClickShare: function () {
            return c(
              n,
              null,
              e().mark(function t() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (f(d("bottom_bar_share_click"), i({}, b())),
                          !l.isH5Native)
                        ) {
                          e.next = 7;
                          break;
                        }
                        return (e.next = 3), l.sqPrivacyCheck();
                      case 3:
                        if (e.sent) {
                          e.next = 5;
                          break;
                        }
                        return e.abrupt("return");
                      case 5:
                        e.next = 9;
                        break;
                      case 7:
                        if (u.value || "function" != typeof a) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt("return", void a());
                      case 9:
                        r.emit("tapShare", {});
                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
          },
          onClickComment: function () {
            return c(
              n,
              null,
              e().mark(function n() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (f(d("bottom_bar_pos_click"), i({}, b())),
                          !l.isH5Native)
                        ) {
                          e.next = 7;
                          break;
                        }
                        return (e.next = 3), l.sqPrivacyCheck();
                      case 3:
                        if (e.sent) {
                          e.next = 5;
                          break;
                        }
                        return e.abrupt("return");
                      case 5:
                        e.next = 9;
                        break;
                      case 7:
                        if (u.value || "function" != typeof a) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt("return", void a());
                      case 9:
                        t.forbidComment
                          ? o.toast("暂不开放评论")
                          : r.emit("tapComment", { number: t.commentCount });
                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, n);
              })
            );
          },
          didAgreeUserAgreement: u,
        }
      );
    },
  },
  f = s._export_sfc(p, [
    [
      "render",
      function (e, t, r, n, o, a) {
        return s.e(
          { a: n.didAgreeUserAgreement },
          n.didAgreeUserAgreement
            ? {
                b: s.t(n.shareTitle),
                c: s.o(function () {
                  return n.onClickShare && n.onClickShare.apply(n, arguments);
                }, 3026),
              }
            : {
                d: s.t(n.shareTitle),
                e: s.o(function () {
                  return n.onClickShare && n.onClickShare.apply(n, arguments);
                }, 3027),
              },
          { f: r.commentCount },
          r.commentCount ? { g: s.t(n.numberFormat(r.commentCount)) } : {},
          {
            h: s.o(function () {
              return n.onClickComment && n.onClickComment.apply(n, arguments);
            }, 3028),
            i: s.n(r.isSharePage ? "is-share-page" : ""),
          }
        );
      },
    ],
    ["__scopeId", "data-v-4c16856f"],
  ]);
wx.createComponent(f);
