require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../common/vendor.js"),
  t = require("../constants.js"),
  n = {
    props: {
      skin: { type: String, default: "white" },
      type: { type: String, default: "ma" },
    },
    components: {
      SliderBar: function () {
        return "../../../../../detailSbg/@tencent/stock-markets-base/components/Slide/mp.js";
      },
      CircleCheckVue: function () {
        return "./components/CircleCheck.js";
      },
    },
    data: function () {
      return {
        chartSetting: Object.assign({}, t.DEFAULT_SETTING),
        currPageSetting: [],
        lineNum: [],
        validNum: [],
        color: [
          { color: "216, 0, 254", name: "graph_line_1" },
          { color: "219, 192, 0", name: "graph_line_2" },
          { color: "0, 180, 254", name: "graph_line_3" },
          { color: "129, 117, 243", name: "graph_line_4" },
          { color: "184, 168, 159", name: "graph_line_5" },
          { color: "241, 147, 29", name: "graph_line_6" },
          { color: "118, 169, 255", name: "graph_line_7" },
          { color: "255, 109, 94", name: "graph_line_8" },
          { color: "52, 194, 124", name: "graph_line_9" },
          { color: "255, 118, 176", name: "graph_line_10" },
        ],
        folder: !0,
        minValue: 1,
        maxValue: 250,
      };
    },
    created: function () {
      this.initData();
    },
    computed: {
      isBlack: function () {
        return ["black", "dark"].includes(this.skin);
      },
      typeName: function () {
        var e = "";
        return (
          "ma" === this.type
            ? (e = "MA")
            : "ema" === this.type
            ? (e = "EMA")
            : "volume" === this.type
            ? (e = "成交量")
            : "cje" === this.type && (e = "成交额"),
          e
        );
      },
      text: function () {
        return this.folder ? "展示显示十条" : "收起显示十条";
      },
      isNeedShow: function () {
        return "ma" === this.type || "ema" === this.type;
      },
      brief: function () {
        return "ma" === this.type
          ? "MA（移动平均线），是将一定周期N内的收盘价求和后除N计算出平均价格，连接形成一条曲线，简称均线，用以观察股价的变动趋势。"
          : "EMA（指数移动平均值），是一种趋势类指标，以指数式递减加权方法计算的移动平均值。相比传统的MA均线，EMA的曲线更平滑更稳定。";
      },
      method: function () {
        return "ma" === this.type
          ? [
              "1.多空趋势：当短期均线(如MA5)在中长期均线(如MA30)均线上方，且均线都在向上走，表明股价处于上涨周期，且趋势保持良好。",
              "2.支撑/压力：当上涨趋势过程中，股价短期下跌到均线的位置，均线附近会起到有一定的支撑作用；同理下跌过程中反弹到均线位置会受到一定的阻力。",
              "3.金叉/死叉：当短期均线从下方上穿中长期均线，称为金叉；反之短期均线从上下穿中长期均线为死叉。",
            ]
          : [
              "1.当短期EMA1均线在长期EMA2均线上方，且两条线都在向上走，表明股价处于上涨周期，且趋势保持良好。",
              "2.当短期EMA1均线在长期EMA2均线下方，出现从下往上交叉的形态，表明股价通过一段时间的下跌盘整后，趋势好转。",
              "3.每条均线都可以视作周期内的支撑压力位，若股价跌破短期EMA1均线，表明股价跌破短期支持，走势转弱。",
            ];
      },
    },
    methods: {
      initData: function () {
        var n = this;
        e.StockBridge.setTitle({ title: this.typeName });
        var i = e.StockBridge.getStorage(t.CHART_SETTING) || {};
        i && "string" == typeof i && (i = JSON.parse(i)),
          Object.assign(this.chartSetting, i || {}),
          (this.currPageSetting = this.chartSetting[
            "".concat(this.type, "Types")
          ].map(function (e, i) {
            var r,
              a = t.AVG_PAGE_DEFAULT["".concat(n.type, "Types")][i],
              l = a.defValue,
              o = a.defSelect;
            return {
              value:
                null !=
                (r =
                  null != e ? e : n.chartSetting["".concat(n.type, "Temp")][i])
                  ? r
                  : l,
              defValue: l,
              isSelect: !!e,
              defSelect: o,
            };
          })),
          this.currPageSetting.forEach(function (e, t) {
            n.$set(n.lineNum, t, {
              preVal: e.value,
              curVal: e.value,
              default: 1,
              isSelect: e.isSelect,
            });
          }),
          "ma" === this.type &&
            e.StockBridge.report("hq.kline_setting.ma_setting_page_baoguang");
      },
      onInput: function (e) {
        var t = +e.target.dataset.index,
          n = e.target.value;
        (this.lineNum[t].curVal = n),
          n < this.minValue || n > this.maxValue || !/\d/.test(n)
            ? (this.lineNum[t].curVal = this.lineNum[t].preVal)
            : n <= this.maxValue &&
              n >= this.minValue &&
              (this.lineNum[t].preVal = +n);
      },
      sliderChange: function (e, t) {
        var n = this;
        (this.lineNum[t].curVal = +e),
          (this.lineNum[t].preVal = +e),
          this.slideTimer && clearTimeout(this.slideTimer),
          (this.slideTimer = setTimeout(function () {
            n.updateSetting();
          }, 500));
      },
      oninputBlur: function (e) {
        var t = this,
          n = +e.target.dataset.index,
          i = e.target.value;
        (this.lineNum[n].curVal = +i),
          setTimeout(function () {
            (+i < t.minValue || +i > t.maxValue || !/\d/.test(i)) &&
              (t.lineNum[n].curVal = t.lineNum[n].preVal),
              t.updateSetting();
          }, 0);
      },
      toggleItem: function (e) {
        (this.lineNum[e].isSelect = !this.lineNum[e].isSelect),
          this.updateSetting();
      },
      updateSetting: function () {
        var n = this;
        this.lineNum.forEach(function (e, t) {
          var i = e.curVal,
            r = e.isSelect;
          n.currPageSetting[t].isSelect = r;
          var a = +i || n.currPageSetting[t].defValue;
          (n.currPageSetting[t].value = a),
            r
              ? (n.chartSetting["".concat(n.type, "Types")][t] = a)
              : ((n.chartSetting["".concat(n.type, "Types")][t] = 0),
                (n.chartSetting["".concat(n.type, "Temp")][t] = a));
        }),
          e.StockBridge.setStorage(t.CHART_SETTING, this.chartSetting),
          e.StockBridge.busEmit("market-chartSetting-Update", {
            key: "".concat(this.type, "Types"),
            setting: this.chartSetting,
          });
      },
      restoreDefault: function () {
        var e = this;
        this.lineNum.forEach(function (t, n) {
          var i = e.currPageSetting[n],
            r = i.defValue,
            a = i.defSelect;
          (t.curVal = r), (t.isSelect = a), (t.preVal = r);
        }),
          this.updateSetting();
      },
      folderHandler: function () {
        var e;
        this.folder = !this.folder;
        var t = null == (e = this.$refs) ? void 0 : e.setting;
        t &&
          (t.style.maxHeight = this.folder
            ? ""
            : "".concat(t.scrollHeight, "px"));
      },
    },
  };
Array ||
  (e.resolveComponent("CircleCheckVue") + e.resolveComponent("slider-bar"))();
var i = e._export_sfc(n, [
  [
    "render",
    function (t, n, i, r, a, l) {
      return e.e(
        {
          a: e.f(a.lineNum, function (t, n, i) {
            return {
              a: "54063886-0-" + i,
              b: e.p({ checked: t.isSelect }),
              c: e.o(
                function (e) {
                  return l.toggleItem(n);
                },
                495,
                n
              ),
              d: "rgba(".concat(a.color[n].color, ")"),
              e: "rgb(".concat(a.color[n].color, ")"),
              f: "rgba(".concat(a.color[n].color, ", 0.08)"),
              g: t.curVal,
              h: n,
              i: a.currPageSetting[n].defValue,
              j: e.o(
                function () {
                  return l.onInput && l.onInput.apply(l, arguments);
                },
                496,
                n
              ),
              k: e.o(
                function () {
                  return l.oninputBlur && l.oninputBlur.apply(l, arguments);
                },
                497,
                n
              ),
              l: e.o(
                function (e) {
                  return l.sliderChange(e, n);
                },
                498,
                n
              ),
              m: "54063886-1-" + i,
              n: e.p({
                value: t.curVal,
                max: a.maxValue,
                min: a.minValue,
                width: "180",
                showOperator: !1,
              }),
              o: n,
            };
          }),
          b: e.t(l.typeName),
          c: a.folder ? "" : 1,
          d: e.o(function () {
            return l.restoreDefault && l.restoreDefault.apply(l, arguments);
          }, 499),
          e: l.isNeedShow,
        },
        l.isNeedShow
          ? {
              f: e.t(l.text),
              g: a.folder ? "" : 1,
              h: l.isBlack ? 1 : "",
              i: e.o(function () {
                return l.folderHandler && l.folderHandler.apply(l, arguments);
              }, 500),
            }
          : {},
        { j: l.isNeedShow },
        l.isNeedShow
          ? {
              k: e.t(l.brief),
              l: e.f(l.method, function (t, n, i) {
                return { a: e.t(t), b: n };
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-54063886"],
]);
wx.createComponent(i);
