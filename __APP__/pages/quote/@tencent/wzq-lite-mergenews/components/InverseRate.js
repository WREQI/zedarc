var t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  i = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (t, e, i) {
    return e in t
      ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  u = function (t, r) {
    for (var i in r || (r = {})) a.call(r, i) && c(t, i, r[i]);
    if (o) {
      var n,
        u = e(o(r));
      try {
        for (u.s(); !(n = u.n()).done; ) {
          i = n.value;
          s.call(r, i) && c(t, i, r[i]);
        }
      } catch (t) {
        u.e(t);
      } finally {
        u.f();
      }
    }
    return t;
  },
  l = function (t, e) {
    return i(t, n(e));
  },
  h = require("../../../../../common/vendor.js"),
  p = {
    inject: ["hqBridge", "fontSkin"],
    props: ["symbol", "chartData", "jgList", "isRep"],
    components: {
      f2: function () {
        return "../../../../detailSbg/@tencent/stock-union-f2/f2MP.js";
      },
    },
    data: function () {
      return {
        showList: [],
        Dayjs: h.dayjs,
        chartConfig: { title: "机构评级" },
      };
    },
    computed: {
      themeColor: function () {
        return "mp" === this.hqBridge.ENV
          ? { bigRed: "#E63535" }
          : {
              bigRed:
                getComputedStyle(document.documentElement)
                  .getPropertyValue("--color-red")
                  .trim() || "#E63535",
            };
      },
    },
    mounted: function () {
      var t = this.isRep ? this.jgList.slice(0, 3) : this.jgList,
        e = new h.dayjs().format("YYYY");
      this.showList = t.map(function (t) {
        var r = h.dayjs(t.fbrq).format("YYYY");
        return l(u({}, t), {
          time:
            e === r
              ? h.dayjs(t.fbrq).format("MM-DD")
              : h.dayjs(t.fbrq).format("YYYY-MM-DD"),
        });
      });
    },
    methods: {
      goNewsdetail: function (t) {
        var e = (this.showList[t] || {}).ybInfo || {},
          r = e.id,
          i = e.type;
        if (r) {
          var n;
          n =
            "mp" === this.hqBridge.ENV
              ? "/pages/newsCon/newsDetail/main"
              : "/information/detail";
          var o = { id: r, zxtype: i };
          this.hqBridge.routeTo({ path: n, query: o });
        }
      },
      goDeatil: function () {
        this.hqBridge.report("hq.stock_detai_report_jgpj_more_click");
        var t;
        (t =
          "mp" === this.hqBridge.ENV
            ? "/pages/detailSbg/jgrate"
            : h.isBroker && "DAFENG" !== h.isBroker
            ? "/wj_hq/detail/jgrate"
            : "/detail/jgrate"),
          this.hqBridge.routeTo({ path: t, query: { symbol: this.symbol } });
      },
      onInitChart: function (e) {
        var r = this,
          i = e.chart,
          n = this.chartData.map(function (t) {
            return t.num;
          }),
          o = Math.max.apply(Math, t(n)),
          a = this.chartData.map(function (t) {
            return l(u({}, t), { num: t.num || 0.01 * o });
          });
        i.tooltip(!1),
          i.axis("num", { grid: null, label: null }),
          i.legend(!1),
          i.source(a),
          i
            .interval()
            .position("name*num")
            .color("name", [
              "#1CAA3D",
              "#C1CF25",
              "#E6962F",
              "#EA5F28",
              this.themeColor.bigRed,
            ])
            .size(26),
          i.render();
        var s = i.get("canvas").addGroup(),
          c = {};
        if (
          (this.chartData.forEach(function (t) {
            var e = i.getPosition(t),
              n = s.addShape("text", {
                attrs: {
                  x: e.x,
                  y: e.y + -5,
                  text: t.num,
                  textAlign: "center",
                  textBaseline: "bottom",
                  fill: "#5F6F7C",
                  fontFamily: "west" === r.fontSkin ? "stockFont" : "",
                },
              });
            c[t.name] = n;
          }),
          "mp" !== this.hqBridge.ENV)
        )
          return i;
      },
    },
  };
Array || h.resolveComponent("f2")();
var f = h._export_sfc(p, [
  [
    "render",
    function (t, e, r, i, n, o) {
      return h.e(
        { a: r.isRep },
        (r.isRep, {}),
        {
          b: h.o(o.onInitChart, 2232),
          c: h.p({
            chartId: "inverserate",
            cClass: "rate-column",
            cStyle: "width: 100%; height: 293rpx",
            config: n.chartConfig,
          }),
          d: h.f(n.showList, function (t, e, r) {
            return {
              a: h.t(t.jgjc),
              b: h.t(t.tzpj),
              c: h.t(t.time),
              d: t.jgjc + e,
              e: h.o(
                function (t) {
                  return o.goNewsdetail(e);
                },
                2233,
                t.jgjc + e
              ),
            };
          }),
          e: r.isRep && r.jgList.length > 3,
        },
        r.isRep && r.jgList.length > 3
          ? {
              f: h.o(function () {
                return o.goDeatil && o.goDeatil.apply(o, arguments);
              }, 2234),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-c3995fc3"],
]);
wx.createComponent(f);
