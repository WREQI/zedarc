var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../../@babel/runtime/helpers/typeof"),
  i = require("../../../../../@babel/runtime/helpers/defineProperty"),
  a = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  s = Object.defineProperties,
  u = Object.getOwnPropertyDescriptors,
  l = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  f = Object.prototype.propertyIsEnumerable,
  h = function (e, t, n) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  v = function (e, t) {
    for (var n in t || (t = {})) c.call(t, n) && h(e, n, t[n]);
    if (l) {
      var r,
        i = a(l(t));
      try {
        for (i.s(); !(r = i.n()).done; ) {
          n = r.value;
          f.call(t, n) && h(e, n, t[n]);
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
    return s(e, u(t));
  },
  p = require("../../../../../common/vendor.js"),
  b = require("./service.js"),
  m = p.defineStore("useViewStore", function () {
    var e = p.ref(!1),
      t = p.ref(!0),
      n = p.ref(0),
      r = p.ref(1e3),
      a = p.ref(0),
      o = p.reactive({}),
      s = p.ref({}),
      u = p.ref(0),
      l = p.ref(!1),
      c = p.ref(""),
      f = p.reactive({}),
      h = p.ref({}),
      b = p.ref({}),
      m = p.ref(0),
      g = p.ref(!1),
      y = p.ref(48),
      M = p.ref(0),
      S = p.ref(!1),
      w = p.ref(!1);
    return {
      mpHideTitle: e,
      stockItemHeight: n,
      swiperHeight: r,
      pageShow: t,
      longPressIndexConf: h,
      pressIndexConf: b,
      visibleIndexRange: o,
      showPrivacyPolicyBar: l,
      protocolStatus: c,
      swiperItemHeight: u,
      sortBarHeight: a,
      visibleSectionRange: s,
      chooseTopToHeaderBottom: m,
      showChart: g,
      titleHeight: y,
      topBarHeight: M,
      setTopBarHeight: function (e) {
        M.value = e;
      },
      setTitleHeight: function (e) {
        y.value = e;
      },
      showChartChange: function (e) {
        g.value = e;
      },
      setSortBarHeight: function (e) {
        a.value = e;
      },
      setSwiperItemHeight: function (e) {
        u.value = e;
      },
      setPageShow: function (e) {
        t.value = e;
      },
      setSwiperHeight: function (e) {
        r.value = e;
      },
      setMpHideTitle: function (t) {
        (e.value = t), p.StockBridge.busEmit("common-switchBigTitle", t);
      },
      setStockItemHeight: function (e) {
        n.value = e;
      },
      setVisibleIndexRange: function (e, t, n) {
        return (
          o[e] || (o[e] = { start: 0, end: 14 }),
          void 0 !== t && (o[e].start = t),
          void 0 !== n && (o[e].end = n),
          o[e]
        );
      },
      setPrivacyPolicyBar: function (e) {
        l.value = e;
      },
      setProtocolStatus: function (e) {
        c.value = e;
      },
      setListScrollPosition: function (e, t) {
        f[e] || (f[e] = 0), (f[e] = t);
      },
      setVisibleSectionRange: function (e, t, n) {
        var r = s.value;
        r[e] || (r[e] = { start: 0, end: 2 }),
          (r[e].start = void 0 !== t ? t : Math.floor(o[e].start / 10)),
          (r[e].end = void 0 !== n ? n : Math.floor(o[e].end / 10)),
          (s.value = Object.assign({}, r));
      },
      setLongPressIndexConf: function (e, t) {
        var n = h.value;
        void 0 === n[e] && (h.value = d(v({}, n), i({}, e, -1))),
          (h.value = d(v({}, n), i({}, e, t)));
      },
      setPressIndexConf: function (e, t) {
        var n = b.value;
        void 0 === !n[e] && (b.value = d(v({}, n), i({}, e, -1))),
          (b.value = d(v({}, n), i({}, e, t)));
      },
      setChooseTopToHeaderBottom: function (e) {
        m.value = e;
      },
      isMonitoringRemindOpen: S,
      isMonitorRemindGrayUser: w,
      setIsMonitoringRemindOpen: function (e) {
        S.value = e;
      },
      setIsMonitorRemindGrayUser: function (e) {
        w.value = e;
      },
    };
  }),
  g = p.defineStore("useChartDataStore", function () {
    var e = p.ref({}),
      t = p.ref({});
    return {
      allMinsData: e,
      renderMinsData: t,
      getOneChartData: function (t) {
        return e.value[t];
      },
      updateAllMinsData: function (t) {
        if (t && t.length) {
          var n = {};
          t.forEach(function (e) {
            e &&
              0 === e.code &&
              e.data &&
              (n[e.data.stockCode] || (n[e.data.stockCode] = {}),
              (n[e.data.stockCode].data = e.data),
              (n[e.data.stockCode].ts = new Date().getTime()));
          }),
            (e.value = Object.assign({}, e.value, n));
        }
      },
      resetAllMinsData: function () {
        e.value = {};
      },
      updateRenderMinsData: function (n, i) {
        if (n && n.length) {
          t.value[i] || (t.value[i] = {});
          var a = t.value[i];
          n.forEach(function (t) {
            var n = "";
            if ("string" == typeof t) n = t;
            else {
              if ("object" != r(t)) return;
              n = t.chooseSymbol;
            }
            var i = e.value[n];
            i && (a[n] = i);
          }),
            (t.value = Object.assign({}, t.value));
        }
      },
    };
  }),
  y = [],
  M = [],
  S = [],
  w = 3e5,
  k = {},
  O = 0,
  C = null,
  D = new ((function () {
    function i() {
      var e, n;
      t(this, i),
        (e = "batchMinsUrl"),
        (n = p.getApiFullUrl(
          "cgi/cgi-bin/generalminute/mini/bath",
          p.API_HOST_ENUM.PROXY_QQ
        )),
        h(this, "symbol" != r(e) ? e + "" : e, n);
    }
    return (
      n(i, [
        {
          key: "refreshCache",
          value: function (e) {
            g().resetAllMinsData(),
              (O = 0),
              (S = []),
              (k = {}),
              (M = y.map(function (e) {
                return e.chooseSymbol;
              })),
              this.batchGetMiniMinsRequest(y, e);
          },
        },
        {
          key: "stopAutoUpdate",
          value: function () {
            C && clearTimeout(C), (C = null);
          },
        },
        {
          key: "batchGetMiniMins",
          value: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = arguments.length > 2 ? arguments[2] : void 0;
            if ((n && (this.batchMinsUrl = n), e && e.length))
              for (var r = 0, i = e.length; r < i; r += 50) {
                var a = e.slice(r, r + 50);
                a && this.batchGetMiniMinsRequest(a, t);
              }
          },
        },
        {
          key: "batchGetMiniMinsRequest",
          value: function () {
            return (
              (t = this),
              (n = arguments),
              (r = function () {
                var t = this,
                  n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  r = arguments.length > 1 ? arguments[1] : void 0;
                return e().mark(function i() {
                  var a, o, s, u, l, c, f, h, v;
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((s = g()),
                              !(0 !== O && new Date().getTime() - O < w))
                            ) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            if (
                              ((u = []),
                              n.forEach(function (e) {
                                (s.allMinsData[e.chooseSymbol] &&
                                  !t.needUpdate(
                                    s.allMinsData[e.chooseSymbol]
                                  )) ||
                                  u.push(e);
                              }),
                              (u = u.filter(function (e) {
                                return -1 === S.indexOf(e.chooseSymbol);
                              })),
                              (l = u
                                .map(function (e) {
                                  return e.chooseSymbol;
                                })
                                .join("_")),
                              !u || !u.length || k[l])
                            ) {
                              e.next = 27;
                              break;
                            }
                            return (
                              (S = S.concat(
                                u.map(function (e) {
                                  return e.chooseSymbol;
                                })
                              )),
                              (k[l] = !0),
                              (e.prev = 8),
                              (f = u.slice(0, 50).map(function (e) {
                                return {
                                  stockCode: e.chooseSymbol,
                                  needWidth: 40,
                                  stockType: e.stock_type,
                                  app: "wzq_h5",
                                };
                              })),
                              (e.next = 12),
                              b.request(
                                "".concat(t.batchMinsUrl, "?app=mini_h5"),
                                "POST",
                                { bathReq: f },
                                {
                                  header: {
                                    "Content-Type": "application/json",
                                  },
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                },
                                !0
                              )
                            );
                          case 12:
                            (c = e.sent), (e.next = 17);
                            break;
                          case 15:
                            (e.prev = 15), (e.t0 = e.catch(8));
                          case 17:
                            return (
                              (e.prev = 17),
                              (k[l] = !1),
                              (h = u.map(function (e) {
                                return e.chooseSymbol;
                              })),
                              (S = S.filter(function (e) {
                                return -1 === h.indexOf(e);
                              })),
                              e.finish(17)
                            );
                          case 22:
                            if (
                              0 !== (null == c ? void 0 : c.code) ||
                              (null == (a = null == c ? void 0 : c.data)
                                ? void 0
                                : a.show)
                            ) {
                              e.next = 24;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              void (O = new Date().getTime())
                            );
                          case 24:
                            (null == (o = null == c ? void 0 : c.data)
                              ? void 0
                              : o.miniList) &&
                              c.data.miniList.length &&
                              s.updateAllMinsData(c.data.miniList),
                              (v = y.filter(function (e) {
                                return M.indexOf(e.chooseSymbol) > -1;
                              })),
                              r && s.updateRenderMinsData(v, r);
                          case 27:
                          case "end":
                            return e.stop();
                        }
                    },
                    i,
                    null,
                    [[8, 15, 17, 22]]
                  );
                })();
              }),
              new Promise(function (e, i) {
                var a = function (e) {
                    try {
                      s(r.next(e));
                    } catch (e) {
                      i(e);
                    }
                  },
                  o = function (e) {
                    try {
                      s(r.throw(e));
                    } catch (e) {
                      i(e);
                    }
                  },
                  s = function (t) {
                    return t.done
                      ? e(t.value)
                      : Promise.resolve(t.value).then(a, o);
                  };
                s((r = r.apply(t, n)).next());
              })
            );
            var t, n, r;
          },
        },
        {
          key: "needUpdate",
          value: function (e) {
            return new Date().getTime() - e.ts >= 24e4;
          },
        },
        {
          key: "drawStocksMins",
          value: function (e, t) {
            var n = this,
              r = g();
            e && (y = e),
              C && clearTimeout(C),
              (C = setTimeout(function () {
                n.drawStocksMins(y, t);
              }, w));
            var i = [];
            y.forEach(function (e) {
              var a = e.chooseSymbol;
              if (a) {
                var o = M.indexOf(a);
                if (!r.renderMinsData[a] || n.needUpdate(r.renderMinsData[a])) {
                  if (r.allMinsData[a] && !n.needUpdate(r.allMinsData[a]))
                    return o > -1 && M.splice(o, 1), void i.push(a);
                  -1 === o && M.push(a),
                    -1 === S.indexOf(a) && n.batchGetMiniMins(y, t);
                } else o > -1 && M.splice(o, 1);
              }
            }),
              i.length > 0 && t && r.updateRenderMinsData(i, t);
          },
        },
      ]),
      i
    );
  })())();
(exports.StockMiniChartApi = D),
  (exports.useChartDataStore = g),
  (exports.useViewStore = m);
