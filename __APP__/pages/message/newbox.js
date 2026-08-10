require("../../@babel/runtime/helpers/Objectvalues");
var e = require("../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var r = require("../../common/vendor.js"),
  a = require("../../cgi/message.js"),
  l = require("../../config/regexp.js"),
  s = require("../../components/Password/index.js");
require("../../service/sdk/lib/api.js");
var o = require("../../service/sdk/platform/mp-weixin.js"),
  i = require("../../service/stat/mp-weixin.js"),
  u = require("../../utils/getPlatform.js").getPlatform(),
  c = u.isInIframe,
  p = u.isMpPlugin,
  g = new a.MessageCgi(),
  f = {
    options: { styleIsolation: "shared" },
    components: {
      MPLoading: function () {
        return "../../common/components/Loading/index.js";
      },
      StPullRefresh: function () {
        return "../../common/components/PullRefresh/index.js";
      },
      NewMsgTpl: function () {
        return "./components/NewMsgTpl.js";
      },
    },
    props: { containerHeight: { type: String, default: "100vh" } },
    setup: function (a, o) {
      var u = o.emit,
        f = r.ref(!0),
        d = r.ref(!1),
        v = r.ref([]),
        m = r.ref(0),
        h = r.ref(!1),
        w = r.ref(null),
        b = r.ref(!0),
        x = r.ref({ more: "上拉加载更多", noMore: "没有更多数据" }),
        y = r.ref(!1);
      function _() {
        y.value = !1;
      }
      function M(e) {
        return P.apply(this, arguments);
      }
      function P() {
        return (P = t(
          n().mark(function t(r) {
            var a,
              o,
              u,
              c,
              p,
              w = arguments;
            return n().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (
                        ((a = w.length > 1 && void 0 !== w[1] ? w[1] : {}),
                        !(d.value || (!r && h.value)))
                      ) {
                        n.next = 3;
                        break;
                      }
                      return n.abrupt("return");
                    case 3:
                      return (
                        (d.value = !0),
                        (b.value = r),
                        r && ((m.value = 0), (h.value = !1)),
                        (u = e(
                          { type: "1", page_size: 10, page_num: m.value },
                          a
                        )),
                        (n.prev = 5),
                        (n.next = 8),
                        g.getNewMessageBox(u)
                      );
                    case 8:
                      if (((n.t0 = n.sent), n.t0)) {
                        n.next = 11;
                        break;
                      }
                      n.t0 = {};
                    case 11:
                      (c = n.t0),
                        (null == (o = null == c ? void 0 : c.msg_list)
                          ? void 0
                          : o.length) > 0
                          ? (i.stat.click("trade.trade_message.msg_list_brow"),
                            (p = []),
                            c.msg_list.forEach(function (e) {
                              try {
                                var n =
                                  (null == e ? void 0 : e.msg_content) || "{}";
                                (n = decodeURIComponent(n).replace(
                                  /(?:\r\n|\n)/g,
                                  "<br/>"
                                )),
                                  (e.msg_content = JSON.parse(n)),
                                  (e.isOldTpl = !Object.keys(
                                    e.msg_content
                                  ).includes("title")),
                                  e.isOldTpl &&
                                    Object.values(e.msg_content).forEach(
                                      function (e) {
                                        e.value = e.value.replace(
                                          /\n/g,
                                          "<br/>"
                                        );
                                      }
                                    ),
                                  p.push(e);
                              } catch (e) {}
                            }),
                            (v.value = r ? p : v.value.concat(p)),
                            (+c.page_end || c.msg_list.length < 10) &&
                              (h.value = !0),
                            (m.value += 1))
                          : ((v.value = r ? [] : v.value.concat([])),
                            (h.value = !0),
                            i.stat.click(
                              "trade.trade_message.msg_list_blank_brow"
                            )),
                        (n.next = 18);
                      break;
                    case 15:
                      (n.prev = 15),
                        (n.t1 = n.catch(5)),
                        (d.value = !1),
                        (f.value = !1),
                        (v.value = r ? [] : v.value.concat([])),
                        l.REGEXP.NEED_TRADE_SESSION.test(
                          null == n.t1 ? void 0 : n.t1.retcode
                        ) &&
                          s.Password({
                            onSuccess: function () {
                              M(!0);
                            },
                          });
                    case 18:
                      return (
                        (n.prev = 18),
                        (d.value = !1),
                        (f.value = !1),
                        n.finish(18)
                      );
                    case 21:
                    case "end":
                      return n.stop();
                  }
              },
              t,
              null,
              [[5, 15, 18, 21]]
            );
          })
        )).apply(this, arguments);
      }
      var j,
        q = 0,
        E = r.throttle(
          function (e) {
            var n,
              t =
                null == (n = null == e ? void 0 : e.detail)
                  ? void 0
                  : n.scrollTop;
            t <= 5
              ? (u("styleChange", !1),
                c &&
                  window.parent.postMessage(
                    { event: "MessageBoxStyleChange", data: !1 },
                    "*"
                  ))
              : q <= 5 &&
                (u("styleChange", !0),
                c &&
                  window.parent.postMessage(
                    { event: "MessageBoxStyleChange", data: !0 },
                    "*"
                  )),
              (q = t);
          },
          300,
          { leading: !0 }
        );
      return {
        isPageLoading: f,
        isGettingData: d,
        isFirstReq: b,
        msgList: v,
        noMore: h,
        pullUpTxt: x,
        pullRefreshRef: w,
        triggered: y,
        scrollViewRefreshEnable: p,
        onPullingUp: function () {
          M(!1);
        },
        onPullingDown:
          ((j = t(
            n().mark(function e() {
              var t, r;
              return n().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), M(!0);
                      case 3:
                        setTimeout(function () {
                          _();
                        }, 1e3);
                      case 4:
                        return (
                          (e.prev = 4),
                          null ==
                            (r =
                              null == (t = w.value)
                                ? void 0
                                : t.stopPullDownRefresh) || r.call(t),
                          u("pullRefresh", !0),
                          c &&
                            window.parent.postMessage(
                              { event: "pullRefresh", data: !0 },
                              "*"
                            ),
                          e.finish(4)
                        );
                      case 7:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, , 4, 7]]
              );
            })
          )),
          function () {
            return j.apply(this, arguments);
          }),
        fetchMsgData: M,
        startpull: function () {
          y.value = !0;
        },
        pullEnd: _,
        handleScroll: E,
      };
    },
    mounted: function () {
      var e = this;
      return t(
        n().mark(function t() {
          return n().wrap(function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (n.next = 2), e.fetchMsgData(!0);
                case 2:
                  c ? o.sdk.notifyBusinessLoaded() : p && e.$emit("loaded");
                case 3:
                case "end":
                  return n.stop();
              }
          }, t);
        })
      )();
    },
  };
Array ||
  (
    r.resolveComponent("new-msg-tpl") +
    r.resolveComponent("Empty") +
    r.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../components/Empty/Empty.js";
      } +
      function () {
        return "../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var d = r._export_sfc(f, [
  [
    "render",
    function (e, n, t, a, l, s) {
      return r.e(
        { a: e.rootFontSize, b: !a.isPageLoading },
        a.isPageLoading
          ? {}
          : r.e(
              { c: a.msgList.length > 0 },
              a.msgList.length > 0
                ? r.e(
                    {
                      d: r.f(a.msgList, function (e, n, t) {
                        return {
                          a: "044e6774-1-" + t + ",044e6774-0",
                          b: r.p({ "msg-data": e }),
                          c: n,
                        };
                      }),
                      e: !a.isFirstReq || a.noMore,
                    },
                    !a.isFirstReq || a.noMore
                      ? r.e(
                          { f: !a.isGettingData },
                          a.isGettingData
                            ? {}
                            : {
                                g: r.t(
                                  a.noMore
                                    ? a.pullUpTxt.noMore
                                    : a.pullUpTxt.more
                                ),
                              }
                        )
                      : {},
                    {
                      h: t.containerHeight,
                      i: a.scrollViewRefreshEnable,
                      j: a.triggered,
                      k: r.o(function () {
                        return a.startpull && a.startpull.apply(a, arguments);
                      }),
                      l: r.o(function () {
                        return a.pullEnd && a.pullEnd.apply(a, arguments);
                      }),
                      m: r.o(function () {
                        return (
                          a.onPullingDown && a.onPullingDown.apply(a, arguments)
                        );
                      }),
                      n: r.o(function () {
                        return (
                          a.onPullingUp && a.onPullingUp.apply(a, arguments)
                        );
                      }),
                      o: r.o(function () {
                        return (
                          a.handleScroll && a.handleScroll.apply(a, arguments)
                        );
                      }),
                    }
                  )
                : {
                    p: r.p({ text: "暂无新消息", "height-fill": !0 }),
                    q: t.containerHeight,
                  }
            ),
        {
          r: r.sr("#global-wrap", "044e6774-0"),
          s: r.p({
            id: "global-wrap",
            filePath: "/message/newbox",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-044e6774"],
]);
wx.createComponent(d);
