var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var a = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  s = function (t, e, o) {
    return e in t
      ? a(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[e] = o);
  },
  i = function (t, e, a) {
    return new Promise(function (o, n) {
      var r = function (t) {
          try {
            i(a.next(t));
          } catch (t) {
            n(t);
          }
        },
        s = function (t) {
          try {
            i(a.throw(t));
          } catch (t) {
            n(t);
          }
        },
        i = function (t) {
          return t.done ? o(t.value) : Promise.resolve(t.value).then(r, s);
        };
      i((a = a.apply(t, e)).next());
    });
  },
  d = require("../../../../common/vendor.js"),
  u = require("../stock-base/service/api/request.js"),
  l = require("../stock-hq-data/index.js"),
  c = require("../stock-base/service/common/utils.js"),
  p = require("../stock-markets-base/service/config/apiConfig.js"),
  f = d.defineComponent({
    components: {
      AssetsStockList: function () {
        return "./components/AssetsStockList.js";
      },
      NoData: function () {
        return "../stock-markets-base/components/NoData.js";
      },
      f2: function () {
        return "../stock-union-f2/f2MP.js";
      },
      SelectPlate: function () {
        return "../stock-markets-base/components/SelectPlate.js";
      },
      WzqInfoModal: function () {
        return "./node-modules/@tencent/st-wzqinfo-modal/src/WzqInfoModal.js";
      },
      EtfTipModal: function () {
        return "../wzq-detail-brief/etf/TipsInfo.js";
      },
      Status: function () {
        return "../../../../node-modules/@tencent/st-status/mp/index.js";
      },
    },
    props: {
      scode: { type: String, default: "" },
      market: { type: String, default: "" },
      type: { type: String, default: "" },
      isTrading: { type: Boolean, default: !1 },
      skin: { type: String, default: "white" },
      emptyText: { type: String, default: "暂无持仓数据" },
    },
    emits: ["loaded"],
    setup: function (a, f) {
      var h = this,
        m = f.emit,
        v = d.getCurrentInstance().proxy || d.getCurrentInstance(),
        g = ["black", "dark"].includes(a.skin),
        y = new l.DetailApi(function (t) {
          return u.request({
            url: t,
            data: {},
            method: d.RequestTypeEnum.GET,
            options: { appendParamsApp: !0 },
          });
        }),
        k = ["mpwzq", "wzqlight"].includes("mpweapp"),
        b = d.computed(function () {
          return ["mpwzq"].includes("mpweapp");
        }),
        T = d.computed(function () {
          return ["mpweapp"].includes("mpweapp");
        }),
        w = l.utils.getSymbol(a.market, a.scode),
        S = "".concat(k ? "LITE" : "PRO", "_DETAIL_ASSETS_DATE_").concat(w),
        _ = "ETF-ASSET-TAB-DATA-KEY",
        x = [],
        P = !1,
        q = null,
        E = d.StockBridge.getSession(_) || "",
        A = "error",
        C = d.ref({ padding: 0, appendPadding: 0 }),
        M = d.ref(null),
        F = d.ref(null),
        j = d.ref(!0),
        B = d.ref(!1),
        D = d.ref(!1),
        I = d.ref(E),
        z = d.ref(!1),
        L = d.reactive({
          selected: d.StockBridge.getSession(S) || 0,
          show: !1,
          flip: !1,
          height: 0,
          top: 0,
          left: 0,
        }),
        O = d.ref(""),
        W = d.computed(function () {
          var t, e;
          return null == (e = null == (t = F.value) ? void 0 : t.selector)
            ? void 0
            : e.map(function (t, e) {
                return { id: e, name: t, type: t };
              });
        }),
        R = function () {
          clearInterval(q);
        },
        U = function (t) {
          return +t > 0 ? "red" : +t < 0 ? "green" : "ping";
        },
        H = function (t) {
          if (t) {
            var e = (Math.round(100 * t) / 100).toFixed(2);
            return "".concat(t > 0 ? "+".concat(e) : e, "%");
          }
          return "--";
        },
        Q = function (t) {
          var e =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return t
            .map(function (t) {
              if (!t.jump_code) return t;
              var a = l.utils.splitSymbol(t.jump_code).market;
              return (
                (t.market = a),
                (t.rateClass = U(t.rate)),
                (t.rate = H(t.rate)),
                (t.isQuarter = e),
                l.utils.isHKMarket(a) ||
                  (x.push(t.jump_code), (P = !l.utils.isHSMarket(a))),
                t
              );
            })
            .filter(function (t) {
              return !!t;
            });
        },
        N = function (t) {
          return Array.isArray(t) && t.length;
        },
        $ = function () {
          clearInterval(q),
            (q = setInterval(function () {
              return i(
                h,
                null,
                t().mark(function o() {
                  var n, r, s, i, d, u, l, c, p;
                  return t().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            !(
                              (a.isTrading || P) &&
                              Array.isArray(x) &&
                              x.length > 0
                            )
                          ) {
                            t.next = 5;
                            break;
                          }
                          return (t.next = 3), y.getQTs(x, { encode: "utf8" });
                        case 3:
                          for (
                            r = t.sent,
                              s = 0,
                              i = [
                                "stock",
                                "fund",
                                "bond",
                                "product",
                                "commodity",
                              ];
                            s < i.length;
                            s++
                          )
                            if (
                              ((d = i[s]),
                              null == (n = null == F ? void 0 : F.value)
                                ? void 0
                                : n[d])
                            ) {
                              u = e(F.value[d]);
                              try {
                                for (u.s(); !(l = u.n()).done; )
                                  (c = l.value),
                                    (p = r[c.jump_code]) &&
                                      ((c.rateClass = U(p[5])),
                                      (c.rate = H(p[5])));
                              } catch (t) {
                                u.e(t);
                              } finally {
                                u.f();
                              }
                            }
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  }, o);
                })
              );
            }, 5e3));
        },
        G = function (t) {
          return getComputedStyle(document.body || "div").getPropertyValue(t);
        },
        K = function () {
          var a =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return i(
            h,
            null,
            t().mark(function l() {
              var f, h, v, g, y, k, b, T, S, _, P, q, E, C, z, W;
              return t().wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          (x = []),
                          (l.prev = 1),
                          (l.next = 4),
                          (function () {
                            for (
                              var e = arguments.length, a = new Array(e), o = 0;
                              o < e;
                              o++
                            )
                              a[o] = arguments[o];
                            return i(exports, [].concat(a), function () {
                              var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {};
                              return t().mark(function a() {
                                var o, n;
                                return t().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (o = c.getApiFullUrl(
                                            p.API_PATH_FUND_ASSETS,
                                            c.API_HOST_ENUM.PROXY_QQ,
                                            d.StockBridge.ENV ===
                                              d.EnvTypeEnum.MP
                                          )),
                                          (t.next = 3),
                                          u.request({
                                            url: o,
                                            method: d.RequestTypeEnum.GET,
                                            data: e,
                                            options: { appendParamsApp: !0 },
                                          })
                                        );
                                      case 3:
                                        return (
                                          (n = t.sent),
                                          t.abrupt(
                                            "return",
                                            n && n.data ? n.data : n
                                          )
                                        );
                                      case 5:
                                      case "end":
                                        return t.stop();
                                    }
                                }, a);
                              })();
                            });
                          })({ code: w, index: L.selected, pr: 1 }).catch(
                            function (t) {
                              M.value = A;
                            }
                          )
                        );
                      case 4:
                        (h = l.sent),
                          (g = (v = h || {}).pr_stock),
                          (y = v.pr_fund),
                          (k = v.pr_bond),
                          (b = v.bond),
                          (T = v.fund),
                          (S = {
                            shouldShowRealTime: function () {
                              return (g || y || k) && !I.value;
                            },
                            shouldShowQuarter: function () {
                              return !(g || y || k) && "quarter" !== I.value;
                            },
                          }).shouldShowRealTime()
                            ? (I.value = "realTime")
                            : S.shouldShowQuarter() && (I.value = "quarter"),
                          (_ = "quarter" === I.value),
                          (P = N(_ ? b : k)),
                          (q = N(
                            _
                              ? null == h
                                ? void 0
                                : h.stock
                              : null == h
                              ? void 0
                              : h.pr_stock
                          )),
                          (E = N(_ ? T : y)),
                          (C = !!_ && N(null == h ? void 0 : h.product)),
                          (z = !!_ && N(null == h ? void 0 : h.commodity)),
                          _ &&
                          (null == h ? void 0 : h.asset) &&
                          h.asset.length > 0
                            ? (setTimeout(function () {
                                D.value = !0;
                              }, 100),
                              a &&
                                d.nextTick$1(function () {
                                  O.value = Math.random();
                                }))
                            : (D.value = !1),
                          ((W = _
                            ? (function (t, a) {
                                for (var i in a || (a = {}))
                                  n.call(a, i) && s(t, i, a[i]);
                                if (o) {
                                  var d,
                                    u = e(o(a));
                                  try {
                                    for (u.s(); !(d = u.n()).done; ) {
                                      i = d.value;
                                      r.call(a, i) && s(t, i, a[i]);
                                    }
                                  } catch (t) {
                                    u.e(t);
                                  } finally {
                                    u.f();
                                  }
                                }
                                return t;
                              })({}, h || {})
                            : {
                                pr_date: null == h ? void 0 : h.pr_date,
                              }).showUpdateDate = _
                            ? null == (f = W.selector)
                              ? void 0
                              : f.length
                            : W.pr_date),
                          q &&
                            ((W.stock = Q(_ ? h.stock : h.pr_stock, _)),
                            (W.total_stock = _
                              ? h.total_stock
                              : h.pr_total_stock),
                            (q = N(null == W ? void 0 : W.stock))),
                          P &&
                            ((W.bond = Q(_ ? h.bond : h.pr_bond, _)),
                            (W.total_bond = _ ? h.total_bond : h.pr_total_bond),
                            (P = N(null == W ? void 0 : W.bond))),
                          E &&
                            ((W.fund = Q(_ ? h.fund : h.pr_fund, _)),
                            (W.total_fund = _ ? h.total_fund : h.pr_total_fund),
                            (E = N(null == W ? void 0 : W.fund))),
                          z &&
                            ((W.commodity = Q(h.commodity)),
                            (z = N(null == W ? void 0 : W.commodity))),
                          C &&
                            ((W.product = Q(h.product)),
                            (C = N(null == W ? void 0 : W.product))),
                          (j.value = P || q || E || z || C),
                          (F.value = W),
                          a && m("loaded"),
                          B.value ||
                            ((B.value = !0),
                            m("loaded"),
                            j.value ||
                              d.StockBridge.report("stockinfo.asssets.nodata", {
                                id: w,
                              }),
                            d.StockBridge.report(
                              "stockinfo.asssets.".concat(
                                _ ? "quarter" : "realTime",
                                ".brow"
                              ),
                              { id: w }
                            )),
                          $(),
                          (l.next = 23);
                        break;
                      case 20:
                        (l.prev = 20),
                          (l.t0 = l.catch(1)),
                          (B.value = !0),
                          m("loaded");
                      case 23:
                      case "end":
                        return l.stop();
                    }
                },
                l,
                null,
                [[1, 20]]
              );
            })
          );
        };
      return (
        d.onMounted(function () {
          K(), d.StockBridge.report("stockinfo.asssets.brow", { id: w });
        }),
        d.onBeforeUnmount(function () {
          (F.value = null), (x = null), R();
        }),
        {
          isDark: g,
          pieConfig: C,
          error: M,
          data: F,
          hasData: j,
          firstLoaded: B,
          showAssetPieChart: D,
          isShowTipModal: z,
          popup: L,
          pieHash: O,
          isLite: k,
          isWeapp: T,
          isMini: b,
          dataSelector: W,
          currentTab: I,
          drawPieChart: function (t) {
            var e,
              a,
              o,
              n = t.chart;
            null == (a = null == (e = F.value) ? void 0 : e.asset) ||
              a.map(function (t) {
                t.ratio = +t.ratio;
              }),
              n.source((null == (o = F.value) ? void 0 : o.asset) || []),
              n.axis(!1),
              n.tooltip(!1),
              n.legend(!1),
              n.coord("polar", { transposed: !0, innerRadius: 0.8, radius: 1 });
            var r = (function () {
              var t,
                e = null == (t = F.value) ? void 0 : t.total_money;
              return e || 0 === e
                ? e > 1e8
                  ? "".concat((e / 1e8).toFixed(2), "亿")
                  : e > 1e4
                  ? "".concat((e / 1e4).toFixed(2), "万")
                  : e
                : "--";
            })();
            n
              .guide()
              .text({
                position: ["50%", "45%"],
                content: "".concat(r),
                style: {
                  textBaseline: "middle",
                  textAlign: "center",
                  fill:
                    k || b.value || T.value
                      ? g
                        ? "#f0f1f5"
                        : "#262e40"
                      : G("--color-heavygray"),
                  fontWeight: "500",
                  fontFamily: "stockFont",
                  fontSize: 16,
                },
              }),
              n
                .guide()
                .text({
                  position: ["50%", "60%"],
                  content: "总资产",
                  style: {
                    textBaseline: "middle",
                    textAlign: "center",
                    fill:
                      k || b.value || T.value
                        ? g
                          ? "#a7b0c4"
                          : "#475166"
                        : G("--color-heavygray"),
                    fontFamily: "stockFont",
                    fontSize: 12,
                  },
                });
            var s = k
              ? ["#E63535", "#FF891E", "#F7B500", "#98A0B3", "#000000"]
              : ["#3077EC", "#6236FF", "#F7B500", "#98A0B3", "#000000"];
            n
              .interval()
              .position("1*ratio")
              .color("name", s)
              .adjust("stack")
              .size(8),
              n.render();
          },
          showPopup: function () {
            "quarter" === I.value
              ? ((L.show = !0),
                d.nextTick$1(function () {
                  v.$refs.selectPlate && v.$refs.selectPlate.onPopupMore();
                }))
              : b.value || T.value
              ? (z.value = !0)
              : m("showModal", {
                  title: "持仓占比",
                  content: [
                    {
                      title: "实时持仓",
                      content:
                        "根据交易所每日公布的申赎清单估算，结合ETF成分股和对应股票价格，推算出最新的ETF成分股市值占比数据(外币计价股票需要进行汇率转换)。申赎清单的数据不代表ETF真实持仓情况，仅供参考。部分跨境ETF因为无海外市场的股票行情数据，实时持仓股票不展示海外成分股，重仓持股占比数据实时持仓会低于季度持仓。实时持仓的重仓持股占比总计是指前二十大重仓股的净值占比求和。",
                    },
                    {
                      title: "季度持仓",
                      content:
                        "ETF定期报告披露，显示股票公允价值占基金净值比例，一般为季度更新。季度持仓的重仓持股占比总计是指前十大重仓股的净值占比求和。",
                    },
                  ],
                });
          },
          changeTab: function (t) {
            (L.selected = t),
              (L.show = !1),
              K(!0),
              d.StockBridge.setSession(S, t),
              d.StockBridge.report(
                "hq.stock_detail.changnei_selected_report_date"
              );
          },
          changeDataType: function (t) {
            (I.value = t),
              "realTime" === t && (L.show = !1),
              K(!0),
              d.StockBridge.setSession(_, t),
              d.StockBridge.report(
                "hq.stock_detail.assets.date_".concat(t, "_click")
              );
          },
          hideEtfTipModal: function () {
            z.value = !1;
          },
          retryTab: function () {
            (M.value = "loading"), K(!0);
          },
          stopUpdate: R,
          refreshQT: $,
          positionModalConfig: {
            title: "持仓占比",
            content: [
              { type: "title", text: "实时持仓" },
              {
                type: "text",
                text: "根据交易所每日公布的申赎清单估算，结合ETF成分股和对应股票价格，推算出最新的ETF成分股市值占比数据(外币计价股票需要进行汇率转换)。申赎清单的数据不代表ETF真实持仓情况，仅供参考。",
              },
              {
                type: "text",
                text: "部分跨境ETF因为无海外市场的股票行情数据，实时持仓股票不展示海外成分股，重仓持股占比数据实时持仓会低于季度持仓。",
              },
              {
                type: "text",
                text: "实时持仓的重仓持股占比总计是指前二十大重仓股的净值占比求和。",
              },
              { type: "title", text: "季度持仓" },
              {
                type: "text",
                text: "ETF定期报告披露，显示股票公允价值占基金净值比例，一般为季度更新。",
              },
              {
                type: "text",
                text: "季度持仓的重仓持股占比总计是指前十大重仓股的净值占比求和。",
              },
            ],
            cancelBtn: "我知道了",
          },
          onPosiitonModalClose: function () {
            z.value = !1;
          },
          symbol: w,
        }
      );
    },
  });
Array ||
  (
    d.resolveComponent("SelectPlate") +
    d.resolveComponent("f2") +
    d.resolveComponent("assets-stock-list") +
    d.resolveComponent("status") +
    d.resolveComponent("NoData") +
    d.resolveComponent("WzqInfoModal") +
    d.resolveComponent("etf-tip-modal")
  )();
var h = d._export_sfc(f, [
  [
    "render",
    function (t, e, a, o, n, r) {
      return d.e(
        {
          a:
            t.data &&
            t.data.selector &&
            t.data.selector.length > 0 &&
            !t.data.pr_date,
        },
        t.data &&
          t.data.selector &&
          t.data.selector.length > 0 &&
          !t.data.pr_date
          ? d.e(
              {
                b: d.t(t.data.selector[t.popup.selected]),
                c: d.o(function (e) {
                  return t.showPopup();
                }, 1770),
                d: d.o(function (e) {
                  return t.showPopup();
                }, 1771),
                e: t.popup.show && t.dataSelector,
              },
              t.popup.show && t.dataSelector
                ? {
                    f: d.sr("selectPlate", "a924b7dc-0"),
                    g: d.o(t.changeTab, 1772),
                    h: d.p({
                      data: t.dataSelector,
                      "target-ref": "assetsSelector",
                      "cur-tab-index": t.popup.selected,
                    }),
                  }
                : {}
            )
          : {},
        { i: t.data && t.data.pr_date },
        t.data && t.data.pr_date
          ? d.e(
              {
                j: "realTime" === t.currentTab ? 1 : "",
                k: d.o(function (e) {
                  return t.changeDataType("realTime");
                }, 1773),
                l: "quarter" === t.currentTab ? 1 : "",
                m: d.o(function (e) {
                  return t.changeDataType("quarter");
                }, 1774),
                n: t.data.showUpdateDate,
              },
              t.data.showUpdateDate
                ? d.e(
                    {
                      o: d.t(
                        "quarter" === t.currentTab
                          ? t.data.selector && t.data.selector[t.popup.selected]
                          : t.data.pr_date
                      ),
                      p: d.o(function (e) {
                        return t.showPopup();
                      }, 1775),
                      q: d.n(
                        "quarter" === t.currentTab
                          ? "icon-date-triangle"
                          : "icon-tips"
                      ),
                      r: d.o(function (e) {
                        return t.showPopup();
                      }, 1776),
                      s: t.popup.show && t.dataSelector,
                    },
                    t.popup.show && t.dataSelector
                      ? {
                          t: d.sr("selectPlate", "a924b7dc-1"),
                          v: d.o(t.changeTab, 1777),
                          w: d.p({
                            skin: t.skin,
                            data: t.dataSelector,
                            "target-ref": "assetsSelector",
                            "cur-tab-index": t.popup.selected,
                          }),
                        }
                      : {},
                    { x: "quarter" === t.currentTab ? 1 : "" }
                  )
                : {}
            )
          : {},
        {
          y:
            "quarter" === t.currentTab &&
            t.data &&
            t.data.asset &&
            t.data.asset.length > 0,
        },
        "quarter" === t.currentTab &&
          t.data &&
          t.data.asset &&
          t.data.asset.length > 0
          ? d.e(
              { z: t.showAssetPieChart },
              t.showAssetPieChart
                ? {
                    A: d.sr("assetPieChart", "a924b7dc-2"),
                    B: d.o(t.drawPieChart, 1778),
                    C: d.p({
                      "chart-id": "assetPieChart",
                      "c-class": "assetPieChartClass",
                      "c-style": t.isWeapp
                        ? "width: 2.24rem; height: 2.24rem"
                        : "width: 224rpx; height: 224rpx",
                      "refresh-hash": t.pieHash,
                      config: t.pieConfig,
                    }),
                  }
                : {},
              {
                D: d.f(t.data.asset, function (t, e, a) {
                  return {
                    a: d.t(t.name),
                    b: d.t((+t.ratio).toFixed(2)),
                    c: e,
                  };
                }),
                E: !t.hasData && t.firstLoaded ? 1 : "",
              }
            )
          : {},
        { F: t.data && t.data.stock && t.data.stock.length },
        t.data && t.data.stock && t.data.stock.length
          ? d.e({ G: "quarter" === t.currentTab }, (t.currentTab, {}), {
              H: d.p({
                type: "stock",
                stocks: t.data.stock,
                total: t.data.total_stock,
              }),
            })
          : {},
        { I: t.data && t.data.bond && t.data.bond.length },
        t.data && t.data.bond && t.data.bond.length
          ? {
              J: d.p({
                type: "bond",
                stocks: t.data.bond,
                total: t.data.total_bond,
              }),
            }
          : {},
        { K: t.data && t.data.fund && t.data.fund.length },
        t.data && t.data.fund && t.data.fund.length
          ? {
              L: d.p({
                type: "fund",
                stocks: t.data.fund,
                total: t.data.total_fund,
              }),
            }
          : {},
        { M: t.data && t.data.commodity && t.data.commodity.length },
        t.data && t.data.commodity && t.data.commodity.length
          ? {
              N: d.p({
                type: "commodity",
                stocks: t.data.commodity,
                total: t.data.total_commodity,
              }),
            }
          : {},
        { O: t.data && t.data.product && t.data.product.length },
        t.data && t.data.product && t.data.product.length
          ? {
              P: d.p({
                type: "product",
                stocks: t.data.product,
                total: t.data.total_product,
              }),
            }
          : {},
        { Q: t.data && t.data.industry && t.data.industry.length },
        t.data && t.data.industry && t.data.industry.length
          ? {
              R: d.f(t.data.industry, function (t, e, a) {
                return { a: d.t(t.name), b: d.t(t.ratio), c: e };
              }),
            }
          : {},
        { S: t.error },
        t.error
          ? {
              T: d.o(t.retryTab, 1779),
              U: d.p({ "is-simple-mode": !0, type: t.error }),
            }
          : !t.hasData && t.firstLoaded
          ? { W: d.t(t.emptyText || "暂无持仓数据") }
          : {},
        { V: !t.hasData && t.firstLoaded, X: t.isWeapp },
        t.isWeapp
          ? d.e(
              { Y: t.isShowTipModal },
              t.isShowTipModal
                ? {
                    Z: d.o(t.onPosiitonModalClose, 1780),
                    aa: d.p({
                      skin: t.skin,
                      isMP: t.isWeapp,
                      config: t.positionModalConfig,
                    }),
                  }
                : {}
            )
          : {},
        { ab: t.isMini },
        t.isMini
          ? d.e(
              { ac: t.isShowTipModal },
              t.isShowTipModal
                ? {
                    ad: d.o(t.hideEtfTipModal, 1781),
                    ae: d.p({ type: "realtime" }),
                  }
                : {}
            )
          : {},
        { af: d.n(t.isLite ? "lite" : "pro") }
      );
    },
  ],
  ["__scopeId", "data-v-a924b7dc"],
]);
wx.createComponent(h);
