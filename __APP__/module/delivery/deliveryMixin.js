var e = require("../../@babel/runtime/helpers/defineProperty"),
  t = require("../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  i = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  s = function (e, t, r) {
    return t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  p = function (e, t) {
    for (var r in t || (t = {})) l.call(t, r) && s(e, r, t[r]);
    if (u) {
      var a,
        i = n(u(t));
      try {
        for (i.s(); !(a = i.n()).done; ) {
          r = a.value;
          c.call(t, r) && s(e, r, t[r]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  d = function (e, t) {
    return i(e, o(t));
  },
  v = function (e, t, r) {
    return new Promise(function (n, a) {
      var i = function (e) {
          try {
            u(r.next(e));
          } catch (e) {
            a(e);
          }
        },
        o = function (e) {
          try {
            u(r.throw(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(i, o);
        };
      u((r = r.apply(e, t)).next());
    });
  },
  f = require("../../common/vendor.js");
function m(e) {
  var t =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GET",
    r = arguments.length > 2 ? arguments[2] : void 0,
    n = getApp();
  return new Promise(function (a, i) {
    n.globalData.wx.request({
      url: e,
      data: r,
      method: t,
      header: { "x-appid": "zxg_xcx" },
      success: function (e) {
        return a(e);
      },
      fail: function (e) {
        return i(e);
      },
    });
  });
}
var h = function (n, a, i) {
    return v(
      exports,
      null,
      r().mark(function o() {
        var u, l, c, s, h;
        return r().wrap(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  if (((o.prev = 0), (u = getApp()))) {
                    o.next = 4;
                    break;
                  }
                  return o.abrupt("return");
                case 4:
                  return (
                    (o.next = 6),
                    (function (e) {
                      return v(
                        this,
                        null,
                        r().mark(function t() {
                          var n,
                            a,
                            i,
                            o = this;
                          return r().wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (
                                      ((t.prev = 0),
                                      (n = getApp()),
                                      !(a =
                                        n.globalData.deliveryParams
                                          .deliveryPageConfig || null))
                                    ) {
                                      t.next = 4;
                                      break;
                                    }
                                    return t.abrupt("return", a);
                                  case 4:
                                    if (
                                      ((i = function () {
                                        return v(
                                          o,
                                          null,
                                          r().mark(function t() {
                                            var a, i;
                                            return r().wrap(function (t) {
                                              for (;;)
                                                switch ((t.prev = t.next)) {
                                                  case 0:
                                                    return (
                                                      (t.next = 2),
                                                      m(
                                                        "/svr/ads/ad_comm_service/dp_carriers",
                                                        "GET",
                                                        {
                                                          app: "zxg_xcx",
                                                          stat:
                                                            (null == e
                                                              ? void 0
                                                              : e.stat) ||
                                                            (null == e
                                                              ? void 0
                                                              : e.stat_data) ||
                                                            "",
                                                        }
                                                      )
                                                    );
                                                  case 2:
                                                    return (
                                                      (a = t.sent),
                                                      (i = []),
                                                      t.abrupt(
                                                        "return",
                                                        (0 === a.retcode &&
                                                          (i =
                                                            a.carrier_infos ||
                                                            []),
                                                        (n.globalData.deliveryParams.deliveryPageConfig =
                                                          i),
                                                        i)
                                                      )
                                                    );
                                                  case 5:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }, t);
                                          })
                                        );
                                      }),
                                      !f.login.isLogin())
                                    ) {
                                      t.next = 11;
                                      break;
                                    }
                                    return (t.next = 8), i();
                                  case 8:
                                    (t.t0 = t.sent), (t.next = 12);
                                    break;
                                  case 11:
                                    t.t0 = f.login.login().then(function () {
                                      return v(
                                        o,
                                        null,
                                        r().mark(function e() {
                                          return r().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (e.next = 2), i();
                                                case 2:
                                                  return e.abrupt(
                                                    "return",
                                                    e.sent
                                                  );
                                                case 3:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                    });
                                  case 12:
                                    return t.abrupt("return", t.t0);
                                  case 15:
                                    (t.prev = 15), (t.t1 = t.catch(0));
                                  case 17:
                                    return t.abrupt("return", []);
                                  case 18:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 15]]
                          );
                        })
                      );
                    })(a)
                  );
                case 6:
                  if (
                    ((l = o.sent),
                    !(
                      (c = l.filter(function (e) {
                        if (e.path === n.path || e.name === n.name) return !0;
                      })).length > 0
                    ))
                  ) {
                    o.next = 14;
                    break;
                  }
                  return (
                    (o.next = 11),
                    (function (e, t, n) {
                      return v(
                        this,
                        null,
                        r().mark(function a() {
                          var i, o, u, l, c, s, d, v, h, _, g;
                          return r().wrap(
                            function (r) {
                              for (;;)
                                switch ((r.prev = r.next)) {
                                  case 0:
                                    return (
                                      (o = []),
                                      (r.prev = 1),
                                      (u = getApp()),
                                      (l =
                                        u.globalData.deliveryParams
                                          .pre_dp_ctx || ""),
                                      (c = f.generateTraceId()),
                                      "/svr/ads/ad_comm_service/dp_query",
                                      (s =
                                        f.wx$1 &&
                                        f.wx$1.getLaunchOptionsSync &&
                                        f.wx$1.getLaunchOptionsSync()
                                          ? f.wx$1.getLaunchOptionsSync().scene
                                          : ""),
                                      (d = f.useBrokerInfo()),
                                      (v = d.highestPriorityDealer),
                                      (h = void 0 === v ? {} : v),
                                      (_ = d.hasBind.value),
                                      (r.next = 13),
                                      m(
                                        "/svr/ads/ad_comm_service/dp_query",
                                        "GET",
                                        p(
                                          {
                                            app: "zxg_xcx",
                                            stat:
                                              (null == n ? void 0 : n.stat) ||
                                              (null == n
                                                ? void 0
                                                : n.stat_data) ||
                                              "",
                                            carrier_id: e[0].id,
                                            pre_dp_ctx: l || "",
                                            trace_id: c,
                                            xcx_scene: s,
                                            dealer_code:
                                              (_ && h.value.code) || "",
                                          },
                                          t
                                        )
                                      )
                                    );
                                  case 13:
                                    (g = r.sent),
                                      (u.globalData.deliveryParams.pre_dp_ctx =
                                        ""),
                                      0 == g.retcode &&
                                        (null ==
                                          (i =
                                            null == g
                                              ? void 0
                                              : g.position_dp_list) ||
                                          i.map(function (t) {
                                            (t.f_carrier_path = e[0].path),
                                              (t.f_trace_id = c);
                                          }),
                                        (o =
                                          null == g
                                            ? void 0
                                            : g.position_dp_list)),
                                      (r.next = 19);
                                    break;
                                  case 17:
                                    (r.prev = 17), (r.t0 = r.catch(1));
                                  case 19:
                                    return r.abrupt("return", o);
                                  case 20:
                                  case "end":
                                    return r.stop();
                                }
                            },
                            a,
                            null,
                            [[1, 17]]
                          );
                        })
                      );
                    })(c, i, a)
                  );
                case 11:
                  return (
                    (s = o.sent),
                    (h = {}),
                    o.abrupt(
                      "return",
                      (null == s ||
                        s.forEach(function (n) {
                          return v(
                            exports,
                            null,
                            r().mark(function a() {
                              var i,
                                o,
                                u,
                                l,
                                c,
                                s,
                                v,
                                f,
                                m,
                                _,
                                g,
                                x,
                                y,
                                b,
                                w,
                                P,
                                k;
                              return r().wrap(function (r) {
                                for (;;)
                                  switch ((r.prev = r.next)) {
                                    case 0:
                                      if (
                                        n.component_info &&
                                        "null" !== n.component_info
                                      ) {
                                        r.next = 2;
                                        break;
                                      }
                                      return r.abrupt("return");
                                    case 2:
                                      (c = {}),
                                        (null ==
                                        (i = null == n ? void 0 : n.ad_list)
                                          ? void 0
                                          : i.length) > 1
                                          ? (null ==
                                              (o =
                                                null == n
                                                  ? void 0
                                                  : n.ad_list) ||
                                              o.forEach(function (e) {
                                                var t;
                                                (e.component_param = p(
                                                  {},
                                                  JSON.parse(
                                                    null == e
                                                      ? void 0
                                                      : e.component_param
                                                  )
                                                )),
                                                  (e.delivery_dp_stat =
                                                    (null ==
                                                    (t =
                                                      null == e
                                                        ? void 0
                                                        : e.ext_properties)
                                                      ? void 0
                                                      : t.stat) ||
                                                    "unknown_dp_stat"),
                                                  (e.delivery_trace_id =
                                                    n.f_trace_id);
                                              }),
                                            (c = n))
                                          : ((s =
                                              (null == n
                                                ? void 0
                                                : n.ad_list) || []),
                                            (v = t(s, 1)),
                                            (f = v[0]),
                                            (_ = (m = f || {}).component_param),
                                            (g = m.ext_properties),
                                            (x =
                                              "string" == typeof _
                                                ? JSON.parse(_)
                                                : _),
                                            (c = n =
                                              d(p(p({}, n), f), {
                                                component_param: x,
                                                delivery_dp_stat:
                                                  (null == g
                                                    ? void 0
                                                    : g.stat) ||
                                                  "unknown_dp_stat",
                                                delivery_trace_id:
                                                  (null == n
                                                    ? void 0
                                                    : n.f_trace_id) || "",
                                              }))),
                                        (y =
                                          JSON.parse(
                                            null == n
                                              ? void 0
                                              : n.component_info
                                          ) || {}),
                                        (b = y.name),
                                        (w = y.position_name),
                                        (P = void 0 === w ? "" : w),
                                        (k =
                                          ("BubbleMpwzqAll" === b &&
                                            (null ==
                                            (l = JSON.parse(
                                              null ==
                                                (u =
                                                  null == n
                                                    ? void 0
                                                    : n.ad_list[0])
                                                ? void 0
                                                : u.component_param
                                            ))
                                              ? void 0
                                              : l.component_content)) ||
                                          null) &&
                                          (c = d(p({}, c), {
                                            bubbleConfig: k,
                                          })),
                                        "DataDistribute" === b &&
                                          P &&
                                          (c = d(
                                            p({}, null == h ? void 0 : h[b]),
                                            e({}, P, { premote: p({}, c) })
                                          )),
                                        (h[b] = c);
                                    case 6:
                                    case "end":
                                      return r.stop();
                                  }
                              }, a);
                            })
                          );
                        }),
                      h)
                    )
                  );
                case 14:
                  (u.globalData.deliveryParams.pre_dp_ctx = ""), (o.next = 19);
                  break;
                case 17:
                  (o.prev = 17), (o.t0 = o.catch(0));
                case 19:
                case "end":
                  return o.stop();
              }
          },
          o,
          null,
          [[0, 17]]
        );
      })
    );
  },
  _ = {
    data: function () {
      return { premoteMixin: {}, pageRoute: "", pageQuery: {} };
    },
    onLoad: function (e) {
      return v(
        this,
        null,
        r().mark(function t() {
          var n;
          return r().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    (n = this.getPagePath()),
                      (this.pageRoute = n),
                      (this.pageQuery = e);
                  case 2:
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
    onShow: function () {
      return v(
        this,
        null,
        r().mark(function e() {
          var t, n, a, i;
          return r().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = getApp()) &&
                        n.globalData &&
                        ((n.globalData.deliveryParams.pageQuery =
                          this.pageQuery),
                        (n.globalData.deliveryParams.pageRoute =
                          this.pageRoute)),
                      (e.next = 4),
                      f.getStockParams(this.pageRoute.path, this.pageQuery)
                    );
                  case 4:
                    return (
                      (a = e.sent),
                      (null == (t = null == this ? void 0 : this.premoteMixin)
                        ? void 0
                        : t.Marquee) || (this.premoteMixin = {}),
                      (e.next = 8),
                      h(this.pageRoute, this.pageQuery, a)
                    );
                  case 8:
                    (i = e.sent), (this.premoteMixin = i);
                  case 10:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })
      );
    },
    onHide: function () {
      var e;
      (null == (e = null == this ? void 0 : this.premoteMixin)
        ? void 0
        : e.Marquee) || (this.premoteMixin = {});
    },
    onUnload: function () {
      var e;
      (null == (e = null == this ? void 0 : this.premoteMixin)
        ? void 0
        : e.Marquee) || (this.premoteMixin = {});
    },
    methods: {
      getPagePath: function () {
        return f.StockBridge.getCurRouteInfo();
      },
      reportQianjiGo: function (e, t, r) {
        var n =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        f.reportQianjiGo(e, t, r, n);
      },
      deliveryFormatPic: f.deliveryFormatPic,
      deliveryFormatText: f.deliveryFormatText,
      deliveryReportMta: f.deliveryReportMta,
      deliveryFormatStatName: f.deliveryFormatStatName,
      deliveryDoJump: function (e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          a = getApp();
        a &&
          a.globalData &&
          (a.globalData.deliveryParams.pre_dp_ctx = t.dp_ctx),
          f.deliveryDoJump(e, t, r, n, a.deliveryParams);
      },
    },
  };
exports.deliveryMixin = _;
