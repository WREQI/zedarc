var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../@babel/runtime/helpers/readOnlyError"),
  r = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  n = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  l = function (t, e, r) {
    return e in t
      ? a(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r);
  },
  s = function (t, e) {
    for (var a in e || (e = {})) u.call(e, a) && l(t, a, e[a]);
    if (o) {
      var n,
        i = r(o(e));
      try {
        for (i.s(); !(n = i.n()).done; ) {
          a = n.value;
          c.call(e, a) && l(t, a, e[a]);
        }
      } catch (t) {
        i.e(t);
      } finally {
        i.f();
      }
    }
    return t;
  },
  d = function (t, e) {
    return n(t, i(e));
  },
  p = require("../../../../../common/vendor.js"),
  f = require("../../stock-news-core/utils/knife.js"),
  m = require("../../stock-hq-data/index.js"),
  g = require("../api/cardKit.js"),
  h = require("../util/route.js"),
  j = {
    props: {
      source: { type: String, required: !0 },
      symbol: { type: String, required: !0 },
      stockName: { type: String, default: "" },
      skin: { type: String, default: "white" },
      contexObj: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (r, a) {
      var n = this,
        i = a.emit,
        o = p.computed(function () {
          var t, e;
          return "searchAi" === r.source
            ? {
                reportPrefix: "jichu.ai_search",
                reportExtra: {
                  session: null == (t = r.contexObj) ? void 0 : t.sessionId,
                  requestid: null == (e = r.contexObj) ? void 0 : e.requestId,
                },
              }
            : {};
        }),
        u = p.computed(function () {
          return m.utils.splitSymbol(r.symbol).market;
        }),
        c = p.computed(function () {
          return m.utils.splitSymbol(r.symbol).scode;
        }),
        l = p.computed(function () {
          return m.utils.isHSMarket(u.value);
        }),
        j = p.computed(function () {
          return m.utils.trimScode(c.value);
        }),
        b = h.useHqCardKit({
          request: function () {
            return (
              (a = n),
              null,
              (i = t().mark(function e() {
                var a;
                return t().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!l.value) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt(
                          "return",
                          g.getDepthData(g.HQBridge, {
                            stockCode: r.symbol,
                            subReq: "investRate",
                            "investRate.new_format": 1,
                          })
                        );
                      case 2:
                        return t.abrupt(
                          "return",
                          (m.utils.isHKMarket(u.value)
                            ? (a = {
                                subReq: "hkJiankuang,investRateGetReport",
                                "hkJiankuang.code": r.symbol,
                                "hkJiankuang._appver": 9.7,
                              })
                            : m.utils.isUSMarket(u.value) &&
                              (a = {
                                subReq: "usBrief,investRateGetReport",
                                "usBrief.symbol": r.symbol,
                                "usBrief._appver": 9.7,
                              }),
                          g.getDepthData(
                            g.HQBridge,
                            d(s({}, a), {
                              stockCode: r.symbol,
                              "investRateGetReport.symbol": r.symbol,
                              "investRateGetReport.n": 100,
                              "investRateGetReport.new_format": 1,
                            })
                          ))
                        );
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, e);
              })),
              new Promise(function (t, r) {
                var n = function (t) {
                    try {
                      u(i.next(t));
                    } catch (t) {
                      r(t);
                    }
                  },
                  o = function (t) {
                    try {
                      u(i.throw(t));
                    } catch (t) {
                      r(t);
                    }
                  },
                  u = function (e) {
                    return e.done
                      ? t(e.value)
                      : Promise.resolve(e.value).then(n, o);
                  };
                u((i.apply(a, null), e("n")).next());
              })
            );
            var a, i;
          },
          formatData: function (t) {
            var e, a, n, i, u, c;
            if (
              !(null == (e = null == t ? void 0 : t.data)
                ? void 0
                : e.subOrgRspData)
            )
              return null;
            if (
              (g.HQBridge.report(
                "".concat(o.value.reportPrefix, ".plugin_expose"),
                s({ widgettype: "institution" }, r.contexObj)
              ),
              l.value)
            ) {
              var p = t.data.subOrgRspData.investRate.data,
                m = p.pjtj,
                h = void 0 === m ? {} : m,
                j = p.jgpj,
                b = ((void 0 === j ? {} : j).info || [])
                  .map(function (t) {
                    return (
                      t.ybInfo &&
                        ((t.ybInfo.title =
                          t.ybInfo.title &&
                          t.ybInfo.title.replace(
                            "【".concat(t.jgjc, "】"),
                            ""
                          )),
                        t.ybInfo.time &&
                          (t.ybInfo.time = f.timeFormat(
                            Date.parse(t.ybInfo.time.replace(/-/g, "/")) / 1e3,
                            1
                          ))),
                      t
                    );
                  })
                  .slice(0, 3),
                v = [
                  h.mc || { name: "卖出", num: 0 },
                  h.jc || { name: "减持", num: 0 },
                  h.zx || { name: "中性", num: 0 },
                  h.zc || { name: "增持", num: 0 },
                  h.mr || { name: "买入", num: 0 },
                ],
                D = 0;
              if (
                (v.forEach(function (t) {
                  D += t.num || 0;
                }),
                (null == b ? void 0 : b.length) <= 0 || D <= 0)
              )
                return null;
              var y = ["#1CAA3C", "#79CD8C", "#7A8499", "#F5A2A2", "#E63535"];
              return {
                jgList: b,
                jgchartData: v
                  .map(function (t, e) {
                    return d(s({}, t), {
                      width: parseInt((t.num / D) * 100, 10),
                      color: y[e],
                    });
                  })
                  .filter(function (t) {
                    return +t.num > 0;
                  }),
                pjNum: D,
                isHS: !0,
              };
            }
            var k,
              w = t.data.subOrgRspData,
              S = void 0 === w ? {} : w,
              q = S.hkJiankuang,
              R = S.usBrief,
              O = S.investRateGetReport;
            if (q) {
              var x = q.data.tzpj;
              k =
                (null ==
                (n =
                  null == (a = null == x ? void 0 : x.jgpj)
                    ? void 0
                    : a[x.jgpj.length - 1])
                  ? void 0
                  : n.zjc) || {};
            } else if (R) {
              var C = R.data.pjyl;
              k =
                (null ==
                (u =
                  null == (i = null == C ? void 0 : C.jgpj)
                    ? void 0
                    : i[C.jgpj.length - 1])
                  ? void 0
                  : u.zjc) || {};
            }
            var H = (
                (null == (c = null == O ? void 0 : O.data) ? void 0 : c.data) ||
                []
              )
                .map(function (t) {
                  if (t.title) {
                    var e = t.title.split("】");
                    !t.jgjc &&
                      e.length > 1 &&
                      (t.jgjc = e[0].replaceAll("【", "")),
                      (t.title = t.title.replace(
                        "【".concat(t.jgjc, "】"),
                        ""
                      ));
                  }
                  return (
                    t.time &&
                      (t.time = f.timeFormat(
                        Date.parse(t.time.replace(/-/g, "/")) / 1e3,
                        1
                      )),
                    t
                  );
                })
                .slice(0, 2),
              I = +k.jgs || 0;
            if ((null == H ? void 0 : H.length) <= 0 || I <= 0) return null;
            var P = [
                { name: "卖出+减持", num: +k.sell },
                { name: "持有", num: +k.hold },
                { name: "增持+买入", num: +k.buy },
              ],
              _ = ["#1CAA3C", "#7A8499", "#E63535"];
            return {
              jgList: H,
              jgchartData: P.map(function (t, e) {
                return d(s({}, t), {
                  width: parseInt((t.num / I) * 100, 10),
                  color: _[e],
                });
              }).filter(function (t) {
                return +t.num > 0;
              }),
              pjNum: I,
              isHS: !1,
            };
          },
          onShouldShowChange: function (t) {
            return i("hasData", t);
          },
        }),
        v = b.cardData,
        D = b.refresh,
        y = b.shouldShow;
      return {
        isMP: h.isMP,
        sourceData: o,
        shouldShow: y,
        cardData: v,
        refresh: D,
        market: u,
        scode: c,
        isHS: l,
        showStockCode: j,
        handleCardClick: function () {
          var t = o.value.reportPrefix;
          g.HQBridge.report("".concat(t, ".ai_plugin_click"), {
            widgettype: "institution",
            stockid: r.symbol,
            requestid: r.contexObj.requestId || "",
          }),
            g.HQBridge.report("".concat(t, ".institution_click")),
            h.goToJgpjDetail(r.symbol);
        },
        gotoNewsDetail: function (t) {
          var e = ((v.value.isHS ? t.ybInfo : t) || {}).id;
          e &&
            (g.HQBridge.report(
              "".concat(o.value.reportPrefix, ".institution_click")
            ),
            h.goToNewsDetail(e));
        },
      };
    },
    onPageShow: function () {
      this.refresh();
    },
  },
  b = p._export_sfc(j, [
    [
      "render",
      function (t, e, r, a, n, i) {
        return p.e(
          { a: a.shouldShow },
          a.shouldShow
            ? p.e(
                { b: r.stockName },
                r.stockName
                  ? { c: p.t(r.stockName), d: p.t(a.showStockCode) }
                  : {},
                {
                  e: p.f(a.cardData.jgchartData, function (t, e, r) {
                    return p.e(
                      {
                        a: p.n(0 === e ? "ra-left" : ""),
                        b: p.n(
                          e === a.cardData.jgchartData.length - 1
                            ? "ra-right"
                            : ""
                        ),
                        c: t.color,
                        d: e !== a.cardData.jgchartData.length - 1,
                      },
                      (a.cardData.jgchartData.length, {}),
                      {
                        e: e,
                        f: p.n(
                          e === a.cardData.jgchartData.length - 1 ? "nomar" : ""
                        ),
                        g: "".concat(t.width, "%"),
                      }
                    );
                  }),
                  f: p.n(1 === a.cardData.jgchartData.length ? "ra-all" : ""),
                  g: p.f(a.cardData.jgchartData, function (t, e, r) {
                    return {
                      a: t.color,
                      b: p.t(t.name),
                      c: p.t(t.num),
                      d: p.n(
                        e === a.cardData.jgchartData.length - 1 ? "no-mar" : ""
                      ),
                      e: e,
                    };
                  }),
                  h: p.t(a.cardData.isHS ? "" : "%"),
                  i: a.cardData.jgchartData.length <= 2,
                },
                a.cardData.jgchartData.length <= 2
                  ? { j: p.t(a.cardData.pjNum) }
                  : {},
                { k: a.cardData.jgchartData.length > 2 },
                a.cardData.jgchartData.length > 2
                  ? { l: p.t(a.cardData.pjNum) }
                  : {},
                { m: a.cardData.isHS },
                a.cardData.isHS
                  ? {
                      n: p.f(a.cardData.jgList, function (t, e, r) {
                        return {
                          a: p.t(t.fbrq && t.fbrq.slice(0, 10)),
                          b: p.t(t.jgjc),
                          c: p.t(t.tzpj),
                          d: e,
                        };
                      }),
                    }
                  : {},
                { o: !a.cardData.isHS },
                a.cardData.isHS
                  ? {}
                  : {
                      p: p.f(a.cardData.jgList, function (t, e, r) {
                        return p.e(
                          {
                            a: p.t(t.title || t.ybInfo.title),
                            b: p.t(t.jgjc),
                            c: p.t(t.time || (t.ybInfo && t.ybInfo.time)),
                            d: e !== a.cardData.jgList.length - 1,
                          },
                          (a.cardData.jgList.length, {}),
                          {
                            e: e,
                            f: p.o(
                              function (e) {
                                return a.gotoNewsDetail(t);
                              },
                              5790,
                              e
                            ),
                          }
                        );
                      }),
                    },
                {
                  q: p.n("skin-".concat(r.skin)),
                  r: p.o(function () {
                    return (
                      a.handleCardClick && a.handleCardClick.apply(a, arguments)
                    );
                  }, 5791),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-ab1dbf71"],
  ]);
wx.createComponent(b);
