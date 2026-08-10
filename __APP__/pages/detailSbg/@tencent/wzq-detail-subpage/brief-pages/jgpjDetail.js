var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  i = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  c = function (t, e, i) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  l = function (t, n) {
    for (var i in n || (n = {})) s.call(n, i) && c(t, i, n[i]);
    if (r) {
      var a,
        l = e(r(n));
      try {
        for (l.s(); !(a = l.n()).done; ) {
          i = a.value;
          o.call(n, i) && c(t, i, n[i]);
        }
      } catch (t) {
        l.e(t);
      } finally {
        l.f();
      }
    }
    return t;
  },
  u = function (t, e) {
    return i(t, a(e));
  },
  h = require("../../../../../common/vendor.js"),
  g = require("../../stock-hq-data/index.js"),
  j = require("api/index.js"),
  m = require("../../stock-news-core/utils/knife.js"),
  p = {
    inject: ["hqBridge"],
    props: ["symbol"],
    data: function () {
      return {
        jgList: [],
        jgListAll: [],
        jgShowNum: 3,
        jgchartData: null,
        jgInline: !0,
        pjNum: 0,
      };
    },
    computed: {
      isHS: function () {
        var t = g.utils.splitSymbol(this.symbol).market;
        return g.utils.isHSMarket(t);
      },
    },
    created: function () {
      this.getData();
    },
    methods: {
      getData: function () {
        return (
          (e = this),
          null,
          (n = t().mark(function e() {
            var n,
              i,
              a,
              r,
              s,
              o,
              c,
              p,
              f,
              d,
              b,
              y,
              D,
              v,
              w,
              k,
              I,
              N,
              q,
              A,
              x,
              R,
              S,
              L,
              B,
              O,
              _,
              C,
              E,
              H = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((t.prev = 0),
                        h.StockBridge.ENV === h.EnvTypeEnum.MP
                          ? ((i = "zxg_xcx"),
                            (r =
                              h.wx$1.getDeviceInfo() ||
                              h.wx$1.getSystemInfoSync()),
                            (s = r.platform),
                            (a = "ios" === s ? 5 : 6))
                          : ((i = "mini_h5"), (a = 6)),
                        (o = {
                          stockCode: this.symbol,
                          scenes: a,
                          xcxname: i,
                          come_from: "3",
                          t: new Date().getTime(),
                          app: i,
                        }),
                        !this.isHS)
                      ) {
                        t.next = 21;
                        break;
                      }
                      return (
                        (t.next = 6),
                        j.getDepthData(
                          this.hqBridge,
                          u(l({}, o), {
                            subReq: "investRate",
                            "investRate.new_format": 1,
                          })
                        )
                      );
                    case 6:
                      (c = t.sent),
                        (p = c.data.subOrgRspData.investRate.data),
                        (f = p.pjtj),
                        (d = void 0 === f ? {} : f),
                        (b = p.jgpj),
                        (y = void 0 === b ? {} : b),
                        (this.jgListAll = (y.info || []).map(function (t) {
                          return (
                            t.ybInfo &&
                              ((t.ybInfo.title =
                                t.ybInfo.title &&
                                t.ybInfo.title.replace(
                                  "【".concat(t.jgjc, "】"),
                                  ""
                                )),
                              t.ybInfo.time &&
                                (t.ybInfo.time = m.timeFormat(
                                  Date.parse(t.ybInfo.time.replace(/-/g, "/")) /
                                    1e3,
                                  1
                                ))),
                            t
                          );
                        })),
                        (this.jgList = this.jgListAll.slice(0, this.jgShowNum)),
                        ((D = [])[0] = d.mc || { name: "卖出", num: 0 }),
                        (D[1] = d.jc || { name: "减持", num: 0 }),
                        (D[2] = d.zx || { name: "中性", num: 0 }),
                        (D[3] = d.zc || { name: "增持", num: 0 }),
                        (D[4] = d.mr || { name: "买入", num: 0 }),
                        (this.jgchartData = [].concat(D)),
                        (v = 0),
                        D.forEach(function (t) {
                          v += t.num || 0;
                        }),
                        (this.pjNum = v),
                        (w = [
                          "#1CAA3C",
                          "#79CD8C",
                          "#7A8499",
                          "#F5A2A2",
                          "#E63535",
                        ]),
                        (this.jgchartData = this.jgchartData.map(function (
                          t,
                          e
                        ) {
                          return u(l({}, t), {
                            width: parseInt((t.num / H.pjNum) * 100, 10),
                            color: w[e],
                          });
                        })),
                        (this.jgchartData = this.jgchartData.filter(function (
                          t
                        ) {
                          return +t.num > 0;
                        })),
                        (this.jgInline = this.jgchartData.length <= 2),
                        (t.next = 36);
                      break;
                    case 21:
                      return (
                        (I = g.utils.splitSymbol(this.symbol)),
                        (N = I.market),
                        g.utils.isHKMarket(N)
                          ? (k = {
                              subReq: "hkJiankuang,investRateGetReport",
                              "hkJiankuang.code": this.symbol,
                              "hkJiankuang._appver": 9.7,
                            })
                          : g.utils.isUSMarket(N) &&
                            (k = {
                              subReq: "usBrief,investRateGetReport",
                              "usBrief.symbol": this.symbol,
                              "usBrief._appver": 9.7,
                            }),
                        (t.next = 25),
                        j.getDepthData(
                          this.hqBridge,
                          u(l(l({}, o), k), {
                            "investRateGetReport.symbol": this.symbol,
                            "investRateGetReport.n": 100,
                            "investRateGetReport.new_format": 1,
                          })
                        )
                      );
                    case 25:
                      (q = t.sent),
                        (A = q.data || {}),
                        (x = A.subOrgRspData),
                        (S = (R = void 0 === x ? {} : x).hkJiankuang),
                        (L = R.usBrief),
                        (B = R.investRateGetReport),
                        S
                          ? ((_ = S.data.tzpj),
                            (O = _.jgpj[_.jgpj.length - 1].zjc))
                          : L &&
                            ((C = L.data.pjyl),
                            (O = C.jgpj[C.jgpj.length - 1].zjc)),
                        (this.pjNum = O.jgs),
                        (this.jgListAll = (
                          (null == (n = null == B ? void 0 : B.data)
                            ? void 0
                            : n.data) || []
                        ).map(function (t) {
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
                              (t.time = m.timeFormat(
                                Date.parse(t.time.replaceAll(/-/g, "/")) / 1e3,
                                1
                              )),
                            t
                          );
                        })),
                        (this.jgList = this.jgListAll.slice(0, this.jgShowNum)),
                        (this.jgchartData = [
                          { name: "卖出+减持", num: +O.sell },
                          { name: "持有", num: +O.hold },
                          { name: "增持+买入", num: +O.buy },
                        ]),
                        (E = ["#1CAA3C", "#7A8499", "#E63535"]),
                        (this.jgchartData = this.jgchartData.map(function (
                          t,
                          e
                        ) {
                          return u(l({}, t), {
                            width: parseInt((t.num / H.pjNum) * 100, 10),
                            color: E[e],
                          });
                        })),
                        (this.jgchartData = this.jgchartData.filter(function (
                          t
                        ) {
                          return +t.num > 0;
                        })),
                        (this.jgInline =
                          1 === this.jgchartData.length ||
                          (2 === this.jgchartData.length && O.hold > 0));
                    case 36:
                      t.next = 40;
                      break;
                    case 38:
                      (t.prev = 38), (t.t0 = t.catch(0));
                    case 40:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[0, 38]]
            );
          })),
          new Promise(function (t, i) {
            var a = function (t) {
                try {
                  s(n.next(t));
                } catch (t) {
                  i(t);
                }
              },
              r = function (t) {
                try {
                  s(n.throw(t));
                } catch (t) {
                  i(t);
                }
              },
              s = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(a, r);
              };
            s((n = n.apply(e, null)).next());
          })
        );
        var e, n;
      },
      checkMore: function () {
        (this.jgShowNum += 6),
          (this.jgList = this.jgListAll.slice(0, this.jgShowNum));
      },
      gotoNewsDetail: function (t) {
        var e = ((this.isHS ? t.ybInfo : t) || {}).id;
        if (e)
          if ("app" !== this.hqBridge.ENV) {
            var n;
            (n =
              "mp" === this.hqBridge.ENV
                ? "/pages/newsCon/newsDetail/main"
                : "/information/detail"),
              this.hqBridge.routeTo({ path: n, query: { id: e } });
          } else
            this.hqBridge.routeTo({
              url: "qqstock://stockhybrid/com.tencent.shy.news_zixuangu/index?id=".concat(
                e
              ),
            });
      },
    },
  },
  f = h._export_sfc(p, [
    [
      "render",
      function (t, e, n, i, a, r) {
        return h.e(
          { a: a.pjNum },
          a.pjNum
            ? h.e(
                { b: a.pjNum },
                a.pjNum
                  ? h.e(
                      {
                        c: h.f(a.jgchartData, function (t, e, n) {
                          return h.e(
                            {
                              a: h.n(0 === e ? "ra-left" : ""),
                              b: h.n(
                                e === a.jgchartData.length - 1 ? "ra-right" : ""
                              ),
                              c: t.color,
                              d: e !== a.jgchartData.length - 1,
                            },
                            (a.jgchartData.length, {}),
                            {
                              e: e,
                              f: h.n(
                                e === a.jgchartData.length - 1 ? "nomar" : ""
                              ),
                              g: "".concat(t.width, "%"),
                            }
                          );
                        }),
                        d: h.n(1 === a.jgchartData.length ? "ra-all" : ""),
                        e: h.f(a.jgchartData, function (t, e, n) {
                          return {
                            a: t.color,
                            b: h.t(t.name),
                            c: h.t(t.num),
                            d: h.n(
                              e === a.jgchartData.length - 1 ? "no-mar" : ""
                            ),
                            e: e,
                          };
                        }),
                        f: h.t(r.isHS ? "" : "%"),
                        g: a.jgInline,
                      },
                      a.jgInline ? { h: h.t(a.pjNum) } : {},
                      { i: !a.jgInline },
                      a.jgInline ? {} : { j: h.t(a.pjNum) }
                    )
                  : {},
                { k: r.isHS },
                r.isHS
                  ? h.e(
                      { l: a.pjNum },
                      (a.pjNum, {}),
                      {
                        m: h.f(a.jgList, function (t, e, n) {
                          return {
                            a: h.t(t.fbrq && t.fbrq.slice(0, 10)),
                            b: h.t(t.jgjc),
                            c: h.t(t.tzpj),
                            d: e,
                          };
                        }),
                        n: a.jgShowNum < a.jgListAll.length,
                      },
                      a.jgShowNum < a.jgListAll.length
                        ? {
                            o: h.o(function (t) {
                              return r.checkMore();
                            }, 484),
                          }
                        : {}
                    )
                  : {},
                { p: a.jgListAll.length },
                a.jgListAll.length
                  ? {
                      q: h.f(a.jgListAll, function (t, e, n) {
                        return h.e(
                          {
                            a: h.t(t.title || t.ybInfo.title),
                            b: h.t(t.jgjc),
                            c: h.t(t.time || (t.ybInfo && t.ybInfo.time)),
                            d: e !== a.jgListAll.length - 1,
                          },
                          (a.jgListAll.length, {}),
                          {
                            e: e,
                            f: h.o(
                              function (e) {
                                return r.gotoNewsDetail(t);
                              },
                              485,
                              e
                            ),
                          }
                        );
                      }),
                    }
                  : {}
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-f0d24cdf"],
  ]);
wx.createComponent(f);
