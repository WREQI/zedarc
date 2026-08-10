require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  u = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  s = function (e, n) {
    for (var r in n || (n = {})) c.call(n, r) && u(e, r, n[r]);
    if (a) {
      var o,
        s = t(a(n));
      try {
        for (s.s(); !(o = s.n()).done; ) {
          r = o.value;
          i.call(n, r) && u(e, r, n[r]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  l = function (e, t) {
    return r(e, o(t));
  },
  d = function (e, t, n) {
    return new Promise(function (r, o) {
      var a = function (e) {
          try {
            i(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          try {
            i(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, c);
        };
      i((n = n.apply(e, t)).next());
    });
  },
  f = require("../../../../../common/vendor.js"),
  p = require("../api/index.js"),
  v = require("../utils/tools.js"),
  g = require("../pages/hot-rank/mp/index.js"),
  h = require("../../stock-hq-data/index.js"),
  m = function (e, t) {
    var n =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : function () {},
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
      o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    try {
      t
        ? (e.intersectionObserver && e.intersectionObserver.disconnect(),
          (e.intersectionObserver = f.index.createIntersectionObserver(e, {
            observeAll: o,
          })),
          e.intersectionObserver
            .relativeToViewport({ bottom: 0 })
            .observe(t, function (t) {
              t.intersectionRatio < r ||
                0 === t.intersectionRatio ||
                (e.isHasObserved && !o) ||
                ((e.isHasObserved = !0), n && n(t));
            }))
        : e.intersectionObserver &&
          ((e.isHasObserved = !1), e.intersectionObserver.disconnect());
    } catch (e) {
      n && n(0);
    }
  },
  b = f.defineComponent({
    props: {
      rankType: { type: String, default: "wxhot" },
      userStock: {
        type: Array,
        default: function () {
          return [];
        },
      },
      curType: { type: String, default: "wxhot" },
      groupId: { type: String, default: "" },
    },
    emits: ["viewStockDetail", "followe", "rendered"],
    setup: function (t, n) {
      var r,
        o = this,
        a = n.emit,
        c = f.inject("stockBridge"),
        i = f.inject("hqBridge"),
        u = f.inject("onCheckUserAgreementStatus"),
        b = f.inject("didAgreeUserAgreement"),
        k = f.ref([]),
        w =
          (null == (r = f.getCurrentInstance()) ? void 0 : r.proxy) ||
          f.getCurrentInstance(),
        y = [],
        x = [],
        S = [],
        T = [],
        O = function () {
          return g.TabTypeEnum[t.rankType.toLocaleUpperCase()];
        },
        _ = f.ref(!1);
      f.onBeforeMount(function () {
        return d(
          o,
          null,
          e().mark(function n() {
            var r, o, c;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), q();
                  case 2:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 5;
                      break;
                    }
                    e.t0 = [];
                  case 5:
                    (c = e.t0),
                      (k.value =
                        null == (r = null == c ? void 0 : c.map)
                          ? void 0
                          : r.call(c, function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {},
                                n = e.code,
                                r = e.zdf,
                                o = h.utils.splitSymbol(n) || {},
                                a = o.scode,
                                c = o.market;
                              return l(s({}, e), {
                                market: c,
                                type: n.slice(0, 2),
                                stockType: e.stock_type || "",
                                followed: v.isInUserStock(n, t.userStock || []),
                                zdf: ""
                                  .concat(/^[+-]/.test(r) ? "" : "+")
                                  .concat(r),
                                showScode: h.utils.trimScode(a),
                              });
                            })),
                      _.value ||
                        ((_.value = !0),
                        null == (o = null == w ? void 0 : w.$nextTick) ||
                          o.call(w, function () {
                            a("rendered", t.rankType);
                          }));
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, n);
          })
        );
      }),
        f.onMounted(function () {
          t.curType === t.rankType &&
            (A("tab_".concat(O(), "_brow")),
            setTimeout(function () {
              j();
            }, 500));
        }),
        f.onUnmounted(function () {
          y.length && I(), (T = []), D();
        }),
        f.watch(
          function () {
            return t.userStock;
          },
          function (e) {
            var t;
            e &&
              (k.value =
                null == (t = k.value)
                  ? void 0
                  : t.map(function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      return l(s({}, t), {
                        zdf: ""
                          .concat(/^[+-]/.test(t.zdf) ? "" : "+")
                          .concat(t.zdf),
                        followed: v.isInUserStock(t.code, e),
                      });
                    }));
          }
        ),
        f.watch(
          function () {
            return t.curType;
          },
          function (e) {
            e === t.rankType
              ? (A("tab_".concat(O(), "_brow")), j())
              : y.length && I();
          }
        );
      var j = function () {
          var e = "rank-item",
            t = U.value ? [".".concat(e)] : w.$refs[e];
          (null == t ? void 0 : t.length) &&
            (null == t ||
              t.map(function (e) {
                m(
                  U.value ? w : e,
                  e,
                  function (e) {
                    var t, n, r, o, a, c;
                    c = U.value
                      ? null == (t = null == e ? void 0 : e.dataset)
                        ? void 0
                        : t.index
                      : null ==
                        (o =
                          null ==
                          (r =
                            null == (n = null == e ? void 0 : e[0])
                              ? void 0
                              : n.target)
                            ? void 0
                            : r.dataset)
                      ? void 0
                      : o.index;
                    var i = (null == (a = k.value) ? void 0 : a[c]) || {},
                      u = i.code,
                      s = i.followed;
                    if (-1 === y.indexOf(u)) {
                      if (T.includes(u)) return;
                      T.push(u),
                        y.push(u),
                        x.push(s),
                        S.push(+c + 1),
                        y.length >= 10 &&
                          (I(),
                          (y = y.slice(10, y.length)),
                          (x = x.slice(10, x.length)),
                          (S = S.slice(10, S.length)));
                    }
                  },
                  0,
                  !0
                );
              }));
        },
        I = function () {
          A("".concat(O(), "_brow"), S.join(","), {
            stocklist: y.join(","),
            hasaddlist: x.join(","),
            foperation_purpose: "zixuan",
          });
        },
        D = function () {
          (y.length = 0),
            (x.length = 0),
            (S.length = 0),
            (T.length = 0),
            m(w, "");
        },
        A = function (e, n) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            o = {
              positionlist: n,
              fchannel_id_fm_i: {
                search: "INv00p000l126",
                etf: "INB00p000l126",
                bankuai: "Is900p000l126",
                wxhot: "IBl00p000l126",
              }[t.rankType],
            };
          c.report("base.hot.card_version_".concat(e), s(s({}, o), r));
        },
        q = function () {
          return d(
            o,
            null,
            e().mark(function n() {
              var r, o;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (o = { search: z, etf: E, wxhot: P, bankuai: N }),
                          (e.prev = 1),
                          (e.next = 4),
                          null == (r = o[t.rankType]) ? void 0 : r.call(o)
                        );
                      case 4:
                        return e.abrupt("return", e.sent);
                      case 7:
                        (e.prev = 7), (e.t0 = e.catch(1));
                      case 9:
                      case "end":
                        return e.stop();
                    }
                },
                n,
                null,
                [[1, 7]]
              );
            })
          );
        },
        z = function () {
          return d(
            o,
            null,
            e().mark(function t() {
              var n, r;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        p.serviceApi.getHotStockDetail(c, s({}, { num: 50 }))
                      );
                    case 2:
                      if (((e.t0 = e.sent), e.t0)) {
                        e.next = 5;
                        break;
                      }
                      e.t0 = {};
                    case 5:
                      return (
                        (n = e.t0), (r = n.data.stock), e.abrupt("return", r)
                      );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          );
        },
        P = function () {
          return d(
            o,
            null,
            e().mark(function t() {
              var n, r;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        p.serviceApi.getWxHotStock(c, s({}, { num: 50 }))
                      );
                    case 2:
                      if (((e.t0 = e.sent), e.t0)) {
                        e.next = 5;
                        break;
                      }
                      e.t0 = {};
                    case 5:
                      return (
                        (n = e.t0), (r = n.data.stock), e.abrupt("return", r)
                      );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          );
        },
        N = function () {
          return d(
            o,
            null,
            e().mark(function t() {
              var n, r;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        p.serviceApi.getPlateRank(c, s({}, { num: 50 }))
                      );
                    case 2:
                      if (((e.t0 = e.sent), e.t0)) {
                        e.next = 5;
                        break;
                      }
                      e.t0 = {};
                    case 5:
                      return (
                        (n = e.t0),
                        (r = n.data.rankResult),
                        e.abrupt(
                          "return",
                          null == r
                            ? void 0
                            : r.map(function (e) {
                                return s({ code: e.symbol }, e);
                              })
                        )
                      );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          );
        },
        E = function () {
          return d(
            o,
            null,
            e().mark(function t() {
              var n, r;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), p.serviceApi.getEtfRank(c);
                    case 2:
                      if (((e.t0 = e.sent), e.t0)) {
                        e.next = 5;
                        break;
                      }
                      e.t0 = {};
                    case 5:
                      return (
                        (n = e.t0), (r = n.data.hot), e.abrupt("return", r)
                      );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          );
        },
        R = function (e, t) {
          A("".concat(O(), "_click"), {
            position: +t + 1,
            stockid: null == e ? void 0 : e.code,
          }),
            a("viewStockDetail", e);
        },
        U = f.computed(function () {
          return c.ENV === f.EnvTypeEnum.MP;
        });
      return {
        isMp: U,
        renderData: k,
        logPrefix: O,
        followe: function (n, r) {
          return d(
            o,
            null,
            e().mark(function o() {
              var a, s, l, d;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((a = k.value[n] || {}), r)) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", void R(a, n));
                    case 3:
                      if (
                        (null == b ? void 0 : b.value) ||
                        "function" != typeof u
                      ) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt("return", void u());
                    case 5:
                      return (
                        (s = a.code),
                        (l = {
                          code: s,
                          timestamp: new Date().getTime(),
                          act: "sa",
                        }),
                        t.groupId && (l.grpid = t.groupId),
                        (d = { seq: JSON.stringify([l]) }),
                        t.groupId && (d.new_opt = 1),
                        (e.next = 11),
                        p.serviceApi.addUserStock(c, d)
                      );
                    case 11:
                      if (((e.t0 = +e.sent.code), (e.t1 = 0 == e.t0), !e.t1)) {
                        e.next = 15;
                        break;
                      }
                      (a.followed = !0),
                        i.busEmit("toggleAdded"),
                        c.busEmit("common-toggleAdded");
                    case 15:
                      A("".concat(O(), "_add"), +n + 1, {
                        stocklist: s,
                        foperation_purpose: "zixuan",
                      });
                    case 16:
                    case "end":
                      return e.stop();
                  }
              }, o);
            })
          );
        },
        getData: q,
        getStatus: function (e) {
          return { U: "待上市", S: "停牌", D: "退市" }[e];
        },
        reportBrow: I,
        getRiseType: function (e) {
          var t = parseFloat(e);
          return t > 0 ? "red" : t < 0 ? "green" : "gray";
        },
        getIconName: v.getIconName,
        getFormatName: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = e.replace(/\s+/g, "");
          return (null == r ? void 0 : r.length) > t
            ? "".concat(r.slice(0, t - 1)).concat(n ? "" : "...")
            : r;
        },
        viewStockDetail: R,
      };
    },
  }),
  k = f._export_sfc(b, [
    [
      "render",
      function (e, t, n, r, o, a) {
        return f.e(
          { a: e.renderData && e.renderData.length },
          e.renderData && e.renderData.length
            ? {
                b: f.f(e.renderData, function (t, n, r) {
                  return f.e(
                    { a: f.t(n + 1), b: t.name },
                    t.name ? { c: f.t(e.getFormatName(t.name, 10)) } : {},
                    { d: t.code },
                    t.code
                      ? f.e(
                          {
                            e: f.n(
                              e.getIconName(t.market, t.type, t.stockType)
                            ),
                            f: f.t(t.showScode),
                            g: "search" === e.rankType && [0, 7, 8].includes(n),
                          },
                          "search" === e.rankType && [0, 7, 8].includes(n)
                            ? {
                                h: f.t(n ? "议" : "热"),
                                i: f.n(n ? "" : "top"),
                              }
                            : {}
                        )
                      : {},
                    { j: e.getStatus(t.status) },
                    e.getStatus(t.status)
                      ? { k: f.t(e.getStatus(t.status)) }
                      : t.zdf
                      ? { m: f.t(t.zdf), n: f.n(e.getRiseType(t.zdf)) }
                      : {},
                    {
                      l: t.zdf,
                      o: f.n(0 == t.followed ? "unadd" : "added"),
                      p: f.o(
                        function (r) {
                          return e.followe(n, 0 == t.followed);
                        },
                        3011,
                        n
                      ),
                      q: n,
                      r: n,
                      s: f.o(
                        function (r) {
                          return e.viewStockDetail(t, n);
                        },
                        3012,
                        n
                      ),
                    }
                  );
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-33c7fd94"],
  ]);
wx.createComponent(k);
