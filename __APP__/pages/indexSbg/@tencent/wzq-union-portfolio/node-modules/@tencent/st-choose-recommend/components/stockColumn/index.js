require("../../../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  i = function (e, t, o) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o);
  },
  u = function (e, n) {
    for (var u in n || (n = {})) r.call(n, u) && i(e, u, n[u]);
    if (o) {
      var a,
        l = t(o(n));
      try {
        for (l.s(); !(a = l.n()).done; ) {
          u = a.value;
          c.call(n, u) && i(e, u, n[u]);
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return e;
  },
  a = function (e, t, n) {
    return new Promise(function (o, r) {
      var c = function (e) {
          try {
            u(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        i = function (e) {
          try {
            u(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        u = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(c, i);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  l = require("../../../../../../../../../common/vendor.js"),
  s = require("../../../../../../stock-base/visibilityObserver/index.js"),
  d = require("../../../../../../stock-mini-mins/api/StockMiniChartApi.js"),
  f = require("../../../../../../stock-hq-data/index.js"),
  p = require("../recommend/index.js"),
  y = require("../../utils/index.js"),
  m = "growth-recommend-alladd-type",
  v = new f.DetailApi(function (e) {
    return l.StockBridge.request(e, "GET");
  }),
  b = l.ref({}),
  k = l.ref(""),
  h = l.ref({}),
  S = l.ref({}),
  x = l.ref({}),
  g = [],
  T = {},
  _ = {},
  j = !1,
  O = null,
  E = "stockColumn",
  I = l.ref(p.stockTextInfo);
var z = {
  name: "targetVer",
  props: {
    isCurrent: { type: Boolean, default: !1 },
    realId: { type: String, default: "" },
    list: {
      type: Array,
      default: function () {
        return [];
      },
    },
    scodeList: {
      type: Array,
      default: function () {
        return [];
      },
    },
    abtType: { type: Number, default: 0 },
    protocolStatus: { type: String, default: "agree" },
    title: { type: String, default: "微信用户都在选" },
  },
  components: {
    StockItemChart: function () {
      return "../../../../../../../../asyncCom/@tencent/stock-mini-mins/component/StockItemChart.js";
    },
  },
  setup: function (t, n) {
    return (function (t, n) {
      var o,
        r,
        c = n.emit,
        i = p.useClickProxy().proxyHandlers,
        z = null,
        q = l.getCurrentInstance().proxy || l.getCurrentInstance(),
        C = l.computed(function () {
          return b.value[k.value] || [];
        }),
        B = l.computed(function () {
          return 1 === t.list.length;
        }),
        w = l.computed(function () {
          return "t_".concat(k.value).concat(t.abtType);
        }),
        A = l.computed(function () {
          return x.value[k.value] || [];
        });
      function H(n) {
        var o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return a(
          this,
          null,
          e().mark(function r() {
            var i, u, d, m, b, h, S, T;
            return e().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (!x.value[n] || g.length) {
                      r.next = 2;
                      break;
                    }
                    return r.abrupt(
                      "return",
                      void l.nextTick$1(function () {
                        (k.value = n), M(n);
                      })
                    );
                  case 2:
                    if (!_[n]) {
                      r.next = 4;
                      break;
                    }
                    return r.abrupt("return");
                  case 4:
                    return (
                      (_[n] = !0),
                      (r.next = 7),
                      (function (t) {
                        var n = this;
                        return new Promise(function (o) {
                          return a(
                            n,
                            null,
                            e().mark(function n() {
                              var r,
                                c,
                                i,
                                u,
                                a,
                                l,
                                s,
                                d,
                                y,
                                m,
                                v,
                                b,
                                k,
                                h,
                                S,
                                x,
                                T,
                                _,
                                j,
                                O,
                                E,
                                I,
                                z,
                                q,
                                C,
                                B,
                                w,
                                A,
                                H,
                                M,
                                L,
                                N,
                                P,
                                Z,
                                V,
                                D;
                              return e().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          (a = g.length ? 20 : 10),
                                          t !== p.StockTypeEnum.HOTSTOCK)
                                        ) {
                                          e.next = 14;
                                          break;
                                        }
                                        return (e.next = 5), p.queryHotStock(a);
                                      case 5:
                                        (l = e.sent),
                                          (s = l.code),
                                          (d = l.data),
                                          (y = (void 0 === d ? {} : d).stock),
                                          o({
                                            code: s,
                                            list: void 0 === y ? [] : y,
                                          }),
                                          (e.next = 95);
                                        break;
                                      case 14:
                                        if (t !== p.StockTypeEnum.EASYETF) {
                                          e.next = 26;
                                          break;
                                        }
                                        return (
                                          (e.next = 17), p.queryMarketIndexETF()
                                        );
                                      case 17:
                                        (m = e.sent),
                                          (v = m.code),
                                          (b = m.data),
                                          (k = (void 0 === b ? {} : b).list),
                                          o({
                                            code: v,
                                            list: void 0 === k ? [] : k,
                                          }),
                                          (e.next = 95);
                                        break;
                                      case 26:
                                        if (t !== p.StockTypeEnum.LOWPRICE) {
                                          e.next = 38;
                                          break;
                                        }
                                        return (
                                          (e.next = 29),
                                          p.queryWatchlist({
                                            ids: p.GdIdValEnum.gdlowprice,
                                          })
                                        );
                                      case 29:
                                        (h = e.sent),
                                          (S = h.code),
                                          (x = h.data),
                                          (T = (void 0 === x ? {} : x).list),
                                          o({
                                            code: S,
                                            list:
                                              (null ==
                                              (c =
                                                null ==
                                                (r = (void 0 === T ? [] : T)[0])
                                                  ? void 0
                                                  : r.ranking)
                                                ? void 0
                                                : c.data) || [],
                                          }),
                                          (e.next = 95);
                                        break;
                                      case 38:
                                        if (t !== p.StockTypeEnum.FUNDSMAININ) {
                                          e.next = 50;
                                          break;
                                        }
                                        return (
                                          (e.next = 41), p.queryNetmaininList(a)
                                        );
                                      case 41:
                                        (_ = e.sent),
                                          (j = _.code),
                                          (O = _.data),
                                          (E = (void 0 === O ? {} : O)
                                            .rank_list),
                                          (I = void 0 === E ? [] : E).forEach(
                                            function (e) {
                                              e.zljlr = f.utils.bigNumberToText(
                                                1e4 * e.zljlr
                                              );
                                            }
                                          ),
                                          o({ code: j, list: I }),
                                          (e.next = 95);
                                        break;
                                      case 50:
                                        if (
                                          t !== p.StockTypeEnum.HOTBUY &&
                                          t !== p.StockTypeEnum.HOTASSET
                                        ) {
                                          e.next = 60;
                                          break;
                                        }
                                        return (
                                          (e.next = 53),
                                          p.queryStocksRank({
                                            rank_type:
                                              "hotbuy" === t
                                                ? "mn_buy"
                                                : "mn_asset",
                                          })
                                        );
                                      case 53:
                                        (z = e.sent),
                                          (q = z.retcode),
                                          (C = z.stocks_rank),
                                          o({
                                            code: q,
                                            list: void 0 === C ? [] : C,
                                          }),
                                          (e.next = 95);
                                        break;
                                      case 60:
                                        if (t !== p.StockTypeEnum.HQRATIO) {
                                          e.next = 72;
                                          break;
                                        }
                                        return (
                                          (e.next = 63), p.queryBoardRankList(a)
                                        );
                                      case 63:
                                        (B = e.sent),
                                          (w = B.code),
                                          (A = B.data),
                                          (H = (void 0 === A ? {} : A)
                                            .rank_list),
                                          o({
                                            code: w,
                                            list: void 0 === H ? [] : H,
                                          }),
                                          (e.next = 95);
                                        break;
                                      case 72:
                                        if (t !== p.StockTypeEnum.HIGHTLOW) {
                                          e.next = 84;
                                          break;
                                        }
                                        return (
                                          (e.next = 75),
                                          p.queryWatchlist({
                                            ids: p.GdIdValEnum.gdhightlow,
                                          })
                                        );
                                      case 75:
                                        (M = e.sent),
                                          (L = M.code),
                                          (N = M.data),
                                          (P = (void 0 === N ? {} : N).list),
                                          o({
                                            code: L,
                                            list:
                                              (null ==
                                              (u =
                                                null ==
                                                (i = (void 0 === P ? [] : P)[0])
                                                  ? void 0
                                                  : i.ranking)
                                                ? void 0
                                                : u.data) || [],
                                          }),
                                          (e.next = 95);
                                        break;
                                      case 84:
                                        if (t !== p.StockTypeEnum.HOTCONSUME) {
                                          e.next = 94;
                                          break;
                                        }
                                        return (
                                          (e.next = 87),
                                          p.queryBkStocks({
                                            plate_code: "02GN2351",
                                            limit: a,
                                          })
                                        );
                                      case 87:
                                        (Z = e.sent),
                                          (V = Z.retcode),
                                          (D = Z.stocks),
                                          o({
                                            code: V,
                                            list: void 0 === D ? [] : D,
                                          }),
                                          (e.next = 95);
                                        break;
                                      case 94:
                                        o({ code: 1 });
                                      case 95:
                                        e.next = 100;
                                        break;
                                      case 97:
                                        (e.prev = 97),
                                          (e.t0 = e.catch(0)),
                                          o({ code: 1 });
                                      case 100:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                n,
                                null,
                                [[0, 97]]
                              );
                            })
                          );
                        });
                      })(n)
                    );
                  case 7:
                    if (
                      ((u = r.sent),
                      (d = u.code),
                      (m = u.list),
                      0 == +d && (null == m ? void 0 : m.length))
                    ) {
                      r.next = 12;
                      break;
                    }
                    return r.abrupt(
                      "return",
                      void c("columnStatus", { type: E, flag: !1 })
                    );
                  case 12:
                    return (
                      (b = (function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [];
                        return e.map(function (e) {
                          var n = e.data || e,
                            o = n.zdf,
                            r = n.changePct,
                            c = n.rate,
                            i = n.adp,
                            u = n.name,
                            a = n.cnName,
                            l = n.stock_name,
                            s = n.code,
                            d = n.jump_code,
                            f = n.symbol,
                            p = n.stock_code,
                            y = n.stock_type,
                            m = n.stockType,
                            v = n.new,
                            b = n.zxj;
                          return (function (e, n, o, r, c, i, u) {
                            var a,
                              l = n.slice(0, 2);
                            ("ft" !== l && "cs" !== l) || (l = "hqzhi"),
                              r &&
                                ("GP-A-CYB" === r
                                  ? (l = "chuang")
                                  : "GP-A-KCB" === r && (l = "ke"));
                            var s = {
                              symbol: n,
                              name: o,
                              zdf: e,
                              marketIcon: l,
                              add:
                                null == (a = t.scodeList)
                                  ? void 0
                                  : a.includes(n),
                              type: r,
                              price: c ? (100 * c).toFixed(0) : "",
                              subattr: [],
                            };
                            return i && (s.zljlr = i), u && (s.popValue = u), s;
                          })(
                            o || r || c || i || "",
                            d || s || f || p || "",
                            u || a || l || "",
                            y || m || "",
                            v || b || "",
                            n.zljlr || "",
                            n.pop_value
                          );
                        });
                      })(m)),
                      (h =
                        null ==
                        (i =
                          null == b
                            ? void 0
                            : b.filter(function (e) {
                                return !t.scodeList.includes(
                                  null == e ? void 0 : e.symbol
                                );
                              }))
                          ? void 0
                          : i.slice(0, 3)).length < 3 &&
                        ((S = b.filter(function (e) {
                          return t.scodeList.includes(
                            null == e ? void 0 : e.symbol
                          );
                        })),
                        (h = h.concat(S.slice(0, 3 - h.length)))),
                      [
                        p.StockTypeEnum.FUNDSMAININ,
                        p.StockTypeEnum.HOTBUY,
                        p.StockTypeEnum.HOTASSET,
                      ].includes(n) ||
                        h.sort(function (e, t) {
                          return t.zdf - e.zdf;
                        }),
                      (r.next = 18),
                      v.getQTsWithProcess(
                        h.map(function (e) {
                          return e.symbol;
                        })
                      )
                    );
                  case 18:
                    (T = r.sent),
                      (h = (function (e, n, o) {
                        var r,
                          c = Object.assign(n),
                          i = (
                            (null ==
                            (r = t.list.filter(function (t) {
                              return t.type === e;
                            }))
                              ? void 0
                              : r[0]) || {}
                          ).subattr,
                          u = void 0 === i ? [] : i;
                        return (
                          c.forEach(function (n) {
                            var r,
                              c,
                              i,
                              a =
                                o[
                                  f.utils.trimScode(
                                    null == n ? void 0 : n.symbol
                                  )
                                ];
                            a &&
                              ([
                                p.StockTypeEnum.HOTBUY,
                                p.StockTypeEnum.HOTASSET,
                                p.StockTypeEnum.HOTSTOCK,
                                p.StockTypeEnum.HOTCONSUME,
                              ].includes(e) &&
                                (n.type =
                                  (null == (r = a.secu_info)
                                    ? void 0
                                    : r.stocktype) || ""),
                              e === p.StockTypeEnum.HOTCONSUME &&
                                ((n.name =
                                  (null == (c = a.secu_info)
                                    ? void 0
                                    : c.secu_name) || ""),
                                (n.zdf =
                                  (null == (i = a.secu_quote)
                                    ? void 0
                                    : i.zdf) || "")),
                              u.forEach(function (e) {
                                var t,
                                  o,
                                  r,
                                  c = { type: e, text: p.attrText[e] };
                                if (
                                  "zdf" === e &&
                                  (null == (t = a.secu_quote) ? void 0 : t.zdf)
                                ) {
                                  var i = a.secu_quote.zdf;
                                  c.value = y.formatZdf(i);
                                } else "fprice" === e && (null == (o = a.secu_quote) ? void 0 : o.dqj) ? (c.value = "".concat((100 * a.secu_quote.dqj).toFixed(0), "元")) : "zljlr" === e && n.zljlr ? (c.value = n.zljlr) : ("bnum" !== e && "anum" !== e) || !n.popValue ? "zxj" === e && (null == (r = a.secu_quote) ? void 0 : r.dqj) && (c.value = a.secu_quote.dqj) : (c.value = n.popValue);
                                c.value && n.subattr.push(c);
                              })),
                              (n.add = t.scodeList.includes(n.symbol));
                          }),
                          c
                        );
                      })(n, h, T)),
                      l.set(x.value, n, h),
                      l.nextTick$1(function () {
                        (k.value = n),
                          M(n),
                          (g = []),
                          o &&
                            (l.StockBridge.busOff(p.hqWsResultBusKey, N),
                            l.StockBridge.busOn(p.hqWsResultBusKey, N),
                            t.isCurrent &&
                              (P(),
                              l.nextTick$1(function () {
                                (j = !1),
                                  (O = new s.VisibilityObserver(
                                    ".stock-column",
                                    {
                                      once: !1,
                                      throttle: 1e3,
                                      callback: function (e) {
                                        var t = (function (e) {
                                          var t = [],
                                            n = [],
                                            o = [];
                                          return (
                                            e.forEach(function (e, r) {
                                              t.push(e.symbol),
                                                n.push(e.add),
                                                o.push(r);
                                            }),
                                            {
                                              symbolList: t,
                                              addList: n,
                                              position: o,
                                            }
                                          );
                                        })(A.value);
                                        e &&
                                          !j &&
                                          (l.StockBridge.report(
                                            "yy.choose.recommend_item_brow",
                                            { recommend_id: w.value }
                                          ),
                                          l.StockBridge.report(
                                            "yy.choose.recommend_all_stock_brow",
                                            {
                                              fchannel_id_fm_i: "IT100p000m212",
                                              stocklist: t.symbolList.join(","),
                                              foperation_purpose: "zixuan",
                                              recommend_id: w.value,
                                              positionlist:
                                                t.position.join(","),
                                              hasaddlist: t.addList
                                                .map(function (e) {
                                                  return e ? "1" : "0";
                                                })
                                                .join(","),
                                            }
                                          ),
                                          A.value.forEach(function (e, t) {
                                            l.StockBridge.report(
                                              "yy.choose.recommend_stock_brow",
                                              {
                                                fchannel_id_fm_i:
                                                  "IT101p000m212",
                                                stocklist: e.symbol,
                                                foperation_purpose: "zixuan",
                                                recommend_id: w.value,
                                                positionlist: t,
                                                hasaddlist: e.add ? "1" : "0",
                                              }
                                            );
                                          }));
                                        var n = e || (!1 === e && j);
                                        (j = e), n && L();
                                      },
                                      intersection: { threshold: 0.2 },
                                    },
                                    { context: q }
                                  ));
                              })),
                            c("columnStatus", { type: E, flag: !0 }));
                      });
                  case 20:
                  case "end":
                    return r.stop();
                }
            }, r);
          })
        );
      }
      function M(e) {
        if (!T[e] || g.length) {
          if (((T[e] = !0), A.value.length)) {
            var t = [];
            A.value.forEach(function (e) {
              var n = e.symbol,
                o = e.type,
                r = +e.zdf;
              t.push({
                chooseSymbol: n,
                riseDropVal: r,
                riseDropStyle:
                  0 === r ? "bg-peace" : r > 0 ? "bg-rise" : "bg-drop",
                stock_type: o,
              });
            }),
              l.set(b.value, e, t),
              (z = setTimeout(function () {
                d.StockMiniChartApi.batchGetMiniMins(b.value[e], e),
                  d.StockMiniChartApi.drawStocksMins(b.value[e], e);
              }, p.renderDelayMs));
          }
        } else
          z = setTimeout(function () {
            d.StockMiniChartApi.drawStocksMins(b.value[e], e);
          }, p.renderDelayMs);
      }
      H(
        l.StockBridge.getSession(m) ||
          (null == (r = null == (o = t.list) ? void 0 : o[0])
            ? void 0
            : r.type),
        !0
      );
      var L = l.throttle(function () {
        t.isCurrent &&
          A.value.length &&
          l.StockBridge.busEmit(p.hqWsBusKey, A.value);
      }, 800);
      function N() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.list,
          n = void 0 === t ? [] : t,
          o = e.isInit,
          r = void 0 !== o && o;
        if (n.length) {
          var c = {};
          n.forEach(function () {
            var e,
              t,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              o = "",
              i = "",
              u = "";
            r
              ? ((o = n.chooseSymbol), (i = n.zdf), (u = n.priceVal))
              : ((o = n.symbol),
                (i = null == (e = n.data) ? void 0 : e[32]),
                (u = null == (t = n.data) ? void 0 : t[3])),
              o && (c[o] = { zdf: i, zxj: u });
          }),
            Object.keys(c).length &&
              A.value.forEach(function (e) {
                var t,
                  n,
                  o = f.utils.trimScode(e.symbol);
                (null == (t = c[o]) ? void 0 : t.zdf) &&
                  l.set(h.value, e.symbol, y.formatZdf(c[o].zdf)),
                  (null == (n = c[o]) ? void 0 : n.zxj) &&
                    l.set(S.value, e.symbol, c[o].zxj);
              });
        }
      }
      function P() {
        var e, t;
        null ==
          (t =
            null == (e = null == O ? void 0 : O.observer)
              ? void 0
              : e.disconnect) || t.call(e);
      }
      l.watch(
        function () {
          return A.value;
        },
        function (e) {
          L();
        }
      ),
        l.watch(
          function () {
            return t.scodeList;
          },
          function (e, n) {
            if (t.isCurrent) {
              if (g.length)
                (_[k.value] = !1), l.set(b.value, k.value, ""), H(k.value);
              else
                for (var o in x.value)
                  x.value[o].forEach(function (t) {
                    t.add = e.includes(t.symbol);
                  });
              (((null == e ? void 0 : e.length) &&
                !(null == n ? void 0 : n.length)) ||
                (!(null == e ? void 0 : e.length) &&
                  (null == n ? void 0 : n.length))) &&
                (b.value = {});
            }
          },
          { immediate: !0 }
        ),
        l.onMounted(function () {}),
        l.onBeforeUnmount(function () {
          P(),
            z && clearTimeout(z),
            l.StockBridge.busOff(p.hqWsResultBusKey, N),
            (T = {}),
            (_ = {});
        });
      var Z = {
          hotStock: b,
          curType: k,
          stockList: A,
          stockCache: x,
          curHotStock: C,
          isOneStock: B,
          textInfo: I,
          curZdfObj: h,
          curZxjObj: S,
          getColor: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return e.includes("-");
          },
        },
        V = i({
          handleStock: function (e) {
            c("viewStock", e.symbol, w.value);
          },
          handleAdd: function (e, t) {
            c("addStock", e, w.value, "", "", t);
          },
          handleAll: function () {
            return a(
              this,
              null,
              e().mark(function n() {
                var o, r, c, i;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!(o = A.value || []).length) {
                          e.next = 16;
                          break;
                        }
                        if (
                          ((r = []),
                          (c = []),
                          o.forEach(function (e, t) {
                            var n = e.add,
                              o = e.symbol;
                            n || (r.push(o), c.push(t));
                          }),
                          l.StockBridge.report(
                            "yy.choose.recommend_all_stock_add",
                            {
                              fchannel_id_fm_i: "IT100p000m212",
                              stocklist: r.join(","),
                              foperation_purpose: "zixuan",
                              recommend_id: w.value,
                              positionlist: c.join(","),
                            }
                          ),
                          t.protocolStatus === p.isAgreePrivacy)
                        ) {
                          e.next = 5;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          void l.StockBridge.busEmit(
                            p.showPrivacyPolicyModalBusKey
                          )
                        );
                      case 5:
                        if (!r.length) {
                          e.next = 15;
                          break;
                        }
                        return (e.next = 8), p.addStockToGroup(r);
                      case 8:
                        if (((i = e.sent), !+i.code)) {
                          e.next = 12;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          void l.StockBridge.toast(
                            "添加失败，请稍后重试~",
                            "none"
                          )
                        );
                      case 12:
                        l.StockBridge.toast("已添加自选"),
                          l.StockBridge.busEmit("market-choose-list-refresh"),
                          (g = r),
                          (e.next = 16);
                        break;
                      case 15:
                        l.StockBridge.toast("已全部添加啦~", "none");
                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, n);
              })
            );
          },
          handleTab: function (e) {
            var n = e.type;
            H(n);
            var o = "t_".concat(n).concat(t.abtType);
            l.StockBridge.report("yy.choose.recommend_tablist_click", {
              recommend_id: o,
            }),
              l.StockBridge.report("yy.choose.recommend_item_brow", {
                recommend_id: o,
              }),
              l.StockBridge.setSession(m, n);
          },
        });
      return u(u({}, Z), V);
    })(t, { emit: n.emit });
  },
};
Array || l.resolveComponent("StockItemChart")();
var q = l._export_sfc(z, [
  [
    "render",
    function (e, t, n, o, r, c) {
      return l.e(
        { a: e.curType },
        e.curType
          ? l.e(
              { b: e.isOneStock },
              e.isOneStock
                ? l.e(
                    { c: e.textInfo[e.curType] && e.textInfo[e.curType].title },
                    e.textInfo[e.curType] && e.textInfo[e.curType].title
                      ? { d: l.t(e.textInfo[e.curType].title) }
                      : {},
                    {
                      e:
                        e.textInfo[e.curType] && e.textInfo[e.curType].subtitle,
                    },
                    e.textInfo[e.curType] && e.textInfo[e.curType].subtitle
                      ? { f: l.t(e.textInfo[e.curType].subtitle) }
                      : {}
                  )
                : l.e(
                    {
                      g: l.t(n.title),
                      h: l.f(n.list, function (t, n, o) {
                        return {
                          a: l.t(e.textInfo[t.type].tabName),
                          b: n,
                          c: t.type === e.curType ? 1 : "",
                          d: l.o(
                            function (n) {
                              return e.handleTab(t);
                            },
                            3507,
                            n
                          ),
                        };
                      }),
                      i:
                        e.textInfo[e.curType] && e.textInfo[e.curType].subtitle,
                    },
                    e.textInfo[e.curType] && e.textInfo[e.curType].subtitle
                      ? { j: l.t(e.textInfo[e.curType].subtitle) }
                      : {}
                  ),
              {
                k: l.f(n.list, function (t, n, o) {
                  return l.e(
                    { a: e.stockCache && e.stockCache[t.type] },
                    e.stockCache && e.stockCache[t.type]
                      ? {
                          b: l.f(e.stockCache[t.type], function (n, r, c) {
                            return l.e(
                              {
                                a: e.hotStock[t.type] && e.hotStock[t.type][r],
                              },
                              e.hotStock[t.type] && e.hotStock[t.type][r]
                                ? {
                                    b: "d990c766-0-" + o + "-" + c,
                                    c: l.p({
                                      "cell-style":
                                        e.hotStock[t.type][r].riseDropStyle,
                                      "choose-symbol":
                                        e.hotStock[t.type][r].chooseSymbol,
                                      "rise-drop-val":
                                        e.hotStock[t.type][r].riseDropVal,
                                      "tab-id": t.type,
                                    }),
                                  }
                                : {},
                              {
                                d: l.t(n.name),
                                e: l.f(n.subattr, function (t, o, r) {
                                  return l.e(
                                    {
                                      a:
                                        "zdf" === t.type &&
                                        e.curZdfObj[n.symbol],
                                    },
                                    "zdf" === t.type && e.curZdfObj[n.symbol]
                                      ? {
                                          b: l.t(e.curZdfObj[n.symbol]),
                                          c: e.getColor(e.curZdfObj[n.symbol])
                                            ? 1
                                            : "",
                                        }
                                      : "zdf" === t.type
                                      ? {
                                          e: l.t(t.value),
                                          f: e.getColor(t.value) ? 1 : "",
                                        }
                                      : "zxj" === t.type &&
                                        e.curZxjObj[n.symbol]
                                      ? { h: l.t(e.curZxjObj[n.symbol]) }
                                      : { i: l.t(t.value) },
                                    {
                                      d: "zdf" === t.type,
                                      g:
                                        "zxj" === t.type &&
                                        e.curZxjObj[n.symbol],
                                      j: l.t(t.text),
                                      k: o,
                                      l: 0 === o ? 1 : "",
                                    }
                                  );
                                }),
                                f: l.o(
                                  function (t) {
                                    return e.handleStock(n);
                                  },
                                  3508,
                                  r
                                ),
                                g: n.add
                                  ? "https://st.gtimg.com/design/d1c5b6897e2f5edf4b8c6b80831a1102.png"
                                  : "https://st.gtimg.com/design/bdaf719d2ba81346b0d9b84ff451a64b.png",
                                h: l.o(
                                  function (t) {
                                    return e.handleAdd(n, r);
                                  },
                                  3509,
                                  r
                                ),
                                i: r,
                              }
                            );
                          }),
                          c: t.type === e.curType,
                        }
                      : {},
                    { d: n }
                  );
                }),
                l: l.o(function () {
                  return e.handleAll && e.handleAll.apply(e, arguments);
                }, 3510),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-d990c766"],
]);
wx.createComponent(q);
