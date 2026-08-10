require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../common/vendor.js"),
  r = require("../stock-hq-data/index.js"),
  o = require("utils.js"),
  n = t.defineComponent({
    inject: ["hqBridge"],
    props: ["market", "scode", "isTrading", "hkVIP"],
    setup: function (n, a) {
      var i = this,
        s = a.emit,
        c = t.getCurrentInstance().proxy || t.getCurrentInstance(),
        u = ["mpwzq", "wzqlight"].includes("mpweapp"),
        l = r.utils.getSymbol(n.market, n.scode),
        f = t.StockBridge.ENV === t.EnvTypeEnum.MP,
        h = t.computed(function () {
          return r.utils.isUSMarket(n.market);
        }),
        d = t.computed(function () {
          return r.utils.isHKMarket(n.market);
        }),
        m = t.ref(null),
        p = t.ref(null),
        k = t.ref(null);
      c.timeout = null;
      var v = t.ref({}),
        I = function () {
          return (
            (r = i),
            null,
            (o = e().mark(function r() {
              var o, a, i, u, I, q, C, y;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (i =
                            "https://proxy.finance.qq.com/cgi/cgi-bin/zxgstockcgi/quote_bar/cross_market_pairs?code="
                              .concat(l, "&app=")
                              .concat(
                                f ? "wzqxcx" : "mini_h5",
                                "&_appver=11.11"
                              )),
                          (e.next = 4),
                          t.StockBridge.request(i, t.RequestTypeEnum.GET, {})
                        );
                      case 4:
                        (u = e.sent),
                          (I = u.data),
                          (q = I.aph ? I : null),
                          (C = null == (o = I.adrhk) ? void 0 : o.adr_info),
                          (y = null == (a = I.adrhk) ? void 0 : a.hk_info),
                          q &&
                            ((v.value.zdf = x(q.zdf)),
                            (v.value.hayj = x(q.hayj)),
                            t.StockBridge.report("hq.detail.ah_bar_show", {
                              stockid: l,
                            }),
                            (q.showHSmarket = [
                              "GP-A",
                              "GP-A-KCB",
                              "GP-A-CYB",
                            ].includes(q.type)),
                            (m.value = q)),
                          Array.isArray(C) &&
                            ((v.value.adr = x(C[3])),
                            t.StockBridge.report("hq.detail.adr_bar_show", {
                              stockid: l,
                            }),
                            (p.value = C)),
                          Array.isArray(y) &&
                            ((v.value.hk = x(y[3])),
                            h.value &&
                              t.StockBridge.report("hq.detail.ush_bar_show", {
                                stockid: l,
                              }),
                            (k.value = y)),
                          (m.value || p.value || k.value) &&
                            (s("hasData"),
                            c.heightChanged ||
                              (c.$parent.$emit("heightChange"),
                              (c.heightChanged = !0))),
                          (e.next = 14);
                        break;
                      case 12:
                        (e.prev = 12), (e.t0 = e.catch(0));
                      case 14:
                        ((h.value && (p.value || k.value)) ||
                          (d.value && n.hkVIP)) &&
                          g();
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                null,
                [[0, 12]]
              );
            })),
            new Promise(function (e, t) {
              var n = function (e) {
                  try {
                    i(o.next(e));
                  } catch (e) {
                    t(e);
                  }
                },
                a = function (e) {
                  try {
                    i(o.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                i = function (t) {
                  return t.done
                    ? e(t.value)
                    : Promise.resolve(t.value).then(n, a);
                };
              i((o = o.apply(r, null)).next());
            })
          );
          var r, o;
        },
        g = function () {
          clearTimeout(c.timeout),
            (c.timeout = setTimeout(function () {
              n.isTrading && I();
            }, 5e3));
        },
        q = function () {
          clearTimeout(c.timeout), (c.timeout = null);
        },
        x = function (e) {
          return 0 == +e ? "color-equal" : +e > 0 ? "color-rise" : "color-drop";
        };
      return (
        t.onMounted(function () {
          I();
        }),
        t.onUnmounted(function () {
          q();
        }),
        {
          ahInfo: m,
          adrInfo: p,
          hkInfo: k,
          colorClass: v,
          isUS: h,
          isLite: u,
          getData: I,
          formatText: function (e) {
            return "".concat(e > 0 ? "+" : "").concat(e);
          },
          formatTime: function (e) {
            return / /.test(e)
              ? e.slice(10)
              : ""
                  .concat(e.slice(8, 10), ":")
                  .concat(e.slice(10, 12), ":")
                  .concat(e.slice(12, 14));
          },
          getColorClass: x,
          goDetail: function (e, n) {
            var a = r.utils.splitSymbol(n),
              i = a.market,
              s = a.scode;
            o.jumpStockDetail({ market: i, scode: s }),
              t.StockBridge.report("hq.detail.".concat(e, "_bar_click"), {
                stockid: l,
              });
          },
          stopUpdate: q,
        }
      );
    },
  }),
  a = t._export_sfc(n, [
    [
      "render",
      function (e, r, o, n, a, i) {
        return t.e(
          { a: e.ahInfo },
          e.ahInfo
            ? t.e({ b: e.isLite }, (e.isLite, {}), {
                c: t.t(e.ahInfo.showHSmarket ? "A股" : "H股"),
                d: t.t(e.ahInfo.zxj),
                e: t.t(e.ahInfo.showHSmarket ? "CNY" : "HKD"),
                f: t.t(e.formatText(e.ahInfo.zdf)),
                g: t.n(e.colorClass.zdf),
                h: t.t(e.formatTime(e.ahInfo.qttime)),
                i: t.t(e.formatText(e.ahInfo.hayj)),
                j: t.n(e.colorClass.hayj),
                k: t.o(function (t) {
                  return e.goDetail("ah", e.ahInfo.aph);
                }, 2751),
              })
            : {},
          { l: !e.ahInfo && e.adrInfo },
          !e.ahInfo && e.adrInfo
            ? t.e({ m: e.isLite }, (e.isLite, {}), {
                n: t.t(e.adrInfo[1]),
                o: t.n(e.isLite ? "" : e.colorClass.adr),
                p: t.t(e.formatText(e.adrInfo[2])),
                q: t.n(e.isLite ? "" : e.colorClass.adr),
                r: t.t(e.formatText(e.adrInfo[3])),
                s: t.n(e.colorClass.adr),
                t: t.o(function (t) {
                  return !e.isUS && e.goDetail("adr", e.adrInfo[0]);
                }, 2752),
              })
            : {},
          { v: e.isUS && e.hkInfo },
          e.isUS && e.hkInfo
            ? t.e(
                { w: e.isLite },
                (e.isLite, {}),
                { x: e.isLite },
                e.isLite ? {} : { y: t.t(e.hkInfo[1]) },
                {
                  z: t.t(e.hkInfo[2]),
                  A: t.n(e.isLite ? "" : e.colorClass.hk),
                  B: t.t(e.formatText(e.hkInfo[3])),
                  C: t.n(e.colorClass.hk),
                  D: t.t(e.formatTime(e.hkInfo[4]).slice(0, 6)),
                  E: e.isLite ? "" : 1,
                  F: t.o(function (t) {
                    return e.goDetail("ush", e.hkInfo[0]);
                  }, 2753),
                }
              )
            : {},
          { G: e.isLite ? 1 : "" }
        );
      },
    ],
    ["__scopeId", "data-v-28e4a568"],
  ]);
wx.createComponent(a);
