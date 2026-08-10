require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var o = require("../../common/vendor.js"),
  i = require("./enum.js"),
  u = require("./broker/11100.js"),
  a = require("../../cgi/protocol.js"),
  c = require("../../service/aegis/platform/not-wujie.js"),
  s = require("../../adapter/router.js");
require("../../service/sdk/lib/api.js");
var p = require("../../service/sdk/platform/mp-weixin.js");
require("../../service/broker.js");
var l = require("../../utils/index.js"),
  f = require("../../service/request/pureRequest.js"),
  v = require("../../config/broker/11100/index.js"),
  d = o.defineStore("ProtocolMul", function () {
    var d = o.reactive({});
    function O(e) {
      var r = e.biz;
      if (!r) throw "请配置业务参数";
      return u.protocolConfigMap[r] || {};
    }
    var b,
      m,
      T,
      P = {};
    function E(e) {
      var u = e.biz,
        s = e.forceUpdate;
      return !(void 0 !== s && s) && d[u]
        ? Promise.resolve(d[u] || [])
        : (P[u] ||
            (P[u] = new Promise(
              (function () {
                var e = n(
                  r().mark(function e(s, p) {
                    var l, f;
                    return r().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (l = O({ biz: u })),
                                (f = []),
                                o.isEmpty(l) && ((d[u] = f), s(f)),
                                (e.prev = 3),
                                (e.t0 = l.mode),
                                (e.next =
                                  e.t0 === i.PROTOCOL_MODE.BROKER_CGI
                                    ? 7
                                    : e.t0 === i.PROTOCOL_MODE.STATICS_CONFIG
                                    ? 11
                                    : 12);
                              break;
                            case 7:
                              return (
                                (e.next = 9),
                                (function () {
                                  var e = n(
                                    r().mark(function e(n) {
                                      var o, u, c, s, p, l, f;
                                      return r().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (o = n.biz),
                                                (u = n.type),
                                                (c = void 0 === u ? "" : u),
                                                (s = n.previewType),
                                                (e.next = 3),
                                                a.ProtocolCgi.getProtocolList({
                                                  biz: o,
                                                })
                                              );
                                            case 3:
                                              if (((e.t0 = e.sent), e.t0)) {
                                                e.next = 6;
                                                break;
                                              }
                                              e.t0 = {};
                                            case 6:
                                              if (
                                                ((p = e.t0),
                                                (l = p.protocol_info),
                                                (f = void 0 === l ? [] : l)
                                                  .length)
                                              ) {
                                                e.next = 11;
                                                break;
                                              }
                                              throw {
                                                retcode: "list_empty",
                                                retmsg: "协议获取失败",
                                              };
                                            case 11:
                                              return e.abrupt(
                                                "return",
                                                f.map(function (e) {
                                                  return t(
                                                    {
                                                      mode: i.PROTOCOL_MODE
                                                        .BROKER_CGI,
                                                      type:
                                                        e.protocol_format || c,
                                                      previewType: s,
                                                    },
                                                    e
                                                  );
                                                })
                                              );
                                            case 12:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  );
                                  return function (r) {
                                    return e.apply(this, arguments);
                                  };
                                })()({
                                  biz: u,
                                  type: l.type || "",
                                  previewType:
                                    l.previewType || i.PREVIEW_TYPE.DEFAULT,
                                })
                              );
                            case 9:
                              return (f = e.sent), e.abrupt("break", 12);
                            case 11:
                              f = (function (e) {
                                var r = e.config;
                                return (r.list || []).map(function (e) {
                                  return t(
                                    {
                                      mode: i.PROTOCOL_MODE.STATICS_TENPAY_KEY,
                                      type: r.type || "",
                                      previewType:
                                        r.previewType || i.PREVIEW_TYPE.DEFAULT,
                                    },
                                    e
                                  );
                                });
                              })({ config: l });
                            case 12:
                              (d[u] = f), s(f), (e.next = 18);
                              break;
                            case 15:
                              (e.prev = 15),
                                (e.t1 = e.catch(3)),
                                p({
                                  retmsg:
                                    (null == e.t1 ? void 0 : e.t1.retmsg) ||
                                    "网络繁忙 请稍后再试",
                                }),
                                c.aegisReporter.reportEvent(
                                  "MONITOR-PROTOCOL-FETECH-FAIL",
                                  { ext2: u, ext3: JSON.stringify(e.t1) }
                                );
                            case 18:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[3, 15]]
                    );
                  })
                );
                return function (r, t) {
                  return e.apply(this, arguments);
                };
              })()
            ).finally(function () {
              P[u] = null;
            })),
          P[u]);
    }
    function y(r) {
      var t = r.list,
        n = void 0 === t ? [] : t,
        o = r.biz,
        a = r.scenes,
        c = void 0 === a ? [] : a;
      if (!c.length) return e(n);
      var s = (function (e) {
        var r = e.biz,
          t = e.scenes;
        return (
          (void 0 === t ? [] : t)
            .map(function (e) {
              var t, n, o;
              return (
                (null ==
                (o =
                  null == (n = null == (t = u.sceneMap) ? void 0 : t[r])
                    ? void 0
                    : n[e])
                  ? void 0
                  : o.scenceId) || ""
              );
            })
            .filter(function (e) {
              return e;
            }) || []
        );
      })({ biz: o, scenes: c });
      return (
        n.filter(function (e) {
          var r, t;
          return e.mode === i.PROTOCOL_MODE.BROKER_CGI
            ? null == (r = e.scene_id)
              ? void 0
              : r.split(",").some(function (e) {
                  return s.includes(e);
                })
            : null == (t = null == e ? void 0 : e.scenes)
            ? void 0
            : t.some(function (e) {
                return c.includes(e);
              });
        }) || []
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (h = n(
        r().mark(function e(t) {
          var n, o, i, u, s;
          return r().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.biz),
                      (o = t.protocol_id),
                      (e.prev = 1),
                      (e.next = 4),
                      a.ProtocolCgi.getProtocolUrl({ biz: n, protocol_id: o })
                    );
                  case 4:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 7;
                      break;
                    }
                    e.t0 = {};
                  case 7:
                    return (
                      (i = e.t0),
                      (u = i.protocol_info),
                      (s = void 0 === u ? [] : u),
                      e.abrupt("return", s[0] || {})
                    );
                  case 13:
                    throw (
                      ((e.prev = 13),
                      (e.t1 = e.catch(1)),
                      c.aegisReporter.reportEvent(
                        "MONITOR-PROTOCOL-GETURL-FAIL",
                        { ext4: n, ext5: JSON.stringify(e.t1) }
                      ),
                      e.t1)
                    );
                  case 16:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[1, 13]]
          );
        })
      )).apply(this, arguments);
    }
    return {
      protocols: d,
      signProtocol: function (e) {
        var o = e.biz,
          i = e.data,
          u = void 0 === i ? {} : i;
        return new Promise(
          (function () {
            var e = n(
              r().mark(function e(n, i) {
                var c, s;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (s =
                              (null == (c = d[o])
                                ? void 0
                                : c
                                    .map(function (e) {
                                      return e.sign_param;
                                    })
                                    .join(",")) || ""),
                            (e.prev = 1),
                            (e.next = 4),
                            a.ProtocolCgi.signProtocol({
                              biz: o,
                              data: t(t({}, s ? { sign_param: s } : {}), u),
                            })
                          );
                        case 4:
                          n(!0), (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7), (e.t0 = e.catch(1)), i(e.t0);
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 7]]
                );
              })
            );
            return function (r, t) {
              return e.apply(this, arguments);
            };
          })()
        );
      },
      getProtocolConfig: O,
      fetchProtocolListByBiz: E,
      filterProtocolListByScene: y,
      fetchProtocolListByScene:
        ((T = n(
          r().mark(function e(t) {
            var n, o, i, u;
            return r().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.biz),
                      (o = t.scenes),
                      (i = t.forceUpdate),
                      (u = void 0 !== i && i),
                      (e.t0 = y),
                      (e.next = 4),
                      E({ biz: n, forceUpdate: u })
                    );
                  case 4:
                    return (
                      (e.t1 = e.sent),
                      (e.t2 = n),
                      (e.t3 = o),
                      (e.t4 = { list: e.t1, biz: e.t2, scenes: e.t3 }),
                      e.abrupt("return", (0, e.t0)(e.t4))
                    );
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function (e) {
          return T.apply(this, arguments);
        }),
      toPreviewProtocol:
        ((m = n(
          r().mark(function e(n, u) {
            var a, f, O, b, m;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (n && !o.isEmpty(n)) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (
                        ((a = o.omit(n, [
                          "mode",
                          "name",
                          "scenes",
                          "previewType",
                        ])),
                        (n.mode || n.url) &&
                          n.mode !== i.PROTOCOL_MODE.STATICS_TENPAY_KEY)
                      ) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        s.router().push({ name: "VProtocol", query: t({}, a) })
                      );
                    case 5:
                      if (
                        (u &&
                          d[u] &&
                          (null ==
                          (f = (d[u] || []).find(function (e) {
                            return e.name === n.name;
                          }))
                            ? void 0
                            : f.url) &&
                          (a.url = null == f ? void 0 : f.url),
                        n.previewType !== i.PREVIEW_TYPE.BACKEND ||
                          !n.protocol_id)
                      ) {
                        e.next = 16;
                        break;
                      }
                      return (
                        o.index.showLoading({ title: "加载中..." }),
                        (e.prev = 8),
                        (e.next = 11),
                        g({ biz: u, protocol_id: a.protocol_id })
                      );
                    case 11:
                      (O = e.sent),
                        (a.url = O.url),
                        (a.type =
                          String(O.protocol_format) === i.PROTOCOL_TYPE.PDF
                            ? i.PROTOCOL_TYPE.PDF
                            : i.PROTOCOL_TYPE.HTML);
                    case 13:
                      return (e.prev = 13), o.index.hideLoading(), e.finish(13);
                    case 16:
                      a.url ||
                        c.aegisReporter.reportEvent(
                          "MONITOR-PROTOCOL-NOT-URL",
                          { ext4: JSON.stringify(n) }
                        ),
                        a.url &&
                          ((b = "https://"
                            .concat(v.brokerConfig.base.domain)
                            .concat(l.getStaticPath(), "#/protocol/container")),
                          (m = o.dist.urltools.make(
                            b,
                            t(t({}, a), {}, { url: encodeURIComponent(a.url) })
                          )),
                          p.sdk.openUrlWithExtraWebview({ url: m }));
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[8, , 13, 16]]
            );
          })
        )),
        function (e, r) {
          return m.apply(this, arguments);
        }),
      getProtocolContent:
        ((b = n(
          r().mark(function e(t) {
            var n, o;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = { content: "" }),
                        i.PROTOCOL_MODE.BROKER_CGI !== t.mode ||
                          t.type !== i.PROTOCOL_TYPE.HTML ||
                          !t.url)
                      ) {
                        e.next = 15;
                        break;
                      }
                      return (
                        (e.prev = 2),
                        (e.next = 5),
                        f.request(t.url, {}, { method: "get" })
                      );
                    case 5:
                      (o = e.sent),
                        (n.content = (null == o ? void 0 : o.data) || ""),
                        (e.next = 12);
                      break;
                    case 9:
                      (e.prev = 9),
                        (e.t0 = e.catch(2)),
                        c.aegisReporter.reportEvent(
                          "MONITOR-PROTOCOL-GETCONTENT-FAIL",
                          { ext4: JSON.stringify(e.t0) }
                        );
                    case 12:
                      return (e.prev = 12), e.abrupt("return", n);
                    case 15:
                      return e.abrupt("return", n);
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 9, 12, 15]]
            );
          })
        )),
        function (e) {
          return b.apply(this, arguments);
        }),
      getProtocolUrlByBackend: g,
    };
  });
exports.useProtocolMulStore = d;
