var o = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  t = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  c = function (o, t, n) {
    return t in o
      ? e(o, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (o[t] = n);
  },
  f = function (e, t) {
    for (var n in t || (t = {})) r.call(t, n) && c(e, n, t[n]);
    if (i) {
      var f,
        l = o(i(t));
      try {
        for (l.s(); !(f = l.n()).done; ) {
          n = f.value;
          u.call(t, n) && c(e, n, t[n]);
        }
      } catch (o) {
        l.e(o);
      } finally {
        l.f();
      }
    }
    return e;
  },
  l = function (o, e) {
    return t(o, n(e));
  },
  d = require("../../../../../../common/vendor.js"),
  s = require("../../utils/logger.js"),
  a = "community-newSubject",
  g = "community-updateTimeline",
  m = "community-newComment",
  E = {
    registerPostNotify: function (o) {
      d.StockBridge.busOn(a, o);
    },
    registerCommentNotify: function (o) {
      d.StockBridge.ENV === d.EnvTypeEnum.MP
        ? d.StockBridge.busOn(m, o)
        : d.StockBridge.busOn(g, o);
    },
    unRegisterPostNotify: function (o) {
      d.StockBridge.busOff(a, o);
    },
    unRegisterCommentNotify: function (o) {
      d.StockBridge.ENV === d.EnvTypeEnum.MP
        ? d.StockBridge.busOff(m, o)
        : d.StockBridge.busOff(g, o);
    },
    publishPostNotify: function () {
      var o =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      d.StockBridge.ENV === d.EnvTypeEnum.SHY_NATIVE
        ? shy.notify("newSubject", l(f({}, o), { module: !1 }))
        : d.StockBridge.busEmit(a, o);
    },
    publishCommentNotify: function () {
      var o =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      d.StockBridge.ENV === d.EnvTypeEnum.SHY_NATIVE
        ? shy.notify("newComment", l(f({}, o), { module: !1 }))
        : (d.StockBridge.ENV === d.EnvTypeEnum.MP
            ? d.StockBridge.busEmit(m, o)
            : d.StockBridge.busEmit(g, o),
          o.isReplyReply
            ? d.StockBridge.busEmit("detailCommentNewReply", o)
            : o.isReply && d.StockBridge.busEmit("onNewComment", o));
    },
  },
  p = s.createLogger(),
  y = "shequ.halfeditor",
  v = s.createLogger();
(exports.HalfEditorPrefix = y),
  (exports.NotifyHelper = E),
  (exports.useHalfEditor = function (o, e) {
    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      n =
        (t.emit,
        arguments.length > 3 && void 0 !== arguments[3]
          ? arguments[3]
          : "unknown"),
      i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
      r = d.ref(!1),
      u = d.ref({}),
      c = (function () {
        var o =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments.length > 1 ? arguments[1] : void 0,
          t = !1,
          n = o.postSuccessFunc,
          i = o.commentSuccessFunc,
          r = function (o) {
            return (
              !(null == o ? void 0 : o.pageType) ||
              (null == o ? void 0 : o.pageType) === e
            );
          },
          u = function () {
            var o =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            p.log("发帖成功", o), r(o) && n && n(o);
          },
          c = function () {
            var o =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            p.log("评论成功", o), r(o) && i && i(o);
          },
          f = function () {
            t
              ? p.log("事件已注册，跳过重复注册")
              : (E.registerPostNotify(u),
                E.registerCommentNotify(c),
                (t = !0),
                p.log("事件注册成功"));
          },
          l = function () {
            t
              ? (E.unRegisterPostNotify(u),
                E.unRegisterCommentNotify(c),
                (t = !1),
                p.log("事件注销成功"))
              : p.log("事件未注册，跳过注销");
          };
        return (
          d.onMounted(function () {
            f();
          }),
          d.onUnmounted(function () {
            l();
          }),
          {
            onShow: function () {
              p.log("onShow - 注册事件监听"), f();
            },
            onHide: function () {
              p.log("onHide - 注销事件监听"), l();
            },
          }
        );
      })(i, n),
      s = !1,
      a = function () {
        s ||
          (v.log("注册编辑器事件"),
          d.StockBridge.busOn("".concat(n, "-showLiteComEdit"), m),
          (s = !0));
      },
      g = function () {
        s &&
          (v.log("注销编辑器事件"),
          d.StockBridge.busOff("".concat(n, "-showLiteComEdit"), m),
          (s = !1));
      };
    d.onMounted(function () {
      v.log("onMounted"), a();
    }),
      d.onUnmounted(function () {
        v.log("onUnmounted"), g();
      });
    var m = function (o) {
        v.log("".concat(n, " onshowLiteComEdit"), o),
          h(null == o ? void 0 : o.comEditData);
      },
      h = function () {
        var o =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        v.error("打开半屏编辑器 data:", o),
          (u.value = l(f({}, o), { pageType: n })),
          d.StockBridge.report("".concat(y, ".open")),
          S();
      },
      S = function () {
        var o;
        (r.value = !0),
          d.StockBridge.ENV === d.EnvTypeEnum.MP &&
            (null == (o = d.wx$1) || o.hideTabBar({}));
      };
    return {
      isShowHalfEditor: r,
      queryHalfEditor: u,
      hideHalfEditor: function () {
        var o;
        v.error("关闭半屏编辑器"),
          d.StockBridge.ENV === d.EnvTypeEnum.MP &&
            (null == (o = d.wx$1) || o.showTabBar({})),
          r.value &&
            ((r.value = !1),
            (u.value = {}),
            d.StockBridge.report("".concat(y, ".close")));
      },
      openEditor: h,
      onShowHalfEditor: function (o) {
        a(),
          c.onShow(),
          (function (o) {
            o.$refs.halfEditor &&
              o.$refs.halfEditor.onShow &&
              o.$refs.halfEditor.onShow();
          })(o);
      },
      onHideHalfEditor: function (o) {
        g(),
          c.onHide(),
          (function (o) {
            o.$refs.halfEditor &&
              o.$refs.halfEditor.onHide &&
              o.$refs.halfEditor.onHide();
          })(o);
      },
    };
  });
