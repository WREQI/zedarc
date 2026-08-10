var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  a = function (e, o, n) {
    return o in e
      ? t(e, o, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[o] = n);
  },
  s = require("../../../../../../common/vendor.js"),
  i = require("../../store/useStocksStore.js"),
  u = require("../../../stock-mini-mins/api/StockMiniChartApiV2.js"),
  d = require("../../../stock-markets-base/utils/lct.js"),
  l = require("../../service/index.js"),
  p = require("../../../stock-markets-base/utils/market.js"),
  f = require("../../Index.js"),
  m = require("../../store/useSwitchModeStore.js");
function g(e, t, n) {
  var r,
    c = this,
    a = s.StockBridge.ENV === s.EnvTypeEnum.MP,
    i = s.ref(!1),
    d = s.ref(""),
    m = s.ref(""),
    g = u.useViewStore(),
    h = f.useCaptionStore(),
    y = s.computed(function () {
      return g.pageShow;
    }),
    k = s.computed(function () {
      return g.longPressIndexConf[e.groupId];
    }),
    S = s.computed(function () {
      return g.pressIndexConf[e.groupId];
    }),
    I = s.computed(function () {
      return 0 !== t.filterMap[e.groupId] ? "筛选" : "排序";
    }),
    b = s.computed(function () {
      return g.chooseTopToHeaderBottom;
    }),
    v = function (e) {
      var o = h.isSortStatus(e),
        n = 1 === t.filterMap[e];
      return !o && !n;
    },
    P = function (t, n) {
      return (
        (r = c),
        null,
        (u = o().mark(function r() {
          var c, u, h, y, k, S, I, v;
          return o().wrap(function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  if (
                    (a
                      ? (h = p.hackUSSymbol(
                          null ==
                            (u =
                              null == (c = n.currentTarget)
                                ? void 0
                                : c.dataset)
                            ? void 0
                            : u.key
                        )) &&
                        l
                          .queryBarCount(h)
                          .then(function (o) {
                            0 == +o.code &&
                              o.data &&
                              ((d.value = "".concat(o.data.stockcomment)),
                              (m.value = "".concat(o.data.stockzixuan))),
                              g.setLongPressIndexConf(e.groupId, t);
                          })
                          .catch(function (o) {
                            g.setLongPressIndexConf(e.groupId, t);
                          })
                      : g.setLongPressIndexConf(e.groupId, t),
                    !(t > 0))
                  ) {
                    o.next = 16;
                    break;
                  }
                  if (((y = 78), (k = 0), (S = 0), !a)) {
                    o.next = 11;
                    break;
                  }
                  return (k = (n.target && n.target.y) || 0), (o.next = 8), O();
                case 8:
                  (S = b.value), (o.next = 13);
                  break;
                case 11:
                  (I = (n.target && n.target.getBoundingClientRect()) || {}),
                    (v = I.top),
                    (k = +(void 0 === v ? 0 : v));
                case 13:
                  (i.value = k - S - y <= 0), (o.next = 17);
                  break;
                case 16:
                  i.value = !1;
                case 17:
                  s.StockBridge.report(f.CHOOSE_LONG_TAP.key);
                case 18:
                case "end":
                  return o.stop();
              }
          }, r);
        })),
        new Promise(function (e, o) {
          var t = function e(t) {
              try {
                c(u.next(t));
              } catch (e) {
                o(e);
              }
            },
            n = function (e) {
              try {
                c(u.throw(e));
              } catch (e) {
                o(e);
              }
            },
            c = function (o) {
              return o.done ? e(o.value) : Promise.resolve(o.value).then(t, n);
            };
          c((u = u.apply(r, null)).next());
        })
      );
      var r, u;
    },
    C = function (e, o) {
      var t = e.params,
        n = e.groupId,
        r = e.type,
        c = t || {},
        a = c.type,
        s = c.scode;
      if (s && a)
        return l
          .stickyStock(s, a, n, r)
          .then(function (e) {
            e && 0 == +e.code && ("function" == typeof o && o(), w());
          })
          .finally(function () {
            B();
          });
    },
    x = function (e) {
      var o = e || {},
        t = o.name,
        n = o.zdf,
        r = +(n && n.replace("+", "")),
        c = Math.abs(r);
      return c <= 2
        ? "「".concat(t, "」涨跌幅：").concat(n, "%")
        : c <= 5
        ? "「"
            .concat(t, "」")
            .concat(parseFloat(n) > 0 ? "大涨" : "大跌", "：")
            .concat(n, "%")
        : "「"
            .concat(t, "」")
            .concat(parseFloat(n) > 0 ? "暴涨" : "暴跌", "：")
            .concat(n, "%");
    },
    w = function () {
      l.queryUserStock()
        .then(function (o) {
          t.initOrRefresh({
            res: o,
            needSort: !1,
            isRefresh: !0,
            showPosition: e.showPosition,
          });
        })
        .catch(function (e) {});
    },
    B = function () {
      -1 !== k.value &&
        (g.setPressIndexConf(e.groupId, -1),
        g.setLongPressIndexConf(e.groupId, -1));
    };
  s.watch(
    function () {
      return y.value;
    },
    function (e) {
      e || B();
    }
  );
  var O = function () {
    return new Promise(function (e, o) {
      if (r !== g.mpHideTitle.value) {
        r = g.mpHideTitle.value;
        try {
          s.wx$1
            .createSelectorQuery()
            .in(n)
            .select(".slide-header")
            .boundingClientRect()
            .exec(function (o) {
              (null == o ? void 0 : o[0]) &&
                g.setChooseTopToHeaderBottom(o[0].bottom),
                e();
            });
        } catch (o) {
          e();
        }
      } else e();
    });
  };
  return {
    showReverse: i,
    longPressIndex: k,
    pressIndex: S,
    stockComment: d,
    stockZixuan: m,
    handleLongPressOpt: function (o, n, r) {
      switch (o) {
        case "switchMode":
          break;
        case "longPress":
          P(n.listIndex, r);
          break;
        case "del":
          !(function (e) {
            var o = e || {},
              t = o.type,
              n = o.scode;
            if (n && t) {
              B();
              var r = ["".concat(t, ":").concat(n)];
              s.StockBridge.busEmit("market-delete-stock", r);
            }
          })(n);
          break;
        case "cancleTop":
          !(function (o) {
            if (!v(e.groupId))
              return (
                s.StockBridge.toast(
                  "在".concat(I.value, "状态下不支持取消置顶"),
                  "none"
                ),
                void B()
              );
            var t = o || {},
              n = t.type,
              r = t.scode;
            if (r && n) {
              C({ params: o, groupId: e.groupId, type: "dss" }, function () {
                s.StockBridge.toast("已取消置顶", "none");
              });
              var c = p.getSymbol(n, r);
              s.StockBridge.report(f.CHOOSE_CANCEL_TOP.key, { stockid: c });
            }
          })(n);
          break;
        case "top":
          !(function (o) {
            if (!v(e.groupId))
              return (
                s.StockBridge.toast(
                  "在".concat(I.value, "状态下不支持置顶"),
                  "none"
                ),
                void B()
              );
            var t = o || {},
              n = t.type,
              r = t.scode;
            if (r && n) {
              C({ params: o, groupId: e.groupId, type: "sp" }, function () {
                s.StockBridge.toast("已置顶", "none");
              });
              var c = p.getSymbol(n, r);
              s.StockBridge.report(f.CHOOSE_TOP.key, { stockid: c });
            }
          })(n);
          break;
        case "bottom":
          !(function (o) {
            if (!v(e.groupId))
              return (
                s.StockBridge.toast(
                  "在".concat(I.value, "状态下不支持置底"),
                  "none"
                ),
                void B()
              );
            var t = o || {},
              n = t.type,
              r = t.scode;
            if (r && n) {
              C({ params: o, groupId: e.groupId, type: "st" }, function () {
                s.StockBridge.toast("已置底", "none");
              });
              var c = p.getSymbol(n, r);
              s.StockBridge.report(f.CHOOSE_BOTTOM.key, { stockid: c });
            }
          })(n);
          break;
        case "adjust":
          !(function (o) {
            var n = o || {},
              r = n.type,
              c = n.scode,
              i = setTimeout(function () {
                var o = t.curGroupIndex;
                if (a) {
                  var n =
                    "https://wzq.tenpay.com/mp/v2/#/choose/newbatch?group=0&tabIndex="
                      .concat(o, "&groupid=")
                      .concat(e.groupId, "&type=")
                      .concat(r, "&scode=")
                      .concat(c);
                  s.wx$1.navigateTo({
                    url: "/pages/additional/webview/index?url=".concat(
                      encodeURIComponent(n)
                    ),
                    complete: function () {
                      s.StockBridge.busEmit("common-toggleAdded");
                    },
                  });
                } else s.StockBridge.routeTo({ path: "/choose/newbatch", query: { group: "0", tabIndex: o, groupid: e.groupId, type: r, scode: c, srctype: "" } }), s.StockBridge.busEmit("common-toggleAdded");
                clearTimeout(i);
              }, 100);
            B(), s.StockBridge.report(f.CHOOSE_BATCH.key);
          })(n);
          break;
        case "batch":
          !(function (e) {
            var o = e || {},
              t = o.type,
              n = o.scode,
              r = setTimeout(function () {
                s.StockBridge.busEmit("market-batch-stock", [
                  "".concat(t, ":").concat(n),
                ]),
                  clearTimeout(r);
              }, 100);
            B(), s.StockBridge.report(f.CHOOSE_GROUP.key);
          })(n);
          break;
        case "clear":
          B();
          break;
        case "share":
          !(function (e) {
            var o = e || {},
              t = o.scode,
              n = o.type,
              r = o.chooseSymbol,
              c = o.priceVal,
              a = o.stock_type,
              i = o.unit,
              u = void 0 === i ? "" : i,
              d = "/quote/detail?market="
                .concat(n, "&scode=")
                .concat(t, "&stockType=")
                .concat(a, "&stat_data=OiW00p000h028");
            s.StockBridge.busEmit("share-stock", {
              title: x(e),
              path: d,
              symbol: p.trimScode(r),
              price: "".concat(c).concat(u),
            }),
              B(),
              s.StockBridge.report("yy.choose.long_tap_share_click");
          })(n);
      }
    },
    beforeLongPress: function (o) {
      g.setPressIndexConf(e.groupId, o), B();
    },
    noop: function () {},
  };
}
var h = ["退市", "待上市", "待发售", "发售中"],
  y = {
    components: {
      StockItemChart: function () {
        return "../../../../../asyncCom/@tencent/stock-mini-mins/component/StockItemChartV2.js";
      },
      RedbagActivity: function () {
        return "../../../../../asyncCom/@tencent/st-wave-redbag/components/redbag-activity/index.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      groupId: { type: String, default: "1", required: !0 },
      sectionIndex: { type: Number, default: 0, required: !0 },
      showDelayComponent: { type: Boolean, default: !1 },
      redpockets: {
        type: Array,
        default: function () {
          return [];
        },
      },
      showPosition: { type: Boolean, default: !1 },
      skin: { type: String, default: "white" },
    },
    emits: ["sort"],
    setup: function (o, t) {
      var l,
        y = t.emit,
        k =
          (null == (l = s.getCurrentInstance()) ? void 0 : l.proxy) ||
          s.getCurrentInstance(),
        S = i.useStocksStore(),
        I = u.useViewStore(),
        b = s.computed(function () {
          return S.renderListSections[o.groupId][o.sectionIndex] || [];
        }),
        v = s.computed(function () {
          return I.stockItemHeight;
        }),
        P = s.computed(function () {
          var e = S.groups,
            t = S.rateConfig,
            n = (
              (null == e
                ? void 0
                : e.find(function (e) {
                    return e.id === o.groupId;
                  })) || {}
            ).hasMultMarket,
            r = t && !!Object.keys(t).length;
          return n && r;
        }),
        C = s.computed(function () {
          return void 0 !== S.isMiniChartHide && !S.isMiniChartHide;
        }),
        x = s.computed(function () {
          return C.value && I.showChart;
        }),
        w = s.computed(function () {
          return S.hkVIP;
        }),
        B = f.useJumpPagesHook().gotoStockDetail,
        O = g(o, S, k),
        D = O.showReverse,
        j = O.longPressIndex,
        M = O.stockComment,
        E = O.stockZixuan,
        _ = O.handleLongPressOpt,
        T = O.beforeLongPress,
        L = O.noop,
        V = (function (e, o) {
          var t = f.useCaptionStore(),
            n = m.useSwitchModeStore(),
            r = s.computed(function () {
              return n.riseIndexMap[e.groupId] || 0;
            }),
            c = s.computed(function () {
              return n.animateMovingMap[e.groupId] || !1;
            }),
            a = null,
            i = s.computed(function () {
              return t.currentZDFConfig[e.groupId];
            }),
            u = function () {
              c.value &&
                (n.setAnimateMoving(e.groupId, !1),
                2 === r.value && n.setRiseIndex(e.groupId, 0));
            };
          return (
            s.onBeforeUnmount(function () {
              a && clearTimeout(a);
            }),
            {
              riseIndex: r,
              currentZDFConfig: i,
              switchMode: function () {
                if (!c.value) {
                  n.setRiseIndex(e.groupId, r.value + 1),
                    t.switchMode(e.groupId);
                  var i = t.currentZDFConfig[e.groupId] || { order: 0 };
                  i.orderBy;
                  0 !== i.order && o("sort", t.currentZDFConfig[e.groupId]),
                    (a = setTimeout(function () {
                      u(), clearTimeout(a);
                    }, 300)),
                    s.StockBridge.report(
                      "choose.switch_".concat(
                        t.currentZDFConfig[e.groupId].orderBy
                      )
                    );
                }
              },
              riseAnimationEnd: u,
            }
          );
        })(o, y),
        H = V.riseIndex,
        z = V.currentZDFConfig,
        R = V.switchMode,
        A = V.riseAnimationEnd,
        q = s.computed(function () {
          return z.value.orderBy;
        }),
        N = s.computed(function () {
          return z.value.order;
        });
      return {
        store: S,
        isMpLite: !1,
        isMPPro: !0,
        sectionList: b,
        showReverse: D,
        longPressIndex: j,
        stockComment: M,
        stockZixuan: E,
        itemHeight: v,
        showChart: x,
        hkVIP: w,
        jumpStockDetail: function (o, t) {
          var i;
          if (
            "shareButton" !==
            (null == (i = null == t ? void 0 : t.target) ? void 0 : i.id)
          ) {
            var u = o || {},
              l = u.usable,
              m = u.scode,
              g = u.type,
              h = (u.stock_type, u.trackedLabel),
              y = u.chooseSymbol;
            if (
              (s.StockBridge.report(
                f.CHOOSE_CLICK_STOCK.key,
                (function (o, t) {
                  for (var s in t || (t = {})) r.call(t, s) && a(o, s, t[s]);
                  if (n) {
                    var i,
                      u = e(n(t));
                    try {
                      for (u.s(); !(i = u.n()).done; ) {
                        s = i.value;
                        c.call(t, s) && a(o, s, t[s]);
                      }
                    } catch (e) {
                      u.e(e);
                    } finally {
                      u.f();
                    }
                  }
                  return o;
                })({ stockid: p.getMarketPYName(g) + m }, h && { label: h })
              ),
              "0" === l && "jj" === g)
            )
              return void d.openLctFundPage(m, "FMlctW279010002");
            B({ chooseSymbol: y, type: g });
          }
        },
        handleLongPressOpt: _,
        beforeLongPress: T,
        noop: L,
        riseAnimationEnd: A,
        riseIndex: H,
        orderBy: q,
        order: N,
        switchMode: R,
        handleAnimationEnd: function (e) {
          e.animateClass = "";
        },
        hasMultMarket: P,
        showRedpocket: function (e) {
          var t = (e || {}).chooseSymbol,
            n = o.redpockets.find(function (e) {
              return e.stock_code === t;
            });
          return S.redBagGroupId === o.groupId && n;
        },
        HIDDEN_RISE_DROP_STATES: h,
      };
    },
  };
Array ||
  (
    s.resolveComponent("redbag-activity") + s.resolveComponent("StockItemChart")
  )();
var k = s._export_sfc(y, [
  [
    "render",
    function (e, o, t, n, r, c) {
      return {
        a: s.f(n.sectionList, function (e, o, r) {
          return s.e(
            { a: e.animateClass },
            e.animateClass
              ? {
                  b: s.n(e.animateClass),
                  c: s.o(
                    function (o) {
                      return n.handleAnimationEnd(e);
                    },
                    4230,
                    e.chooseSymbol + o
                  ),
                }
              : {},
            { d: s.t(e.name || "--"), e: n.showRedpocket(e) },
            n.showRedpocket(e)
              ? {
                  f: "09713cec-0-" + r,
                  g: s.p({ stock: e, redpockets: t.redpockets }),
                }
              : {},
            {
              h: s.n(e.name && e.name.length > 14 ? "small" : ""),
              i: e.marketIcon,
            },
            e.marketIcon ? { j: s.n("micon ".concat(e.marketIcon)) } : {},
            {
              k: s.t(e.trimedCode),
              l:
                !n.hkVIP &&
                1 === e.delay &&
                (e.HK_INDEX > 20 || void 0 === e.HK_INDEX),
            },
            (!n.hkVIP && 1 === e.delay && (e.HK_INDEX > 20 || e.HK_INDEX), {}),
            { m: e.trackedLabel },
            e.trackedLabel ? { n: s.t(e.trackedLabel) } : {},
            { o: "1" === e.usable || "jj" === e.type },
            "1" === e.usable || "jj" === e.type
              ? s.e(
                  {
                    p:
                      "jj" !== e.type &&
                      n.showChart &&
                      !n.HIDDEN_RISE_DROP_STATES.includes(e.riseDropVal),
                  },
                  "jj" !== e.type &&
                    n.showChart &&
                    !n.HIDDEN_RISE_DROP_STATES.includes(e.riseDropVal)
                    ? {
                        q: "09713cec-1-" + r,
                        r: s.p({
                          "mini-size": !n.isMPPro,
                          "fill-chart": n.isMPPro,
                          "choose-symbol": e.chooseSymbol,
                          "tab-id": t.groupId,
                          "rise-drop-val": e.riseDropVal,
                          "cell-style": e.riseDropChartStyle || e.riseDropStyle,
                          "section-index": t.sectionIndex,
                          "item-index": o,
                          skin: t.skin,
                        }),
                      }
                    : {},
                  { s: s.t(e.priceVal || "--"), t: n.isMPPro },
                  n.isMPPro
                    ? s.e(
                        { v: "rise_per" === n.orderBy },
                        "rise_per" === n.orderBy
                          ? { w: s.t(e.riseDropVal) }
                          : "rise" === n.orderBy
                          ? { y: s.t(e.zdeDropVal) }
                          : "jnzdf" === n.orderBy
                          ? { A: s.t(e.jnzdfVal) }
                          : "zsz" === n.orderBy
                          ? s.e(
                              { C: n.hasMultMarket && 0 !== n.order },
                              n.hasMultMarket && 0 !== n.order
                                ? s.e(
                                    {
                                      D: s.t(e.zszUSDDropVal),
                                      E: e.showDollar,
                                    },
                                    (e.showDollar, {})
                                  )
                                : { F: s.t(e.zszVal) }
                            )
                          : {},
                        {
                          x: "rise" === n.orderBy,
                          z: "jnzdf" === n.orderBy,
                          B: "zsz" === n.orderBy,
                          G: s.n(
                            "jnzdf" === n.orderBy
                              ? e.jnzdfStyle
                              : e.riseDropStyle
                          ),
                        }
                      )
                    : {
                        H: s.t(e.riseDropVal || "--"),
                        I: s.n(e.riseDropStyle),
                        J: s.n(
                          e.riseDropVal && e.riseDropVal.length > 7
                            ? "small"
                            : ""
                        ),
                        K: s.t(e.jnzdfVal || "--"),
                        L: s.n(e.jnzdfStyle),
                        M: s.n(
                          e.jnzdfVal && e.jnzdfVal.length > 7 ? "small" : ""
                        ),
                        N: s.t(e.riseDropVal || "--"),
                        O: s.n(e.riseDropStyle),
                        P: s.n(
                          e.riseDropVal && e.riseDropVal.length > 7
                            ? "small"
                            : ""
                        ),
                        Q: s.n("rise-index-".concat(n.riseIndex)),
                        R: s.o(
                          function () {
                            return (
                              n.riseAnimationEnd &&
                              n.riseAnimationEnd.apply(n, arguments)
                            );
                          },
                          4231,
                          e.chooseSymbol + o
                        ),
                      },
                  {
                    S: s.o(
                      function () {
                        return n.switchMode && n.switchMode.apply(n, arguments);
                      },
                      4232,
                      e.chooseSymbol + o
                    ),
                  }
                )
              : {},
            {
              T: e.star ? 1 : "",
              U: e.lastStar ? 1 : "",
              V: n.longPressIndex === e.listIndex,
            },
            n.longPressIndex === e.listIndex
              ? s.e(
                  {
                    W: s.o(
                      function () {
                        return n.noop && n.noop.apply(n, arguments);
                      },
                      4233,
                      e.chooseSymbol + o
                    ),
                    X: s.o(
                      function (o) {
                        return n.handleLongPressOpt("del", e);
                      },
                      4234,
                      e.chooseSymbol + o
                    ),
                    Y: 1 === e.star,
                  },
                  1 === e.star
                    ? {
                        Z: s.o(
                          function () {
                            return n.noop && n.noop.apply(n, arguments);
                          },
                          4235,
                          e.chooseSymbol + o
                        ),
                        aa: s.o(
                          function (o) {
                            return n.handleLongPressOpt("cancleTop", e);
                          },
                          4236,
                          e.chooseSymbol + o
                        ),
                      }
                    : {
                        ab: s.o(
                          function () {
                            return n.noop && n.noop.apply(n, arguments);
                          },
                          4237,
                          e.chooseSymbol + o
                        ),
                        ac: s.o(
                          function (o) {
                            return n.handleLongPressOpt("top", e);
                          },
                          4238,
                          e.chooseSymbol + o
                        ),
                      },
                  {
                    ad: s.o(
                      function () {
                        return n.noop && n.noop.apply(n, arguments);
                      },
                      4239,
                      e.chooseSymbol + o
                    ),
                    ae: s.o(
                      function (o) {
                        return n.handleLongPressOpt("bottom", e);
                      },
                      4240,
                      e.chooseSymbol + o
                    ),
                    af: s.o(
                      function () {
                        return n.noop && n.noop.apply(n, arguments);
                      },
                      4241,
                      e.chooseSymbol + o
                    ),
                    ag: s.o(
                      function (o) {
                        return n.handleLongPressOpt("adjust", e);
                      },
                      4242,
                      e.chooseSymbol + o
                    ),
                    ah: s.o(
                      function () {
                        return n.noop && n.noop.apply(n, arguments);
                      },
                      4243,
                      e.chooseSymbol + o
                    ),
                    ai: s.o(
                      function (o) {
                        return n.handleLongPressOpt("batch", e);
                      },
                      4244,
                      e.chooseSymbol + o
                    ),
                    aj: e.name,
                    ak: e.chooseSymbol,
                    al: e.stock_type,
                    am: e.priceVal,
                    an: e.zdf,
                    ao: e.zde,
                    ap: n.stockComment,
                    aq: n.stockZixuan,
                    ar: s.n({ reverse: n.showReverse || 0 === e.listIndex }),
                  }
                )
              : {},
            {
              as: e.chooseSymbol,
              at: e.star ? "" : 1,
              av: s.o(
                function (o) {
                  return n.jumpStockDetail(e, o);
                },
                4245,
                e.chooseSymbol + o
              ),
              aw: s.o(
                function (o) {
                  return n.handleLongPressOpt("longPress", e, o);
                },
                4246,
                e.chooseSymbol + o
              ),
              ax: e.chooseSymbol + o,
              ay: e.listIndex === n.longPressIndex ? 1 : 0,
            }
          );
        }),
        b: s.n({ "mp-pro": n.isMPPro }),
      };
    },
  ],
  ["__scopeId", "data-v-09713cec"],
]);
wx.createComponent(k);
