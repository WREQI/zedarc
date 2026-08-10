var t = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  a = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = function (t, e, a) {
    return new Promise(function (i, n) {
      var s = function (t) {
          try {
            r(a.next(t));
          } catch (t) {
            n(t);
          }
        },
        o = function (t) {
          try {
            r(a.throw(t));
          } catch (t) {
            n(t);
          }
        },
        r = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(s, o);
        };
      r((a = a.apply(t, e)).next());
    });
  },
  n = require("../../../../common/vendor.js"),
  s = require("../stock-hq-core/utils/market.js"),
  o = require("../stock-hq-core/utils/f2-tool/f2tag.js"),
  r = require("../stock-hq-data/index.js"),
  d = require("api/index.js"),
  c = require("utils/chartTheme.js"),
  l = null,
  u = {
    components: {
      NoData: function () {
        return "./components/NoData.js";
      },
      Wiki: function () {
        return "./components/Wiki.js";
      },
      f2: function () {
        return "../stock-union-f2/f2MP.js";
      },
      HolderStat: function () {
        return "./components/holder-stat.js";
      },
    },
    inject: ["hqBridge", "showTeachTips", "fontSkin"],
    props: {
      scode: String,
      market: String,
      stockName: String,
      titleHeight: Number,
      skin: String,
      rank: String,
    },
    data: function () {
      return {
        plateInterval: null,
        data: {},
        stockBridge: n.StockBridge,
        firstLoaded: !1,
        foldCompany: !0,
        dateList: { show: !1, selected: 0 },
        plateZdf: "",
        showHisline: !1,
        hisChart: {},
        hislineHash: "",
        hislineConfig: { padding: [1, 1, 18, 1], animate: !1 },
      };
    },
    created: function () {
      var t = this;
      l ||
        (l = new r.DetailApi(function (e) {
          return t.hqBridge.request(e);
        }));
    },
    mounted: function () {
      this.getData(), this.refreshPlate();
    },
    computed: {
      wikiInfo: function () {
        return {
          rank: this.rank,
          symbol: this.symbol,
          market: this.market,
          stockName: this.stockName,
        };
      },
      symbol: function () {
        return r.utils.getSymbol(this.market, this.scode);
      },
      zdfColor: function () {
        return function (t) {
          var e = +t;
          return e > 0
            ? "red-ratio"
            : 0 === e
            ? "gray-ratio"
            : e < 0
            ? "green-ratio"
            : void 0;
        };
      },
      zdfFormat: function () {
        return function (t) {
          return +t <= 0 ? "".concat(t, "%") : "+".concat(t, "%");
        };
      },
      isMp: function () {
        return "mp" === n.StockBridge.ENV;
      },
      isWzq: function () {
        return "wzq" === n.StockBridge.ENV;
      },
    },
    methods: {
      showTips: function (t, e) {
        n.StockBridge.report("hq.stock_detail.briefus_".concat(e, "_i_click")),
          n.StockRouter.routeTo({
            name: "informationDetail",
            query: {
              id: "SN20221107173459829f0d16",
              articleStyle: "fullTeach",
              anchorTitle: t,
            },
          });
      },
      checkFhMore: function () {
        "wzq" === n.StockBridge.ENV
          ? n.StockBridge.routeTo({
              path: "/trade/fenhong_us.shtml",
              query: {
                code: this.scode,
                type: this.market,
                name: this.stockName,
              },
            })
          : "mp" === n.StockBridge.ENV &&
            n.StockBridge.openExtraWebview(
              "https://wzq.tenpay.com/mp/v2/index.html#/trade/fenhong_us.shtml?code="
                .concat(this.scode, "&type=")
                .concat(this.market, "&name=")
                .concat(this.stockName)
            ),
          n.StockBridge.report("hq.stock_detail.goto_us_fenhong_page");
      },
      gotowebsite: function () {
        n.StockBridge.report("hq.stock_detail.gsjj_website_click");
      },
      clearPlateRefresh: function () {
        clearInterval(this.plateInterval);
      },
      refreshPlate: function () {
        var t = this;
        this.$nextTick(function () {
          t.hislineHash = String(Math.random());
        }),
          clearInterval(this.plateInterval),
          (this.plateInterval = setInterval(function () {
            var e = new Date().toTimeString().slice(0, 5).replace(":", "");
            s.isUSTradeTime(e) && t.getPlateZdf();
          }, 5e3));
      },
      jumpToPlate: function (t, e) {
        "--" !== t &&
          ("wzq" === n.StockBridge.ENV &&
            n.StockBridge.routeTo({
              path: "/plate/601/detail",
              query: { plateId: e, name: t, zdf: this.plateZdf },
            }),
          "mini" === n.StockBridge.ENV &&
            n.StockBridge.routeTo({ path: "/plate/stock/601/".concat(e) }),
          "mp" === n.StockBridge.ENV &&
            n.StockBridge.openExtraWebview(
              "https://wzq.tenpay.com/mp/v2/index.html#/plate/601/detail?plateId="
                .concat(e, "&name=")
                .concat(t, "&zdf=")
                .concat(this.plateZdf)
            ),
          n.StockBridge.report("hq.stock_detail.basic_plate_click"));
      },
      getPlateZdf: function () {
        return i(
          this,
          null,
          a().mark(function t() {
            var e, i;
            return a().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        l.getPlate(
                          { market: this.market, scode: this.scode },
                          { needProcess: !0 }
                        )
                      );
                    case 2:
                      (e = t.sent),
                        "--" !== (i = Array.isArray(e) ? e[0] : e).name
                          ? (this.plateZdf = i.zdf || "0.00")
                          : clearInterval(this.plateInterval);
                    case 5:
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
      getData: function () {
        return i(
          this,
          null,
          a().mark(function t() {
            var i,
              s,
              o,
              r,
              c,
              l,
              u,
              h,
              p,
              f,
              g,
              m,
              j,
              k,
              y,
              b,
              v,
              w,
              x,
              S,
              z,
              q,
              _,
              B = this;
            return a().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        d.getUSData(n.StockBridge, this.scode)
                      );
                    case 3:
                      (l = t.sent) &&
                        0 == +l.code &&
                        l.data &&
                        ((u = l.data.jbxx || {}),
                        (h = u.gsmc),
                        (p = u.ssrq),
                        (f = u.jys),
                        (g = u.ywms),
                        (m = u.industry),
                        (j = u.website),
                        (k = u.zgb),
                        (y = u.jianjie),
                        (b = {
                          company: h,
                          offerdate: p,
                          jys: f,
                          ywms: g,
                          industry: m || {},
                          website: j,
                          zgb: k,
                          gsjj: y,
                          businesslist: l.data.srgc || [],
                          mbjyc: l.data.mbjyc || {},
                          jgpj_mbj:
                            (null == (i = l.data.pjyl) ? void 0 : i.mbj) || [],
                          jgpj_kline:
                            (null == (s = l.data.pjyl) ? void 0 : s.jgpj) || {},
                          pj_gj:
                            (null == (o = l.data.pjyl) ? void 0 : o.kline) ||
                            [],
                          zygd: l.data.zygd || {},
                          stockdividends: l.data.cgfh || [],
                        }).stockdividends &&
                          b.stockdividends.length > 0 &&
                          (b.stockdividends = b.stockdividends.slice(0, 3)),
                        b.mbjyc &&
                          ((v = b.mbjyc),
                          (w = v.dqj),
                          (x = v.maxmbj),
                          (S = v.minmbj),
                          (z = v.mbjj),
                          (q = Math.max(w, x, z)),
                          (b.mbjyc.per1 = (50 * w) / q),
                          (b.mbjyc.per3 = (50 * S) / q),
                          (b.mbjyc.per4 = (50 * z) / q)),
                        b.jgpj_kline &&
                          b.jgpj_kline.length > 0 &&
                          b.jgpj_kline.forEach(function (t) {
                            var e = +t.zjc.buy + +t.zjc.hold + +t.zjc.sell;
                            (t.buyper = parseInt((t.zjc.buy / e) * 100, 10)),
                              (t.holdper = parseInt(
                                (t.zjc.hold / e) * 100,
                                10
                              )),
                              (t.sellper = 100 - t.buyper - t.holdper);
                          }),
                        (_ = []),
                        b.pj_gj &&
                          b.pj_gj.length > 0 &&
                          (b.pj_gj.forEach(function (t) {
                            _.push.apply(_, e(t.gj));
                          }),
                          (b.pj_gj = _)),
                        (this.data = b),
                        b.jgpj_kline &&
                          b.jgpj_kline.length > 0 &&
                          this.$nextTick(function () {
                            B.showHisline = !0;
                          }),
                        this.data.industry &&
                          this.data.industry.code &&
                          this.getPlateZdf(),
                        !this.isMp &&
                          this.$route.query &&
                          "zygc" === this.$route.query.position &&
                          setTimeout(function () {
                            B.$refs.jyfx &&
                              window.scrollTo(
                                0,
                                B.$refs.jyfx.offsetTop - B.titleHeight
                              );
                          }, 0),
                        (null == (c = null == (r = l.data) ? void 0 : r.gudong)
                          ? void 0
                          : c.gdtj) && (this.data.gdtj = l.data.gudong.gdtj)),
                        this.firstLoaded ||
                          ((this.firstLoaded = !0),
                          this.$nextTick(function () {
                            B.$emit("loaded");
                          })),
                        (t.next = 11);
                      break;
                    case 8:
                      (t.prev = 8), (t.t0 = t.catch(0)), this.$emit("loaded");
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 8]]
            );
          })
        );
      },
      toggleFold: function () {
        this.foldCompany = !this.foldCompany;
      },
      showDateList: function () {
        this.dateList.show = !0;
      },
      changeDate: function (t) {
        (this.dateList.selected = t), (this.dateList.show = !1);
      },
      openDetail: function (t) {
        if ("wzq" === n.StockBridge.ENV) {
          var e = "",
            a = { code: this.scode, name: this.stockName };
          "gudongtj" === t
            ? ((a.market = this.market), (e = "/stockDetail/us/gudongtj"))
            : ((a.holder = 3),
              (a.type = this.market),
              (e = "/trade/stock_holder_us.shtml")),
            n.StockBridge.routeTo({ path: e, query: a });
        }
        "mp" === n.StockBridge.ENV &&
          n.StockBridge.openExtraWebview(
            "https://wzq.tenpay.com/mp/v2/index.html#/trade/stock_holder_us.shtml?holder=3&code="
              .concat(this.scode, "&type=")
              .concat(this.market, "&name=")
              .concat(this.stockName)
          );
      },
      drawHislineChart: function (a) {
        var i,
          s = c.getCSSVariable("--border-light-divider", "", this.skin),
          o = [],
          r = this.data.pj_gj.map(function (t, e) {
            var a = t.date.slice(5, 7);
            return (
              a !== i && (o.push({ index: e, date: t.date }), (i = a)),
              { date: t.date, value: +t.last, type: "gj" }
            );
          }),
          d = o[o.length - 1].index + 20;
        o.push({ index: d, date: "first day of next month" });
        for (var l = d - this.data.pj_gj.length; l > 0; l -= 1)
          r.push({
            date: "year-".concat(i, "-fake").concat(l),
            value: null,
            type: "gj",
          });
        for (var u = [], h = 0; h < o.length - 1; h++) {
          var p = Math.ceil((o[h].index + o[h + 1].index) / 2);
          u.push(r[p].date);
        }
        for (
          var f = [], g = 0, m = 0;
          g < r.length && m < this.data.jgpj_mbj.length;
          g++
        ) {
          var j = null;
          r[g].date === u[m] && ((j = +this.data.jgpj_mbj[m].mbj), (m += 1)),
            f.push({ date: r[g].date, value: j, type: "mbj" });
        }
        var k = a.chart;
        this.hislineConfig.animate = !this.isMp;
        var y = [].concat(e(r), f);
        k.source(y, { value: { tickCount: 5 } }),
          k.axis("date", !1),
          k.legend(!1),
          k.tooltip(!1);
        var b,
          v = t(o.slice(1));
        try {
          for (v.s(); !(b = v.n()).done; ) {
            var w = b.value;
            k.guide().line({
              start: [w.date, "min"],
              end: [w.date, "max"],
              top: !1,
              style: { stroke: s, lineWidth: 1 },
            });
          }
        } catch (t) {
          v.e(t);
        } finally {
          v.f();
        }
        k
          .guide()
          .line({
            start: ["min", "min"],
            end: ["min", "max"],
            top: !1,
            style: { stroke: s, lineWidth: 1 },
          }),
          k
            .guide()
            .line({
              start: ["max", "min"],
              end: ["max", "max"],
              top: !1,
              style: { stroke: s, lineWidth: 1 },
            });
        for (var x = 0, S = u; x < S.length; x++) {
          var z = S[x];
          k.guide().text({
            position: [z, "min"],
            content: "".concat(z.slice(5, 7), "月"),
            style: {
              fill: "#98A0B3",
              textBaseline: "top",
              textAlign: "center",
              fontSize: 10,
            },
            offsetY: 5,
          });
        }
        k.axis("value", {
          line: !1,
          grid: { lineDash: null, lineWidth: 1, stroke: s },
          labelOffset: -2,
          label: function (t, e, a) {
            var i = {
              text: (+t).toFixed(2),
              textAlign: "start",
              fill: "#98A0B3",
            };
            return (
              0 === e
                ? (i.textBaseline = "bottom")
                : e === a - 1 && (i.textBaseline = "top"),
              i
            );
          },
        }),
          k
            .line({ connectNulls: !0 })
            .position("date*value")
            .color("type", ["#3d76b8", "#9fa6b1"])
            .size(1);
        var q = r.filter(function (t) {
            return t.value;
          }),
          _ = q[q.length - 1];
        k
          .guide()
          .point({
            position: [_.date, _.value],
            style: { fill: "#3d76b8", stroke: "#3d76b8", lineWidth: 0 },
          }),
          "mp" === n.StockBridge.ENV &&
            k
              .guide()
              .tag({
                position: [_.date, _.value],
                withPoint: !1,
                content: "".concat((+_.value).toFixed(2)),
                offsetX: 1,
                offsetY: -5,
                side: 0,
                fontSize: 10,
                background: {
                  fill: "black" === this.skin ? "#171d28" : "#fff",
                  fillOpacity: "0.5",
                  padding: 2,
                  radius: 2,
                  lineWidth: 1,
                  stroke: "#3077EC",
                  strokeOpacity: "0.4",
                },
                textStyle: { fontSize: 10, fill: "#3077EC" },
              }),
          k.render(),
          "mp" !== n.StockBridge.ENV &&
            ((this.hisChart = k), this.addLastPointTip(_));
      },
      addLastPointTip: function (t) {
        var e = this.hisChart.get("canvas"),
          a = this.hisChart.getPosition({ date: t.date, value: t.value }),
          i = t.value;
        (a.fill = "#3d76b8"), (a.textValue = "".concat((+i).toFixed(2)));
        var n = a.y;
        n <= 30 ? (n += 10) : (n -= 10), (a.y = n);
        var s = "west" === this.fontSkin ? "stockFont" : "";
        o.createTag(
          e,
          a,
          s,
          c.getCSSVariable("--fill-content-layer", "", this.skin)
        ),
          e.draw();
      },
    },
    beforeDestroy: function () {
      clearInterval(this.plateInterval);
    },
  };
Array ||
  (
    n.resolveComponent("Wiki") +
    n.resolveComponent("f2") +
    n.resolveComponent("HolderStat") +
    n.resolveComponent("NoData")
  )();
var h = n._export_sfc(u, [
  [
    "render",
    function (t, e, a, i, s, o) {
      return n.e(
        { a: s.data.company },
        s.data.company
          ? n.e(
              {
                b: n.p({ wikiInfo: o.wikiInfo, skin: a.skin }),
                c: s.data.company,
              },
              s.data.company ? { d: n.t(s.data.company) } : {},
              { e: s.data.offerdate },
              s.data.offerdate ? { f: n.t(s.data.offerdate) } : {},
              { g: s.data.jys },
              s.data.jys ? { h: n.t(s.data.jys) } : {},
              { i: s.data.industry },
              s.data.industry
                ? n.e(
                    {
                      j: n.t(s.data.industry.name),
                      k: "--" !== s.data.industry.name,
                    },
                    "--" !== s.data.industry.name
                      ? {
                          l: n.t(o.zdfFormat(s.plateZdf)),
                          m: n.n(o.zdfColor(s.plateZdf)),
                        }
                      : {},
                    {
                      n: n.n("--" === s.data.industry.name ? "black" : "blue"),
                      o: n.o(function (t) {
                        return o.jumpToPlate(
                          s.data.industry.name,
                          s.data.industry.code
                        );
                      }, 1914),
                    }
                  )
                : {},
              { p: s.data.website },
              s.data.website
                ? n.e(
                    {
                      q:
                        "--" !== s.data.website &&
                        ("wzq" === s.stockBridge.ENV ||
                          "mini" === s.stockBridge.ENV),
                    },
                    "--" === s.data.website ||
                      ("wzq" !== s.stockBridge.ENV &&
                        "mini" !== s.stockBridge.ENV)
                      ? { v: n.t(s.data.website) }
                      : {
                          r: n.t(s.data.website),
                          s: s.data.website,
                          t: n.o(function (t) {
                            return o.gotowebsite();
                          }, 1915),
                        }
                  )
                : {},
              { w: s.data.zgb },
              s.data.zgb ? { x: n.t(s.data.zgb) } : {},
              { y: s.data.ywms },
              s.data.ywms ? { z: n.t(s.data.ywms) } : {},
              { A: s.data.gsjj },
              s.data.gsjj
                ? {
                    B: n.t(s.data.gsjj),
                    C: s.foldCompany ? 1 : "",
                    D: n.o(function (t) {
                      return o.toggleFold();
                    }, 1916),
                  }
                : {},
              { E: s.data.businesslist && s.data.businesslist.length > 0 },
              s.data.businesslist && s.data.businesslist.length > 0
                ? {
                    F: n.t(s.data.businesslist[s.dateList.selected].date),
                    G: n.o(function (t) {
                      return o.showDateList();
                    }, 1917),
                    H: n.f(s.data.businesslist, function (t, e, a) {
                      return {
                        a: n.t(t.date),
                        b: e,
                        c: n.o(
                          function (t) {
                            return o.changeDate(e);
                          },
                          1918,
                          e
                        ),
                      };
                    }),
                    I: s.dateList.show,
                    J: n.f(
                      s.data.businesslist[s.dateList.selected].detail,
                      function (t, e, a) {
                        return {
                          a: n.t(t.label),
                          b: n.t(t.sales),
                          c: n.t(t.zb),
                          d: e,
                        };
                      }
                    ),
                  }
                : {},
              { K: s.data.mbjyc && s.data.mbjyc.dqj },
              s.data.mbjyc && s.data.mbjyc.dqj
                ? {
                    L: n.t(s.data.mbjyc.jgs),
                    M: n.t(s.data.mbjyc.mbjj),
                    N: n.t(s.data.mbjyc.minmbj),
                    O: n.t(s.data.mbjyc.maxmbj),
                    P: s.data.mbjyc.per4 + "%",
                    Q: n.t(s.data.mbjyc.mbjj),
                    R: 75 - s.data.mbjyc.per4 + "%",
                    S: s.data.mbjyc.per1 + "%",
                    T: n.t(s.data.mbjyc.dqj),
                    U: 75 - s.data.mbjyc.per1 + "%",
                    V: n.t(s.data.mbjyc.maxmbj),
                    W: s.data.mbjyc.per3 + "%",
                    X: n.t(s.data.mbjyc.minmbj),
                    Y: 75 - s.data.mbjyc.per3 + "%",
                  }
                : {},
              { Z: s.data.jgpj_kline && s.data.jgpj_kline.length > 0 },
              s.data.jgpj_kline && s.data.jgpj_kline.length > 0
                ? n.e(
                    {
                      aa: n.f(s.data.jgpj_kline, function (t, e, a) {
                        return {
                          a: n.t("--" === t.zjc.jgs ? 0 : t.zjc.jgs),
                          b: n.t(t.buyper >= 5 ? t.buyper + "%" : ""),
                          c: t.buyper + "%",
                          d: n.t(t.holdper >= 5 ? t.holdper + "%" : ""),
                          e: t.holdper + "%",
                          f: n.t(t.sellper >= 5 ? t.sellper + "%" : ""),
                          g: t.sellper + "%",
                          h: n.t(t.date.substr(5, 2)),
                          i: e,
                        };
                      }),
                      ab: s.showHisline,
                    },
                    s.showHisline
                      ? {
                          ac: n.sr("hislineChart", "827d0e6e-1"),
                          ad: n.o(o.drawHislineChart, 1919),
                          ae: n.p({
                            chartId: "brief-us-line-chart",
                            cClass: "hislineChartClass",
                            cStyle: "width: 690rpx; height: 420rpx",
                            config: s.hislineConfig,
                            refreshHash: s.hislineHash,
                          }),
                        }
                      : {}
                  )
                : {},
              { af: s.data.gdtj && o.isWzq },
              s.data.gdtj && o.isWzq
                ? {
                    ag: n.o(function (t) {
                      return o.openDetail("gudongtj");
                    }, 1920),
                    ah: n.p({ "gd-data": s.data.gdtj }),
                  }
                : {},
              {
                ai:
                  !o.isWzq &&
                  s.data.zygd.detail &&
                  s.data.zygd.detail.length > 0,
              },
              !o.isWzq && s.data.zygd.detail && s.data.zygd.detail.length > 0
                ? {
                    aj: n.t(s.data.zygd.date),
                    ak: n.o(function (t) {
                      return o.openDetail();
                    }, 1921),
                    al: n.f(s.data.zygd.detail.slice(0, 4), function (t, e, a) {
                      return {
                        a: n.t(t.gdmc),
                        b: n.t(t.cgs),
                        c: n.t(t.zb),
                        d: n.t(t.bd),
                        e: 0 === t.bd.indexOf("+") ? 1 : "",
                        f: 0 === t.bd.indexOf("-") ? 1 : "",
                        g: e,
                      };
                    }),
                  }
                : {},
              { am: s.data.stockdividends && s.data.stockdividends.length > 0 },
              s.data.stockdividends && s.data.stockdividends.length > 0
                ? {
                    an: n.o(function (t) {
                      return o.showTips("分红送配", "dividend");
                    }, 1922),
                    ao: n.o(function (t) {
                      return o.checkFhMore();
                    }, 1923),
                    ap: n.f(s.data.stockdividends, function (t, e, a) {
                      return { a: n.t(t.date), b: n.t(t.desc), c: e };
                    }),
                    aq: s.data.gdtj ? 1 : "",
                  }
                : {}
            )
          : (s.firstLoaded, {}),
        { ar: s.firstLoaded, as: s.data.company },
        s.data.company
          ? {
              at: n.o(function (t) {
                return o.showTips("", "teaching");
              }, 1924),
            }
          : {},
        { av: "black" === a.skin ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-827d0e6e"],
]);
wx.createComponent(h);
