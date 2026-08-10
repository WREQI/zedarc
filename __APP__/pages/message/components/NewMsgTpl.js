var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../../@babel/runtime/helpers/slicedToArray");
require("../../../@babel/runtime/helpers/Objectentries"),
  require("../../../app.js");
var i = require("../utils/time.js"),
  a = require("../utils/utils.js"),
  u = require("../../../utils/navigator.js"),
  s = require("../../../utils/getPlatform.js"),
  o = require("../../../common/vendor.js");
require("../../../service/broker.js");
var l = require("../../../service/navigateMp.js"),
  m = require("../../../config/mpConfig.js"),
  c = require("../../../service/userinfoHelper.js"),
  p = require("../../../service/stat/mp-weixin.js"),
  g = require("../../../adapter/router.js"),
  d = require("../../../config/broker/11100/index.js"),
  v = s.getPlatform(),
  b = v.isInZxgXcx,
  f = v.isInWzqXcx,
  h = v.isMpPlugin,
  I = v.isInIframe,
  k = v.isPCWeixin,
  x = [
    "/pages/index/discover/main",
    "/pages/index/index",
    "/pages/index/market",
    "/pages/index/trade",
  ],
  q = {
    name: "NewMsgTpl",
    props: { msgData: { type: Object, default: function () {} } },
    setup: function (s) {
      function v(e) {
        var t,
          r,
          i = [];
        return (
          null == (t = Object.entries(e)) ||
            t.forEach(function (e) {
              var t,
                a = n(e, 2),
                u = a[0],
                s = a[1];
              (null == (t = null == s ? void 0 : s.value)
                ? void 0
                : t.replace) && (s.value = s.value.replace(/<br\/\>/g, "\n")),
                u.startsWith("keyword")
                  ? i.push({ key: s.key, value: s.value })
                  : "remark" !== u || (r = { key: "备注", value: s.value });
            }),
          r && i.push(r),
          i
        );
      }
      return {
        msgItem: o.computed(function () {
          return (function () {
            var e,
              t,
              r,
              n,
              u =
                (null == (e = null == s ? void 0 : s.msgData)
                  ? void 0
                  : e.msg_content) || {},
              o =
                null == (t = null == s ? void 0 : s.msgData)
                  ? void 0
                  : t.msg_time,
              l = a.dealBoxJumpUrl(null == s ? void 0 : s.msgData) || {},
              m = (null == l ? void 0 : l.path) || "";
            return {
              formatUrl: l,
              title:
                (null == (r = null == u ? void 0 : u.title)
                  ? void 0
                  : r.value) || "",
              time: i.timeFormat(o),
              first:
                (null == (n = null == u ? void 0 : u.first)
                  ? void 0
                  : n.value) || "",
              content: v(u),
              button: m ? "查看详情" : "",
            };
          })();
        }),
        handleJump: function (n) {
          try {
            p.stat.click("trade.trade_message.msg_list_click"),
              setTimeout(
                r(
                  e().mark(function r() {
                    var i, a, s, o, p, v, q, w;
                    return e().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                "not-broker" !==
                                (i = (null == n ? void 0 : n.formatUrl) || {})
                                  .opt
                              ) {
                                e.next = 5;
                                break;
                              }
                              b || f
                                ? i.fullPath &&
                                  ((s = i.path),
                                  (o = i.fullPath),
                                  s &&
                                    o &&
                                    (-1 !== x.indexOf(s)
                                      ? null ==
                                          (v =
                                            null ==
                                            (p =
                                              null == window
                                                ? void 0
                                                : window.wx)
                                              ? void 0
                                              : p.miniProgram) ||
                                        v.switchTab({ url: o })
                                      : null ==
                                          (w =
                                            null ==
                                            (q =
                                              null == window
                                                ? void 0
                                                : window.wx)
                                              ? void 0
                                              : q.miniProgram) ||
                                        w.navigateTo({ url: o })))
                                : h
                                ? l.navigateTo({
                                    url: i.path,
                                    linkType: m.linkTypeMap.plugin2MainMp,
                                  })
                                : I
                                ? g
                                    .router()
                                    .push({
                                      path: i.path,
                                      query: t(
                                        t({}, i.params || {}),
                                        {},
                                        { notBroker: "1" }
                                      ),
                                    })
                                : (null == i ? void 0 : i.path) &&
                                  u.hrefToWzqDomain(
                                    null == i ? void 0 : i.path,
                                    i.params
                                  ),
                                (e.next = 19);
                              break;
                            case 5:
                              if (!(null == i ? void 0 : i.name)) {
                                e.next = 19;
                                break;
                              }
                              if (
                                ((a = h
                                  ? {
                                      switchBroker: "1",
                                      brokerCode: d.brokerConfig.base.code,
                                      ignoreSwitchError: "1",
                                    }
                                  : {}),
                                !h)
                              ) {
                                e.next = 18;
                                break;
                              }
                              if (
                                ((e.prev = 8),
                                !String(i.path).startsWith("/apply") || !k)
                              ) {
                                e.next = 11;
                                break;
                              }
                              return e.abrupt(
                                "return",
                                void l.navigateTo({
                                  url: "/pages/noaccount/textImage/TextImage",
                                  linkType: m.linkTypeMap.plugin2MainMp,
                                })
                              );
                            case 11:
                              return (
                                (e.next = 13),
                                c.userinfoHandler({
                                  options: {
                                    routePath: "pages".concat(i.path),
                                  },
                                })
                              );
                            case 13:
                              e.next = 18;
                              break;
                            case 15:
                              return (
                                (e.prev = 15),
                                (e.t0 = e.catch(8)),
                                e.abrupt(
                                  "return",
                                  void c.abnormalStateAccessHandler(e.t0)
                                )
                              );
                            case 18:
                              g.router().push({
                                path: i.path,
                                query: t(t({}, i.params || {}), a),
                              });
                            case 19:
                            case "end":
                              return e.stop();
                          }
                      },
                      r,
                      null,
                      [[8, 15]]
                    );
                  })
                ),
                100
              );
          } catch (e) {}
        },
      };
    },
  },
  w = o._export_sfc(q, [
    [
      "render",
      function (e, t, r, n, i, a) {
        return o.e(
          {
            a: o.t(n.msgItem.title),
            b: o.t(n.msgItem.time),
            c: o.n(n.msgItem.first ? "" : "mb0"),
            d: n.msgItem.first,
          },
          n.msgItem.first ? { e: o.t(n.msgItem.first) } : {},
          { f: n.msgItem && n.msgItem.content && n.msgItem.content.length > 0 },
          n.msgItem && n.msgItem.content && n.msgItem.content.length > 0
            ? {
                g: o.f(n.msgItem.content, function (e, t, r) {
                  return {
                    a: o.t(e.key),
                    b: o.t(e.value),
                    c: t,
                    d: o.n(
                      t !== n.msgItem.content.length - 1 || n.msgItem.button
                        ? ""
                        : "mb0"
                    ),
                  };
                }),
              }
            : {},
          { h: o.n(n.msgItem.button ? "" : "mb24"), i: n.msgItem.button },
          (n.msgItem.button, {}),
          { j: n.msgItem.button },
          n.msgItem.button ? { k: o.t(n.msgItem.button) } : {},
          {
            l: o.o(function (e) {
              return n.handleJump(n.msgItem);
            }),
          }
        );
      },
    ],
    ["__scopeId", "data-v-e42309a4"],
  ]);
wx.createComponent(w);
