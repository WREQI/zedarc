var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var s = require("../stock-hq-data/index.js"),
  e = require("../../../../common/vendor.js"),
  i = require("utils.js"),
  o = {
    props: ["symbol", "scode", "market", "stockType", "price"],
    data: function () {
      return { bondList: [], colorClass: {}, nowIndex: 0, timeout: null };
    },
    computed: {
      isMP: function () {
        return e.StockBridge.ENV === e.EnvTypeEnum.MP;
      },
      isWZQ: function () {
        return ["stock"].includes("mpweapp");
      },
      isDebt: function () {
        return s.utils.isTransferableDebt(this.stockType);
      },
      yjl: function () {
        if (this.bondList[this.nowIndex]) {
          var t, s;
          this.isDebt
            ? ((t = this.bondList[this.nowIndex].zxj), (s = this.price))
            : ((t = this.price), (s = this.bondList[this.nowIndex].zxj));
          var e = (
            100 *
            (s / ((100 / this.bondList[this.nowIndex].zgj) * t) - 1)
          ).toFixed(2);
          return (
            (this.colorClass.yjl = this.getColorClass(e)), this.formatText(e)
          );
        }
      },
      isClassic: function () {
        return ["mpweapp"].includes("mpweapp");
      },
    },
    created: function () {
      this.getData();
    },
    beforeUnmount: function () {
      clearTimeout(this.timeout);
    },
    methods: {
      getData: function () {
        return (
          (i = this),
          null,
          (o = t().mark(function i() {
            var o, n, r, a, c, l, d, h, u;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.prev = 0), /^\d{6}$/.test(this.scode))) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        void e.StockBridge.report(
                          "hq.detail.bond_bar.error_code",
                          { scode: this.scode, market: this.market }
                        )
                      );
                    case 3:
                      return (
                        (o = s.utils.getSymbol(this.market, this.scode)),
                        (n =
                          "https://proxy.finance.qq.com/cgi/cgi-bin/zxgstockcgi/relation/"
                            .concat(
                              this.isDebt ? "bond_to_stock" : "stock_to_bond",
                              "?symbol="
                            )
                            .concat(o)),
                        (t.next = 7),
                        e.StockBridge.request(n, "GET")
                      );
                    case 7:
                      (r = t.sent),
                        (a = r.data),
                        (c = (c = Array.isArray(a) ? a : [a]).filter(function (
                          t
                        ) {
                          return (
                            (null == t ? void 0 : t.zxj) &&
                            (null == t ? void 0 : t.zdf)
                          );
                        })).length > 0 &&
                          ((l = c[0] || {}),
                          (d = l.symbol),
                          (h = l.zdf),
                          (u = l.yjl),
                          (this.colorClass.zdf = this.getColorClass(h)),
                          (this.colorClass.yjl = this.getColorClass(u)),
                          this.$emit("addBondPush", d),
                          e.StockBridge.report(
                            "hq.detail.bond_".concat(
                              this.isDebt ? "debt" : "stock",
                              "_bar_show"
                            ),
                            { stockid: this.symbol }
                          ),
                          (this.bondList = c),
                          this.$emit("hasData"),
                          this.heightChanged ||
                            (this.$parent.$emit("heightChange"),
                            (this.heightChanged = !0))),
                        this.isClassic && this.startCarousel(),
                        (t.next = 16);
                      break;
                    case 14:
                      (t.prev = 14), (t.t0 = t.catch(0));
                    case 16:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this,
              [[0, 14]]
            );
          })),
          new Promise(function (t, s) {
            var e = function (t) {
                try {
                  r(o.next(t));
                } catch (t) {
                  s(t);
                }
              },
              n = function (t) {
                try {
                  r(o.throw(t));
                } catch (t) {
                  s(t);
                }
              },
              r = function (s) {
                return s.done
                  ? t(s.value)
                  : Promise.resolve(s.value).then(e, n);
              };
            r((o = o.apply(i, null)).next());
          })
        );
        var i, o;
      },
      startCarousel: function () {
        var t = this;
        this.bondList.length <= 1 ||
          (clearTimeout(this.timeout),
          (this.timeout = setTimeout(function () {
            (t.nowIndex = (t.nowIndex + 1) % t.bondList.length),
              t.startCarousel();
          }, 6e3)));
      },
      updateData: function (t) {
        var s = t.secu_quote,
          e = s.dqj,
          i = s.zdf;
        this.bondList[this.nowIndex] &&
          ((this.bondList[this.nowIndex].zxj =
            e || this.bondList[this.nowIndex].zxj),
          (this.bondList[this.nowIndex].zdf =
            i || this.bondList[this.nowIndex].zdf),
          (this.colorClass.zdf = this.getColorClass(
            this.bondList[this.nowIndex].zdf
          )));
      },
      formatText: function (t) {
        return /^\+/.test(t)
          ? t
          : "".concat(t > 0 && !this.isClassic ? "+" : "").concat(t);
      },
      getColorClass: function (t) {
        return 0 == +t ? "color-equal" : t > 0 ? "color-rise" : "color-drop";
      },
      goDetail: function (t) {
        var o = s.utils.splitSymbol(t),
          n = o.market,
          r = o.scode;
        i.jumpStockDetail({ market: n, scode: r }),
          e.StockBridge.report(
            "hq.detail.bond_".concat(
              this.isDebt ? "debt" : "stock",
              "_bar_click"
            ),
            { stockid: this.symbol }
          );
      },
    },
  },
  n = e._export_sfc(o, [
    [
      "render",
      function (t, s, i, o, n, r) {
        return e.e(
          { a: n.bondList.length > 0 && !r.isClassic },
          (n.bondList.length > 0 && r.isClassic, {}),
          {
            b: e.f(n.bondList, function (t, s, i) {
              return e.e(
                { a: n.nowIndex === s },
                n.nowIndex === s
                  ? e.e(
                      {
                        b: e.t(t.name),
                        c: r.isClassic ? 1 : "",
                        d: e.t(t.zxj),
                        e: e.n(r.isClassic ? n.colorClass.zdf : ""),
                        f: e.t(r.formatText(t.zdf)),
                        g: e.n(n.colorClass.zdf),
                        h: r.isClassic ? 1 : "",
                        i: e.t(r.yjl),
                        j: e.n(n.colorClass.yjl),
                        k: r.isClassic && !r.isDebt,
                      },
                      (r.isClassic && r.isDebt, {}),
                      { l: r.isClassic ? 1 : "" }
                    )
                  : {},
                {
                  m: s,
                  n: e.o(
                    function (s) {
                      return r.goDetail(t.symbol);
                    },
                    1738,
                    s
                  ),
                }
              );
            }),
            c: n.bondList.length > 1 && r.isClassic ? 1 : "",
          }
        );
      },
    ],
    ["__scopeId", "data-v-9b42a375"],
  ]);
wx.createComponent(n);
